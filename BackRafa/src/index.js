import cors from 'cors';
import express from 'express';
import mysql from 'mysql';
import morgan from 'morgan';

import userRouter from './routes/user.routes.js';
import CheeseRouter from './routes/cheese.routes.js';

// require('dotenv').config();

// inizializando express
const app = express();
app.use(
    express.json()
)
app.use(morgan('dev'));
app.use(cors());

// Establecer conexión con la base de datos
export const conexion = mysql.createConnection({
    server: 'localhost',
    user: 'root',
    password: '',
    database: 'queControl',
});

// Establecer la conexión
conexion.connect((err) => {
    if (err) {
        console.log(err);
    }else {
        console.log("La conexión se establecio correctamente");
    }
});

app.use(userRouter);
app.use(CheeseRouter);
app.listen(8082, () => {
    console.log('Servidor disponible');
})
