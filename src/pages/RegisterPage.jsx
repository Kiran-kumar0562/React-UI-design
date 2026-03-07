import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Navigate to HomePage and pass user info
    navigate("/home", { state: { name, email } });
  };

  return (
    <div className="container">
      <h1>Create Account</h1>
      <form onSubmit={handleRegister} className="form">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <button type="submit" className="primary-btn">Register</button>
      </form>
      <Link to="/login">
        <button className="secondary-btn">Already Registered? Login</button>
      </Link>
    </div>
  );
}

export default RegisterPage;