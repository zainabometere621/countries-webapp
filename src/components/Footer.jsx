import { NavLink } from "react-router-dom";
import logo1 from "/src/assets/blue-logoss.png";

export default function Footer() {
  return (
    <section className="w-full p-10 space-y-6">
      <div className="flex items-center justify-between ">
        <div className="space-y-4">
          <span className="flex space-x-2 items-center">
            <img src={logo1} alt="Logo" className="h-8 w-8" />
            <p className="font-semibold text-lg">Countries Explorers</p>
          </span>
          <p className="text-base text-gray-500">
            Explore countries around the world
          </p>
        </div>
        <div className="flex gap-4 text-base">
          <NavLink to = "/" className="hover:bg-gray-300 py-1 px-3 rounded-md">Home</NavLink>
          <NavLink to = "/countries" className="hover:bg-gray-300 py-1 px-3 rounded-md">Countries</NavLink>
          <NavLink to = "/about" className="hover:bg-gray-300 py-1 px-3 rounded-md">About</NavLink>
        </div>
      </div>
      <hr />
      <p className="text-base text-center text-gray-500  "> &copy; 2026 Zainab Ometere. All rights reserved.</p>
    </section>
  );
}
