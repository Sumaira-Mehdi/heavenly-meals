
import React, { useEffect,useState} from 'react';
import './Faq.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import axios from 'axios';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';



 const Faq = () => {
    const  [myFaq, getMyFaq] = useState()
    const  getFaqData = () => {
      
      axios.get('http://localhost:8080/')
      .then(function (response) {  
        
        // console.log(response.data)
        getMyFaq(response.data);
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
    },[]);
    return (
    <>
		{myFaq && myFaq.map((data,key)=> {
             return (
                <>
                <div className='main_container'>
                    <section className="container">
                        <div className="main">
                        <h1>FAQ's</h1> 
                        </div>
                    </section>
                    <section className="box">
                        <div className="faq">
                    <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading className='ui-accordion-header'>
                                    <AccordionItemButton className='ui-accordion-content' key ={key} >
                                     {data.question}
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p key = {key}>
                                    {data.answer}
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                     </Accordion>
                        
                        </div>
                    </section>
                  </div>
                 </>
          )
        })}
        
      </>
        )}
   
export default Faq
