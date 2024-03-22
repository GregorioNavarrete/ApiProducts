const db = require('../model/database/models')
const fs = require('fs');
const path = require('path');

const userService = {

     
    getAll : async function () {
        try {
            return await db.User.findAll(
                {
                    include : [{association : 'Rols'}]
                });
        } catch (error) {
            
        }

    },


        getBy: async function (id) {
            return await db.User.findByPk(id);
    
        }

}

module.exports = userService;