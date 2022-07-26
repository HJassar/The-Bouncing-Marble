import config from "./config.js";

export const setPlayBackRate = (/** @type {any[]} */ axises, /** @type {number} */ rate) => {
    axises.forEach(axis => {
        axis.getAnimations()[0].playbackRate = rate;
    });
}