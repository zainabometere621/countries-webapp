import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LadingPage";
import AllCountriesPage from "./pages/AllCountriesPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/countries" element={<AllCountriesPage />} />
    </Routes>
  );
}
