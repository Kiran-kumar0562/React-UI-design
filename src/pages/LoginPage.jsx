import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("John Doe"); // Simulate login user name
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home", { state: { name, email } });
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="primary-btn">Login</button>
      </form>
      <Link to="/register">
        <button className="secondary-btn">Create Account</button>
      </Link>
    </div>
  );
}

export default LoginPage;