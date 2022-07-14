import React from 'react'
import { NavLink } from 'react-router-dom'


const ErrorPage = () => {
  return (
    <>
   
    <div className='errorPage'>
         <div className='error_container'>
            <section className='errorPage_section'>
            <h3 className='error_page_heading'>Error Page</h3>
            <h1 className='error_page_heading'>404<i className="fa fa-exclamation-triangle" aria-hidden="true"></i></h1>
            <p className='error_page_para'>Sorry This web page in unavailable right now. Please better to visit after some time. </p>
            <NavLink className="error_page_href" to="/">Back To Home</NavLink> 
            </section>
        </div>
    </div>
    </>
  )
}

export default ErrorPage
