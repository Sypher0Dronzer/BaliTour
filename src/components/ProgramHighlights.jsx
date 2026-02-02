import {
  FaPrayingHands,
  FaTree,
  FaMotorcycle,
  FaSun,
  FaHotTub,
  FaWater,
  FaMountain,
  FaUmbrellaBeach,
 
  FaFire,
} from "react-icons/fa";
import { FaWaterLadder } from "react-icons/fa6";

const highlights = [
  {
    icon: FaPrayingHands,
    title: "Warm Balinese Welcome",
    description: "Traditional Balinese welcome upon arrival.",
  },
  {
    icon: FaTree,
    title: "Bali Jungle Swing",
    description: "Experience the iconic jungle swing with scenic views.",
  },
  {
    icon: FaMotorcycle,
    title: "ATV Adventure",
    description: "Thrilling ATV ride through Bali’s rugged terrain.",
  },
  {
    icon: FaSun,
    title: "Sunrise Jeep Experience",
    description: "Witness a breathtaking sunrise in Kintamani.",
  },
  {
    icon: FaHotTub,
    title: "Hot Spring Experience",
    description: "Relax in natural hot springs surrounded by nature.",
  },
  {
    icon: FaWater,
    title: "Tirta Empul Temple",
    description: "Visit the sacred Tirta Empul water temple.",
  },
  {
    icon: FaMountain,
    title: "Waterfalls & Rice Terraces",
    description: "Explore scenic waterfalls and lush rice terraces.",
  },
  {
    icon: FaUmbrellaBeach,
    title: "Nusa Penida Exploration",
    description: "Full-day island exploration in Nusa Penida.",
  },
  {
    icon: FaWaterLadder,
    title: "Water Sports in Kuta",
    description: "Enjoy exciting water sports activities at Kuta Beach.",
  },
  {
    icon: FaFire,
    title: "Uluwatu & Kecak Dance",
    description: "Sunset visit to Uluwatu Temple with Kecak Fire Dance.",
  },
];

export default function ProgramHighlights() {
  return (
    <section className="maxWidthForSections py-16">
       <h1 className="sm:text-5xl leading-tight text-3xl text-center gradient-text font-semibold">
        Program Highlights
      </h1>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {highlights.map(({ icon, title, description }, index) => {
            const Icon=icon
            return (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1"
          >
            <Icon className="text-4xl text-sky-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        )})}
      </div> */}

      <div className="grid md:grid-cols-3 sm:grid-cols-2 mt-12 gap-4 gap-y-8">
        {highlights.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className={`p-4 py-8 border relative rounded-tl-3xl rounded-br-3xl text-center ${
                index % 2 !== 0
                  ? "text-white bg-gradient-to-r from-violet-600 via-violet-700 to-purple-700 shadow-md shadow-violet-400/50"
                  : "text-violet-700 bg-violet-100/60 ring-1 ring-violet-300 shadow-sm shadow-violet-200/40"
              }`}
            >
              <div
                className={`absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 p-2 
         shadow-md shadow-violet-400/50 rounded-full ${
                index % 2 == 0
                  ? "text-white bg-gradient-to-r from-violet-600 via-violet-700 to-purple-700 shadow-md shadow-violet-400/50"
                  : "text-violet-700 bg-violet-100 ring-1 ring-violet-300 shadow-sm shadow-violet-200/40"
              }`}
              >
                <Icon className="size-7 " />
              </div>
              <h3 className="font-semibold text-lg ">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
