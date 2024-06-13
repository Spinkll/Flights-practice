import React from "react";
import "./App.css";
import CreateFlightForm from "./components/CreateFlightForm/CreateFlightForm.jsx";
import GetTickets from "./components/GetTickets/GetTickets.jsx";
import GetAvailableSeats from "./components/GetAvailableSeats/GetAvailableSeats.jsx";
import GetSoldTickets from "./components/GetSoldTickets/GetSoldTickets.jsx";

function App() {
  return (
    <div className="App">
      <h1>Flight Management App</h1>
      <div className="section">
        <h2>Create New Flight</h2>
        <CreateFlightForm />
      </div>
      <div className="section">
        <h2>Get Tickets</h2>
        <GetTickets />
      </div>
      <div className="section">
        <h2>Get Available Seats</h2>
        <GetAvailableSeats />
      </div>
      <div className="section">
        <h2>Get Sold Tickets</h2>
        <GetSoldTickets />
      </div>
    </div>
  );
}

export default App;
