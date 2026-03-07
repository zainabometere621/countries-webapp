import Hero from "../components/Hero";
import About from "../components/About";
import KeyFeatures from "../components/KeyFeatures";

export default function LandingPage() {
  return (
    <div className="bg-blue-50">
      <Hero />
      <About />
      <KeyFeatures />
    </div>
  );
}
