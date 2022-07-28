import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import MenuView from "./MenuView";
import './MenuView.css';

//let navigate;
export default function MenuAdd() {
  //navigate = useNavigate();
  const [status, setStatus] = useState();
  const [menu, getMenu] = useState({
    menu: "",
    price: "",
    category: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    getMenu({ ...menu, [name]: value });
  };

  const PostData = (e) => {
    e.preventDefault();
    //  console.log(menu);

    let formdata = new FormData(e.target);
    const url = "/api/userscreate";
    fetch(url, {
      method: "POST",
      body: new URLSearchParams(formdata),
    }).then(body => setStatus(true))
    /*
      .then((res) => res.json())
      .then((response) => {
        navigate("/admin/menu", { replace: true });
        console.log(response);
      });*/
  }

  if(status)
    return <MenuAdd />
  else
  
  return (
    <>

      <div className="main_heading">
        <h1>Menu Table</h1>
      </div>
      <div className="main-container">
        <div className="add_box">
          <h1>Add Menu</h1>
          <div className="container">
            <form onSubmit={PostData}>
              <div className="b-row">
                <div className="col-25">
                  <label htmlFor="category">Choose category:</label>
                </div>
                <div className="col-75">
                  <select
                    className="menu"
                    onChange={(e) => handleInputs(e)}
                    name="category"
                    value={menu.category}
                  >
                    <option value="Drinks">Drinks</option>
                    <option value="Maincourse">MainCourse</option>
                    <option value="Desserts">Desserts</option>
                  </select>
                </div>
              </div>

              <div className="b-row">
                <div className="col-sm">
                  <label for="menu">menu</label>
                </div>
                <div className="col-75">
                  <input
                    className="inputmmenu"
                    onChange={(e) => handleInputs(e)}
                    type="text"
                    name="menu"
                    value={menu.menu}
                    placeholder="menu"
                    id="menu"
                  />
                </div>
              </div>
              <div className="b-row">
                <div className="col-25">
                  <label htmlFor="price">price</label>
                </div>
                <div className="col-75">
                  <input
                    className="input"
                    onChange={(e) => handleInputs(e)}
                    type="number"
                    name="price"
                    value={menu.price}
                    placeholder="price"
                    id="price"
                  />
                </div>
              </div>
              <div>
                <input className="input" type="submit" value="Add" />
              </div>
            </form>
           
          </div>
        </div>
        <MenuView />
      </div>
    </>
  );
}
