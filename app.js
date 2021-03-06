var createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const cookies = require('cookie-parser');
const path = require('path');


const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
const apiPropiedadesRouter = require('./routes/api/propiedades')
const apiUsuariosRouter = require('./routes/api/usuarios')

const app = express();

app.use(session({
    secret: "Secret session",
    resave: false,
    saveUninitialized: false
}));

// Middleware de aplicación (se debe ejecutar después de crear la session)
app.use(cookies());

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
app.use(userLoggedMiddleware);




// informo que la carpeta public va a ser estática (público)
publicPath = path.resolve(__dirname, './public')
app.use( express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

 // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

// view engine setup
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/usuarios', apiUsuariosRouter);
app.use('/api/propiedades', apiPropiedadesRouter);

// Levantando el servidor para que escuche en el puerto 3000
app.listen(3002, () => console.log("Servidor corriendo en puerto 3002") );

// enviando una pagina HTML con la ruta de Root. (http://localhost:3000)




// app.get('/productDetail', (req,res) => {
//     res.sendFile(path.resolve('./views/productDetail.html'));
// });

// app.get('/login', (req,res) => {
//     res.sendFile(path.resolve('./views/login.html'));
// });

// app.get('/forgot', (req,res) => {
//     res.sendFile(path.resolve('./views/forgot.html'));
// });

// app.get('/home', (req,res) => {
//     res.sendFile(path.resolve('./views/home2.html'));
// });

//app.get('/form', (req,res) => {
//    res.sendFile(path.resolve('./views/formCreate.html'));
//});

