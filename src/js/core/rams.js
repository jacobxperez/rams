import {
    getData,
    hasData,
    setData,
    removeData,
    closestData,
} from './dataAttributes.js';
import {addEvent} from './events.js';
import {toggle} from './toggle.js';
import {carousel} from './carousel.js';

function el(element) {
    return {
        element,
        addEvent,
        getData,
        hasData,
        setData,
        removeData,
        closestData,
    };
}

const rams = {
    toggle,
    carousel,
};

export {rams, el};
