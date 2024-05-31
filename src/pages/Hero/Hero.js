import React, { useEffect } from "react";
import styles from "./Hero.module.css";
import { initializeReduxState } from "../../util/util";
import { Navigate, useNavigate } from "react-router";
const Hero = () => {
  const navigate = useNavigate()
  const handleGetStarted = (e) => {
    e.preventDefault();
    navigate('/home');
  };


  return (
    <div className={styles.hero}>
      <div className={styles.heroTop}>
        <p>LEVEL UP YOUR</p> <p>{ "< />"} CODING SKILLS </p>
      </div>
      <div className={styles.heroBottom}>
        <div className={styles.heroBottomLeft}>
          <p>
            Grow from beginer to advance problem solver from practing these
            questions
          </p>
          <button onClick={handleGetStarted} >Get Started</button>
        </div>
        <div  className={styles.heroBottomRight}>
          <img src="https://cdn-icons-png.flaticon.com/256/8663/8663423.png" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
