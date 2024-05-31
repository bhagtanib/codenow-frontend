// Navbar.js
import React from "react";
import classes from "./Navbar.module.css"; // Import your CSS file for styling
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const handleAuthClick = () => {
    navigate("/auth");
  };
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarLeft}>
        <img
          src="https://img.icons8.com/ios-filled/50/e86840/source-code.png"
          alt="source-code"
        />
      </div>
      <div className={classes.navbarRight}>
        <button onClick={handleAuthClick}> Login </button>
      </div>
    </div>
  );
};

export default Navbar;
