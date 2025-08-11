import projects from "../assets/projects.json";

export default function Projects() {
  return (
    <div className="bg-white p-8 w-full flex flex-col items-center justify-start min-h-[calc(100vh-80px)]">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center text-gray-800">
          Recent Projects
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 grid-cols-1">
          {projects.map((project) => (
            <div key={project.id} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="group relative overflow-hidden h-64">
                <img
                  src={project.src}
                  alt={project.name}
                  className="w-full h-full object-cover object-top transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={project.live}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
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
                    <a
                      href={project.live}
                      className="text-blue-600 hover:text-blue-700 font-semibold underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
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
