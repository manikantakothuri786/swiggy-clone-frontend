import React from "react";

const NavBar = ({
  showLoginHandler,
  showRegisterHandler,
  showLogout,
  logoutHandler,
}) => {
  return (
    <div className="navSection">
      <div className="company">Vendor Dashboard</div>

      <div className="userAuth">
        {!showLogout ? (
          <>
            <span onClick={showLoginHandler}>Login /</span>
            <span onClick={showRegisterHandler}>Register</span>
          </>
        ) : (
          <span onClick={logoutHandler}>Logout</span>
        )}
      </div>
    </div>
  );
};

export default NavBar;
