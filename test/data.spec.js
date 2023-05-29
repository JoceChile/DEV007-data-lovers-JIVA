import { filtrarPeliculas , filtrarPersonajes, filtrarLocaciones, dataOrdenadaZA } from '../src/data.js';
// import { example, anotherExample } from '../src/data.js';

describe('dataOrdenadaZA', () => {
  it('deberia ser funcion', () => {
    expect(typeof dataOrdenadaZA).toEqual('function');
  });
});

describe('personajes', () => {
  it('deberia devolver objetos', () => {
    expect(typeof filtrarPersonajes).toBe('object');
  });
});

describe('locaciones', () => {
  it('deberia devolver objetos', () => {
    expect(typeof filtrarLocaciones).toBe('object');
  });
})

// describe('vehiculos', () => {
//   it('deberia devolver objetos', () => {
//     expect(typeof filtrarVehiculos).toBe('object');
//   });
//   it('deberia devolver los vehiculos', () => {
//     expect(filtrarVehiculos(vehicles).toEqual([`
//     <div class="afiche">
//     <img src="${vehicles.img}"><br>
//     <h2>${vehicles.name}</h2>
//     <p>${vehicles.description}</p>
//     <h3>${vehicles.vehicle_class}</h3>
//     <h3>${vehicles.length}</h3>
//     <h3>${vehicles.pilot.name}</h3>
//     </div>
//     `]));
//   });
// });

describe('filtrarPeliculas', () => {
  it('deberia devolver objetos', () => {
    expect(typeof filtrarPeliculas).toBe('object');
  });
});

describe('filtrarPeliculas', () => {
  it('deberia ser funcion', () => {
    expect(typeof filtrarPeliculas).toBe('function');
  });
});

// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });

// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });