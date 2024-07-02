import React, { useState } from "react";
import axios from "../../api/api";
import styles from "./BuyTicket.module.css";

const BuyTicket = ({ flight }) => {
  const [showModal, setShowModal] = useState(false);
  const [passengerType, setPassengerType] = useState("ADULT");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handlePurchase = async () => {
    try {
      if (!firstName || !lastName) {
        alert("Please enter both first name and last name.");
        return;
      }

      await axios.post("/flights/tickets", {
        flightId: flight.id,
        passengerType,
        purchaseDate: new Date().toISOString(),
        firstName,
        lastName,
      });
      alert("Ticket purchased successfully");
      setShowModal(false);
    } catch (error) {
      console.error("Error purchasing ticket:", error);
      alert("Failed to purchase ticket. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.buyButton} onClick={() => setShowModal(true)}>
        Buy Ticket
      </button>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Purchase Ticket</h2>
            <p>
              Flight: {flight.flightNumber} from {flight.departureAirport.name}{" "}
              to {flight.arrivalAirport.name}
            </p>
            <div>
              <label>Passenger Type:</label>
              <select
                value={passengerType}
                onChange={(e) => setPassengerType(e.target.value)}
                required
              >
                <option value="ADULT">Adult</option>
                <option value="CHILD">Child</option>
              </select>
            </div>
            <div>
              <label>First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className={styles.buttons}>
              <button onClick={handlePurchase}>Purchase</button>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyTicket;
