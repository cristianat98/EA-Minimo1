import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from'body-parser';

//Importamos fichero de rutas


const app = express();

//Configuración
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(bodyParser.json());

//Llama a las rutas de la API


export default app;