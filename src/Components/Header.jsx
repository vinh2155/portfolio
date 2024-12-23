function Header() {
  return (
    <>
      <div className="bg-slate-800 m-0 flex flex-col text-3xl md:flex-row justify-between items-center sm:p-10 pt-4  text-amber-200  tracking-tight w-screen ">
        <p className="sm:text-4xl font-black tracking-tight font-serif px-4 py-2 animate-fade-right">
          <a href="https://katiegd.github.io/portfolio/">Katie Duryea</a>
        </p>
        <div className="flex justify-center gap-2 sm:gap-4 text-lg font-bold animate-fade-left">
          <div className="rounded-md hover:bg-amber-200 hover:text-slate-800 sm:px-4 sm:py-2 transition-all duration-300 cursor-pointer px-2">
            <a href="#projects">Projects</a>
          </div>
          <div className="rounded-md hover:bg-amber-200 hover:text-slate-800 sm:px-4 sm:py-2 transition-all duration-300 cursor-pointer px-2 flex items-center gap-1">
            <a
              href="https://drive.google.com/file/d/1J1NECD0fcR8knicnKtdlPnilJOY46_DC/view?usp=sharing"
              target="blank"
              rel="noopener noreferrer"
            >
              Resume{" "}
            </a>{" "}
            <img
              src="images/open-in-new-svgrepo-com.svg"
              alt=""
              className="size-3"
            />
          </div>
          <div className="rounded-md hover:bg-amber-200 hover:text-slate-800 sm:px-4 sm:py-2 transition-all duration-300 cursor-pointer px-2">
            <a href="#about">About</a>
          </div>
          <div className="rounded-md hover:bg-amber-200 hover:text-slate-800 sm:px-4 sm:py-2 transition-all duration-300 cursor-pointer px-2">
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
