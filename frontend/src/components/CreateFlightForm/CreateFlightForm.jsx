import React, { useState } from "react";
import axios from "axios";

const CreateFlightForm = () => {
  const [formData, setFormData] = useState({
    flightNumber: "",
    departureAirportId: "",
    arrivalAirportId: "",
    departureTime: "",
    arrivalTime: "",
    duration: "",
    priceAdult: 0,
    priceChild: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/flights", formData);
      console.log("Flight created:", response.data);
      // Додаткові дії після створення рейсу, якщо потрібно
    } catch (error) {
      console.error("Error creating flight:", error);
      // Обробка помилки при створенні рейсу
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Введення даних про рейс */}
      {/* Наприклад: */}
      <input
        type="text"
        name="flightNumber"
        value={formData.flightNumber}
        onChange={handleChange}
      />
      {/* Інші поля для введення даних */}
      <button type="submit">Create Flight</button>
    </form>
  );
};

export default CreateFlightForm;
