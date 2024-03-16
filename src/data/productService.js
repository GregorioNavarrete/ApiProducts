/*Es para gestionar todo el manejo de mis productos, para no tener
toda la logica en el "productController" y no ser muy grande
*/

const db = require('../model/database/models')
const fs = require('fs');
const path = require('path');
//const upload = require('../middlewares/multer');





/*****Es para pasar el JASON a un arreglo de objetos y poder manipularlo ******/
const productsFilePath = path.join(__dirname, '../data/products.json');



const productService = {

     
        getAll: async function (){
            try {
                let products = await db.Product.findAll({
                    include: [
                        { association: "Languages" },
                        { association: "Editorials" },
                        { association: "Collections" },
                        { association: "authors" },
                        { association: "Genres" },
                        { association: "Supports" }
                    ]
                });
               //console.log(products);
                return products;
                
            } catch (error) {
                //para q al menos no se rompa la vista
                //mandar un mensaje de error
                return [];
            }    
        },
        getBy: async function (id) {
            // Intenta obtener una película por su clave primaria (ID)
            // También incluye información sobre los actores asociados a esa película.
            return await db.Product.findByPk(id, {
                include: [
                    { association: "Languages" },
                    { association: "Editorials" },
                    { association: "Collections" },
                    { association: "authors" },
                    { association: "Genres" },
                    { association: "Supports" }
                ]
            });
    
        }

}

module.exports = productService;




//para ver que regresa cada funcion del Service que voy configurando 
//$ node src/data/productService.js 
// la consulta tiene que ser asincrona, ya q las funciones son asincrenas y 
//con solo "console.log(), decia pendiente y no esperaba la respuesta"

// async function aux(){
//     try {
//         let aux = await productService.filter(req);
//         console.log(aux);
        
//     } catch (error) {
//         console.log(error);
//     }}

// aux();