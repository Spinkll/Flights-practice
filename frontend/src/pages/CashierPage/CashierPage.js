import React from "react";
import FlightList from "../../components/FlightList/FlightList";
import FlightForm from "../../components/FlightForm/FlightForm";
import TicketInfo from "../../components/TicketInfo/TicketInfo";
import styles from "./CashierPage.module.css";

const FlightsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cashier page</h1>
      <div className={styles.section}>
        <FlightForm />
      </div>
    </div>
  );
};

export default FlightsPage;
