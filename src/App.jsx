import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./app/homepage"; // Your HomePage component
import { LoginPage } from "./app/login/page"; // The LoginPage component
import { RepositoriesPage } from "./app/Repositories/page"; // The RepositoriesPage component
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/repositories" element={<RepositoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
