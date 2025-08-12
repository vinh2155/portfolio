import { useState } from "react";
import Header from "./Components/Header";
import Blurb from "./Components/Blurb";
import Projects from "./Components/Projects";
import Work from "./Components/Work";
import TechStack from "./Components/TechStack";
import Contact from "./Components/Contact";

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="min-h-screen bg-gray-50 text-slate-700">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main>
        {activeTab === "Home" && <Blurb />}
        {activeTab === "Projects" && <Projects />}
        {activeTab === "Work" && <Work />}
        {activeTab === "Tech Stack" && <TechStack />}
        {activeTab === "About Me" && (
          <div className="bg-white p-8 w-full flex flex-col items-center justify-start min-h-[calc(100vh-80px)]">
            <div className="max-w-4xl mx-auto w-full">
              {/* Premium Title Section */}
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
                  A Little About Me...
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-4"></div>
              </div>
              <div className="flex items-center justify-center">
                <h2 className="text-2xl text-gray-800">Content Coming Soon</h2>
              </div>
            </div>
          </div>
        )}
        {activeTab === "Contact Me" && <Contact />}
      </main>
    </div>
  );
}

export default App;
