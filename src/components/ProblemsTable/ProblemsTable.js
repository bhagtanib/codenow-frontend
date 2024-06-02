import React, { useEffect, useState } from "react";
import styles from "./ProblemsTable.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../../Redux/slices";

const TableRow = ({ rowData }) => {
  const openLink = (link) => {
    if (link.length > 0) {
      window.open(link);
    }
  };
  return (
    <tr className={styles.tableRowTr}>
      <td>
        <input
          width="30"
          height="30"
          type="checkbox"
          checked={rowData.status}
          onChange={(e) => {
            // Handle checkbox change here, e.g., update rowData.status
          }}
        />
      </td>{" "}
      <td
        style={{ cursor: "pointer" }}
        onClick={() => {
          window.open(rowData.link);
        }}
      >
        {rowData.title}
      </td>
      <td>
        <img
          onClick={() => openLink(rowData.solution)}
          style={{ opacity: rowData?.solution?.length > 0 ? "1" : "0.4" }}
          width="30"
          height="30"
          src="https://img.icons8.com/ios-glyphs/30/FFFFFF/play-button-circled--v1.png"
          alt="play-button-circled--v1"
        />
      </td>
      {/* <td>{rowData.Solution}</td> */}
      <td>{rowData.acceptance}%</td>
      <td>{rowData.difficulty}</td>
      <td>{rowData.frequency}</td>
    </tr>
  );
};

const ProblemsTable = () => {
  const [sortBy, setSortBy] = useState(null);

  const [sortOrder, setSortOrder] = useState("asc");

  // const [loading, setLoading] = useState(true);

  const [tableData, setTableData] = useState([
    {
      Status: true,
      Title: "Two Sum",
      Solution: "https://leetcode.com/problems/two-sum/",
      Acceptance: "50",
      Difficulty: "Easy",
      Frequency: "High",
    },
  ]);
  const dispatch = useDispatch();
  const problems = useSelector(
    (state) => state.currentProblems.filteredProblems
  );
  const loading = useSelector((state) => state.currentProblems.loading);

  useEffect(() => {
    if (problems) {
      const currProblems = [...problems];
      setTableData(currProblems);
    }
  }, [problems]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 2000);
  });

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  // Map difficulty levels to numeric values
  const difficultyMap = {
    Easy: 1,
    Medium: 2,
    Hard: 3,
  };

  // Sort table data based on the current sort criteria
  const sortedTableData = tableData.sort((a, b) => {
    if (sortBy === "title") {
      const aValue = a.title.toLowerCase();
      const bValue = b.title.toLowerCase();
      if (sortOrder === "asc") {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    } else if (sortBy === "difficulty") {
      const aValue = difficultyMap[a.difficulty];
      const bValue = difficultyMap[b.difficulty];
      if (sortOrder === "asc") {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    }
    // Default to no sorting
    return 0;
  });

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Status</th>
              <th>
                Title{" "}
                <button
                  className={styles.sortButton}
                  onClick={() => handleSort("title")}
                >
                  {sortBy === "title" && sortOrder === "asc" ? "▲" : "▼"}
                </button>
              </th>
              <th>Solution</th>
              <th>Acceptance</th>
              <th>
                Difficulty{" "}
                <button
                  className={styles.sortButton}
                  onClick={() => handleSort("difficulty")}
                >
                  {sortBy === "difficulty" && sortOrder === "asc" ? "▲" : "▼"}
                </button>
              </th>
              <th>Frequency</th>
            </tr>
          </thead>
          <tbody>
            {sortedTableData.map((rowData, index) => (
              <TableRow key={index} rowData={rowData} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProblemsTable;
