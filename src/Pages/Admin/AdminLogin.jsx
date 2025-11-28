import React, { useState } from "react";


const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Add your login API logic here
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="title">Admin Login</h2>
        <p className="subtitle">
          Enter your credentials to access the admin dashboard.
        </p>

        <form onSubmit={handleSubmit}>
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="admin@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="login-btn" type="submit" onClick={ () => window.location.href = "/dashboard" } >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin
