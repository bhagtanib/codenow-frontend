// Navbar.js
import React from "react";
import classes from "./Navbar.module.css"; // Import your CSS file for styling

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarLeft}>
        <img
          src="https://png.pngtree.com/png-vector/20220702/ourmid/pngtree-coding-logo-template-illustration-design-png-image_5673078.png"
          alt="laptop-coding"
        />
        <span>Practice </span>
      </div>
      <div className={classes.navbarRight}>
        <button> Login </button>
        <button> Join </button>
      </div>
    </div>
  );
};

export default Navbar;
