export default function Work() {
  const historyData = [
    {
      title: "SDE Intern",
      company: "Visteon",
      date: "2024 - 2024",
      description:
        "Worked on the AOSP framework, enhancing CarService functionality and improving Android services within an automotive context. Gained hands-on experience with porting features across different Android versions and hardware platforms such as Exynos, Snapdragon, and MediaTek.",
    },
    {
      title: "Started with web development",
      company: "theodinproject.com",
      date: "2023 - 2025",
      description:
        "Began my journey in web development, learning how learn technologies through documentation. Developed several personal projects to enhance my skills.",
    },
    {
      title: "B.E(Hons) in Computer Science",
      company: "Goa College of Engineering",
      date: "2021 - 2025",
      description:
        "Graduated with a 8.6 GPA, focusing on computer science and software development principles.",
    },
  ];

  return (
    <div className="bg-white p-8 w-full flex flex-col items-center justify-start min-h-[calc(100vh-80px)]">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center text-gray-800">
          Career History
        </h2>

        <div className="relative w-full">
          {/* Timeline Line */}
          <div className="absolute top-0 h-full left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
            <div className="w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 rounded-full h-full opacity-80"></div>
          </div>

          {historyData.map((item, index) => (
            <div key={index} className="relative pl-12 md:pl-0 pb-12 last:pb-0">
              {/* Icon Container */}
              <div className="absolute top-4 left-0 md:left-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>

              {/* Content Card */}
              <div
                className={`p-6 rounded-xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 w-full text-left md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                }`}
              >
                <p className="text-sm text-blue-600 font-medium mb-1">{item.date}</p>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="font-semibold text-gray-600 mb-3">
                  {item.company}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
