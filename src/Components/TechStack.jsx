import tech from "../assets/tech.json";

export default function TechStack() {
  return (
    <div className="bg-gray-50 p-8 w-full flex flex-col items-center justify-start min-h-[calc(100vh-80px)]">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center text-gray-800">
          Tech Stack
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Frontend */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Frontend</h3>
            <div className="flex flex-col gap-3 w-full max-w-xs">
              {tech[0].frontend.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <img src={item.image} alt={item.name} className="h-8 w-8" />
                  <p className="text-gray-700 font-medium">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Backend</h3>
            <div className="flex flex-col gap-3 w-full max-w-xs">
              {tech[1].backend.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <img src={item.image} alt={item.name} className="h-8 w-8" />
                  <p className="text-gray-700 font-medium">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Misc */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Tools & More</h3>
            <div className="flex flex-col gap-3 w-full max-w-xs">
              {tech[2].other.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <img src={item.image} alt={item.name} className="h-8 w-8" />
                  <p className="text-gray-700 font-medium">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
