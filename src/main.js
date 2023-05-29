import { filtrarScore, filtrarPeliculas, filtrarPersonajes, filtrarLocaciones, filtrarVehiculos, ordenarPeliculasZA, ordenarPeliculasAZ } from './data.js';
import dataGhibli from './data/ghibli/ghibli.js';
const todoGhibli = Object.values(dataGhibli.films);//para ver la data
const contenedorBusqueda = document.getElementById("contenedor-busqueda");
const botonPeliculas = document.getElementById("mostrar-peliculas");
const botonPersonajes = document.getElementById("mostrar-personajes");
const botonLocaciones = document.getElementById("mostrar-locaciones");
const botonVehiculos = document.getElementById("mostrar-vehiculos");
const selectPuntaje = document.getElementById("filtrarPuntaje");
const cajaBuscar = document.getElementById("busqueda");

const buscar = () => {
  // console.log(cajaBuscar.value);
  contenedorBusqueda.innerHTML = "";
  const loQueBusca = cajaBuscar.value;
  // console.log(loQueBusca);
  for (const uno of todoGhibli) {
    const title = uno.title.toLowerCase();
    if(title.indexOf(loQueBusca.toLowerCase()) !== -1) {
      contenedorBusqueda.innerHTML += `
        <div class="afiche">
        <img src="${uno.poster}"><br>
        <h2>${uno.title}</h2>
        <p>${uno.description}</p>
        <h3>${uno.director}</h3>
        <h3>${uno.producer}</h3>
        <p>${uno.release_date}</p>
        <p>${uno.rt_score}</p>
        </div>
       `;
    }
  }
}
// botonBuscar.addEventListener("click", buscar);
cajaBuscar.addEventListener("keyup", buscar);

selectPuntaje.addEventListener("change", function () {
  contenedorBusqueda.innerHTML ="";
  filtrarScore.forEach((rt_score) => {
    contenedorBusqueda.innerHTML += `
    <div class="afiche">
        <img src="${rt_score.poster}"><br>
        <h2>${rt_score.title}</h2>
        <p>${rt_score.description}</p>
        <h3>${rt_score.director}</h3>
        <h3>${rt_score.producer}</h3>
        <p>${rt_score.release_date}</p>
        <p>${rt_score.rt_score}</p>
        </div>
    `;
  })
});
//boton para ver peliculas
botonPeliculas.addEventListener("click", function () {
  contenedorBusqueda.innerHTML = "";
  filtrarPeliculas.forEach((title) => {
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
  })
});

//boton para ver personajes
botonPersonajes.addEventListener("click", function () {
  contenedorBusqueda.innerHTML = "";
  filtrarPersonajes.forEach((film) => {
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

//boton para ver locaciones
botonLocaciones.addEventListener("click", function () {
  contenedorBusqueda.innerHTML = "";
  filtrarLocaciones.forEach((film) => {
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
//en locaciones no pude agregar residentes de los lugares <h3>${locations.residents}</h3>

//boton para ver los vehiculos
botonVehiculos.addEventListener("click", function () {
  contenedorBusqueda.innerHTML = "";
  filtrarVehiculos.forEach((film) => {
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

// ver ordenar las peliculas segun funcion creada en data.js AZ y ZA
const selectElement = document.getElementById("ordenar-select");
selectElement.addEventListener("change", function () {
  const selectedOption = selectElement.value;
  let paraOrdenar = [];
  if (selectedOption === "a-z") {
    paraOrdenar = ordenarPeliculasAZ(dataGhibli);
  } 
  if (selectedOption === "z-a") {
    paraOrdenar = ordenarPeliculasZA(dataGhibli);
  }
  contenedorBusqueda.innerHTML = "";
  paraOrdenar.forEach((title) => {
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


