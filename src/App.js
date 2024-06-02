import Hero from "./pages/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import CommingSoon from "./components/CommingSoon/CommingSoon";
import {
  Button,
  CircularProgress,
  LinearProgress,
  duration,
} from "@mui/material";
import { motion } from "framer-motion";
import HomeSkeleton from "./pages/Home/HomeSkeleton";

const App = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  if (!loaded) {
    return (
      <motion.div
        className="loading-full-screen-display"
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <motion.div
          initial={{ opacity: 1, color: "black" }}
          animate={{ opacity: 0, color: "black" }}
          transition={{ delay: 1, duration: 1 }}
        >
          <CircularProgress color="success" /> &zwnj;
        </motion.div>
      </motion.div>
    );
  }
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
            </>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <>
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/auth"
          element={
            <>
              <Login />
            </>
          }
        ></Route>
        <Route path="/test" element={<HomeSkeleton />}></Route>
      </Routes>
    </div>
  );
};

export default App;
