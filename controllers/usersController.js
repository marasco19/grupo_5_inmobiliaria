const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const path = require('path');
const User = require('../models/User');
const db = require('../database/models');



const usersController = {
   
    list: (req, res)=>{
               
            db.usuario.findAll()
            .then(function(respuesta){
                res.render("listUsers", {usuarioListado: respuesta})
            })
    },

    register: (req, res) => {
        res.render('userRegisterForm');
	},
    // Crear Usuario
    processRegister: async function (req, res){
        
        const resultValidation = validationResult(req);
        // console.log(req.body);
        if(resultValidation.errors.length > 0){
            return res.render('userRegisterForm',{
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            imagen: req.file.filename
        }
        
        // let userInDB = User.findByField('email', req.body.email);
        console.log(req.body.email)
        let userInDB;
       await db.usuario.findAll({
            where:{ email:  req.body.email}
           }).then(resultado=>{
               userInDB = resultado;})
               console.log(userInDB)

        if (userInDB.length > 0){
            return res.render('userRegisterForm',{
                errors: {
                    email: {
                        msg: 'Este email ya esta registrado'
                    }
                },
                oldData: req.body
            });
        }
        
        // Guarda el usaurio en la base de datos
        console.log(userToCreate);
        (userToCreate.tipo_usuario == "Agente")? userToCreate.tipo_usuario = 1: userToCreate.tipo_usuario = 2
        
        await db.usuario.create({
            nombre: userToCreate.nombre,
            apellido: userToCreate.apellido,
            email: userToCreate.email,
            tipo_usuario: userToCreate.tipo_usuario,
            password: userToCreate.password,
            imagen: userToCreate.imagen
        })

        return res.redirect('/login'); 
    },
    login: (req, res) => {
        res.render("login");
    },
    loginProcess: (req, res) => {
         
        // let userInDB = User.findByField('email', req.body.email);
        // BUSCAR USUARIO EN BDD
         let userInDB;
            db.usuario.findAll({
             where:{ email:  req.body.email}
            }).then(resultado=>{
                userInDB = resultado;
                
            
            
        if (userInDB.length == 0){
            return res.render('login',{
                errors: {
                    email: {
                        msg: 'Este email no está registrado'
                    }
                },
                oldData: req.body
            });
        }else{
            // Chequear password
            // console.log(userInDB[0].dataValues.password);
            if (!bcryptjs.compareSync(req.body.password, userInDB[0].dataValues.password)){
                return res.render('login',{
                    errors: {
                        password: {
                            msg: 'Credenciales invalidas'
                        }
                    },
                    oldData: req.body
                });
            }else{
                // Usuario OK para loguear
                delete userInDB.password;
                // req.session.user = userInDB;
                req.session.user = userInDB[0].dataValues;
                if(req.body.Login_RememberMe){
                    res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 60})
                }
                
                return res.redirect("/users/profile");
                
            }
        }
    }) /* Fin del select db.usuario.findAll */



    },
    profile: (req, res) => {
        console.log(req.cookies.userEmail);
        return res.render("userProfile", {user:req.session.user})
    },
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },
    forgot: function (req, res) {
        res.render("forgot");
    },
    
    edit: async function (req, res) {

        let Usuario = await db.usuario.findByPk(req.params.id);
        res.render("userEditForm", {oldData: Usuario} );

    },
    update: async function (req, res) {
        console.log(req.body);
        (req.body.tipo_usuario == "Agente")? req.body.tipo_usuario = 1: req.body.tipo_usuario = 2
        // imagen: req.file.filename

        let userToUpdate;
        if (req.file){
         userToUpdate = {
            ...req.body,
            imagen: req.file.filename
        }} else{

         userToUpdate = req.body;
        }

        await db.usuario.update(
            {...userToUpdate},
            {
                where: {id: req.params.id}
            }
        );

        res.redirect('/users/list');


    },
    delete: async function (req, res) {
        let Usuario = await db.usuario.findByPk(req.params.id);
        res.render('userDelete',{Usuario}); 
    },
    destroy: async function (req, res) {
        let usuario = await db.usuario.findByPk(req.params.id);
        await usuario.destroy();
        res.redirect("/users/list");
    }


}

module.exports = usersController;