import React, { useState } from "react";
import axios from "../../api/api";
import styles from "./Report.module.css";

const Report = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [report, setReport] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.get("/reports", {
        params: { startDate, endDate },
      });
      setReport(response.data);
    } catch (error) {
      setError("Failed to fetch report. Please try again.");
      console.error("Error fetching report:", error);
    }
  };

  const handleDownload = async () => {
    try {
      const response = await axios.get("/reports/export", {
        params: { startDate, endDate },
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `report_${startDate}_${endDate}.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      setError("Failed to download report. Please try again.");
      console.error("Error downloading report:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Get Report</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Get Report
        </button>
        <button
          type="button"
          onClick={handleDownload}
          className={styles.downloadButton}
        >
          Download Excel
        </button>
      </form>
      {report && (
        <div className={styles.result}>
          <h3>Report</h3>
          {Object.keys(report).map((flightNumber) => (
            <div key={flightNumber} className={styles.reportItem}>
              <h4>Flight: {flightNumber}</h4>
              <p>Adult Tickets: {report[flightNumber].adultTickets}</p>
              <p>Child Tickets: {report[flightNumber].childTickets}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Report;
