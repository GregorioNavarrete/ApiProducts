const path = require('path');
const productService = require('../data/productService');
const fs = require('fs');

const productController = {

      list: async function (req, res) {
        try {
          //con wait esperamos q resuelva la procemsa y la guarde en "peliculas"
          let products = await productService.getAll()
          // Si la obtención de las películas es exitosa, responde con un objeto JSON que contiene las películas
          res.json(products).status(200)
        } catch (error) {
    
          //Como Resuelve el error en el Servise, esto no sale 
          console.log(error.message);
          //respuesta HTTP que se enviará al cliente
          // En este caso, se está configurando el tipo de contenido a 'text/plain', lo que significa que la respuesta contendrá texto sin formato.
          res.set('Content-Type', 'text/plain')
          res.send("Error inesperado").status(500)
        }
      },
      getOne: async function (req, res) {
        try {
          let product = await productService.getBy(req.params.id);
          res.json(product).status(200)
        } catch (e) {
          (e) => res.send(e);
        }
      }


    }


module.exports = productController