export function renderPlanet(planet) {
    const div = document.createElement('div');
    div.classList.add('planet');

    const h2 = document.createElement('h2');
    h2.textContent = planet.name;

    const a = document.createElement('a');
    a.href = `./planets/?id=${planet.id}`;

    const img = document.createElement('img');
    img.src = planet.image;

    div.append(h2, a, img);
    a.append(img);

    return div;
}

export function findById(id, data) {
    return data.find((item) => item.id === id);
}