export default function Blurb() {
  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-4 sm:p-10  w-screen flex flex-col items-center justify-center h-[75vh] sm:h-[65vh]">
      <div className="text-slate-300 sm:text-center flex flex-col">
        <p className="text-5xl md:text-6xl font-serif font-bold tracking-tight pb-2 bg-gradient-to-r from-amber-200 to-rose-500 inline-block text-transparent bg-clip-text">
          UI, UX, Functionality, Design
        </p>
        <div className="text-xl md:text-2xl md:w-[48rem] flex flex-col sm:items-center">
          <p className="tracking-tight pb-5">
            I am a full stack developer with a passion for design and creating
            beautiful, user-friendly websites.
          </p>
          <p className="tracking-tight pb-5">
            Based in Durham, NC and seeking job opportunities.
          </p>
          <div className="flex gap-3">
            <a href="https://github.com/katiegd">
              <img
                src="src/assets/images/github-svgrepo-com.svg"
                alt="Github"
                className="h-10 hover:scale-[1.05] transition-all duration-300"
              />
            </a>
            <a href="https://www.linkedin.com/in/katiegduryea/">
              <img
                src="src/assets/images/linkedin-svgrepo-com.svg"
                alt="Github"
                className="h-10 hover:scale-[1.05] transition-all duration-300"
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
