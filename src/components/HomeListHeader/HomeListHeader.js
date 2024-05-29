// import React, { useEffect, useState, useRef } from "react";
import styles from "./HomeListHeader.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  filterDifficulty,
  filterSolved,
  searchInputFilter,
} from "../../util/util";
import { setLoading, updateProblems } from "../../Redux/slices";
import axios from "axios"; // Import Axios

const DropDownItem = ({ title, items }) => {
  // const [openIdx, setOpenIdx] = useState(1);
  const problems = useSelector((state) => state.currentProblems.problems);
  const dispatch = useDispatch();

  const handleDropdownItemClick = async (item) => {
    dispatch(setLoading(true));

    if (title === "lists") {
      try {
        let response = await axios.get(
          `https://boiling-brook-19149-8ec2377c0615.herokuapp.com/api/v1/problems/by-list/${item}`
        );
        response = response.data;
      

        dispatch(
          updateProblems({
            problems: response,
            filteredProblems: response,
            listName: item,
          })
        );

        setTimeout(() => dispatch(setLoading(false)), 1000);
      } catch (error) {
        console.error("Error:", error);
      }
    } else if (title === "difficulty") {
      dispatch(setLoading(true));
      const filteredProblems = filterDifficulty(problems, item);
      dispatch(
        updateProblems({
          problems: problems,
          filteredProblems: filteredProblems,
          listName: item,
        })
      );
      setTimeout(() => dispatch(setLoading(false)), 1000);
    } 
    else if (title === "status") {
      dispatch(setLoading(true));
      const filteredProblems = filterSolved(problems, item);
      dispatch(
        updateProblems({
          problems: problems,
          filteredProblems: filteredProblems,
          listName: item,
        })
      );
      setTimeout(() => dispatch(setLoading(false)), 1000);
    }
  };
  return (
    <div className={styles.item}>
      {title}
      <img
        src="https://img.icons8.com/ios-filled/50/FFFFFF/expand-arrow--v1.png"
        alt="expand-arrow"
      />
      <div className={styles.dropdownItems}>
        {items.map((item, index) => {
          return (
            <div key={index} onClick={() => handleDropdownItemClick(item)}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const HomeListHeader = () => {
  const problems = useSelector((state) => state.currentProblems.problems);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(setLoading(true));
    const filteredProblems = searchInputFilter(problems, e.target.value);
    dispatch(updateProblems({ problems, filteredProblems, listName: "Top75" }));
    setTimeout(() => dispatch(setLoading(false)), 1000);
  };

  const modelDataList = {
    listsData: ["Top 75", "Best 100", "Blind 50"],
    difficultyData: ["Easy", "Medium", "Hard"],
    statusData: ["Solved", "Unsolved"],
  };

  return (
    <div className={styles.container}>
      {Object.entries(modelDataList).map(([key, items]) => (
        <DropDownItem key={key} title={key.replace("Data", "")} items={items} />
      ))}
      <input onChange={handleInput} placeholder="search problems..." />
      <img
        width="40"
        height="40"
        src="https://img.icons8.com/glyph-neue/64/FFFFFF/shuffle.png"
        alt="shuffle"
      />
    </div>
  );
};

export default HomeListHeader;
