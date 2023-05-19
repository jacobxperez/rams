import {getData, hasData, setData, removeData, closestData} from './dataAttributes.js';
import {addEvent} from './events.js';
import {toggle} from './toggle.js';

export function rams(element) {
    return {
        element,
        addEvent,
        getData,
        hasData,
        setData,
        removeData,
        closestData,
        toggle,
    };
}
