import dataGhibli from './data/ghibli/ghibli.js';
//console.log(dataGhibli.films);
import { ordenar } from './data.js';
const todoGhibli = Object.values(dataGhibli.films);
// console.log(todoGhibli);

// import { ordenar } from './data.js'; 
// // ordenar (peliculas.title);

// import { selectElement } from './data.js';

const contenedorBusqueda = document.getElementById("contenedor-busqueda");
const botonPeliculas = document.getElementById("mostrar-peliculas");
const botonPersonajes = document.getElementById("mostrar-personajes");
const botonLocaciones = document.getElementById("mostrar-locaciones");
const botonVehiculos = document.getElementById("mostrar-vehiculos");

const peliculas = todoGhibli.filter((element) => {
    return element.title;
});

const personajes = todoGhibli.filter((element) => {
    return element.people;
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
        <h2>${title.title}</h2>
        <p>${title.description}</p>
        <h3>${title.director}</h3>
        <h3>${title.producer}</h3>
        <p>${title.release_date}</p>
        <p>${title.rt_score}</p>
        </div>
        `;
    }); 
});

const selectElement = document.getElementById("ordenar-select");
selectElement.addEventListener("change", function () {
    const selectedOption = selectElement.value;
    const dataOrdenada = ordenar(selectedOption, peliculas); //llamar del main
    contenedorBusqueda.innerHTML = "";
    dataOrdenada.forEach((title) => {
        contenedorBusqueda.innerHTML += `
        <div class="afiche">
        <img src="${title.poster}"><br>
        <h2>${title.title}</h2>
        <p>${title.description}</p>
        <h3>${title.director}</h3>
        <h3>${title.producer}</h3>
        <p>${title.release_date}</p>
        <p>${title.rt_score}</p>
        </div>
        `;
      });
    });


botonPersonajes.addEventListener("click", function () {
    contenedorBusqueda.innerHTML = "";
    personajes.forEach((film) => {
        film.people.forEach(people => {
            contenedorBusqueda.innerHTML += `
            <div class="afiche">
            <img src="${people.img}"><br>
            <h2>${people.name}</h2>
            <h3>${people.gender}</h3>
            <h3>${people.age}</h3>
            <h3>${people.eye_color}</h3>
            <h3>${people.hair_color}</h3>
            <p>${people.specie}</p>
            </div>
            `;  
        })
    });
});


botonLocaciones.addEventListener("click", function () {
    contenedorBusqueda.innerHTML = "";
    locaciones.forEach((film) => {
        film.locations.forEach(locations => {
        contenedorBusqueda.innerHTML += `
        <div class="afiche">
        <img src="${locations.img}"><br>
        <h2>${locations.name}</h2>
        <h3>${locations.climate}</h3>
        <h3>${locations.terrain}</h3>
        <h3>${locations.surface_water}</h3>
        </div>
        `;
        })
    })
    });
//en locaciones no pude agregar residentes de los lugares

botonVehiculos.addEventListener("click", function () {
    contenedorBusqueda.innerHTML = "";
    vehiculos.forEach((film) => {
        film.vehicles.forEach(vehicles => {
        contenedorBusqueda.innerHTML += `
        <div class="afiche">
        <img src="${vehicles.img}"><br>
        <h2>${vehicles.name}</h2>
        <p>${vehicles.description}</p>
        <h3>${vehicles.vehicle_class}</h3>
        <h3>${vehicles.length}</h3>
        <h3>${vehicles.pilot.name}</h3>
        </div>
        `;
        })
    });
});


