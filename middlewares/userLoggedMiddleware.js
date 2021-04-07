const User = require ('../models/User');


function userLoggedMiddleware (req, res, next){

    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findByField('email', emailInCookie)

      if (userFromCookie){
         req.session.user = userFromCookie;
      }

     if (req.session.user){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.user;
     }
    next();
    
    }
    
    module.exports = userLoggedMiddleware;