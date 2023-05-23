
//escribir export antes de function

export function ordenar(order, peliculas) {
    peliculas.sort(function (a, b) {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        if (order === "a-z") {
            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;
        } else if (order === "z-a") {
            if (titleA > titleB) return -1;
            if (titleA < titleB) return 1;
        } 
        return 0;
    });
}

// quiero ordenar de la a-z lo que aparezca en el contenedor busqueda