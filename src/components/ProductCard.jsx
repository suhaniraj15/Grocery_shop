import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="card product-card h-100 shadow-sm">
      <div className="img-wrapper">
        <img
          src={product.image}
          alt={product.name}
          onError={(e) =>
            (e.target.src =
              "https://via.placeholder.com/300x200?text=No+Image")
          }
        />
      </div>

      <div className="card-body text-center d-flex flex-column">
        <h6>{product.name}</h6>
        <p className="price">₹{product.price}</p>

        <button
          className="btn btn-outline-primary mb-2"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          View
        </button>

        <button
          className="btn btn-success mt-auto"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
