const path = require('path');
const userService = require('../data/userService');
const fs = require('fs');

const userController = {

      list: async function (req, res) {
        try {
         
          let users = await userService.getAll();
          res.status(200).json({
            count: users.length,
            users: users,
            
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