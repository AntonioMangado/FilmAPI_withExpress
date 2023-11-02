const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get("/home", (req, res) => {
    res.send("Esto es el home");
});

// Lanzar el codigo y mensaje de error
app.use(({ statusCode, error }, req, res, next) => {
    res.status(statusCode).json({
        success: false,
        message: error.message,
    })
})


// Lanzar la escucha del servidor
app.listen(port, () => console.info(`> listening at http://localhost:${port}`))