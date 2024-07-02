import React, { useState } from "react";
import axios from "../../api/api";
import styles from "./AvailableSeats.module.css";

const AvailableSeats = () => {
  const [flightId, setFlightId] = useState("");
  const [availableSeats, setAvailableSeats] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.get(`/flights/${flightId}/available-seats`);
      setAvailableSeats(response.data);
    } catch (error) {
      setError("Failed to fetch available seats. Please try again.");
      console.error("Error fetching available seats:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Get Available Seats</h2>
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
        <button type="submit" className={styles.submitButton}>
          Get Available Seats
        </button>
      </form>
      {availableSeats !== null && (
        <div className={styles.result}>
          <p>Available Seats: {availableSeats.availableSeats}</p>
        </div>
      )}
    </div>
  );
};

export default AvailableSeats;
