export default function Blurb() {
  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-4 sm:p-10  w-screen flex flex-col items-center justify-center h-[75vh] sm:h-[65dvh]">
      <div className="text-slate-300 sm:text-center flex flex-col">
        <p className="text-5xl md:text-7xl font-serif font-bold tracking-tight pb-2 bg-gradient-to-r from-amber-200 to-rose-600 inline-block text-transparent bg-clip-text animate-fade-down">
          Hi, I'm Katie.
        </p>
        <div className="text-xl md:text-2xl md:w-[48rem] flex flex-col sm:items-center animate-fade-down">
          <p className="tracking-tight pb-5">
            I am a full stack developer with a passion for design and creating
            beautiful, user-friendly websites.
          </p>
          <p className="tracking-tight pb-5">
            Based in Durham, NC and seeking job opportunities.
          </p>
          <div className="flex gap-3">
            <a href="https://github.com/katiegd" target="_blank">
              <img
                src="images/github-svgrepo-com.svg"
                alt="Github"
                className="h-10 hover:scale-[1.05] transition-all duration-300"
              />
            </a>
            <a href="https://www.linkedin.com/in/katiegduryea/" target="_blank">
              <img
                src="images/linkedin-svgrepo-com.svg"
                alt="LinkedIn"
                className="h-10 hover:scale-[1.05] transition-all duration-300"
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
