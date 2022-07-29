import e from 'cors';
import React, {useState} from 'react';
import { NavLink ,useParams, useNavigate} from "react-router-dom";
import { Alert } from 'react-bootstrap/Alert';


let navigate;
const Login = () => {
    navigate = useNavigate();
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");

    const loginUser = async () => {
    
        const data = await fetch('/api/signin' , {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
             body: JSON.stringify({
                email,password
             })
        }).then(response => response.json())
    
        console.log('Data', data);

        if(data.status === 0) {
            window.alert("Lognin Successfull")
            navigate("/home", { replace: true });
        } else {
            window.alert(data.message);
        }
        
    }
    return (
        <>
       
        <div>
            <div className="signup_mainContainer">
                <div>
                <form method= "POST">
                    <div className="signup_container">
                        <h1 className="regis_heading">Sign In</h1>
                        <p>Please fill in this form to join us..</p>
                        <hr />


                        <label htmlFor="email"><i className="zmdi zmdi-account"  ></i><b>  Email</b></label>
                        <input className="regis_input" type="text" value = {email} onChange = {(e) => setEmail(e.target.value)} placeholder="Enter Email" name="email" id="email" required />



                        <label htmlFor="psw"><i className="zmdi zmdi-lock"></i>  <b>  Password</b></label>
                        <input className="regis_input" type="password" value = {password} onChange = {(e) => setPassword(e.target.value)} placeholder="Enter Password" name="password" id="psw" required />



                        <button type="button" name="signup" className="loginbtn" onClick = {loginUser} value="login">Sign in</button>
                        <div className="need_to_register">
                            <p>Want to create an account? <NavLink to="/">Create</NavLink>.</p>
                        </div>

                    </div>
                </form>
               </div>

            </div>

        </div>
        </>
    )
}

export default Login
