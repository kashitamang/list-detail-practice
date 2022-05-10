console.log('hello from app.js');
// import functions and grab DOM elements
import { planets } from './data.js';
import { renderPlanet } from './utils.js';
// let state
const planetListEl = document.getElementById('planets');

for (let planet of planets) {
    const planetDiv = renderPlanet(planet);
    planetListEl.append(planetDiv);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
