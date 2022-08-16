import React  from "react";
// import { Link } from "react-router-dom";
import Organizer from "./Domain/Organizer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmploeeData from "./Domain/EmploeeData";
// import Salary from "./Components/Salary";
// import { EmploeeName } from "./Style/SalaryStyle";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Organizer />}></Route>
        <Route path="/emploee/:id" element={<EmploeeData />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
