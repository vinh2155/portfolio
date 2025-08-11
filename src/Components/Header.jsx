function Header({ activeTab, setActiveTab }) {
  const tabs = ["Home", "Projects", "Work", "Tech Stack", "About Me", "Contact Me"];

  return (
    <>
      <div className="bg-white shadow-sm border-b border-gray-200 m-0 flex flex-col text-lg md:flex-row justify-between items-center px-6 py-4 w-screen">
        <p className="text-2xl md:text-3xl font-bold tracking-tight text-blue-600 mb-2 md:mb-0">
          Katie Duryea
        </p>
        <div className="flex justify-center gap-1 md:gap-2 text-sm md:text-base font-medium">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 md:px-4 py-2 rounded-md transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Header;
