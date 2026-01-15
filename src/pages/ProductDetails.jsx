import { useParams } from "react-router-dom";
import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find(p => p.id == id);

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={product.image}
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <h2>{product.name}</h2>
          <h4 className="text-success">₹{product.price}</h4>
          <p>Fresh and high-quality grocery product.</p>

          <button
            className="btn btn-success"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
