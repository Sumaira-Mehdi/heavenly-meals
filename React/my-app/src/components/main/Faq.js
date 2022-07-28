
import React, { useEffect, useState } from 'react';

import 'react-accessible-accordion/dist/fancy-example.css';
import './completeProjectStyling.css';


import axios from 'axios';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';



const Faq = () => {
  const [myFaq, getMyFaq] = useState()
  const getFaqData = () => {

    axios.get('/api/admin/faq')
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
  }, []);
  return (
    <>
    
      <section className="row banner">
        <section className="container">
          <div className="main">
            <h1>Faq's</h1>
          </div>
        </section>
      </section>
      <div className='faq-container'>
        <Accordion>
          {myFaq && myFaq.map((data, key) => (
            <AccordionItem key={key}>
              <AccordionItemHeading className='ui-accordion-header'>
                <AccordionItemButton className='ui-accordion-content' >
                  {data.question}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                {data.answer}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  )
}

export default Faq
