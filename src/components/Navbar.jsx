import logo1 from "/src/assets/blue-logoss.png";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="w-full h-[10vh] bg-white shadow-md flex items-center justify-between px-6 lg:px-10">
      <div className="flex space-x-1 lg:space-x-2 items-center justify-center">
        <NavLink to = "/" >
        <img 
          src={logo1}
          alt="world logo"
          className="h-12 lg:h-16 h-12 lg:w-16 object-contain"
        />
        </NavLink>
        <h1 className="font-bold text-xl lg:text-2xl m-0">WorldInfo</h1>
      </div>
      <div className="flex space-x-2 lg:space-x-4 text-sm lg:text-base font-bold">
        <NavLink to = "/" className="hover:text-blue-700">Home</NavLink>
        <NavLink to = "/countries" className="hover:text-blue-700">Countries</NavLink>
      </div>
    </nav>
  );
}
