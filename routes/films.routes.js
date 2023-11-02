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

module.exports = router