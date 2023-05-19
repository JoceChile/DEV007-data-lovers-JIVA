export default dataGhibli;
const todoGhibli = Object.values(dataGhibli.films);
const busqueda = document.getElementById("busqueda");//donde escribo input
const botonBusqueda = document.getElementById("boton-buscar");//click buscar
const contenedorBusqueda = document.getElementById("contenedor-busqueda");
const buscar = () => {
    const texto = busqueda.value()
    contenedorBusqueda.innerHTML = "";
    for (let film of films) {
        let films = film.nombre
        if (films.indexOf(texto) !== -1) {
            contenedorBusqueda.innerHTML += `
            <div class="afiche">
            <h1>${film.title}</h1>
            
            </div>
            `;
        }
    } 
    if (contenedorBusqueda.innerHTML === "") {
        contenedorBusqueda.innerHTML += `
        alert "No encontrado"
        `
    }
    })

}

botonBusqueda.addEventListener("click", buscar);


//aca debo insertar filter data / sortData / computeStats
//manipulacion de arreglos y objetos

// estas funciones son de ejemplo
// export const informacion = () => {
//   return 'informacion';
// };
// export const anotherExample = () => {
//   return 'OMG';
// }; */}