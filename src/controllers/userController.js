const path = require('path');
const userService = require('../data/userService');
const fs = require('fs');
const { name } = require('ejs');

function user(name, last_name, email){
  this.name = name
  this.last_name = last_name
  this.email = email
}

function url(puerto){
  
}





const userController = {

      list: async function (req, res) {
        try {
         
          let users = await userService.getAll();
          let newUsers = users.map(usuario=> new user(usuario.name, usuario.last_name, usuario.email))
          res.status(200).json({
            count: users.length,
            user: newUsers,
            
            
          });
          
        } catch (error) { 
          console.log(error.message);
          res.set('Content-Type', 'text/plain')
          res.send("Error inesperado").status(500)
        }
      },
       getOne: async function (req, res) {
        try {
          let user = await userService.getBy(req.params.id);
          res.json(user).status(200)
        } catch (e) {
          (e) => res.send(e);
        }
      }


    
}

module.exports = userController;