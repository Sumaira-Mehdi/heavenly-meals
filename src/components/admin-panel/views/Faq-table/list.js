
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect,useState} from 'react';


function List() {
  const  [myFaq, setMyFaq] = useState([]);
  
  useEffect(() => {
    const  getFaqData = () => {
      axios.get('http://localhost:8080/')
      .then(function (response) {  
        setMyFaq(response.data);
        //console.log(response.data)
      })
      .catch(function (error) {
        // handle error
       console.log(error);                                              
      })
    .then(function () {
    // always executed
  })
    }
    getFaqData();
    
  },[]);
   
  //console.log(myFaq)
  return (
    <div>
       <div className='table_box'>
            <h1>FAQ List</h1>
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
                        
                    {myFaq && myFaq.map((data,key)=> {
                     
                        return (
                        
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
                                    <Link to={`edit/${data._id}`} className="edit"
                                        data-toggle="modal">Edit</Link>
                                </td>
                                <td>
                                    <Link to="/"  className="delete">Delete</Link>
                                </td>
                           </tr>
                            
                        )
                    
                      
                    })}
                            
                        
                    </tbody>
                </table>
        </div>
    </div>
  )
}

export default List
