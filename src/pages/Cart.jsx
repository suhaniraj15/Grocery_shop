import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item, index) => (
        <div
          key={index}
          className="d-flex justify-content-between align-items-center border p-2 mb-2"
        >
          <span>{item.name}</span>
          <span>₹{item.price}</span>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => removeFromCart(index)}
          >
            Remove
          </button>
        </div>
      ))}

      <h4 className="mt-3">Total: ₹{total}</h4>

      <Link to="/checkout" className="btn btn-success mt-2">
        Proceed to Checkout
      </Link>
    </div>
  );
}
