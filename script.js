import config, { initialSpeed } from "./scripts/config.js";
import { xElements, yElements, controls } from './scripts/dom.js'
import { setPlayBackRate, handleInput } from "./scripts/utils.js";

// Reset Speeds Before Anything
setPlayBackRate([...xElements, ...yElements], initialSpeed)

controls.forEach(control => {
    // Set Control Attributes
    control.element.setAttribute('min', config.min);
    control.element.setAttribute('max', config.max);
    control.element.setAttribute('step', config.step);
    control.element.value = initialSpeed;

    // Event Listeners!
    control.element.addEventListener('input', (e) => handleInput(e, control))
})

