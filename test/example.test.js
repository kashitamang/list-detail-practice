// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderPlanet } from '../utils.js';
import { planets } from '../data.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('test renderPlanet() function', (expect) => {

    const expected = `<div class="planet"><h2>mars</h2><a href="./planet-details/?id=1"><img src="./assets/mars.jpg"></a></div>`;

    const actual = renderPlanet(planets[0]);
    
    expect.equal(actual.outerHTML, expected);
});