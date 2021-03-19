const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const User = require('../models/User');



const usersController = {
    register: (req, res) => {
        res.render('userRegisterForm');
	},
    processRegister: (req, res) => {
        
        const resultValidation = validationResult(req);
        console.log(req.body);
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
        
        let userInDB = User.findByField('email', req.body.email);
        if (userInDB){
            return res.render('userRegisterForm',{
                errors: {
                    email: {
                        msg: 'Este email ya se esta registrado'
                    }
                },
                oldData: req.body
            });
        }
        let userCreated = User.create(userToCreate);
        return res.redirect('/login');
    },
    login: (req, res) => {
        res.send("login");
    },
    loginProcess: (req, res) => {
        res.send("loginProcess");
    },
    profile: (req, res) => {
        res.send("profile");
    },
    logout: (req, res) => {
        res.send("logout");
    }
}

module.exports = usersController;