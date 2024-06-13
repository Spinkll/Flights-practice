import React, { useState } from "react";
import axios from "axios";

const GetTickets = () => {
  const [flightId, setFlightId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tickets, setTickets] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/flights/${flightId}/tickets`, {
        params: {
          startDate,
          endDate,
        },
      });
      setTickets(response.data);
    } catch (error) {
      console.error("Error fetching tickets:", error);
      // Обробка помилки при отриманні квитків
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Flight ID"
          value={flightId}
          onChange={(e) => setFlightId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button type="submit">Get Tickets</button>
      </form>
      {tickets && (
        <div>
          <p>Adult Tickets: {tickets.adultTickets}</p>
          <p>Child Tickets: {tickets.childTickets}</p>
        </div>
      )}
    </div>
  );
};

export default GetTickets;
