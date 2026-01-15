export default function Checkout() {
  return (
    <div className="container mt-4">
      <h2>Checkout</h2>
      <input className="form-control mb-2" placeholder="Name" />
      <input className="form-control mb-2" placeholder="Address" />
      <input className="form-control mb-2" placeholder="Mobile" />
      <button className="btn btn-success">Place Order</button>
    </div>
  );
}
