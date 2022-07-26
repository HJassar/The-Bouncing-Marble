import config from './scripts/config.js';
import { xControl, yControl, allControl, xElements, yElements, } from './scripts/dom.js';
import { setPlayBackRate } from './scripts/utils.js';

const initialSpeed = (config.max - config.min) / 2;

// Reset Speeds
[...xElements, ...yElements].forEach(axis => {
    axis.getAnimations()[0].playbackRate = initialSpeed;
})

// Set Control Attributes
Array.from([xControl, yControl, allControl]).forEach(control => {
    control.setAttribute('min', config.min);
    control.setAttribute('max', config.max);
    control.setAttribute('step', config.step);
    control.value = initialSpeed;
})

// Event Listeners
xControl.addEventListener('input', e => {
    if (e.target) setPlayBackRate(xElements, e.target.value);
})

yControl.addEventListener('input', e => {
    if (e.target) setPlayBackRate(yElements, e.target.value);
})

allControl.addEventListener('input', e => {
    if (e.target) {
        setPlayBackRate([...xElements, ...yElements], e.target.value);
        xControl.value = e.target.value
        yControl.value = e.target.value
    }
})
