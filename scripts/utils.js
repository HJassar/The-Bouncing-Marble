export function setPlayBackRate(axes, rate) {
    axes.forEach(axis => {
        axis.getAnimations()[0].playbackRate = rate;
    })
}

export function handleInput(e, control) {
    setPlayBackRate(control.targets, e.target.value)
    if (control.children)
        control.children.forEach(child => {
            child.value = e.target.value
        })
}
