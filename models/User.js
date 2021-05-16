const db = require('../database/models');
const fs = require('fs');
const path = require('path');

const User = {
    usuariosFilePath : path.join(__dirname, '../data/user.json'),

    getData: function(){
        
         return JSON.parse(fs.readFileSync(this.usuariosFilePath, 'utf-8'));
        // db.usuario.findAll()
        // .then(function(respuesta){
        //     //  console.log(respuesta);
        //     return respuesta;
        // })


    },
    findAll: function(){
         return  this.getData();
            },

    generateId: function(){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser){
            return lastUser.id + 1;
        }
        return 1;
    },
    findByPk: function(id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(usuario => usuario.id === id);
        return userFound;
    },
    findByField: function(field, text){
        let allUsers = this.findAll();
        let userFound = allUsers.find(usuario => usuario[field] === text);
        return userFound;
    },
    create: function(userData){
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.usuariosFilePath, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },
    delete: function(id){
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(usuario => usuario.id != id);
        fs.writeFileSync(this.usuariosFilePath, JSON.stringify(finalUsers, null, ' '));
        return true;

    }
}

module.exports = User;