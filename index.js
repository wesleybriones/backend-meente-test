const express = require('express');
require('dotenv').config();
const morgan =  require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');


//Servidor de express
const app =  express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// middlewares
app.use(morgan('dev'));

// Directorio Publico
app.use( express.static('public') );

//Lectura y parseo del body
app.use( express.json() );
app.use(express.urlencoded({ extended:false }));

//Rutas: Login
app.use('/api/auth', require('./routes/auth') );

//TODO: CRUD: Entities
app.use('/api/reports', require('./routes/reports') );
app.use('/api/employees', require('./routes/employees') );
app.use('/api/clients', require('./routes/clients') );
app.use('/api/devices', require('./routes/devices') );
app.use('/api/problems', require('./routes/problems') );
app.use('/api/solutions', require('./routes/solutions') );
app.use('/api/replacements', require('./routes/replacements') );
app.use('/api/bills', require('./routes/bills') );


//Escuchar peticiones
app.listen(process.env.PORT || 4000, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});