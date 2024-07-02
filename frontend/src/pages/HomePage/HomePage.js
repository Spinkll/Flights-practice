import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Flight Management System</h1>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => navigate("/client")}>
          Client Page
        </button>
        <button className={styles.button} onClick={() => navigate("/cashier")}>
          Cashier Page
        </button>
      </div>
    </div>
  );
};

export default HomePage;
