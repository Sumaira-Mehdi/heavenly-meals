import dotenv from 'dotenv';
import express from 'express';
import {router} from './routes/routes.js';
import bodyParser from "body-parser";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import {dbData} from './database/connection.js'
//import UserModel from "./models/user.js";
//    session cookie work
import path from 'node:path'


import cookieParser from "cookie-parser";
import session from "express-session";
//    session cookie work
import cors from 'cors';
dotenv.config()

const __dirname = dirname(fileURLToPath(import.meta.url))
const PORT = process.env.API_PORT || 8080;         //defining port
const app = express();  
app.use(cors()) 
app.use(express.json())                  // taking all express in a constant.
app.use(bodyParser.urlencoded({extended:false}));     //using body-parser.
app.use('/virtual',express.static('public/css'))
app.use('/virtual',express.static('public/images'))
app.use(router);
app.set('view engine', 'ejs');              //defining the use of ejs.
app.use(express.static(path.join(__dirname, "dist")))

dbData();
//    session cookie work

app.use(cookieParser);

app.use(session({
    key:"userId",
    secret:"subscribe",
    resave:"false",
    saveUninitialized:"false",
    cookie:{
        expires:60*60*24,
    },
}))

//    session cookie work


//listening to port
app.listen(PORT, '0.0.0.0', function () {
    console.log(`Port is now running @ ${port}`)
  });


