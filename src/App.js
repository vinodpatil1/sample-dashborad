import React from 'react';
import { Route, Routes } from "react-router-dom"
import Home from './Home';
import Teams from "./pages/Teams";
import Movies from "./pages/Movies";
import Event from "./pages/Event";
import Task from "./pages/Task";
import Documentation from "./pages/Documentation";


function App() {
  return (
     <>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/event" element={<Event/>} />
        <Route path="/task" element={<Task/>} />
        <Route path="/documentation" element={<Documentation/>} />
     </Routes>

      </>
  );
}

export default App;
