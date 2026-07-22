import React, { useState } from "react";
import { API_URL } from "../../data/ApiPath";

const Login = ({ showWelcomeHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/vendor/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      const vendorId = data.vendorId;
      //console.log(vendorId);
      if (response.ok) {
        alert("Login Sucess");
        localStorage.setItem("loginToken", data.token);
        console.log("Login sucessfully");
        setEmail("");
        setPassword("");
        showWelcomeHandler();
      }
      const vendorResponse = await fetch(
        `${API_URL}/vendor/single-vendor/${vendorId}`,
        {
          method: "GET",
        },
      );
      const vendorResponseData = await vendorResponse.json();
      //console.log(vendorResponseData);
      //console.log(firmId);

      if (vendorResponse.ok) {
        const firmId = vendorResponseData.vendorFirmId;
        localStorage.setItem("FirmId", firmId);
        console.log("firmId saved in the local storage");
      }
    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  };

  return (
    <div className="loginSection">
      <form className="authForm" onSubmit={handleSubmit}>
        <h3>Vendor Login</h3>
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={password}
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

export default Login;
