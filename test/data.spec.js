import { filtrarPeliculas , filtrarPersonajes, filtrarLocaciones, filtrarVehiculos, ordenarPeliculasAZ, ordenarPeliculasZA } from '../src/data.js';
// import { example, anotherExample } from '../src/data.js';
const result = [
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki",
  },
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "title": "My Neighbor Totoro",
    "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
    "director": "Hayao Miyazaki",
  }
]

describe('ordenarPeliculasAZ', () => {
  it('deberia ser function', () => {
    expect(typeof ordenarPeliculasAZ).toBe('function')
  });
  it('debe devolver array ordenado', () => {
    expect(Array.isArray(ordenarPeliculasAZ(result, "Castle in the Sky"))).toBe(true);
  });
});

describe('ordenarPeliculasZA', () => {
  it('deberia ser function', () => {
    expect(typeof ordenarPeliculasZA).toBe('function')
  });
  it('debe devolver array ordenado', () => {
    expect(Array.isArray(ordenarPeliculasZA(result, ["Castle in the Sky", "My Neighbor Totoro"]))).toBe(true);
  });
  it('debería devolver un array', () => {
    expect(Array(ordenarPeliculasZA(result))).toBe(true);
  });
});

describe('filtrarPersonajes', () => {
  it('deberia devolver objetos', () => {
    expect(typeof filtrarPersonajes).toBe('object');
  });
  it('debería devolver un array', () => {
    expect(Array.isArray(filtrarPersonajes)).toBe(true);
  });
});

describe('filtrarLocaciones', () => {
  it('deberia devolver objetos', () => {
    expect(typeof filtrarLocaciones).toBe('object');
  });
  it('debería devolver un array', () => {
    expect(Array.isArray(filtrarLocaciones)).toBe(true);
  });
});

describe('filtrarVehiculos', () => {
  it('deberia devolver objetos', () => {
    expect(typeof filtrarVehiculos).toBe('object');
  });
  it('debería devolver un array', () => {
    expect(Array.isArray(filtrarVehiculos)).toBe(true);
  });
});

describe('filtrarPeliculas', () => {
  it('deberia devolver objeto', () => {
    expect(typeof filtrarPeliculas).toBe('object');
  });
  it('debería devolver un array', () => {
    expect(Array.isArray(filtrarPeliculas)).toBe(true);
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