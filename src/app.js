import React from "react";
import axios from "axios";

import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

import Main from "./components/main/main";
import Faq from  "./components/main/FAQ/Faq";
import Footer from "./components/main/home/Footer";
import Faq_table from "./components/admin-panel/views/Faq-table/Faq_table";
import Create from "./components/admin-panel/views/Faq-table/Add_Faq";
import Add from "./components/admin-panel/views/Faq-table/add";
import View from "./components/admin-panel/views/Faq-table/view";
import Edit from "./components/admin-panel/views/Faq-table/edit";
//import { remove } from "../backend/controller/controller";
//import axios from "axios";
 
function App(){
    return (
        <div className="App">
            <BrowserRouter>
            <Routes>
            
            <Route path="/admin/Faq_table" element = {<Faq_table/>} />
            {/*video routes*/}
            <Route path="/" element = {<Add/>} />
            
            <Route path="/view" element = {<View/>} />
            <Route exact path="/edit/:id" element = {<Edit/>} />
            


            <Route path="/admin/Add_Faq" element = {<Create/>} />

                <Route element = {<Main />}> 
                    <Route path="/home" element = {<Footer />} />
                    <Route path="/Faq"  element = {<Faq />} />
                    


                </Route>
            </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;