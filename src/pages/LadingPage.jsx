import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import KeyFeatures from "../components/KeyFeatures";

export default function LandingPage() {
  return (
    <div className="bg-blue-50">
      <Navbar />
      <Hero />
      <About />
      <KeyFeatures />
    </div>
  );
}
