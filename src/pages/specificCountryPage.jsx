import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function SpecificCountryPage() {
  const [country, setCountry] = useState([]);
  const params = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${params.countryCode}`,
        );
        const data = await res.json();
        console.log(data);
        setCountry(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [params.countryCode]);
  // console.log(countries)
  return (
    <main className=" px-6 py-10 bg-gray-100 ">
      <NavLink
        to="/countries"
        className=" flex items-center text-base space-x-4 text-center font-medium px-3 py-2 rounded-lg w-fit hover:bg-gray-200"
      >
        <ArrowLeft className="h-4 w-4" />
        <p>Back to Countries</p>
      </NavLink>

      <section className="">
        {country.map((c) => (
          <div
            key={c.cca2}
            className="p-2 bg-white text-md p-8 rounded-lg shadow-lg flex space-x-6 "
          >
            {/* <p>{c.name.common}</p> */}
            <img
              src={c.flags.png}
              alt={c.name.common}
              className="h-40 w-36 rounded-lg"
            />
            {/* <p>{c.currencies ? Object.values(c.currencies)[0].name : "N/A"}</p> */}
            {/* <p>{c.website}</p> */}
            <div className="flex flex-col space-y-4 pt-2">
              <p className="font-semibold text-5xl">{c.name.common}</p>
              <p className="text-gray-600 text-5xl">{c.capital}</p>
              <span className="flex space-x-4">
                <p className="px-6 py-1 rounded-3xl text-sm bg-blue-100 text-blue-700 text-sm ">{c.region}</p>
                <p className="px-6 py-1 rounded-3xl text-sm bg-green-100 text-green-700">{c.subregion}</p>
              </span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
