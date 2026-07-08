import React from "react";

const Login = () => {
  return (
    <div className="loginSection">
      <form className="authForm">
        <h3>Vendor Login</h3>
        <label>Email</label>
        <input type="text" placeHolder="Enter your email" />
        <br />
        <label>Password</label>
        <input type="password" placeHolder="Enter your password" />
        <br />
        <div className="btnSubmit">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
