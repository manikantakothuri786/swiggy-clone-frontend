import React, { useState } from "react";
import { API_URL } from "../../data/ApiPath";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(API_URL);
    try {
      const response = await fetch(`${API_URL}/vendor/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      //console.log(response);

      const data = await response.json();
      if (response.ok) {
        console.log(data);
        alert("Vendor registered sucessfully");
      }
      if (response.status == 400) {
        console.log("Email already taken, Please login");
        alert("Email already taken, Please login");
      }
    } catch (error) {
      console.log("Registration failed", error);
      alert("Registration failed");
    }
  };

  return (
    <div className="registerSection">
      <form className="authForm" onSubmit={handleSubmit}>
        <h3>Vendor Register</h3>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeHolder="Enter your name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeHolder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeHolder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <div className="btnSubmit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
