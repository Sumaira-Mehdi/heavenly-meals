import { Outlet } from "react-router-dom";
import React from "react";
import Header from '../partial/header';
import Copyright from "../partial/copyright";
const Main = () => {
    return (
        <main>
         <Header/>   
        <Outlet />
        <Copyright/>
        </main>

    )
}
export default Main;