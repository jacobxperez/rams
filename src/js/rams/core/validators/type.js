import {isNonEmptyString, isFunction} from './valid';

export class DataEnforcer {
	constructor(validate, initialValue) {
		this.validate = validate;
		this.initialValue = initialValue;
		this.value = null;
		this.pending = false;
		this.lastError = null;
		this.listeners = new Set();
		this.set(initialValue);
	}

	async validateValue(value) {
		const validators = Array.isArray(this.validate) ? this.validate : [this.validate];

		for (const validator of validators) {
			if (typeof validator !== 'function' && typeof validator !== 'string') {
				throw new Error('Validator must be a function or a type string');
			}

			if (typeof validator === 'string') {
				if (typeof value !== validator) {
					throw new TypeError(`Expected type '${validator}', got '${typeof value}'`);
				}
			}

			if (typeof validator === 'function') {
				const result = validator(value);
				const resolved = result instanceof Promise ? await result : result;

				if (resolved !== true && resolved !== undefined) {
					throw new TypeError(resolved || 'Validation failed');
				}
			}
		}

		return value;
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
		} catch (err) {
			this.pending = false;
			this.lastError = err.message;
			console.error('[DataEnforcer]', err.message);
			throw err;
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
}