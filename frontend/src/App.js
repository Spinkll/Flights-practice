import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ClientPage from "./pages/ClientPage/ClientPage";
import CashierPage from "./pages/CashierPage/CashierPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/client" element={<ClientPage />} />
        <Route path="/cashier" element={<CashierPage />} />
      </Routes>
    </Router>
  );
}

export default App;
