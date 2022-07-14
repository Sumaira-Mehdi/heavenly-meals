import axios from "axios";

import React, { useEffect, useState } from "react";
import Counter from "../../Utils/Counter";


const Drinks = ({ setCartTotal, setItems }) => {
  const [products, getProduct] = useState();
  const [total, setTotal] = useState(0);

  const getProductData = () => {
    axios
      .get("/api/menu", {
        params: {
          category: "Drinks",
        },
      })

      .then(function (response) {
        console.log(response.data);

        getProduct(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
  useEffect(() => {
    console.log("hello syeda");
    getProductData();
  }, []);

  return (
    <>
      <div className="drinks">
        <img src="images/Drinks.png" alt="drinks" />
        <div className="drinks-menu">
          <div className="drinks-menu-items">
            <p>Drinks</p>
            <ul className="counter">
              {products &&
                products.map((data, key) => {
                  return (
                    <>
                      <li key={key}></li>

                      <li>
                        <img src="images/drinks-menu.png" alt="drinks" />
                        {data.menu}
                        .................................................. $
                        {data.price}
                        <Counter
                          total={total}
                          setTotal={setTotal}
                          setCartTotal={setCartTotal}
                          setItems={setItems}
                          price={data.price}
                        />
                      </li>
                    </>
                  );
                })}
            </ul>
            <div className="total">Subtotal = ${total} </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Drinks;
