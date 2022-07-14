
import axios from "axios";
import React, { useEffect, useState } from "react";
import '../main/completeProjectStyling.css';


const Reviews = () => {
  const [products, getProduct] = useState();
  const getProductData = () => {
    axios
      .get("/feedback", {})

      .then(function (response) {
        console.log(response.data);
        // handle succes
        getProduct(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  useEffect(() => {
    console.log("hello syeda");
    getProductData();
  }, []);
  return (
    <>
     
     <section className="row banner">
        <section className="container">
          <div className="main">
            <h1>Reviews</h1>
          </div>
        </section>
      </section>

      <section class="row reviews">
        <div class="container">
          <div class="rmb">
            {products &&
              products.map((data, key) => {
                return (
                  <>
                    <div key={key}></div>

                    
                      <div class="review-box">
                      <h3>{data.name}</h3>
                      <p>{data.message}</p>
                    </div>
                   
                   
                  </>
                );
              })}
          </div>
        </div>
      </section>
    
    </>
  );
};

export default Reviews;
