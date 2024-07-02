import React, { useState } from "react";
import axios from "../../api/api";
import styles from "./TicketInfo.module.css";

const TicketInfo = () => {
  const [flightId, setFlightId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tickets, setTickets] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.get(`/flights/${flightId}/tickets`, {
        params: { startDate, endDate },
      });
      setTickets(response.data);
    } catch (error) {
      setError("Failed to fetch tickets. Please try again.");
      console.error("Error fetching tickets:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Get Ticket Info</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Flight ID:</label>
          <input
            type="text"
            value={flightId}
            onChange={(e) => setFlightId(e.target.value)}
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
          Get Tickets
        </button>
      </form>
      {tickets && (
        <div className={styles.result}>
          <p>Adult Tickets: {tickets.adultTickets}</p>
          <p>Child Tickets: {tickets.childTickets}</p>
        </div>
      )}
    </div>
  );
};

export default TicketInfo;
