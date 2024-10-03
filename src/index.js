import { sum } from './sum.js';
document.querySelector('.app').innerHTML = `<h1>Прогноз погоды</h1><h2>${sum(2, 4)}</h2>`;