import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Menu.css";

export default function Shipping() {
  // const location = useLocation();
  // const [bill, setBill] = useState(location.state.cartTotal + 5);
  // console.log("BILLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL", bill);
  return (
    <div>
      <div className="shipping">
        <h3>Shopping Bill</h3>

        <table className="table">
          <tbody className="tbody">
            <tr>
              <td className="td"> CartTotal</td>
              <td align="right">${} </td>
            </tr>
            <tr>
              <td>Shipping fee</td>
              <td align="right">$5</td>
            </tr>
          </tbody>
          <tfoot className="tfoot">
            <tr>
              <td>Total</td>
              <td align="right">23</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
