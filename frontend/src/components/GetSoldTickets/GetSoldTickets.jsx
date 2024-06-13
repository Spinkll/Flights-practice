import React, { useState } from "react";
import axios from "axios";

const GetSoldTickets = () => {
  const [route, setRoute] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [soldTickets, setSoldTickets] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/flights/sold-tickets`, {
        params: {
          route,
          startDate,
          endDate,
        },
      });
      setSoldTickets(response.data);
    } catch (error) {
      console.error("Error fetching sold tickets:", error);
      // Обробка помилки при отриманні кількості проданих квитків
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Route (e.g., Departure-Arrival)"
          value={route}
          onChange={(e) => setRoute(e.target.value)}
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
        <button type="submit">Get Sold Tickets</button>
      </form>
      {soldTickets && <p>Sold Tickets: {soldTickets.soldTickets}</p>}
    </div>
  );
};

export default GetSoldTickets;
