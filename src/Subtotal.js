import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();

  const [{ basket }] = useStateValue();
  const priceSum = () => {
    let sum = 0;
    for (let i = 0; i < basket.length; i++) sum += basket[i].price;
    return sum;
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* need to do it the other way */}
              Subtotal ({basket.length} items): <strong>${priceSum()}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
            {console.log(basket)}
          </>
        )}
        decimalScale={2}
        value={0} //need to do it the other way
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
