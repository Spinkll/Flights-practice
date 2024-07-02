import React, { useEffect, useState } from "react";
import axios from "../../api/api";
import BuyTicket from "../BuyTicket/BuyTicket";
import styles from "./FlightList.module.css";

const FlightList = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get("/flights");
        setFlights(response.data);
      } catch (error) {
        console.error("Error fetching flights:", error);
      }
    };

    fetchFlights();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Flight List</h2>
      <ul className={styles.list}>
        {flights.map((flight) => (
          <li key={flight.id} className={styles.item}>
            <span className={styles.id}>Flight ID: {flight.id}</span>
            <span className={styles.flightNumber}>{flight.flightNumber}</span>
            <span className={styles.airports}>
              {flight.departureAirport.name} to {flight.arrivalAirport.name}
            </span>
            <span className={styles.times}>
              {new Date(flight.departureTime).toLocaleString()} -{" "}
              {new Date(flight.arrivalTime).toLocaleString()}
            </span>
            <BuyTicket flight={flight} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightList;
