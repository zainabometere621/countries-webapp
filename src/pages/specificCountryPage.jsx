import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import logo1 from "/src/assets/blue-logoss.png";

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
        className=" flex items-center text-base space-x-4 text-center my-6 font-medium px-3 py-2 rounded-lg w-fit hover:bg-gray-200"
      >
        <ArrowLeft className="h-4 w-4" />
        <p>Back to Countries</p>
      </NavLink>

      <section className="">
        {country.map((c) => (
          <div key={c.cca2} className="flex flex-col space-y-6">
            <div className="p-2 bg-white text-md p-8 rounded-lg shadow-lg flex space-x-6 ">
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
                  <p className="px-6 py-1 rounded-3xl text-sm bg-blue-100 text-blue-700 text-sm ">
                    {c.region}
                  </p>
                  <p className="px-6 py-1 rounded-3xl text-sm bg-green-100 text-green-700">
                    {c.subregion}
                  </p>
                </span>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="p-2 bg-white text-md p-8 rounded-lg pb-24 shadow-lg w-full space-y-6">
                <span className="flex space-x-2 items-center">
                  <img src={logo1} alt="Logo" className="h-10 w-10" />
                  <p className="font-semibold text-xl">General Information</p>
                </span>
                <div>
                  <p className="flex itmes-center justify-between">
                    <span className="text-gray-400 text-base">Capital:</span>
                    <span className="font-semibold text-base">{c.capital}</span>
                  </p>
                  <hr />
                </div>
                <div>
                  <span className="flex itmes-center justify-between">
                    <p className="text-gray-400 text-base">Population:</p>
                    <p className="font-semibold text-base">{c.population}</p>
                  </span>
                  <hr />
                </div>
                <div>
                  <span className="flex itmes-center justify-between">
                    <p className="text-gray-400 text-base">Area:</p>
                    <p className="font-semibold text-base">{c.area}</p>
                  </span>
                  <hr />
                </div>
                <div>
                  <span className="flex itmes-center justify-between">
                    <p className="text-gray-400 text-base">Time Zone:</p>
                    <span className="font-semibold text-base">
                      {c.timezones}
                    </span>
                  </span>
                  <hr />
                </div>
                <div>
                  <span className="flex itmes-center justify-between">
                    <p className="text-gray-400 text-base">Status:</p>
                    <span className="font-semibold text-base">{c.status}</span>
                  </span>
                  <hr />
                </div>
              </div>
              <div className="p-2 bg-white text-md p-8 rounded-lg space-y-6 shadow-lg w-full">
                <span className="flex space-x-2 items-center">
                  <MapPin className="h-6 w-6 text-green-700" />
                  <p className="font-semibold text-xl">Geographic data</p>
                </span>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400 text-base">Region:</p>
                  <span className="font-semibold text-base">{c.region}</span>
                  <hr />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400 text-base">SubRegion:</p>
                  <span className="font-semibold text-base">{c.subregion}</span>
                  <hr />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400 text-base">Languages:</p>
                  <span className="font-semibold text-base">
                    {Object.values(c.languages ?? {}).join(", ")}
                  </span>
                  <hr />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400 text-base">Currencies:</p>
                  <span className="font-semibold text-base">
                    {Object.values(c.currencies ?? {})
                      .map((currency) => currency.name)
                      .join(", ")}
                  </span>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
