import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/sidebar.js";
import Daily from "./pages/Daily.js";
import Monthly from "./pages/Monthly.js";

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  height:100%; overflow:hidden;
`;
export default function App() {
  console.log("Welcome to my MoodTracker!")
  return (
    <Main>
      <BrowserRouter>
        <Sidebar></Sidebar>
        <Routes>
          <Route element={<Daily />} path="/" exact />
          <Route element={<Monthly />} path="/monthly" />
        </Routes>
      </BrowserRouter>
    </Main>
  );
}
