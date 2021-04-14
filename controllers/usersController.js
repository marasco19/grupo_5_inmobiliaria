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
                        msg: 'Este email ya esta registrado'
                    }
                },
                oldData: req.body
            });
        }
        let userCreated = User.create(userToCreate);
        return res.redirect('/login'); 
    },
    login: (req, res) => {
        res.render("login");
    },
    loginProcess: (req, res) => {
          
        let userInDB = User.findByField('email', req.body.email);
        if (!userInDB){
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

            if (!bcryptjs.compareSync(req.body.password, userInDB.password)){
                return res.render('login',{
                    errors: {
                        password: {
                            msg: 'Credenciales invalidas'
                        }
                    },
                    oldData: req.body
                });
            }else{
                
                delete userInDB.password;
                req.session.user = userInDB;
                if(req.body.Login_RememberMe){
                    res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 60})
                }
                
                return res.redirect("/users/profile");
                
            }
        }





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
    }
}

module.exports = usersController;