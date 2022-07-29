import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";


export default function MenuView() {
  
  const [menu, setMenu] = useState([]);

  const getMenu = async () => {
    try {
      const {data} = await axios.get("/api/admin/menu");
      //console.log(data)
      return data;
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {    
    getMenu().then(data => setMenu(data));
  }, []);

  const deletemenu = async (id) => {
    await axios.delete(`/api/menu/delete/${id}`);
    var newMenu = menu.filter((item) => {
      return item._id !== id;
    });
    setMenu(newMenu);
  };
  return (
    <>
      
       
          <h1 className="rew_head"> Menu View</h1>
          <table className="table_box">
            <thead>
              <tr>
                <th>key</th>
                <th>Id</th>
                <th>Menu</th>
                <th>price</th>
                <th>category</th>
                <th>edit</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {menu &&
                menu.map((data, key) => {
                  return (
                      <tr key={key}>
                        <td>{key+1}</td>
                        <td>{data._id}</td>
                        <td>{data.menu}</td>
                        <td>{data.price}</td>
                        <td>{data.category}</td>
                        <td>
                          <Link
                            to={`/admin/menu/edit/${data._id}`}
                            className="edit"
                            data-toggle="modal"
                          >
                            Edit


                          </Link>
                        </td>
                        <td>
                          <Link
                            to="/admin/menu"
                            onClick={() => deletemenu(data._id)}
                            className="delete"
                          >
                            Delete


                          </Link>
                        </td>
                      </tr>
                  );
                })}
            </tbody>
          </table>
        
      
    </>
  );
}
export { MenuView };
