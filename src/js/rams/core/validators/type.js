export class DataEnforcer {
	constructor(validate, initialValue, options = {}) {
		this.validate = validate;
		this.initialValue = initialValue;
		this.value = null;
		this.pending = false;
		this.lastError = null;
		this.label = options.label || 'Value';
		this.listeners = new Set();
		this.set(initialValue);
	}

	async validateValue(value) {
		const validators = Array.isArray(this.validate) ? this.validate : [this.validate];

		for (const validator of validators) {
			let validatorType = typeof validator === 'string' ? 'type' : 'custom';
			let validatorSource = typeof validator === 'function' ? (validator.name || 'anonymous') : validator;

			try {
				if (validatorType === 'type') {
					if (typeof value !== validator) {
						throw new TypeError(`${this.label} must be of type '${validator}', got '${typeof value}'`);
					}
				}

				if (validatorType === 'custom') {
					const result = validator(value);
					const resolved = result instanceof Promise ? await result : result;

					if (resolved !== true && resolved !== undefined) {
						const msg = typeof resolved === 'string'
							? `${this.label} ${resolved}`
							: `${this.label} failed validation`;
						throw new TypeError(msg);
					}
				}
			} catch (err) {
				// Attach structured error
				this.lastError = {
					message: err.message,
					type: validatorType,
					source: validatorSource,
					value,
					timestamp: Date.now()
				};
				throw err;
			}
		}

		return value;
	}

	async validate() {
		this.pending = true;
		this.lastError = null;

		try {
			await this.validateValue(this.value);
			this.pending = false;
			return true;
		} catch {
			this.pending = false;
			return false;
		}
	}

	async set(newValue) {
		this.pending = true;
		this.lastError = null;

		try {
			const valid = await this.validateValue(newValue);
			this.value = valid;
			this.pending = false;
			this.emit(valid);
			return true;
		} catch {
			this.pending = false;
			console.error('[DataEnforcer]', this.lastError.message);
			throw this.lastError;
		}
	}

	get() {
		return this.value;
	}

	getError() {
		return this.lastError;
	}

	isValid() {
		return this.lastError === null;
	}

	reset() {
		this.set(this.initialValue);
	}

	onChange(fn) {
		if (typeof fn === 'function') {
			this.listeners.add(fn);
		}
		return () => this.listeners.delete(fn);
	}

	emit(value) {
		this.listeners.forEach((fn) => fn(value));
	}

	isPending() {
		return this.pending;
	}
		getErrorReport() {
		if (!this.lastError) return null;

		const { message, type, source, value, timestamp } = this.lastError;

		return {
			label: this.label,
			message,
			type,
			source,
			value,
			timestamp: new Date(timestamp).toLocaleString(),
			rawTimestamp: timestamp
		};
	}
}