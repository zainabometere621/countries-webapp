import { Search } from "lucide-react";
import logo2 from "/src/assets/white-logoss.png";
import notification from "/src/assets/notification-icon.png";
export default function Hero() {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col space-y-6 items-center justify-center  mt-16 mb-24">
        <div className="h-24 w-24 bg-blue-700 rounded-full flex items-center justify-center">
          <img src={logo2} alt="world logo" className="h-16 w-16" />
        </div>
        <h1 className="text-5xl font-bold">Explore the World's Countries</h1>
        <p className="text-lg text-gray-600">
          Discover detailed information about countries around the globe. Access{" "}
          <br /> comprehensive data on population, geography, languages, and
          more.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-700 hover:bg-blue-800 shadow-md text-white px-4 py-1 flex items-center justify-center text-base font-semibold rounded-md space-x-4 flex">
            <Search className="h-6 w-6" />
            <p>Browse Countries</p>
          </button>
          <button className="border border-gray-300 hover:bg-gray-300 hover:border-gray-400 shadow-md bg-white flex items-center justify-center px-3 py-1 text-base font-semibold rounded-md space-x-2 flex">
            <img
              src={notification}
              alt="notification icon"
              className="h-8 w-8"
            />
            <p>Learn More</p>
          </button>
        </div>
      </section>
    </main>
  );
}
