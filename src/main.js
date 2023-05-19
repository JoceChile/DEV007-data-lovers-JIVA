import dataGhibli from './data/ghibli/ghibli.js';
//console.log(dataGhibli.films);
const todoGhibli = Object.values(dataGhibli.films);
// console.log(todoGhibli);

const contenedorBusqueda = document.getElementById("contenedor-busqueda");
const botonPeliculas = document.getElementById("mostrar-peliculas");
const botonPersonajes = document.getElementById("mostrar-personajes");
const botonLocaciones = document.getElementById("mostrar-locaciones");
const botonVehiculos = document.getElementById("mostrar-vehiculos");

const peliculas = todoGhibli.filter((element) => {
    return element.title;
});

const personajes = todoGhibli.filter((element) => {
    return element.people[0];
}) 

const locaciones = todoGhibli.filter((element) => {
    return element.locations;
});

const vehiculos = todoGhibli.filter((element) => {
     return element.vehicles;
});

botonPeliculas.addEventListener("click", function () {
    contenedorBusqueda.innerHTML = "";
    peliculas.forEach((title) => {
        contenedorBusqueda.innerHTML += `
        <div class="afiche">
        <img src="${title.poster}"><br>
        <h1>${title.title}</h1>
        <p>${title.rt_score}</p>
        </div>
        `;
    });
});

botonPersonajes.addEventListener("click", function () {
    contenedorBusqueda.innerHTML = "";
    personajes.forEach((people) => {
        contenedorBusqueda.innerHTML += `
        <div class="afiche">
        <img src="${people.img}"><br>
        <h1>${people.name}</h1>
        <p>${people.age}</p>
        </div>
        `;
    });
});

botonLocaciones.addEventListener("click", function () {
    contenedorBusqueda.innerHTML = "";
    locaciones.forEach((locations) => {
        contenedorBusqueda.innerHTML += `
        <div class="afiche">
        <img src="${locations.img}"><br>
        <h1>${locations.name}</h1>
        <p>${locations.climate}</p>
        </div>
        `;
    });
});

botonVehiculos.addEventListener("click", function () {
    contenedorBusqueda.innerHTML = "";
    vehiculos.forEach((vehicles) => {
        contenedorBusqueda.innerHTML += `
        <div class="afiche">
        <img src="${vehicles.img}"><br>
        <h1>${vehicles.name}</h1>
        <p>${vehicles.vehicle_class}</p>
        </div>
        `;
    });
});
