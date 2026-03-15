import { NavLink } from "react-router-dom";
import logo1 from "/src/assets/blue-logoss.png";

export default function Footer() {
  return (
    <section className="w-full p-6 lg:p-10 space-y-6">
      <div className="flex lg:flex-row flex-col items-center justify-between ">
        <div className="space-y-4">
          <span className="flex space-x-2 items-center">
            <img src={logo1} alt="Logo" className="h-8 w-8" />
            <p className="font-semibold text-base lg:text-lg">Countries Explorers</p>
          </span>
          <p className="text-sm lg:text-base text-gray-500">
            Explore countries around the world
          </p>
        </div>
        <div className="flex gap-2 lg:gap-4">
          <NavLink to = "/" className="hover:bg-gray-300 py-1 px-3 rounded-md lg:text-base">Home</NavLink>
          <NavLink to = "/countries" className="hover:bg-gray-300 py-1 px-3 rounded-md lg:text-base">Countries</NavLink>
          <NavLink to = "/about" className="hover:bg-gray-300 py-1 px-3 rounded-md text-sm lg:text-base">About</NavLink>
        </div>
      </div>
      <hr />
      <p className="text-sm lg:text-base text-center text-gray-500  "> &copy;  Zainab Ometere 2026. All rights reserved.</p>
    </section>
  );
}
