const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Crear servicio express
const app = express();

// Base de datos

// Directorio publico
app.use( express.static('public') );

// CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() );


// Rutes
app.use( '/api/usuario', require('./routes/usuario') );


app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});