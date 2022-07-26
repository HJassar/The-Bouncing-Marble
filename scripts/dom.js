// Animation Axes
const xAxes = document.querySelectorAll('.translateX');
const reflections = document.querySelectorAll('.reflection')
export const xElements = [...xAxes, ...reflections]

const yAxes = document.querySelectorAll('.translateY');
const rzAxes = document.querySelectorAll('.rotateZ')
export const yElements = [...yAxes, ...rzAxes]

// Controls
export const xControl = document.querySelector('#x-control')
export const yControl = document.querySelector('#y-control')
export const allControl = document.querySelector('#all-control')

export const controls = [
    { element: xControl, targets: xElements },
    { element: yControl, targets: yElements },
    { element: allControl, targets: [...xElements, ...yElements], children: [xControl, yControl] },
]
