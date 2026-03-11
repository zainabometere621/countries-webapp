import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AllCountriesPage from "./pages/AllCountriesPage";
import SpecificCountryPage from "./pages/specificCountryPage";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/countries" element={<AllCountriesPage />} />
         <Route path="/country/:countryCode" element={<SpecificCountryPage />} />
      </Route>
    </Routes>
  );
}
