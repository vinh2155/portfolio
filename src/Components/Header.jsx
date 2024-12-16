function Header() {
  return (
    <>
      <div className="bg-slate-800 m-0 flex flex-col text-3xl md:flex-row justify-between items-center sm:p-10 pt-4  text-amber-200  tracking-tight w-screen">
        <p className="sm:text-4xl font-black tracking-tight font-serif px-4 py-2">
          Katie Duryea
        </p>
        <div className="flex justify-center gap-4 sm:gap-4 text-lg font-bold ">
          <div className="rounded-md hover:bg-amber-200 hover:text-slate-800 sm:px-4 sm:py-2 transition-all duration-300 cursor-pointer px-2">
            <a href="#projects">Projects</a>
          </div>
          <div className="rounded-md hover:bg-amber-200 hover:text-slate-800 sm:px-4 sm:py-2 transition-all duration-300 cursor-pointer px-2">
            <a
              href="https://drive.google.com/file/d/1XyUBd0CT4GhxNXdtidB-KozoZnMZjuNY/view?usp=sharing"
              target="blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
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
