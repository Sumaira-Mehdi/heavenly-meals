import axios from "axios";

import React, { useEffect, useState } from "react";
import Counter from "../../Utils/Counter";

const Desserts = ({ setCartTotal, setItems }) => {
  const [products, getProduct] = useState();
  const getProductData = () => {
    axios
      .get("/api/menu", {
        params: {
          category: "Desserts",
        },
      })
      .then(function (response) {
        console.log(response.data);
        // handle success
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

  const [total, setTotal] = useState(0);

  return (
    <>
      <div className="desserts">
        <div className="desserts-menu">
          <div className="desserts-menu-items">
            <p>Desserts</p>
            <ul>
              {products &&
                products.map((data, key) => {
                  return (
                    <>
                      <li key={key}></li>
                      <li>
                        <img src="images/drinks-menu.png" alt="drinks" />
                        {data.menu}
                        .................................. ${data.price}
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

        <img src="images/desserts.png" alt="desserts" />
      </div>
    </>
  );
};
export default Desserts;
