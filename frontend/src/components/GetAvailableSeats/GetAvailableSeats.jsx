import React, { useState } from "react";
import axios from "axios";

const GetAvailableSeats = () => {
  const [flightId, setFlightId] = useState("");
  const [availableSeats, setAvailableSeats] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/flights/${flightId}/available-seats`);
      setAvailableSeats(response.data);
    } catch (error) {
      console.error("Error fetching available seats:", error);
      // Обробка помилки при отриманні доступних місць
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
        <button type="submit">Get Available Seats</button>
      </form>
      {availableSeats && (
        <p>Available Seats: {availableSeats.availableSeats}</p>
      )}
    </div>
  );
};

export default GetAvailableSeats;
