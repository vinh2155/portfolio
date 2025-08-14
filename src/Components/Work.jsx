import { useState } from 'react';

export default function Work() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCard = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const historyData = [
    {
      title: "Software Engineering Student",
      company: "McGill University",
      date: "2025-2029",
      description:
        "Will begin my first year in Software Engineering at McGill, my first time learning from professors after self-teaching online, to study algorithms, data structures, software design, and programming fundamentals through lectures, labs, and team projects. ",
    },
    {
      title: "Software Developper Intern",
      company: "Tail'ed",
      date: "2025",
      description:
        "Started my first experience in a real software engineering team, learning how to collaborate effectively through code reviews, version control, and clear communication. Gained exposure to agile workflows and team-based problem solving while contributing to shared projects.",
    },
    {
      title: "Software Developper Intern",
      company: "MCG-3D",
      date: "2024-2025",
      description:
        "Worked in a small, fast-paced team where I took on a wide range of responsibilities beyond software development. Gained hands-on experience with Blender and 3D concepts, applying them in Babylon.js projects while contributing to all stages of the workflow from design to implementation.",
    },
    {
      title: "IB Student",
      company: "Jean-de-Brebeuf College",
      date: "2023-2025",
      description:
        "Building custom web applications for small businesses and startups. Specializing in React, Node.js, and modern web technologies. Successfully delivered multiple projects ranging from e-commerce platforms to portfolio websites, helping clients establish their digital presence.",
    },
  ];

  return (
    <div className="bg-white p-8 w-full flex flex-col items-center justify-start min-h-screen overflow-y-auto">
      <div className="max-w-4xl mx-auto w-full">
        {/* Premium Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-normal tracking-tight mb-6" style={{ fontFamily: 'Gloock, serif' }}>
            <span 
              className="bg-clip-text text-transparent"
              style={{ 
                backgroundImage: 'linear-gradient(to top right, #271d97ff, #bba3e4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Career History
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            My professional journey and educational milestones
          </p>
        </div>

        <div className="relative w-full pb-16">
          {/* Timeline Line */}
          <div className="absolute top-0 h-full left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
            <div className="w-1 bg-gradient-to-b from-indigo-500 via-purple-500 via-pink-500 to-orange-500 rounded-full h-full opacity-80"></div>
          </div>

          {historyData.map((item, index) => (
            <div key={index} className="relative pl-12 md:pl-0 pb-12 last:pb-0">
              {/* Icon Container */}
              <div className="absolute top-4 left-0 md:left-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>

              {/* Card Container with 3D perspective */}
              <div
                className={`w-full text-left md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                } perspective-1000`}
              >
                <div
                  className={`relative h-48 w-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                    flippedCards[index] ? 'rotate-y-180' : ''
                  }`}
                  onClick={() => toggleCard(index)}
                >
                  {/* Front of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl hover:scale-105 hover:border-blue-300 transition-all duration-300 h-full group">
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                          Click to flip
                        </div>
                      </div>
                      <p className="text-sm text-blue-600 font-medium mb-1 group-hover:text-blue-700 transition-colors duration-300">
                        {item.date}
                      </p>
                      <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-gray-900 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="font-semibold text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                        {item.company}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {item.description}
                      </p>
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="p-6 rounded-xl border border-blue-300 bg-gradient-to-br from-blue-50 to-purple-50 shadow-2xl h-full flex items-center justify-center overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50"></div>
                      <div className="relative z-10 text-center">
                        <div className="mb-4 transform hover:scale-110 transition-transform duration-500">
                          <img
                            src="src/assets/images/download_ex.png"
                            alt="Experience Detail"
                            className="w-24 h-24 mx-auto rounded-full shadow-xl border-4 border-white object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div className="w-24 h-24 mx-auto rounded-full shadow-xl border-4 border-white bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center" style={{display: 'none'}}>
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                        </div>
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-600 mb-4">Detailed View</p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCard(index);
                          }}
                          className="px-4 py-2 bg-white/80 hover:bg-white text-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
                        >
                          Back to Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
