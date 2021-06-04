function authMiddleware (req, res, next){

// res.send(req.session);

    // Chequear si está logueado
    if (!req.session.user){
        return res.redirect("/users/login");
    
    }else{
    // Chequear si es administrador
        console.log(req.session.user.tipo_usuario);

        if (req.session.user.tipo_usuario != "Agente"){
        // No es administrador
            return res.render("accesoDenegado");
        
        }   
    }

    next();
    
    }
    
    module.exports = authMiddleware;