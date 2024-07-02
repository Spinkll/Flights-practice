import React, { useState } from "react";
import axios from "../../api/api";
import styles from "./SoldTickets.module.css";

const SoldTickets = () => {
  const [route, setRoute] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [soldTickets, setSoldTickets] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.get("/flights/sold-tickets", {
        params: { route, startDate, endDate },
      });
      setSoldTickets(response.data);
    } catch (error) {
      setError("Failed to fetch sold tickets. Please try again.");
      console.error("Error fetching sold tickets:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Get Sold Tickets</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Route:</label>
          <input
            type="text"
            value={route}
            onChange={(e) => setRoute(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Get Sold Tickets
        </button>
      </form>
      {soldTickets !== null && (
        <div className={styles.result}>
          <p>Sold Tickets: {soldTickets.soldTickets}</p>
        </div>
      )}
    </div>
  );
};

export default SoldTickets;
