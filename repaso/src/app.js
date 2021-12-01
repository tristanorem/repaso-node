const express = require('express');
const path = require('path');
const app = express();

const indexRouter = require('./routes/index');

const peliculasRouter = require('./routes/peliculas');
//const genresRoutes = require('./routes/genresRoutes');
//const Routes = require('./routes/genresRoutes');


// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use('/peliculas',peliculasRouter);
//app.use(genresRoutes);
//app.use(actorRouters);

app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));