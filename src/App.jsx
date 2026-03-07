import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LadingPage";
import AllCountriesPage from "./pages/AllCountriesPage";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/countries" element={<AllCountriesPage />} />
      </Route>
    </Routes>
  );
}
