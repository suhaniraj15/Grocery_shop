import { useState } from "react";
import  products from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || p.category === category)
  );

  return (
    <div className="container my-4">
      <h2 className="mb-4">All Products</h2>

      {/* 🔍 SEARCH + FILTER */}
      <div className="row mb-4 align-items-center">
        <div className="col-md-6 mb-2">
          <input
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-4 mb-2">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Snacks">Snacks</option>
          </select>
        </div>
      </div>

      {/* 🧱 PRODUCT GRID */}
      <div className="row g-4">
        {filteredProducts.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center mt-4">No products found</p>
      )}
    </div>
  );
};

export default Products;
