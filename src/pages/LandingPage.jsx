import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="container">
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <Link to="/register">
        <button className="primary-btn">Create Account</button>
      </Link>

      <Link to="/login">
        <button className="secondary-btn">Already Registered? Login</button>
      </Link>
    </div>
  );
}

export default LandingPage;