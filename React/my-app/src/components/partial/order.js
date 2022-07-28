import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";


function Order() {
  const navigate = useNavigate();
  const location = useLocation();
  const [order, setOrder] = useState({
    name: "",
    phone: "",
    date: "",
    email: "",
    address: "",
  });
  const [formerror, setFormerror] = useState({});

  //onchange handler
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setOrder({ ...order, [name]: value });
  };
  const validationform = (value) => {
    const errors = {};
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!value.name) {
      errors.name = "Please Enter Name";
    }
    if (!value.phone) {
      errors.phone = "Please Enter Phone#";
    }
    if (!value.date) {
      errors.date = "Please Select Date";
    }
    if (!value.email) {
      errors.email = "Please Enter E-mail";
    } else if (!emailPattern.test(value.email)) {
      errors.email = " Enter Valid Email";
    }
    if (!value.address) {
      errors.address = "Please Enter Address";
    }

    return errors;
  };
  //form post handler
  const PostData = async (e) => {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;
    const errors = validationform(order);
    setFormerror(errors);
    if (Object.keys(errors).length > 0) {
      return false;
    }

    let formdata = new FormData(e.target);
    const url = "/api/order";
    fetch(url, {
      method: "POST",
      body: new URLSearchParams(formdata),
    })
      .then((response) => {
        if (response.status === 201) {
          alert("your order has been placed successfully!!!");
          return response.json();
        } else {
          alert("failed to place order!");
        }
      })
      .then((data) => {
        if (data) {
          setTimeout(() => {
            navigate("/thankyou", {
              replace: true,
              state: {
                orderId: data._id,
                name: data.name,
                cartTotal: location.state.cartTotal,
              },
            });
          }, 500);
        }
      });
  };

  return (
    <>
      <div className="menu-form-parent">
        <div className="mymenu-form">
          <h1 className="last_head">Checkout Form</h1>
          <form onSubmit={PostData} className="menu-form">
            <div>
              <input
                onChange={(e) => handleInputs(e)}
                id="name"
                value={order.name}
                type="text"
                name="name"
                placeholder="Name"
              />

              {formerror && !name && (
                <p class="order_error">{formerror.name}</p>
              )}
            </div>

            <div>
              <input
                onChange={(e) => handleInputs(e)}
                id="phone"
                value={order.phone}
                type="tel"
                name="phone"
                placeholder="Phone"
              />
            </div>

            <div>
              <input
                onChange={(e) => handleInputs(e)}
                id="date"
                value={order.date}
                type="date"
                name="date"
                placeholder="Date"
                className="datepicker"
              />
              <p class="order_error">{formerror.date}</p>
            </div>
            <div>
              <input
                onChange={(e) => handleInputs(e)}
                id="email"
                value={order.email}
                type="text"
                name="email"
                placeholder="E-mail"
              />
              <p class="order_error">{formerror.email}</p>
            </div>
            <div>
              <input
                onChange={(e) => handleInputs(e)}
                id="address"
                value={order.address}
                type="text"
                name="address"
                placeholder="Address"
              />
              <p class="order_error">{formerror.address}</p>
            </div>

            <div>
              <button class="order-button" type="submit">
                Order Place{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Order;
