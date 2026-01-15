import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!user || email !== user.email || password !== user.password) {
      setError("Invalid credentials");
      return;
    }

    localStorage.setItem("isAuth", true);
    navigate("/checkout");
  };

  return (
    <div className="container col-md-4 my-5">
      <h3>Login</h3>
      {error && <p className="text-danger">{error}</p>}

      <form onSubmit={handleLogin}>
        <input className="form-control mb-2" placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className="form-control mb-2" type="password" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-success w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
