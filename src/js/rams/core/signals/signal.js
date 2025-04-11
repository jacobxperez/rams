let currentEffect = null;
let batching = false;
let pendingEffects = new Set();

export function createSignal(initialValue) {
    let value = initialValue;
    const subscribers = new Set();

    const getter = () => {
        if (currentEffect) subscribers.add(currentEffect);
        return value;
    };

    const setter = (nextValue) => {
        if (nextValue !== value) {
            value = nextValue;
            if (batching) {
                pendingEffects = new Set([...pendingEffects, ...subscribers]);
            } else {
                subscribers.forEach((fn) => fn());
            }
        }
    };

    return [getter, setter];
}

export function effect(fn) {
    const wrapper = () => {
        cleanup(wrapper);
        currentEffect = wrapper;
        fn();
        currentEffect = null;
    };
    wrapper.deps = [];
    wrapper();
}

function cleanup(fn) {
    fn.deps?.forEach((dep) => dep.delete(fn));
    fn.deps = [];
}

export function batch(fn) {
    batching = true;
    fn();
    batching = false;
    pendingEffects.forEach((fn) => fn());
    pendingEffects.clear();
}

export function computed(fn) {
    const [value, setValue] = createSignal();

    effect(() => {
        setValue(fn());
    });

    return value;
}

export function untrack(fn) {
    const prev = currentEffect;
    currentEffect = null;
    const result = fn();
    currentEffect = prev;
    return result;
}
