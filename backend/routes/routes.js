  //=========Defining All The Routes In This File.===========

//============Importing All The CRUD Operations Here=========

import {  homeView, edit, update, remove, createView, create } from '../controller/controller.js'

import express from 'express';
var router = express.Router();

router.get('/', homeView);
router.get('/update/:id', edit);
router.put('/update/:id', update);
router.get('/delete/:id', remove);
router.get('/add', createView);
router.post('/users', create);
//extra code

//router.get('/api/faq', (request, response) => response.send({name:"Mehdi Raza"}));



export {router};