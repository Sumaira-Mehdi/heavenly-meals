import React, { useState } from "react";

import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";

function Counter({ setTotal, setCartTotal, setItems, price }) {
  const [counter, setCounter] = useState(0);


  
  return (
    <div>
      <button
        className="react_minus"
        onClick={() => {
          setCounter((counter) => {
            if (counter === 0) {
              return 0;
            }

            return counter - 1;
          });

          setItems((items) => {
            if (items === 0) {
              return 0;
            }

            return items - 1;
          });

          setTotal((total) => {
            if (counter === 0) {
              return 0;
            }
            return total - price;
          });

          setCartTotal((cartTotal) => {
            if (counter === 0) {
              return 0;
            }
            return cartTotal - price;
          });
        }}
      >
        <HiMinusCircle />
      </button>

      <input className="react_input" type="text" placeholder={counter} />
      <button
        className="react_plus"
        onClick={() => {
          setCounter((counter) => counter + 1);
          setItems((items) => items + 1);

          setTotal((total) => total + price);
          setCartTotal((cartTotal) => cartTotal + price);
        }}
      >
        <HiPlusCircle />
      </button>
    </div>
  );
}

export default Counter;
