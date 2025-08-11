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
        {activeTab === "About Me" && <div className="bg-white p-8 w-full flex items-center justify-center min-h-[calc(100vh-80px)]"><h2 className="text-2xl text-gray-800">About Me - Coming Soon</h2></div>}
        {activeTab === "Contact Me" && <Contact />}
      </main>
    </div>
  );
}

export default App;
