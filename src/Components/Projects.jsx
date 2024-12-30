import projects from "../assets/projects.json";

export default function Projects() {
  return (
    <>
      <div
        id="projects"
        className="bg-slate-900 p-4 sm:p-10 flex flex-col sm:items-center justify-center w-screen"
      >
        <p className="text-4xl md:text-6xl font-serif font-bold tracking-tight pb-4 sm:pb-12 text-amber-200/[.98] animate-fade duration-2000 delay-2000">
          Recent Projects
        </p>
        <div className="grid gap-6 md:grid-cols-2 grid-cols-1 sm:max-w-5xl animate-fade duration-2000 delay-1000">
          {projects.map((project) => (
            <div key={project.id} className="bg-slate-800 shadow sm:p-10 p-5">
              <div className="group relative overflow-hidden h-72 ">
                <img
                  src={project.src}
                  alt=""
                  className="w-full h-full object-cover object-top origin-top transform transition-transform duration-500 ease-in-out group-hover:scale-105 cursor-pointer"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer ">
                  <a
                    href={project.live}
                    className="font-bold border-2 border-slate-100 hover:border-slate-50 hover:brightness-150 transition-all duration-500 ease-in-out text-slate-200 text-2xl bg-rose-900 px-5 py-1 rounded-xl"
                    target="_blank"
                  >
                    Live
                  </a>
                  {project.repo ? (
                    <a
                      href={project.repo}
                      className="font-bold border-2 border-slate-100 hover:border-slate-50 hover:brightness-150 transition-all duration-500 ease-in-out text-slate-200 text-2xl bg-rose-900 px-5 py-1 rounded-xl"
                      target="_blank"
                    >
                      Repo
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-xl text-amber-200 pt-2">
                  {project.name}
                </p>
                <p className="text-slate-200">{project.description}</p>
                <div className="touch:block hidden text-slate-200">
                  <a
                    href={project.live}
                    className="font-black text-slate-200 underline"
                    target="_blank"
                  >
                    Live
                  </a>{" "}
                  /{" "}
                  <a
                    href={project.repo}
                    className="font-black text-slate-200 underline"
                    target="_blank"
                  >
                    Code
                  </a>
                </div>
                <div className="flex gap-1 flex-wrap">
                  {project.tech.map((tech, i) => (
                    <p
                      className="bg-rose-900 text-slate-50 font-semibold mt-2 text-xs py-0.5 px-1"
                      key={tech[i]}
                    >
                      #{tech}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
