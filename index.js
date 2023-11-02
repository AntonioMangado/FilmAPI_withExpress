const express = require('express')
const app = express()
const port = 3000

const filmsRoutes = require("./routes/films.routes.js")

// Habilito recepción de JSON en servidor.
app.use(express.json())

// Ruta de prueba
app.get("/home", (req, res) => {
    res.send("Esto es el home");
});

// Rutas
app.use("/", filmsRoutes)

// Lanzar el codigo y mensaje de error
app.use(({ statusCode, error }, req, res, next) => {
    res.status(statusCode).json({
        success: false,
        message: error.message,
    })
})

// Última ruta por defecto. En caso de no encotrarse ninguna anterior, devolvemos un 404
app.get("*", (req,res) => { 
    res.status(404).send("Gatito triste - 404 not found");
})

// Lanzar la escucha del servidor
app.listen(port, () => console.info(`> listening at http://localhost:${port}`))