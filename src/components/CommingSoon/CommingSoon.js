// CommingSoon.jsx

import React, { useEffect } from "react";
import styles from "./CommingSoon.module.css";

const CommingSoon = ({ closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 2000);
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.backdrop} onClick={closeModal}></div>
      <div className={styles.container}>
        <div className={styles.popUp}>
          {/* <button onClick={closeModal} className={styles.closeButton}>X</button> */}
          {/* Additional modal content can go here */}
          <p>Commin Soon</p>
        </div>
      </div>
    </div>
  );
};

export default CommingSoon;
