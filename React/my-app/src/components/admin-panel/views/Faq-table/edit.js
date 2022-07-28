import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './myfirsttable.css';
let navigate;

const Edit = () => {
  navigate = useNavigate();
  const { id } = useParams();
  const [myFaq, setMyFaq] = useState({
    question: "", answer: ""
  });
  useEffect(() => {
    async function getFaqData() {
      try {
        const myFaq = await axios.get(`/update/${id}`)
        setMyFaq(myFaq.data);
      } catch (error) {
        console.log("something is wrong");
      }
    }
    getFaqData();
  }, [id]);
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setMyFaq({ ...myFaq, [name]: value });
  }
  async function postFaqData(e) {
    e.preventDefault()
    try {
      await axios.put(`/update/${id}`, myFaq)
      navigate("/admin/faq", { replace: true })

    } catch (error) {
      console.log("something wrong")
    }

  }


  return (
    <div>
      <>
        <h1>Edit FAQ</h1>


        <div className="container">
          <form >
            <div className="rrow">
              <div className="col-25">
                <label htmlFor="question">Question</label>
              </div>
              <div className="col-75">
                <input type="textarea" id="question" value={myFaq.question} name="question" onChange={handleInputs} />
              </div>
            </div>
            <div className="rrow">
              <div className="col-25">
                <label htmlFor="answer">Answer</label>
              </div>
              <div className="col-75">
                <input type="textarea" id="answer" value={myFaq.answer} name="answer" onChange={handleInputs} />
              </div>
            </div>
            <div className="rrow">
              <input type="submit" value="Add" onClick={postFaqData} />
            </div>
          </form>
        </div>

      </>

    </div>
  )
}

export default Edit
