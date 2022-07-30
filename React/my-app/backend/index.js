import dotenv from 'dotenv';
import express from 'express';
import {router} from './routes/routes.js';
import bodyParser from "body-parser";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import {dbData} from './database/connection.js'

import path from 'node:path'

import cors from 'cors';
dotenv.config()

const __dirname = dirname(fileURLToPath(import.meta.url))
const PORT = process.env.PORT || 8080;         //defining port
const app = express();  
app.use(cors()) 
app.use(express.json())                  // taking all express in a constant.
app.use(bodyParser.urlencoded({extended:false}));     //using body-parser.
app.use('/virtual',express.static('public/css'))
app.use('/virtual',express.static('public/images'))
app.use(router);
app.set('view engine', 'ejs');              //defining the use of ejs.
app.use(express.static(path.join(__dirname, "dist")))

// Express serves up index.html file if  doesn't recocgnize route
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
})


dbData();

//listening to port
app.listen(PORT, '0.0.0.0', function () {
    console.log(`Port is now running @ ${PORT}`)
  });


