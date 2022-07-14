

import React, { useEffect,useState} from 'react';
import './myfirsttable.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import axios from 'axios';
import { Link } from 'react-router-dom';




const List = () => {

    const  [myFaq, setMyFaq] = useState()
   
    const  getFaqData = () => {
      
      axios.get('http://localhost:8080/admin/faq')
      .then(function (response) {  
        setMyFaq(response.data);
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


    const deleteFaq = async id => {
        await axios.delete(`/delete/${id}`);
        var newFaq = myFaq.filter((item) => {
          return item._id !== id;
        })
        setMyFaq(newFaq);
      }
    //console.log(myFaq)
    
 
    return (
        <>
         <div>
         
                
            <h1>User's List</h1>
                <table className="table_box">
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
                                <Link to={`/admin/faq/edit/${data._id}`}>
                                <button type="button" className="edit">
                                         Edit
                                </button>
                                </Link>
                                </td>
                                <td>
                                <Link to="/admin/faq" onClick={() => deleteFaq(data._id)} className="delete">
                                <button type="button" className="delete">
                                         Delete
                                </button>
                                </Link>
                                </td>
                            </tr>
                            
                        ) }
                    </tbody>
                </table>
                
                               
                     
        </div>
        </>
       )}
            
export default List
