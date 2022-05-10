import { findById } from '../utils.js';
import { planets } from '../data.js';

const planetName = document.getElementById('planet-name');
const planetImage = document.getElementById('planet-image');
const planetDistance = document.getElementById('planet-distance');
const planetMaterials = document.getElementById('planet-materials');

//console.log(planetName);
//console.log('hello from planets.js');

const params = new URLSearchParams(window.location.search);
//console.log(params.get('id'), planets);

const find = findById(params.get('id'), planets);

planetName.textContent = find.name;
planetImage.src = `../assets/${find.name}.jpg`;
planetDistance.textContent = `${find.name} is the ${find.distance} planet from the sun and contains materials such as:`;

for (let material of find.materials) {
    const li = document.createElement('li');
    li.textContent = material;
    planetMaterials.append(li);
}
