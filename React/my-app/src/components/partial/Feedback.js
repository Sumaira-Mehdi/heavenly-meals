
import React, { useState } from "react";

export default function Feedback() {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formerror, setFormerror] = useState({});
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setFeedback({ ...feedback, [name]: value });
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
    if (!value.email) {
      errors.email = "Please Enter E-mail";
    } else if (!emailPattern.test(value.email)) {
      errors.email = " Enter Valid Email";
    }
    if (!value.message) {
      errors.message = "Write message";
    }

    return errors;
  };

  const PostReview = (e) => {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;
    console.log(feedback);
    const errors = validationform(feedback);
    setFormerror(errors);
    if (Object.keys(errors).length > 0) {
      return false;
    }

    let feedbackdata = new FormData(e.target);
    const url = "/api/feedback";
    fetch(url, {
      method: "POST",
      body: new URLSearchParams(feedbackdata),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      });
    alert("Thank You for your valuable feedback!!!");
  };

  return (
    <div className="footer">
      <div class="form">
        <p class="easy">Feedback Form</p>
        <form onSubmit={PostReview} id="basic-form">
          <p>
            <input
              onChange={(e) => handleInputs(e)}
              id="name"
              name="name"
              value={feedback.name}
              minlength="3"
              type="text"
              placeholder="Name"
            />
          </p>
          <p class="order_error">{formerror.name}</p>
          <p>
            <input
              onChange={(e) => handleInputs(e)}
              id="email"
              type="email"
              name="email"
              value={feedback.email}
              placeholder="Email"
            />
          </p>
          <p class="order_error">{formerror.email}</p>
          <p>
            <input
              onChange={(e) => handleInputs(e)}
              id="txtTel"
              type="tel"
              name="phone"
              value={feedback.phone}
              placeholder="Phone"
            />
          </p>
          <p class="order_error">{formerror.phone}</p>
          <p>
            <textarea
              onChange={(e) => handleInputs(e)}
              value={feedback.message}
              id="msg"
              name="message"
              placeholder="Message"
              rows="5"
              cols="33"
            ></textarea>
          </p>
          <p class="order_error">{formerror.message}</p>
          <p class="save">
            <input class="submit" type="submit" value="SUBMIT" />
          </p>
        </form>
      </div>
    </div>
  );
}
