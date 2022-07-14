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
router.post('/register', createUser);



// ROUTES for USER log in.
router.post('/signin', logInView);




// ROUTES for FAQ'S admin panel.
router.get('/admin/faq', homeView);
router.get('/update/:id', edit);
router.put('/update/:id', update);
router.delete('/delete/:id', remove);
router.get('/add', createView);
router.post('/users', create);


// API of menu Routes
router.get("/api/menu", listMenu);



//HTML Routes



router.get("/admin/menu", MenuHomeView);
router.get("/menu/edit/:id", MenuEdit);
router.put("/menu/update/:id", MenuUpdate);
router.delete("/menu/delete/:id", MenuRemove);
//router.get("/addmenu", MenuCreateView);
router.post("/userscreate", MenuCreate);

//route for order form

router.post("/order", OrderFormSave);

//route for feedback form post
router.post("/feedback", feedbackSave);


// API of feedback Routes
router.get("/feedback", feedbackview);
export { router };



