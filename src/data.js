import dataGhibli from './data/ghibli/ghibli.js';
const todoGhibli = Object.values(dataGhibli.films);
//escribir export antes de function

export const filtrarPeliculas = todoGhibli.filter((element) => element.title);

export const filtrarPersonajes = todoGhibli.filter((element) => element.people); 

export const filtrarLocaciones = todoGhibli.filter((element) => element.locations);

export const filtrarVehiculos = todoGhibli.filter((element) => element.vehicles);

export const filtrarScore = todoGhibli.filter((element) => element.rt_score);

export function ordenarPeliculasAZ(dataGhibli) {
  const dataOrdenadaAZ = dataGhibli.films.slice()
  dataOrdenadaAZ.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
  });
  return dataOrdenadaAZ;
} 

export function ordenarPeliculasZA(dataGhibli) {
  const dataOrdenadaZA = dataGhibli.films.slice()
  dataOrdenadaZA.sort(function (a, b) {
    if (a.title > b.title) {return -1;
    }
  });
  return dataOrdenadaZA
}

