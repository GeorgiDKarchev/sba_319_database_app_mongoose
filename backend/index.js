import './localEnv.js';
import {conn} from './db/conn.js';conn();
import express from 'express';
import morgan from 'morgan';



const app = express();
const PORT = process.env.PORT ||3000;

app.use(morgan('dev'));
app.use(express.json());








app.listen(PORT, ()=> {
    console.log(`Server is running on port:${PORT}`);
});