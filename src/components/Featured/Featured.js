import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import styles from "./Featured.module.css";
import { filterProblemsByTags } from "../../util/util"; // Import the utility function
import { setLoading, updateProblems } from "../../Redux/slices";

const Featured = () => {
  const featuredlist = ["Linked List", "Array", "Graph", "Dynamic Programming"];
  const [tagsToFilter, setTagsToFilter] = useState([]);
  const problems = useSelector((state) => state.currentProblems.problems);
  const dispatch = useDispatch();

  const handleTagClick = (tag) => {
    setTagsToFilter((prevTags) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((existingTag) => existingTag !== tag);
      } else {
        return [...prevTags, tag];
      }
    });
    dispatch(setLoading(true));
  };

  const handleTagFilter = useCallback(() => {
    let filterProblems = filterProblemsByTags(problems, tagsToFilter);
    if (!filterProblems.length) {
      filterProblems = problems;
    }
    dispatch(
      updateProblems({
        problems: problems,
        filteredProblems: filterProblems,
        listName: "Top75",
      })
    );

    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1000);
  }, [problems, tagsToFilter, dispatch]);

  useEffect(() => {
    handleTagFilter();
  }, [tagsToFilter, handleTagFilter]);

  return (
    <>
      <p># Featured</p>
      <div className={styles.container}>
        {featuredlist.map((item, index) => (
          <span
            key={index}
            className={`${styles.item} ${
              tagsToFilter.includes(item) ? styles.selected : ""
            }`}
            onClick={() => handleTagClick(item)}
          >
            {item}
          </span>
        ))}
      </div>
    </>
  );
};

export default Featured;
