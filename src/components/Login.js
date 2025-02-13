import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
      alert("Invalid email or password");
      return;
    }
    alert("Login Successful!");
    localStorage.setItem("isAuthenticated", "true");
    navigate("/dashboard");
  };

  return (
    <div className="card shadow-lg p-4" style={{ width: "350px" }}>
      <h3 className="text-center">Sign In</h3>
      <form onSubmit={handleLogin}>
        <input type="email" className="form-control my-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" className="form-control my-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
      <p className="mt-3 text-center">New? <a href="/register">Sign Up</a></p>
    </div>
  );
}

export default Login;
