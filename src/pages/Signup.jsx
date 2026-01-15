import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    navigate("/login");
  };

  return (
    <div className="container col-md-4 my-5">
      <h3>Create Account</h3>
      {error && <p className="text-danger">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input className="form-control mb-2" placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input className="form-control mb-2" type="password" placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="btn btn-primary w-100">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
