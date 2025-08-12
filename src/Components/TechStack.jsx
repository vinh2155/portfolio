import { Icon } from '@iconify/react';

export default function TechStack() {
  const techData = {
    languages: [
      { name: "HTML", icon: "vscode-icons:file-type-html" },
      { name: "CSS", icon: "vscode-icons:file-type-css" },
      { name: "Javascript", icon: "logos:javascript" },
      { name: "Typescript", icon: "logos:typescript-icon" },
      { name: "Python", icon: "logos:python" }
    ],
    frontend: [
      { name: "React", icon: "logos:react" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" },
      { name: "Next.js", icon: "logos:nextjs-icon" }
    ],
    backend: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Express", icon: "simple-icons:express" },
      { name: "Flask", icon: "logos:flask" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "Drizzle ORM", icon: "simple-icons:drizzle" }
    ],
    devops: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "Jira", icon: "logos:jira" },
      { name: "Postman", icon: "logos:postman-icon" },
      { name: "Supabase", icon: "logos:supabase-icon" },
      { name: "Vercel", icon: "logos:vercel-icon" }
    ],
    ml: [
      { name: "scikit-learn", icon: "simple-icons:scikitlearn" },
      { name: "Numpy", icon: "logos:numpy" },
      { name: "Pandas", icon: "simple-icons:pandas" }
    ]
  };

  const sections = [
    { title: "Languages", data: techData.languages },
    { title: "Frontend", data: techData.frontend },
    { title: "Backend", data: techData.backend },
    { title: "DevOps & Tools", data: techData.devops },
    { title: "Machine Learning", data: techData.ml }
  ];

  return (
    <div className="bg-white h-[calc(100vh-60px)] p-6 w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
            Tech Stack
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            My quest for knowledge is never-ending, but here are some of the technologies I have used and am still learning:
          </p>
        </div>

        {/* Tech Sections */}
        <div className="space-y-8">
          {sections.map((section, sectionIndex) => (
            <div key={section.title} className="text-center">
              <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-4">
                {section.title}
              </h2>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {section.data.map((tech, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden bg-gradient-to-tl from-slate-800 to-slate-700 text-white rounded-full px-4 py-2 md:px-6 md:py-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
                  >
                    <div className="relative flex items-center gap-2 z-10">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        <Icon 
                          icon={tech.icon} 
                          className="text-base md:text-lg" 
                        />
                      </div>
                      <span className="font-medium text-xs md:text-sm whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
