import { useId } from "react";
import { AddToCartIcon, CartIcon, ClearCartIcon } from "./Icons";
import "./Cart.css";

const Cart = () => {
  const cartCheckboxId = useId();

  return (
    <>
      <label htmlFor="cart" className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />

      <aside className="cart">
        <ul>
          <li>
            <img src="" alt="" />

            <div>
              <strong>iphone</strong> - $1499
            </div>

            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};

export default Cart;
