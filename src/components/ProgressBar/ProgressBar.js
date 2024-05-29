import styles from "./ProgressBar.module.css";

const ProgressBar = ({percentage}) => {
  return (
    <div className={styles.progressBarContainer}>
      <div
        className={styles.progressBar}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
