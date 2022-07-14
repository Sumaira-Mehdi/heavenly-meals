// defining all the functionalities in this file.

//importing FaqModel;
import { FaqModel } from "../models/FAQ_model.js";
import { UserModel, MenuModel } from "../models/userModel.js";
import { reviewsDB } from "../models/reviewsModel.js";
import {OrdersDB } from "../models/orderModel.js"
//import addFaq from '../views/addFaq.js';
import bcrypt from 'bcryptjs';
/*================== Route API For User LOG IN Crud Operations  ========================*/
const logInView =  async (req,res) => {
   const myUser = new UserModel({
      email: req.body.email,
      password: req.body.password,
   })

   try {
      
      if(!myUser.email || !myUser.password) {
         return res.json({ status: 1001, message: "Plz fill all the fields" })
      }

      const userLogin = await UserModel.findOne({ email: myUser.email});

      if(!userLogin) {
         res.json({status: 1002, message: "Invalid user email"})
      } else {
         console.log(myUser.password, userLogin.password);
         const isMatch = await bcrypt.compare( myUser.password, userLogin.password);

         if(!isMatch)
            res.json({status: 1003, message:"Invalid credentials"})
         else
            res.json({status: 0, message:"user Signin Successfully"})
           
      }

   } catch (err) {
      console.log(err)
      res.json({message:"Unexpected error occured while authenticating.."});
   }


   
}

/*================== Route API For User sign up Crud Operations  ========================*/
// SIGN UP HOME VIEW
const SignUphomeView = (req, res) => {
   UserModel.find().then(UserData => {
      //res.render('../views/FAQ.ejs', { FaqData });
      res.send(UserData)

   });
}

// CREATE =======
const createUser = async (req, res) => {
   const myUser = new UserModel({
      name: req.body.name,
      email: req.body.email,
   
      password: req.body.password,
      cpassword: req.body.cpassword,
   })
   if (!myUser.name || !myUser.email || !myUser.password || !myUser.cpassword) {
      res.json({ status: 422, error: "Plz fill all the fields" })
   }
   try {
      const userExist = await UserModel.findOne({ email: myUser.email });

      if (userExist) {
         res.json({ status: 423, message: "Email already exist" });
      }else if (myUser.password != myUser.cpassword) {
         res.json({ status: 424, message: "passwords are not matching"})
      }else {
         await myUser.save(myUser);     
         res.json({ status:0, message: "User registered succesfully" });
      }
   } catch (err) {
      console.log(err)

   }

}

/*================== Route API For FAQ Crud Operations  ========================*/

// FAQ HOME VIEW
const homeView = (req, res) => {
   FaqModel.find().then(FaqData => {
      //res.render('../views/FAQ.ejs', { FaqData });
      res.send(FaqData)

   });
};
//FAQ CREATE VIEW==========
const createView = (req, res) => {
   // res.render('../views/addFaq.ejs')
   res.send(FaqData)
}

// CREATE FAQ==============
const create = (req, res) => {
   const myFaq = new FaqModel({
      question: req.body.question,
      answer: req.body.answer,
   })
   myFaq.save(myFaq).then(data => {
      res.send(data);
   });
}

// RETRIVE/EDIT FAQ============
const edit = (req, res) => {
   const id = req.params.id
   FaqModel.findByIdAndUpdate(id, req.body).
      then(FaqData => {
         res.send(FaqData)
         //res.render('../views/updateFaq.ejs', { FaqData })
      });
}

// REMOVE FAQ =============
const remove = (req, res) => {

   FaqModel.deleteOne({ _id: req.params.id }).
      then(FaqData => {
         //res.send(FaqData);
         res.send(FaqData);
      })
}
// UPDATE FAQ =============
const update = (req, res) => {
   FaqModel.updateOne(
      { '_id': req.params.id },
      { $set: { 'question': req.body.question, 'answer': req.body.answer } },
      (err, result) => {
         res.send({ OK: true });

      });
}

// API Controllers
const listMenu = (req, res) => {
   const filters = {};
   if (req.query.category) {
     filters.category = req.query.category;
   }
   MenuModel.find(filters).then((userData) => {
     res.send(userData);
   });
 };
 
 // UI Controllers
 //menu homeview
 const MenuHomeView = (req, res) => {
   MenuModel.find({}).then((userData) => {
      console.log(userData)
     // res.render("views", { userData });
     res.send(userData);
   });
 };
 
 /*
 const MenuCreateView = (req, res) => {
   res.send(userData);
 };*/
 
 
 //create
 const MenuCreate = (req, res) => {
   const item = new MenuModel({
     category: req.body.category,
     menu: req.body.menu,
     price: req.body.price,
   });
   item.save(item).then((data) => {
     res.send(data);
   });
 };
 
 // edit
 const  MenuEdit = async (req, res) => {
   const id = req.params.id;
   const menu = await MenuModel.findById(id);
   res.send(menu);
 };
 //update
 const MenuUpdate = (req, res) => {
   MenuModel.updateOne(
     { _id: req.params.id },
     {
       $set: {
         category: req.body.category,
         menu: req.body.menu,
         price: req.body.price,
       },
     },
     (err, result) => {
       // res.redirect("/");
       res.send({ OK: true });
     }
   );
 };
 //remove/delete
 const MenuRemove = (req, res) => {
   MenuModel.findByIdAndDelete(req.params.id, function (err, userData) {
     if (err) {
       console.log(err);
     } else {
       res.send(userData);
     }
   });
 };
 
 // form of order placed
 const OrderFormSave = (req, res) => {
   const newOrder = new OrdersDB({
     name: req.body.name,
     phone: req.body.phone,
     date: req.body.date,
     email: req.body.email,
     address: req.body.address,
   });
   newOrder.save(newOrder).then((order) => {
     res.status(201).json(order)
   });
 };
 
 //feedback api save
 const feedbackSave = (req, res) => {
   const feedbacklist = new reviewsDB({
     name: req.body.name,
     email: req.body.email,
     phone: req.body.phone,
     message: req.body.message,
   });
   feedbacklist.save(feedbacklist).then((data) => {
     res.send("Thanks for ur valuable feedback");
   });
 };
 
 //feedback callbacks
 const feedbackview = (req, res) => {
   reviewsDB
     .find()
     .sort({ _id: -1 })
     .limit(12)
     .then((userData) => {
       // res.render("views", { userData });
       res.send(userData);
     });
 };



export { homeView, edit, update, remove, createView, create, createUser, SignUphomeView , logInView,MenuHomeView,
   //MenuCreateView,
   listMenu,
   MenuCreate,
   MenuEdit,
   MenuUpdate,
   MenuRemove,
   OrderFormSave,
   feedbackSave,
   feedbackview}