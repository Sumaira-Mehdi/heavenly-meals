  //=========Defining All The Routes In This File.===========

//============Importing All The CRUD Operations Here=========

import {  logInView, SignUphomeView, createUser, homeView, edit, update, remove, createView, create,MenuHomeView,
  //MenuCreateView,
  listMenu,
  MenuCreate,
  MenuEdit,
  MenuUpdate,
  MenuRemove,
  OrderFormSave,
  feedbackSave,
  feedbackview,} from '../controller/controller.js'

import bcrypt from 'bcryptjs';
import express from 'express';
var router = express.Router();

// ROUTES for USER sign up.
//router.get('/', SignUphomeView);
router.post('/api/register', createUser);



// ROUTES for USER log in.
router.post('/api/signin', logInView);




// ROUTES for FAQ'S admin panel.
router.get('/api/admin/faq', homeView);
router.get('/api/update/:id', edit);
router.put('/api/update/:id', update);
router.delete('/api/admin/faq/:id', remove);
router.get('/api/add', createView);
router.post('/api/users', create);


// API of menu Routes
router.get("/api/menu", listMenu);



//HTML Routes



router.get("/api/admin/menu", MenuHomeView);
router.get("/api/menu/edit/:id", MenuEdit);
router.put("/api/menu/update/:id", MenuUpdate);
router.delete("/api/menu/delete/:id", MenuRemove);
//router.get("/addmenu", MenuCreateView);
router.post("/api/userscreate", MenuCreate);

//route for order form

router.post("/api/order", OrderFormSave);

//route for feedback form post
router.post("/api/feedback", feedbackSave);


// API of feedback Routes
router.get("/api/feedback", feedbackview);
export { router };



