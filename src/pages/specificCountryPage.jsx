import { useState, useEffect } from "react";
import { useParams,NavLink } from "react-router-dom";
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
      <NavLink to = "/countries" className=" flex items-center text-base space-x-4 text-center font-medium px-3 py-2 rounded-lg w-fit hover:bg-gray-200">
        <ArrowLeft className="h-4 w-4" />
        <p>Back to Countries</p>
      </NavLink>

      <section className="grid grid-cols-4 gap-4 max-w-6xl mx-auto my-6">
        {country.map((c) => (
          <div key={c.cca2} className="p-2 border border-gray-200 text-md">
            <p>{c.name.common}</p>
            <p>{c.flag}</p>
            <p>{c.currencies ? Object.values(c.currencies)[0].name : "N/A"}</p>
            {/* <p>{c.website}</p> */}
          </div>
        ))}
      </section>
    </main>
  );
}
