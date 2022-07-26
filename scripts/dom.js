// Animation Axises
const xAxises = document.querySelectorAll('.translateX');
const reflections = document.querySelectorAll('.reflection');
export const xElements = [...xAxises, ...reflections];

const yAxises = document.querySelectorAll('.translateY');
const rzAxises = document.querySelectorAll('.rotateZ');
export const yElements = [...yAxises, ...rzAxises];

// Controls
export const xControl = document.querySelector('#x-control');
export const yControl = document.querySelector('#y-control');
export const allControl = document.querySelector('#all-control');
