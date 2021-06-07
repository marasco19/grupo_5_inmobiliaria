const User = require ('../models/User');
const db = require('../database/models');


async function userLoggedMiddleware (req, res, next){

    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    console.log(emailInCookie);
    
    let userFromCookie;

    if (emailInCookie){
    await db.usuario.findAll({
     where:{ email:  emailInCookie}
    }).then(resultado=>{
      userFromCookie = resultado;})
    }
   //  let userFromCookie = User.findByField('email', emailInCookie)

      if (userFromCookie){
         req.session.user = userFromCookie[0];
      }

     if (req.session.user){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.user;
     }
    next();
    
    }
    
    module.exports = userLoggedMiddleware;