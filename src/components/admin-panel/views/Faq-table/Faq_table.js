

import React, { useEffect,useState} from 'react';
import './Faq_table.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import axios from 'axios';
import { Link } from 'react-router-dom';




const Faq_table = () => {

    const  [myFaq, setMyFaq] = useState()
   
    const  getFaqData = () => {
      
      axios.get('http://localhost:8080/')
      .then(function (response) {  
        setMyFaq(response.data);
        console.log(response.data)

      })
      .catch(function (error) {
        // handle error
       console.log(error);                                              
      })
    .then(function () {
    // always executed
})
    }
    useEffect(() => {
      getFaqData();
      
    },[myFaq]);
    //console.log(myFaq)
    
 
    return (
        <>
         <div>
         
                
            <h1>User's List</h1>
                <table className="tablestyle">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>QUESTION</th>
                            <th>ANSWER</th>
                            <th>EDIT</th>
                            <th>DELETE</th>

                        </tr>
                    </thead>
                    <tbody>
                        {myFaq && myFaq.map((data,key)=> 

                            <tr key = {key}>
                                <td>
                                    {data._id}
                                </td>
                                <td>
                                    {data.question }
                                </td>
                                <td>
                                    {data.answer }
                                </td>
                                
                                <td>
                                    <Link to="http://localhost:8080/update" onClick={setMyFaq} className="edit"
                                        data-toggle="modal">Edit</Link>
                                </td>
                                <td>
                                    <a href="http://localhost:8080/delete/<%=faq._id%>" className="delete">Delete</a>
                                </td>
                            </tr>
                            
                        )  }
                    </tbody>
                </table>
                
                               
                     
        </div>
        </>
                )}
            
              
            
              


export default Faq_table
