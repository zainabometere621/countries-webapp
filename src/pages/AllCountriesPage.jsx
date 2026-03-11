import { UserPlus } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AllCountriesPage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,cca2,capital,population",
        );
        const data = await res.json();
        setCountries(data.slice(0, 20));
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);
  function checkCountry(countryCode) {
  }
  return (
    <main className="flex flex-col gap-6 px-6 py-10 bg-gray-100">
      <h1 className="text-4xl font-bold">All Countries</h1>
      <p className="text-lg text-gray-600">
        Explore countries from around the world
      </p>
      <section className="">
        <div className="grid grid-cols-4 gap-10 mx-auto max-w-8xl my-6">
          {countries.map((c) => (
            <Link to={`/country/${c.cca2}`}>
              <div
                key={c.cca2}
                className="p-4 border bg-white border-gray-200 text-md rounded-md"
              >
              
                <div className="">
                  <img
                    src={c.flags.png}
                    alt={c.name.common}
                    className="h-32 w-96"
                  />
                </div>
                <div className="space-y-4 pt-4">
                  <div className="flex justify-between">
                    <p className="font-semibold text-lg">
                      {c.name.common} ({c.cca2})
                    </p>
                    <p>{c.capital}</p>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <UserPlus className="text-gray-400" />
                    <p className="font-semibold">
                      <span className="text-gray-400 font-extralight text-base">
                        Population:{" "}
                      </span>
                      {c.population}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
