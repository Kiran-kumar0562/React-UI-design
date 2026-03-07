import { useLocation } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";

function HomePage() {
  const location = useLocation();
  const user = location.state || { name: "Guest" };
  const initial = user.name.charAt(0).toUpperCase(); // first letter for avatar

  const products = [
    { title: "Headphones", price: "$120" },
    { title: "Smart Watch", price: "$150" },
    { title: "Mobile Phone", price: "$500" },
    { title: "Camera", price: "$250" },
  ];

  return (
    <div>
      <Header title={`Welcome, ${user.name}`} profileInitial={initial} />

      <div className="container">
        <h2>Available Products</h2>
        <div className="card-grid">
          {products.map((p, i) => (
            <Card key={i} title={p.title} price={p.price} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;