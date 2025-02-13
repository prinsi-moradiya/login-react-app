import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    alert("Registration Successful!");
    navigate("/");
  };

  return (
    <div className="card shadow-lg p-4" style={{ width: "350px" }}>
      <h3 className="text-center">Create Account</h3>
      <form onSubmit={handleRegister}>
        <input type="text" className="form-control my-2" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" className="form-control my-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" className="form-control my-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="btn btn-success w-100">Register</button>
      </form>
      <p className="mt-3 text-center">Already have an account? <a href="/">Login</a></p>
    </div>
  );
}

export default Register;