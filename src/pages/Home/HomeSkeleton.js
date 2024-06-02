import React from "react";
import styles from "./Home.module.css";

const HomeSkeleton = () => {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonLeft}>
        {Array(4)
          .fill(" ")
          .map(() => (
            <span>&zwnj;</span>
          ))}
      </div>
      <div className={styles.skeletonRight}>
        <div className={styles.skeletonRightTop}></div>
        <div className={styles.skeletonRightBottom}></div>
      </div>
    </div>
  );
};

export default HomeSkeleton;
