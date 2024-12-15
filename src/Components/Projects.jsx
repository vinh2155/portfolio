import projects from "../assets/projects.json";

export default function Projects() {
  return (
    <>
      <div
        id="projects"
        className="bg-slate-100/[.97]  p-10 shadow-md lg:rounded-3xl max-w-6xl mt-10 mb-10"
      >
        <p className="text-4xl font-serif font-bold tracking-tight pb-4 bg-gradient-to-r from-blue-600 to-indigo-800 inline-block text-transparent bg-clip-text">
          Recent Projects
        </p>
        <div className="grid gap-10 md:grid-cols-2 grid-cols-1">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-50/75 sm:p-10 p-5 rounded-xl border border-slate-200"
            >
              <div className="group relative overflow-hidden h-72 ">
                <img
                  src={project.src}
                  alt=""
                  className="w-full h-full object-cover object-top origin-top transform transition-transform duration-500 ease-in-out group-hover:scale-105 cursor-pointer"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer ">
                  <a
                    href={project.live}
                    className="font-bold border-2 border-blue-400 hover:border-slate-50 hover:brightness-150 transition-all duration-500 ease-in-out text-white text-2xl bg-gradient-to-r from-blue-600 to-indigo-800 px-5 py-1 rounded-xl"
                  >
                    Live
                  </a>
                  <a
                    href={project.repo}
                    className="font-bold border-2 border-blue-400 hover:border-slate-50 transition-all hover:brightness-150 duration-500 ease-in-out text-white text-2xl bg-gradient-to-r from-blue-600 to-indigo-800 px-5 py-1 rounded-xl"
                  >
                    Repo
                  </a>{" "}
                </div>
              </div>
              <p className="font-bold text-xl text-blue-600 pt-2">
                {project.name}
              </p>
              <p className="">{project.description}</p>
              <div className="touch:block hidden">
                <a
                  href={project.live}
                  className="font-bold text-blue-600 underline"
                >
                  Live
                </a>{" "}
                /{" "}
                <a
                  href={project.repo}
                  className="font-bold text-blue-600 underline"
                >
                  Repo
                </a>
              </div>
              <div className="flex gap-1 flex-wrap">
                {project.tech.map((tech, i) => (
                  <p
                    className="bg-blue-600 text-slate-50 font-semibold mt-2 text-xs py-0.5 px-1"
                    key={tech[i]}
                  >
                    #{tech}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
