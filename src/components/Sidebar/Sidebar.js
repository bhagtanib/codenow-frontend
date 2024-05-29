// Sidebar.jsx

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Sidebar.module.css";
import CommingSoon from "../CommingSoon/CommingSoon"; // Adjust the import path as necessary
import { useNavigate } from "react-router";
import { login } from "../../Redux/slices";

const SidebarItem = ({ details, openModal }) => {
  return (
    <div className={styles.itemContainer} onClick={openModal}>
      <div className={styles.itemLeft}>
        <img width="36" height="36" src={details.image} alt="ninja" />{" "}
      </div>
      <div className={styles.itemRight}>
        <h2>{details.heading}</h2>
        <p>{details.description}</p>
      </div>
    </div>
  );
};

const Info = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemLeft}>
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/color/48/xbox-b--v1.png"
          alt="xbox-b--v1"
        />
      </div>
      <div className={styles.itemRight}>
        <h2>{user?.name != undefined ? user.name : "Not logged In"}</h2>
        <p
          style={{ textDecoration: "underline" }}
          onClick={() => {
            if (!user) {
              navigate("/auth");
            }
          }}
        >
          {user ? "View Dashboard" : "Login now"}
        </p>
        {user?.name && (
          <p
            onClick={ () => {
              localStorage.removeItem("token");
              dispatch(login(
                {userWithoutSensitiveInfo: null}
              ))
              
            }}
            style={{ color: "crimson", textDecoration: "underline" }}
          >
            {" "}
            Log out
          </p>
        )}
      </div>
    </div>
  );
};

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sideOptions = [
    {
      heading: "Practice",
      description:
        "Sharpen your coding skills with exercises tailored to your level.",
      image: "https://img.icons8.com/glyph-neue/64/FFFFFF/ninja.png",
    },
    {
      heading: "Categories",
      description:
        "Explore a variety of coding challenges matched to your interests.",
      image: "https://img.icons8.com/ios-filled/100/FFFFFF/categorize.png",
    },
    {
      heading: "Playlist",
      description:
        "Discover LeetCode gems curated to elevate your interview performance.",
      image: "https://img.icons8.com/ios/100/FFFFFF/bulleted-list.png",
    },
    {
      heading: "Top Employers",
      description:
        "Unlock  access to interview questions asked by top-tier tech companies.",
      image: "https://img.icons8.com/wired/64/FFFFFF/company.png",
    },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.sidebarContainer}>
      <Info />
      {sideOptions.map((item, index) => (
        <SidebarItem openModal={openModal} key={index} details={item} />
      ))}
      {isModalOpen && <CommingSoon closeModal={closeModal} />}
    </div>
  );
};

export default Sidebar;
