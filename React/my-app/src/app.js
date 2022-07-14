import React from "react";
//import axios from "axios";

import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from "./components/main/main";
import Faq from  "./components/main/Faq";
import Home from "./components/main/home";
import Gallery from "./components/main/gallery";
import Login from "./components/main/login";
import Menu from "./components/main/menu";
import Register from "./components/main/register";
import Reviews from "./components/main/reviews";
import Add from "./components/admin-panel/views/Faq-table/add";
import Edit from "./components/admin-panel/views/Faq-table/edit";
import ErrorPage from "./components/main/errorPage";

import Feedback from "./components/partial/Feedback";
import MenuAdd from "./components/admin-panel/MenuAdd";
import MenuUpdate from "./components/admin-panel/MenuUpdate";
import Order from "./components/partial/order";
import Thankyou from "./components/partial/Thankyou";


//import { remove } from "../backend/controller/controller";
//import axios from "axios";
 
function App(){
    return (
        <div className="App">
           
            <BrowserRouter>
          

            <Routes>
           
                    {/* <Route path="/admin/Faq_table" element = {<Faq_table/>} />*/}
                        {/*video routes*/}
                        <Route path="/admin/faq" element = {<Add/>} />
                        <Route exact path="admin/faq/edit/:id" element = {<Edit/>} />
                        <Route path="/admin/menu" element={<MenuAdd />} />
                        <Route exact path="admin/menu/edit/:id" element={<MenuUpdate />} />
                        <Route path="/thankyou" element={<Thankyou />} />
                       
                        <Route element = {<Main />}>
                                <Route path="/home" element = {<Home/>} />
                                <Route path="/faq"  element = {<Faq/>} />
                                <Route path="/gallery" element = {<Gallery/>} />
                                <Route path="/login"  element = {<Login/>} />
                                <Route path="/menu" element = {<Menu/>} />
                                <Route  exact path="/"  element = {<Register/>} />
                                <Route path="/reviews" element = {<Reviews/>} />
                                <Route path="/order" element={<Order />} />
                            {/*   <Route path="*" element = {<ErrorPage/>} />*/}
                                
                        </Route>
                        
           
            </Routes>
           
            </BrowserRouter>
        </div>
    );
}
export default App;