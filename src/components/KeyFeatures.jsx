import {keyFeaturesCard} from "../data"
export default function KeyFeatures() {
  return (
    <section className="flex flex-col items-center justify-center mt-24 space-y-6">
      <h1 className="font-bold text-3xl">Key Features</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-32 pb-20">
        {keyFeaturesCard.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm space-y-4"
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-lg ${card.bgColor}`}
              >
                <Icon className={`w-8 h-8 ${card.iconColor}`} />
              </div>

              <h2 className="font-semibold text-xl">{card.title}</h2>
              <p className="text-gray-600 text-base">{card.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}