import Featured from "../../components/Featured/Featured";
import HomeListHeader from "../../components/HomeListHeader/HomeListHeader";
import ProblemsTable from "../../components/ProblemsTable/ProblemsTable";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Home.module.css";
import { initializeReduxState, initializeUser } from "../../util/util";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login, updateProblems } from "../../Redux/slices";
import { useNavigate } from "react-router";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const [authToken, setAuthToken] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook to navigate

  useEffect(() => {
    // Fetch problems only after setting the token
    const fetchProblems = async () => {
      try {
        const currentProblems = await initializeReduxState();
        dispatch(
          updateProblems({
            problems: currentProblems,
            listName: "Top 75",
            filteredProblems: currentProblems,
          })
        );
      } catch (error) {
        console.error("Error fetching problems:", error);
      }
    };
    const fetchUser = async () => {
      try {
        const currentUser = await initializeUser();
        dispatch(login(
          {userWithoutSensitiveInfo: currentUser}
        ))
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
    fetchProblems();

  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Sidebar />
      </div>
      <div className={styles.right}>
        <HomeListHeader />
        <div style={{ padding: "20px" }}>
          <Featured />
          <div style={{ height: "70vh" }}>
            <ProblemsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
