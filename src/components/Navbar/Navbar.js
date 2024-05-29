// Navbar.js
import React from "react";
import classes from "./Navbar.module.css"; // Import your CSS file for styling
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const handleAuthClick = () => {
    navigate("/auth")
  }
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarLeft}>
        <img
          src="https://png.pngtree.com/png-vector/20220702/ourmid/pngtree-coding-logo-template-illustration-design-png-image_5673078.png"
          alt="laptop-coding"
        />
      </div>
      <div className={classes.navbarRight}>
        <button onClick={handleAuthClick}> Login </button>
      </div>
    </div>
  );
};

export default Navbar;
