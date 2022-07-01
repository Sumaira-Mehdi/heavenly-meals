import dotenv from 'dotenv';
import express from 'express';
import {router} from './routes/routes.js';
import bodyParser from "body-parser";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import {dbData} from './database/connection.js'
//import UserModel from "./models/user.js";
import cors from 'cors';
dotenv.config()

const __dirname = dirname(fileURLToPath(import.meta.url))
const port = process.env.API_PORT;         //defining port
const app = express();  
app.use(cors()) 
app.use(express.json())                  // taking all express in a constant.
app.use(bodyParser.urlencoded({extended:false}));     //using body-parser.
app.use('/virtual',express.static('public/css'))
app.use('/virtual',express.static('public/images'))
app.use(router);
app.set('view engine', 'ejs');              //defining the use of ejs.

dbData();



//listening to port
app.listen(port, function () {
    console.log(`Port is now running @ ${port}`)
  });


