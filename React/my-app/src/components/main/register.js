import React, {useState} from 'react';
import '../main/completeProjectStyling.css';
import { NavLink ,useParams, useNavigate} from "react-router-dom";
import e from 'cors';
import axios from 'axios';


let navigate;
const Register = () => {
    navigate = useNavigate();
    const [user,setUser] =useState({
        name:"",email:"",password:"",cpassword:""
    });
    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const postUserData = async (e) => {
        e.preventDefault();
        const  {name,email,password,cpassword} = user; 
      
        const res = await fetch('/register', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name,email,password,cpassword
            })
        })
        const data  = await res.json();
        console.log('status:', data.status)
        if (data.status  === 422) {
            window.alert("Please fill all fields");
        } else if(data.status === 423) {
            window.alert("User already exists, please use a different email address");
        } else if(data.status === 424) {
            window.alert("Password and confirm password does not match");
        } else {
            window.alert("Registration Successful");  
            navigate("/login", { replace: true });  
        }
    }
        

    
    return (
        <div className="regis_mainContainer">
            <div>
            <form method='POST'>
                <div className="registration_container">
                    <h1 className="regis_heading">Register</h1>
                    <p className='regis_fill'>Please fill in this form to create an account.</p>
                    <hr />
                    <label htmlFor="uname"><i className="zmdi zmdi-account"  ></i><b>  Name</b></label>

                    <input className="regis_input" type="text" placeholder="Enter Name" name="name"  value={user.name} onChange={handleInputs} id="uname" required />

                    <label htmlFor="email"><i className="zmdi zmdi-account"  ></i><b>  Email</b></label>
                    <input className="regis_input" type="text" placeholder="Enter Email" name="email"  value={user.email} onChange={handleInputs} id="email" required />

                   

                    <label htmlFor="psw"><i className="zmdi zmdi-lock"></i>  <b>  Password</b></label>
                    <input className="regis_input" type="password" placeholder="Enter Password" name="password"  value={user.password} onChange={handleInputs} id="psw" required />

                    <label htmlFor="psw-repeat"><i className="zmdi zmdi-lock-open"></i><b>  Confirm Password</b></label>
                    <input className="regis_input" type="password" placeholder="Repeat Password" name="cpassword"   value={user.cpassword} onChange={handleInputs} id="psw-repeat" required />
                    <hr />
                    {/* <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>*/}

                    <button type="submit" name="signup" className="registerbtn" value="register"  onClick={postUserData}>Register</button>
                    <div className="container_signin ">
                        <p>Already have an account? <NavLink to="/login">Sign in</NavLink>.</p>
                    </div>
                </div>
            </form>
            </div>

        </div>
    )
}

export default Register
