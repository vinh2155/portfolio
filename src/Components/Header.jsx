function Header() {
  return (
    <>
      <div className="m-0 flex flex-col justify-center items-center pt-20 pb-10  text-slate-50  tracking-tight w-screen">
        <p className="flex justify-center text-7xl font-black tracking-tight font-serif pb-1">
          Katie Duryea
        </p>
        <div className="flex justify-center gap-1 text-xl">
          <div className="px-4 transition-all duration-300 cursor-pointer rounded-2xl hover:bg-blue-500 hover:text-white">
            <a href="#projects">Projects</a>
          </div>
          <div className="px-4 transition-all duration-300 cursor-pointer rounded-2xl  hover:bg-indigo-500 hover:text-white">
            <a
              href="https://drive.google.com/file/d/1XyUBd0CT4GhxNXdtidB-KozoZnMZjuNY/view?usp=sharing"
              target="blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
          <div className="px-4 transition-all duration-300 cursor-pointer rounded-2xl  hover:bg-indigo-600 hover:text-white">
            <a href="#about">About</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
