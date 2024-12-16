import tech from "../assets/tech.json";
export default function TechStack() {
  return (
    <>
      <div className="bg-gradient-to-b from-slate-900 to-slate-800 px-0 pt-10 pb-10 sm:p-20 w-full flex flex-col sm:items-center justify-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight pb-2 sm:pb-6 text-amber-100/[.98]">
            Tools
          </h2>
          <div className="mt-10 grid grid-cols-1  gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col gap-2 items items-center w-fit">
              <p className="text-xl font-black text-slate-200">Frontend</p>
              <div className="flex sm:flex-col flex-wrap gap-2">
                {tech[0].frontend.map((item) => (
                  <div
                    className="flex gap-4 items-center border bg-slate-900/75 shadow-md border-slate-800 text-slate-200 px-3 py-1 rounded-md "
                    key={item.id}
                  >
                    <img src={item.image} alt="" className="h-10" />
                    <p className="">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 items items-center w-fit">
              <p className="text-xl font-black text-slate-200">Backend</p>
              <div className="flex sm:flex-col flex-wrap gap-2">
                {tech[1].backend.map((item) => (
                  <div
                    className="flex gap-4 items-center border bg-slate-900/75 shadow-md border-slate-800 text-slate-200 px-3 py-1 rounded-md "
                    key={item.id}
                  >
                    <img src={item.image} alt="" className="h-10" />
                    <p className="">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 items items-center w-fit">
              <p className="text-xl font-black text-slate-200">Misc</p>
              <div className="flex sm:flex-col flex-wrap gap-2">
                {tech[2].other.map((item) => (
                  <div
                    className="flex gap-4 items-center border bg-slate-900/75 shadow-md border-slate-800 text-slate-200 px-3 py-1 rounded-md "
                    key={item.id}
                  >
                    <img src={item.image} alt="" className="h-10" />
                    <p className="">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
