import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddAdmins from "./components/AddAdmins";
import AdminsList from "./components/AdminsList";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<AdminsList />} />
          <Route path="/addAdmins" element={<AddAdmins />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
