/* b. Dentro de ella crear un archivo llamado peliculas.js. Este archivo será un MODULO que contiene
una lista con algunas de nuestras películas favoritas. Para eso nos recomiendan crear un array de objetos literales.
No olvides que este archivo es un módulo propio y por tal motivo una vez que se crea...
¿cuál debería ser nuestra última línea de código?
Por cada película se necesita conocer esta información:
    i. Identificador único de la película (id)
    ii. Calificación por parte de los usuarios (rating)
    iii. Premios (awards).
    iv. Duración de la película (length).
    v. Precio (price).
    vi. Género de la película (genre):
        1. Acción
        2. Animación
        3. Aventuras
        4. Comedia
        5. Suspenso.*/

let peliculas =
    [
        {
            id: "001",
            rating: "6",
            awards: "No",
            length: "2:30",
            price: "$1000",
            genre: ["Accion","Aventuras"]
        },
        {
            id: "002",
            rating: "3",
            awards: "No",
            length: "1:30",
            price: "$500",
            genre: ["Animacion"]
        },
        {
            id: "003",
            rating: "8",
            awards: "Si",
            length: "2:45",
            price: "$2000",
            genre: ["Animacion","Aventuras","Comedia"]
        },
    ];

module.exports = peliculas;