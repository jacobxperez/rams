// DOM Data Attribute Methods
import {toggle} from './core/components/toggle.js';
import {
    getFirstWithDataAttr,
    getAllWithDataAttr,
    setDataAttr,
    appendDataAttrValue,
    removeDataAttr,
    removeDataAttrValue,
    replaceDataAttrValue,
    hasDataAttr,
    dataAttrIsEmpty,
    closestDataAttr,
    matchesDataAttr,
    toggleDataAttr,
    toggleDataAttrValue,
} from './core/dom/data.js';

import {DataManager} from './core/components/dataManager.js';
import {createSchema} from './core/components/createSchema.js';

export class RAMS {
    #initialized = false;
    #currentEffect = null;

    constructor() {
        this.createEffect = this.createEffect.bind(this);
        this.data = this.data.bind(this);
        this.schema = this.schema.bind(this);
        this.toggle = toggle;
        this.#init();
    }

    #init() {
        if (!this.#initialized) {
            this.#currentEffect = {deps: new Set()};
            this.#initialized = true;
        }
    }

    data(validate, initialValue, options = {}) {
        const manager = new DataManager(validate, initialValue, options);
        manager.get = () => {
            if (this.#currentEffect) {
                this.#currentEffect.deps.add(manager);
            }
            return manager.value;
        };
        return manager;
    }

    schema(config) {
        const schema = createSchema(config);
        for (const field of Object.values(schema.fields)) {
            const originalGet = field.get.bind(field);
            field.get = () => {
                if (this.#currentEffect) {
                    this.#currentEffect.deps.add(field);
                }
                return originalGet();
            };
        }
        return schema;
    }

    createEffect(fn, options = {}) {
        const deps = new Set();
        const cleanupFns = [];

        const rerun = () => {
            for (const dep of deps) dep._effectListeners?.delete(rerun);
            deps.clear();

            this.#currentEffect = {deps};
            const cleanup = fn();
            this.#currentEffect = null;

            for (const dep of deps) {
                if (!dep._effectListeners) dep._effectListeners = new Set();
                dep._effectListeners.add(rerun);
            }

            cleanupFns.forEach((fn) => fn());
            cleanupFns.length = 0;
            if (typeof cleanup === 'function') cleanupFns.push(cleanup);
        };

        if (!options.lazy) rerun();

        return {
            stop() {
                for (const dep of deps) dep._effectListeners?.delete(rerun);
                cleanupFns.forEach((fn) => fn());
            },
        };
    }

    clear() {
        this.#currentEffect = null;
        this.#initialized = false;
    }
}

export const rams = new RAMS();
