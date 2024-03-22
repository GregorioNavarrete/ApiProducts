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
                return products;
                
            } catch (error) {

                return [];
            }    
        },
        getBy: async function (id) {
            try{
 
                let product = await db.Product.findByPk(id, {
                    include: [
                        { association: "Languages" },
                        { association: "Editorials" },
                        { association: "Collections" },
                        { association: "authors" },
                        { association: "Genres" },
                        { association: "Supports" }
                    ]
                });
                let OBJ={
                    "title": product.title,
                    "subtitle": product.subtitle,
                    "price": product.price,
                    "image": product.image,
                    "description": product.description,
                    "pages": product.pages,
                    "edition": product.edition,
                    "stock": product.stock,
                    "discount": product.discount,
                    "created": product.created,
                    "updated": product.updated,
                    "authors": this.ArrAuthors(product.authors),
                    "genres": this.ArrGenre(product.Genres),
                    "Languages": product.Languages.name,
                    "Editorials": product.Editorials.name,
                    "Collections": product.Collections.name,
                    "Supports": product.Supports.name

                }

                return OBJ;
            }catch(e){
                console.log(e);
                return [];
            }
         
    
        },
        ArrAuthors: function (Arr) {
            let arreglo=[];
            
            
            for(let i=0; i<Arr.length; i++){
                let obj={
                    "id_author":Arr[i].id_author,
                    "name":Arr[i].name,
                    "biography":Arr[i].biography,
                    "image": Arr[i].image
                };
                arreglo.push(obj);
            }
            
            return arreglo;
        },
        ArrGenre: function (Arr) {
            let arreglo=[];
            // let obj ={};
            
            for(let i=0; i<Arr.length; i++){
                let obj={
                    "id_genre": Arr[i].id_genre,
                    "name": Arr[i].name,
                    "image": Arr[i].image,
                };
                arreglo.push(obj);
            }
            
            return arreglo;
        }

}

module.exports = productService;
