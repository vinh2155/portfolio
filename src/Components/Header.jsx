function Header({ activeTab, setActiveTab }) {
  const tabs = ["Home", "Projects", "Work", "Tech Stack", "About Me", "Contact Me"];

  return (
    <>
      <div className="bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50 m-0 flex flex-col md:flex-row justify-between items-center px-6 md:px-8 py-2 w-screen sticky top-0 z-50">
        {/* Logo/Name Section */}
        <div className="mb-2 md:mb-0">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-gray-800">
            Vinh Huynh
          </h1>
        </div>
        
        {/* Premium Navigation */}
        <nav className="bg-gray-50/80 backdrop-blur-sm rounded-full px-2 py-2 shadow-inner border border-gray-200/50">
          <div className="flex justify-center gap-1 text-sm md:text-base font-medium">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 md:px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer group overflow-hidden ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md transform scale-105"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-white/80 hover:shadow-sm"
                }`}
              >
                {/* Shine effect for inactive tabs */}
                {activeTab !== tab && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                )}
                
                <span className="relative z-10 font-semibold whitespace-nowrap">
                  {tab}
                </span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
