import { filtrarPeliculas, filtrarPersonajes, filtrarLocaciones, filtrarVehiculos, ordenarPeliculasZA, ordenarPeliculasAZ } from './data.js';
import dataGhibli from './data/ghibli/ghibli.js';
const todoGhibli = Object.values(dataGhibli.films);//para ver la data
const contenedorBusqueda = document.getElementById("contenedor-busqueda");
const botonPeliculas = document.getElementById("mostrar-peliculas");
const botonPersonajes = document.getElementById("mostrar-personajes");
const botonLocaciones = document.getElementById("mostrar-locaciones");
const botonVehiculos = document.getElementById("mostrar-vehiculos");
const selectPuntaje = document.getElementById("filtrarPuntaje");
const cajaBuscar = document.getElementById("busqueda");

const rt = () => {
  contenedorBusqueda.innerHTML = "";
  const tomates = selectPuntaje.value;//valor que elige
  // console.log(tomates);//muestra el valor en consola
  for (const puntaje of todoGhibli) {
    const valores = puntaje.rt_score ;//todos los valores
    // console.log(valores);
    if (valores.indexOf(tomates) !== -1) {
      contenedorBusqueda.innerHTML += `
        <div class="afiche">
        <img src="${puntaje.poster}"><br>
        <h3>Title</h3>
        <h2>${puntaje.title}</h2>
        <h3>Descripcion</h3>
        <p>${puntaje.description}</p>
        <h3>Director</h3>
        <p>${puntaje.director}</p>
        <h3>Producer</h3>
        <p>${puntaje.producer}</p>
        <h3>Year</h3>
        <p>${puntaje.release_date}</p>
        <h3>Score</h3>
        <p>${puntaje.rt_score}</p>
        </div>
      `;
    }
  }
}
selectPuntaje.addEventListener('change', rt);

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
          <h3>Title</h3>
          <h2>${uno.title}</h2>
          <h3>Descripcion</h3>
          <p>${uno.description}</p>
          <h3>Director</h3>
          <p>${uno.director}</p>
          <h3>Producer</h3>
          <p>${uno.producer}</p>
          <h3>Year</h3>
          <p>${uno.release_date}</p>
          <h3>Score</h3>
          <p>${uno.rt_score}</p>
          </div>
      `;
    }
  }
}

cajaBuscar.addEventListener("keyup", buscar);

//boton para ver peliculas
botonPeliculas.addEventListener("click", function () {
  contenedorBusqueda.innerHTML = "";
  filtrarPeliculas.forEach((title) => {
    contenedorBusqueda.innerHTML += `
        <div class="afiche">
        <img src="${title.poster}"><br>
        <h3>Title</h3>
        <h2>${title.title}</h2>
        <h3>Descripcion</h3>
        <p>${title.description}</p>
        <h3>Director</h3>
        <p>${title.director}</p>
        <h3>Producer</h3>
        <p>${title.producer}</p>
        <h3>Year</h3>
        <p>${title.release_date}</p>
        <h3>Score</h3>
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
          <h3>Name</h3>
          <h2>${people.name}</h2>
          <h3>Gender</h3>
          <p>${people.gender}</p>
          <h3>Age</h3>
          <p>${people.age}</p>
          <h3>Eye color</h3>
          <p>${people.eye_color}</p>
          <h3>Hair color</h3>
          <p>${people.hair_color}</p>
          <h3>Specie</h3>
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
          <h3>Name</h3>
          <h2>${locations.name}</h2>
          <h3>Climate</h3>
          <p>${locations.climate}</p>
          <h3>Terrain</h3>
          <p>${locations.terrain}</p>
          <h3>Surface water</h3>
          <p>${locations.surface_water}</p>
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
          <h3>Name</h3>
          <h2>${vehicles.name}</h2>
          <h3>Descripcion</h3>
          <p>${vehicles.description}</p>
          <h3>Vehicle class</h3>
          <p>${vehicles.vehicle_class}</p>
          <h3>Length</h3>
          <p>${vehicles.length}</p>
          <h3>Pilot</h3>
          <p>${vehicles.pilot.name}</p>
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
        <h3>Title</h3>
        <h2>${title.title}</h2>
        <h3>Descripcion</h3>
        <p>${title.description}</p>
        <h3>Director</h3>
        <p>${title.director}</p>
        <h3>Producer</h3>
        <p>${title.producer}</p>
        <h3>Year</h3>
        <p>${title.release_date}</p>
        <h3>Score</h3>
        <p>${title.rt_score}</p>
        </div>
    `;
  });
})
