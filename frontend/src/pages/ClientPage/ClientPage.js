import React, { useState } from "react";
import TicketInfo from "../../components/TicketInfo/TicketInfo";
import AvailableSeats from "../../components/AvailableSeats/AvailableSeats";
import FlightDetails from "../../components/FlightDetails/FlightDetails";
import SoldTickets from "../../components/SoldTickets/SoldTickets";
import FlightList from "../../components/FlightList/FlightList";
import BuyTicket from "../../components/BuyTicket/BuyTicket";
import styles from "./ClientPage.module.css";
import Report from "../../components/Report/Report";

const ClientPage = () => {
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleSelectFlight = (flight) => {
    setSelectedFlight(flight);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Client Page</h1>

      <div className={styles.section}>
        <FlightList onSelectFlight={handleSelectFlight} />
      </div>

      <div className={styles.section}>
        <TicketInfo />
      </div>
      <div className={styles.section}>
        <AvailableSeats />
      </div>
      <div className={styles.section}>
        <SoldTickets />
      </div>
      <div className={styles.section}>
        <FlightDetails />
      </div>
      <div className={styles.section}>
        <Report />
      </div>
    </div>
  );
};

export default ClientPage;
