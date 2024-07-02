import React, { useState } from "react";
import axios from "../../api/api";
import styles from "./FlightForm.module.css";

const FlightForm = () => {
  const [flight, setFlight] = useState({
    flightNumber: "",
    departureAirportId: "",
    arrivalAirportId: "",
    departureTime: "",
    arrivalTime: "",
    duration: "",
    priceAdult: "",
    priceChild: "",
    capacity: 150,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFlight({
      ...flight,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formattedFlight = {
      ...flight,
      departureAirportId: parseInt(flight.departureAirportId, 10),
      arrivalAirportId: parseInt(flight.arrivalAirportId, 10),
      duration: parseInt(flight.duration, 10),
      priceAdult: parseFloat(flight.priceAdult),
      priceChild: parseFloat(flight.priceChild),
      capacity: parseInt(flight.capacity, 10),
      departureTime: new Date(flight.departureTime).toISOString(),
      arrivalTime: new Date(flight.arrivalTime).toISOString(),
    };

    console.log("Formatted flight data being sent:", formattedFlight);

    try {
      await axios.post("/flights", formattedFlight);
      alert("Flight added successfully");
    } catch (error) {
      setError("Failed to add flight. Please try again.");
      console.error("Error adding flight:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2 className={styles.formTitle}>Add Flight</h2>
      {error && <p className={styles.errorMessage}>{error}</p>}
      <div className={styles.formGroup}>
        <label className={styles.label}>Flight Number:</label>
        <input
          type="text"
          name="flightNumber"
          value={flight.flightNumber}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Departure Airport ID:</label>
        <input
          type="number"
          name="departureAirportId"
          value={flight.departureAirportId}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Arrival Airport ID:</label>
        <input
          type="number"
          name="arrivalAirportId"
          value={flight.arrivalAirportId}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Departure Time:</label>
        <input
          type="datetime-local"
          name="departureTime"
          value={flight.departureTime}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Arrival Time:</label>
        <input
          type="datetime-local"
          name="arrivalTime"
          value={flight.arrivalTime}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Duration:</label>
        <input
          type="number"
          name="duration"
          value={flight.duration}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Price Adult:</label>
        <input
          type="number"
          name="priceAdult"
          value={flight.priceAdult}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Price Child:</label>
        <input
          type="number"
          name="priceChild"
          value={flight.priceChild}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Capacity:</label>
        <input
          type="number"
          name="capacity"
          value={flight.capacity}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>
      <button type="submit" className={styles.button}>
        Add Flight
      </button>
    </form>
  );
};

export default FlightForm;
