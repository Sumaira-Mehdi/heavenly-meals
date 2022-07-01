   // defining all the functionalities in this file.

//importing FaqModel;
import { FaqModel } from "../models/FAQ_model.js";
//import addFaq from '../views/addFaq.js';

/*===================Render Route Views=========================*/
const homeView = (req, res) => {
   FaqModel.find().then( FaqData => {
     //res.render('../views/FAQ.ejs', { FaqData });
       res.send(FaqData)      

   });
};
const createView = (req, res) => {
  // res.render('../views/addFaq.ejs')
  res.send(FaqData)
}

/*================== Route API For Crud Operations  ========================*/

// CREATE =======
const create = (req, res) => {
   const myFaq = new FaqModel({
       question: req.body.question,
       answer: req.body.answer, 
   })
   myFaq.save(myFaq).then(data => {
       res.send({OK:true});
   });
}

// RETRIVE/EDIT==========
const edit = (req, res) => {
   const id = req.params.id
   FaqModel.findByIdAndUpdate(id, req.body).
       then(FaqData => {
           res.send(FaqData)
           //res.render('../views/updateFaq.ejs', { FaqData })
       });
}

// REMOVE========
const remove = (req, res) => {

   FaqModel.deleteOne({_id : req.params.id}).
      then(FaqData => {
           res.send(FaqData);
          // res.send({OK:true});
           
      })
}
 // UPDATE=======
const update = (req,res) => {
FaqModel.updateOne(
   {'_id': req.params.id},
    {$set : { 'question': req.body.question, 'answer' : req.body.answer}},
    (err,result) => {
      res.send({OK:true});

    });
}




export { homeView, edit, update, remove, createView, create}