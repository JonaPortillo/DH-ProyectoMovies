const express = require('express');
const path = require('path');
const app = express();

const indexRouter = require('./routes/index');

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const apiMoviesRoutes = require('./routes/api/moviesRoutes');
const apiGenresRoutes = require('./routes/api/genresRoutes');

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

/* Capturar informacion, para manejar info en formato JSON */
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

/* METHOD OVERRIDE */
let methodOverride = require('method-override')
app.use(methodOverride('_method'))

app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);

/* RUTAS API */
app.use('/api/movies', apiMoviesRoutes);
app.use('/api/genres', apiGenresRoutes)

app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001, http://localhost:3001'));
