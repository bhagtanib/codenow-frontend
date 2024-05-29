import { useEffect, useRef, useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./HomeProblems.module.css";

const HomeProblemsHeader = () => {
  const percentage = 55;
  return (
    <div className={styles.headerContainer}>
      <input type="checkbox" />
      <img src = ''/>
      <span className={styles.headerTitle}> Two Sum</span>
      <span className={styles.headerDificulty}> Easy </span>
      <span className={styles.headerSolutions}> Show </span>
      {/* <div className={styles.headerStats}> 5 / 9 </div>
      <ProgressBar percentage={percentage} /> */}
    </div>
  );
};

const HomeProblem = () =>{
  return(
    <div></div>
  )
}
const HomeProblemSolution = () => {
  return (
    <div className={styles.problemContainer}>
      <img src="https://miro.medium.com/v2/resize:fit:958/1*2SlTTY_34bjOohBZ47jdCw.png" />
      <div className={styles.problemRight}>
        <p className={styles.problemTitle}>Leet Code: Two Sum</p>
        <p className={styles.problemStats}> 10 Views</p>
        <div className={styles.problemUser}>
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/fluency/48/name--v1.png"
            alt="name--v1"
          />
          <p className={styles.problemUserName}>Bhavesh Bhagtani</p>
        </div>
        <p className={styles.problemDescription}>
          {" "}
          Img elements must have an alt prop, either with meaningful text, or an
          empty string for decorative images
        </p>
      </div>
    </div>
  );
};

const HomeProblems = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const headerRef = useRef(null);
  const handleOpen = (idx) => {
    if (openIndex == idx) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(idx);
    }
  };

  useEffect(() => {}, [openIndex]);
  return (
    <div className={styles.problemsContainer}>
      {Array(111)
        .fill(3)
        .map((item, index) => (
          <>
            <div onClick={() => handleOpen(index)}>
              <HomeProblemsHeader />
            </div>
            {openIndex == index &&
              Array(4)
                .fill("")
                .map(() => <HomeProblemSolution />)}
          </>
        ))}
    </div>
  );
};

export default HomeProblems;
