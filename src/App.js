import Hero from "./pages/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import CommingSoon from "./components/CommingSoon/CommingSoon";

const App = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            loaded && (
              <>
                <Navbar />
                <Hero />
              </>
            )
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
        <Route
          path="/test"
          element={
            <>
              <CommingSoon />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
