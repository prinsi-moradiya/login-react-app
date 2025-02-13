import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!isAuthenticated || !storedUser) {
      alert("You must be logged in!");
      navigate("/");
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("isAuthenticated");
      navigate("/");
    }
  };

  return (
    <div className="text-center">
      <h2>Welcome, {user?.name}!</h2>
      <p>Your Email: {user?.email}</p>
      <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
