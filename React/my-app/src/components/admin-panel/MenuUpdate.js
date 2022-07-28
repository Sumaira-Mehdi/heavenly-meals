import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

let navigate;

export default function MenuUpdate() {
  navigate = useNavigate();
  const { id } = useParams();
  const [menuData, setMenu] = useState({
    menu: "",
    price: "",
    category: "",
  });
  useEffect(() => {
    async function getMenuData() {
      try {
        const menuData = await axios.get(`/api/menu/edit/${id}`);
        console.log('menuData', menuData);
        setMenu(menuData.data);
      } catch (error) {
        console.log("something is wrong");
      }
    }
    getMenuData();
  }, [id]);

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setMenu({ ...menuData, [name]: value });
  };
  async function PostData(e) {
    e.preventDefault();

    try {
      await axios.put(`/api/menu/update/${id}`, menuData);
      navigate("/admin/menu", { replace: true });
    } catch (error) {
      console.log("wrong");
    }
  }
  // navigate("/", { replace: true })

  return (
    <div>
      <>
        <h1>Menu Edit</h1>
        <div className="container">
          <form>
            <div className="rrow">
              <div className="col-25">
                <label for="category">Choose category:</label>
              </div>
              <div className="col-75">
                <select
                  className="input"
                  onChange={handleInputs}
                  class="ccategory"
                  name="category"
                  value={menuData.category}
                  id="category"
                >
                  <option value="Drinks">Drinks</option>
                  <option value="Maincourse">MainCourse</option>
                  <option value="Desserts">Desserts</option>
                </select>
              </div>
            </div>

            <div className="rrow">
              <div className="col-25">
                <label for="menu">menu</label>
              </div>
              <div className="col-75">
                <input
                  className="menuinput"
                  onChange={handleInputs}
                  type="text"
                  name="menu"
                  value={menuData.menu}
                  placeholder="menu"
                  id="menu"
                />
              </div>
            </div>

            <div className="rrow">
              <div className="col-25">
                <label for="price">price</label>
              </div>
              <div className="col-75">
                <input
                  className="input"
                  onChange={handleInputs}
                  type="number"
                  name="price"
                  value={menuData.price}
                  placeholder="price"
                  id="price"
                />
              </div>
            </div>
            <div className="rrow">
              <input className="input" type="submit" value="Update" onClick={PostData} />
            </div>
          </form>
        </div>
      </>
    </div>
  );
}
