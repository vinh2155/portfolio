import projects from "../assets/projects.json";
import MovieHubVideo from "../assets/MovieHub_Video.mp4";
import CirkVideo from "../assets/Cirk_Video.mp4";
import MessageBoardVideo from "../assets/MessageBoard_Video.mp4";
import blockchainImg from "../assets/images/blockchain.png";
import diabeteImg from "../assets/images/diabete.jpg";
import ecommerceImg from "../assets/images/E-commerce.png";

export default function Projects() {
  return (
    <div className="bg-white p-8 w-full flex flex-col items-center justify-start min-h-[calc(100vh-80px)]">
      <div className="max-w-6xl mx-auto w-full">
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
              Recent Projects
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A showcase of my latest work and creative solutions
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 grid-cols-1">
          {projects.map((project) => (
            <div key={project.id} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="group relative overflow-hidden h-64">
                {project.isVideo ? (
                  <video
                    src={project.name === "MovieHub" ? MovieHubVideo : project.name === "Cirk" ? CirkVideo : project.name === "Mini Message Board" ? MessageBoardVideo : project.src}
                    className="w-full h-full object-cover object-top transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                ) : (
                  <img
                    src={project.src === "images/blockchain.png" ? blockchainImg : project.src === "images/diabete.jpg" ? diabeteImg : project.src === "images/E-commerce.png" ? ecommerceImg : project.src}
                    alt={project.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                    style={{ objectPosition: project.src === "images/E-commerce.png" ? 'right 90%' : 'center 50%' }}
                  />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.name === "Cirk" ? (
                    // Special button for Cirk project
                    <>
                      <div className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300 cursor-default">
                        In the making
                      </div>
                      {project.repo && (
                        <a
                          href={project.repo}
                          className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Code
                        </a>
                      )}
                    </>
                  ) : (
                    // Regular buttons for other projects
                    <>
                      {project.live && (
                        <a
                          href={project.live}
                          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.repo && (
                        <a
                          href={project.repo}
                          className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Code
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-3">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Mobile-friendly links */}
                <div className="block md:hidden mb-4">
                  <div className="flex gap-3">
                    {project.name === "Cirk" ? (
                      <>
                        <span className="text-orange-600 font-semibold">In the making</span>
                        {project.repo && (
                          <>
                            <span className="text-gray-400">•</span>
                            <a
                              href={project.repo}
                              className="text-blue-600 hover:text-blue-700 font-semibold underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Code
                            </a>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        {project.live && (
                          <a
                            href={project.live}
                            className="text-blue-600 hover:text-blue-700 font-semibold underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live Demo
                          </a>
                        )}
                        {project.repo && (
                          <>
                            <span className="text-gray-400">•</span>
                            <a
                              href={project.repo}
                              className="text-blue-600 hover:text-blue-700 font-semibold underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Code
                            </a>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
