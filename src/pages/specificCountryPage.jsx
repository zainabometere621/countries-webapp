import { useState, useEffect } from "react";

export default function SpecificCountryPage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://restcountries.com/v3.1/name/ghana");
        const data = await res.json();
        setCountries(data.slice(0, 20));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
console.log(countries)
  return (
    <main>
      <button className="text-6xl text-center font-medium">
        <img src="" alt="" />
        <p></p>
      </button>

      <section className="grid grid-cols-4 gap-4 max-w-6xl mx-auto my-6">
        {countries.map((c) => (
          <div key={c.cca2} className="p-2 border border-gray-200 text-md">
            <p>{c.name.common}</p>
            <p>{c.flag}</p>
            <p>{c.currencies.GHS.name}</p>
            {/* <p>{c.website}</p> */}
          </div>
        ))}
      </section>
    </main>
  );
}