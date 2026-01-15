export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-4">
        <div className="row">

          <div className="col-md-4">
            <h5 className="fw-bold">GroceryShop</h5>
            <p>
              Fresh groceries delivered at your doorstep with quality and trust.
            </p>
          </div>

          <div className="col-md-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Products</li>
              <li>Cart</li>
              <li>Checkout</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="fw-bold">Contact</h5>
            <p>Email: support@groceryshop.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>

        </div>

        <hr />

        <div className="text-center">
          © 2026 GroceryShop | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
