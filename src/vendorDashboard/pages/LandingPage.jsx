import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Login from "../components/forms/Login";
import Register from "../components/forms/Register";
import AddFirm from "../components/forms/AddFirm";
import AddProduct from "../components/forms/AddProduct";
import Welcome from "../components/Welcome";
import AllProducts from "../components/AllProducts";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showFirm, setShowFirm] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [showFirmTittle, setShowFirmTittle] = useState(true);

  useEffect(() => {
    const loginToken = localStorage.getItem("loginToken");
    if (loginToken) setShowLogout(true);
  }, []);

  useEffect(() => {
    const firmName = localStorage.getItem("firmName");
    if (firmName) setShowFirmTittle(false);
  }, []);

  const logoutHandler = () => {
    if (confirm("Are you sure, you want to logout?")) {
      localStorage.removeItem("loginToken");
      localStorage.removeItem("FirmId");
      localStorage.removeItem("firmName");
      setShowLogout(false);
      setShowFirmTittle(true);
    }
  };

  const showLoginHandler = () => {
    setShowLogin(true);
    setShowRegister(false);
    setShowFirm(false);
    setShowProduct(false);
    setShowWelcome(false);
    setShowAllProducts(false);
  };

  const showRegisterHandler = () => {
    setShowRegister(true);
    setShowLogin(false);
    setShowFirm(false);
    setShowProduct(false);
    setShowWelcome(false);
    setShowAllProducts(false);
  };

  const showFirmHandler = () => {
    if (showLogout) {
      setShowFirm(true);
      setShowRegister(false);
      setShowLogin(false);
      setShowProduct(false);
      setShowWelcome(false);
      setShowAllProducts(false);
    } else {
      alert("Please Login!");
      setShowLogin(true);
      setShowProduct(false);
      setShowWelcome(false);
      setShowAllProducts(false);
      setShowRegister(false);
      // showLoginHandler();
    }
  };

  const showProductHandler = () => {
    setShowFirm(false);
    if (showLogout) {
      if (localStorage.getItem("FirmId")) setShowProduct(true);
      else {
        alert(
          "Please add your restaurant details by using Add Firm tab or from the below form",
        );
        setShowFirm(true);
      }
      setShowRegister(false);
      setShowLogin(false);
      setShowWelcome(false);
      setShowAllProducts(false);
    } else {
      alert("Please Login!");
      // showLoginHandler();
      setShowLogin(true);
    }
  };

  const showWelcomeHandler = () => {
    setShowProduct(false);
    setShowFirm(false);
    setShowRegister(false);
    setShowLogin(false);
    setShowWelcome(true);
    setShowAllProducts(false);
  };

  const showAllProductsHandler = () => {
    if (showLogout) {
      setShowProduct(false);
      setShowFirm(false);
      setShowRegister(false);
      setShowLogin(false);
      setShowWelcome(false);
      setShowAllProducts(true);
    } else {
      alert("Please Login!");
      // showLoginHandler();
      setShowLogin(true);
    }
  };

  return (
    <>
      <section className="landingSection">
        <NavBar
          showLoginHandler={showLoginHandler}
          showRegisterHandler={showRegisterHandler}
          showLogout={showLogout}
          logoutHandler={logoutHandler}
        />
        <div className="collectionSection">
          <SideBar
            showFirmHandler={showFirmHandler}
            showProductHandler={showProductHandler}
            showAllProductsHandler={showAllProductsHandler}
            showFirmTittle={showFirmTittle}
          />
          {showLogin && <Login showWelcomeHandler={showWelcomeHandler} />}
          {showRegister && <Register showLoginHandler={showLoginHandler} />}
          {showFirm && showLogout && <AddFirm />}
          {showProduct && showLogout && <AddProduct />}
          {showWelcome && <Welcome />}
          {showAllProducts && showLogout && <AllProducts />}
        </div>
      </section>
    </>
  );
};

export default LandingPage;
