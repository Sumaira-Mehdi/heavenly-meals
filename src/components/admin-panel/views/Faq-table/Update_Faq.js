
import React, { useState} from 'react';
import './Add_Faq.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useNavigate } from "react-router-dom";

import axios from 'axios';
let navigate;
const Create = () => {
   navigate = useNavigate();

  const [formData, setFormData] = useState({
    question:"",answer:""
   });
  let name,value;
 const handleInputs = (e) => {
  console.log(e);
  name= e.target.name;
  value = e.target.value;
  setFormData({...formData,[name]: value});
}
const postFaqData = async(e) => {

      e.preventDefault();
      const {question,answer} = formData;
     const res = await fetch('http://localhost:8080/update/:id',{
        method :"POST",
        headers : {
          "content-type" : "application/json"
        },
        body:JSON.stringify({
          question,answer
        })
     }).then(res => res.json())
     .then(json => {
      if(json.OK)
      navigate("/admin/Faq_table", {replace:true})
     });
}
useEffect(() => {
  setFormData()
},[]);

function Update_Faq() {
  return (
    <div className = "main">
    <h1>ADD FAQ </h1>
    
    
    <div className="container">
    <form method='POST'>
        <div className="row">
          <div className="col-25">
            <label htmlFor="question">Question</label>
            </div>
            <div className="col-75">
            <input type="textarea" id="question"  name="question" placeholder="Write something.." value = {question} onChange={handleInputs} />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="answer">Answer</label>
            </div>
          <div className="col-75">
            <input type="textarea" id="answer" name="answer" placeholder="Write something.."  value= {answer} onChange={handleInputs}/>
          </div>
        </div>
        <div className="row">
          <input type="submit" value="Add" onClick = {setFormData}/>
        </div>
      </form>
    </div>
  </div>

  )
}

export default Update_Faq
