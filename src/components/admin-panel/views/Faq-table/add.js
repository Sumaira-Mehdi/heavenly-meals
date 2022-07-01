

import React, { useState} from 'react';
import './myfirsttable.css';
import List from './list';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import { Link } from 'react-router-dom';

let navigate;
const Add = ()=>  {
    navigate = useNavigate()
    const  [myFaq, setMyFaq] = useState({
    question:"",answer:""
    });
    let name,value;
    const handleInputs = (e) => {
     console.log(e);
     name= e.target.name;
     value = e.target.value;
     setMyFaq({...myFaq,[name]: value});
    }
     const postFaqData = async(e) => {
        e.preventDefault();
        const {question,answer} = myFaq;
        const res = await fetch('http://localhost:8080/users',{
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
            navigate("/", {replace:true})
           });
       
  }
  return (
    <>
    <div className='main_heading'>
      <h1>Faq table</h1>
    </div>
    <div className='main-container'>
        <div className='add_box'>
            <h1>Add FAQ</h1>
                                    
                            
                        <div className="container">
                            <form method='POST'>
                                <div className="row">
                                    <div className="col-25">
                                        <label htmlFor="question">Question</label>
                                        </div>
                                        <div className="col-75">
                                        <input type="textarea" id="question"  name="question" placeholder="Write something.." value = {myFaq.question} onChange={handleInputs} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-25">
                                        <label htmlFor="answer">Answer</label>
                                        </div>
                                    <div className="col-75">
                                        <input type="textarea" id="answer" name="answer" placeholder="Write something.." value = {myFaq.answer} onChange={handleInputs}/>
                                    </div>
                                </div>
                                <div className="row">
                                <input type="submit" value="Add" onClick = {postFaqData} />
                                </div>
                            </form>
                        </div>

        </div>
        <List/>
        
    </div>
    </>
  )
}


export default Add
