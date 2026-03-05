import logo1 from "/src/assets/blue-logoss.png";
export default function Navbar() {
  return (
    <nav className="w-full h-[10vh] bg-white shadow-md flex items-center justify-between px-10">
      <div className="flex space-x-2 items-center justify-center">
        <img
          src={logo1}
          alt="world logo"
          className="h-16 w-16 object-contain"
        />
        <h1 className="font-bold text-2xl m-0">WorldInfo</h1>
      </div>
      <div className="flex space-x-4 text-base font-bold">
        <p className="hover:text-blue-700">Home</p>
        <p className="hover:text-blue-700">Countries</p>
      </div>
    </nav>
  );
}
