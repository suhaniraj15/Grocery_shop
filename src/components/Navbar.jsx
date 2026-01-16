import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">GroceryShop</Link>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>

      {/* Cart */}
      <div className="cart-icon">
        <Link to="/cart">
          🛒 Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
