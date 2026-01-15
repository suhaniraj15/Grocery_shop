import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="container mt-4">
      <div className="row bg-light rounded shadow p-4 align-items-center">
        <div className="col-md-6">
          <h1>Fresh & Quality Groceries</h1>
          <p>Delivered to your doorstep</p>
          <button className="btn btn-danger btn-lg">Shop Now</button>
        </div>
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e"
            className="img-fluid rounded"
          />
        </div>
      </div>

      <h3 className="mt-5">Featured Products</h3>
      <div className="row g-4">
        {products.map(p => (
          <div className="col-md-3" key={p.id}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
