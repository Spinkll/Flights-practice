import React, { useState } from "react";
import axios from "../../api/api";
import styles from "./FlightDetails.module.css";

const FlightDetails = () => {
  const [flightId, setFlightId] = useState("");
  const [flight, setFlight] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.get(`/flights/${flightId}`);
      setFlight(response.data);
    } catch (error) {
      setError("Failed to fetch flight details. Please try again.");
      console.error("Error fetching flight details:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Get Flight Details</h2>
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
          Get Details
        </button>
      </form>
      {flight && (
        <div className={styles.details}>
          <p>
            <strong>Flight Number:</strong> {flight.flightNumber}
          </p>
          <p>
            <strong>Departure Airport:</strong> {flight.departureAirport.name}
          </p>
          <p>
            <strong>Arrival Airport:</strong> {flight.arrivalAirport.name}
          </p>
          <p>
            <strong>Departure Time:</strong>{" "}
            {new Date(flight.departureTime).toLocaleString()}
          </p>
          <p>
            <strong>Arrival Time:</strong>{" "}
            {new Date(flight.arrivalTime).toLocaleString()}
          </p>
          <p>
            <strong>Duration:</strong> {flight.duration} minutes
          </p>
          <p>
            <strong>Price Adult:</strong> ${flight.priceAdult}
          </p>
          <p>
            <strong>Price Child:</strong> ${flight.priceChild}
          </p>
          <p>
            <strong>Capacity:</strong> {flight.capacity}
          </p>
        </div>
      )}
    </div>
  );
};

export default FlightDetails;
