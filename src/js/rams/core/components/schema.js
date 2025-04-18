// createSchema.js
import { DataManager } from './dataManager.js'

export function createSchema(schema) {
	const fields = {};
	for (const key in schema) {
		const { validate, initial, label } = schema[key];
		fields[key] = new DataManager(validate, initial, { label });
	}

	return {
		fields,
		async validateAll() {
			let isValid = true;
			for (const key in fields) {
				const valid = await fields[key].validate();
				if (!valid) isValid = false;
			}
			return isValid;
		},
		isValid() {
			return Object.values(fields).every(f => f.isValid());
		},
		getErrorReport() {
			const report = {};
			for (const key in fields) {
				const error = fields[key].getErrorReport();
				if (error) report[key] = error;
			}
			return Object.keys(report).length > 0 ? report : null;
		},
		resetAll() {
			for (const field of Object.values(fields)) {
				field.reset();
			}
		},
		getValues() {
			const values = {};
			for (const key in fields) {
				values[key] = fields[key].get();
			}
			return values;
		},
		setValues(newValues = {}) {
			for (const key in newValues) {
				if (fields[key]) fields[key].set(newValues[key]);
			}
		},
		getMeta() {
			const meta = {};
			for (const key in fields) {
				const field = fields[key];
				meta[key] = {
					isValid: field.isValid(),
					isDirty: field.isDirty(),
					isPending: field.isPending(),
					error: field.getError(),
					value: field.get(),
					label: field.label
				};
			}
			return meta;
		}
	};
}
