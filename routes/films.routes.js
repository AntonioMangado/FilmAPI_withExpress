const express = require('express')
const app = express()
const router = require('express').Router()

router.get('/api/film/:title?', async (req, res, next) => {

    if (req.params.title) { // con ID
        try {
            let response = await fetch(`http://www.omdbapi.com/?t=${req.params.title}&apikey=77681b03`); //{}
            let products = await response.json(); //{}
            res.status(200).json(products); // Respuesta de la API para 1 producto
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(400).json({msj:`ERROR: ${error.stack}`});
        }
    } else { // sin ID --> TODOS los products
        try {
            res.status(200).send("Por favor, introduce un título"); // Respuesta de la API para muchos productos
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(400).json({msj:`ERROR: ${error.stack}`});
        }
    }
});

router.post("/api/film/", (req, res) => {
    console.log(req.body);
    res.status(200).json({
        success:true,
        title: req.body.title,
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        message: `Mensaje: Se ha guardado ${req.body.title}`
    });
});

module.exports = router