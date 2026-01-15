import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold text-success" to="/">
          🛒 GroceryShop
        </Link>
        <div className="ms-auto">
          <Link to="/cart" className="btn btn-outline-success">
            Cart ({cart.length})
          </Link>
        </div>
      </div>
    </nav>
  );
}
