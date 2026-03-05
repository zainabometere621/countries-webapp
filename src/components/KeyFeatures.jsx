import { MapPin } from "lucide-react";

export default function KeyFeatures() {
  return (
    <section className="flex flex-col space-y-6 items-center justify-center mt-24 mb-6">
      <h1 className="font-bold text-3xl">Key Features</h1>
      <div className="max-w-md p-8 bg-gray-50 border border-gray-200 rounded-xl shadow-sm space-y-4">
        <div className="w-14 h-14 bg-blue-100 flex items-center justify-center rounded-lg">
          <MapPin className="text-blue-700 w-8 h-8" />
        </div>
        <h2 className="font-semibold text-xl">Geographic Data</h2>
        <p className="text-gray-600 text-base ">
          Explore detailed geographic information including regions, subregions,
          coordinates, and bordering countries for every nation.
        </p>
      </div>
    </section>
  );
}
