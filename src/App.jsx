import { useState } from "react";
import Header from "./Components/Header";
import Blurb from "./Components/Blurb";
import Projects from "./Components/Projects";
import Work from "./Components/Work";
import TechStack from "./Components/TechStack";
import Contact from "./Components/Contact";
import ironmanLogo from "./assets/images/ironman_logo-removebg-preview.png";

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
                <h1 className="text-5xl md:text-7xl font-normal tracking-tight mb-6" style={{ fontFamily: 'Gloock, serif' }}>
                  <span 
                    className="bg-clip-text text-transparent"
                    style={{ 
                      backgroundImage: 'linear-gradient(to top right, #271d97ff, #bba3e4ff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    A Little About Me...
                  </span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-4"></div>
              </div>
              
              {/* Hobbies Content */}
              <div className="space-y-12">
                {/* Stick Insects Hobby - Now First */}
                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#321a5aff' }}>
                      <span className="text-white text-2xl">🌿</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Passion For Environment</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    I'm fascinated by stick insects and currently cultivating Giant Prickly Stick Insects at home. 
                    These incredible creatures showcase nature's most impressive camouflage abilities. My passion for 
                    environmental conservation led me to participate in Ocean Wise's Youth to Sea program - an intensive 
                    8-month marine conservation initiative.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Caring for these insects and my marine conservation work have taught me patience and attention to detail - 
                    skills that surprisingly parallel creating clean, efficient code environments.
                  </p>
                  <a 
                    href="https://ocean.org/fr/learn-explore/youth-programs/youthtosea/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#321a5aff' }}
                  >
                    <span>Learn About Youth to Sea</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </a>
                </div>

                {/* Poker Hobby - Now Second */}
                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#321a5aff' }}>
                      <span className="text-white text-2xl">♠️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Poker Strategy</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    In my free time, I'm usually watching <span className="font-semibold">"Dans la tête d'un pro"</span>, 
                    a French series that dives deep into professional poker thinking. The strategic analysis and decision-making 
                    processes I learn from this show directly enhance my problem-solving approach in programming.
                  </p>
                  <a 
                    href="https://www.youtube.com/watch?v=JKux10jyAz0&list=PLBC94376AA6FE0DEF&ab_channel=Winamax" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#321a5aff' }}
                  >
                    <span>Watch the Series</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </a>
                </div>

                {/* Triathlon Hobby */}
                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#321a5aff' }}>
                      <img 
                        src={ironmanLogo} 
                        alt="Ironman Logo" 
                        className="w-19 h-8"
                        style={{ transform: 'translateX(2px)' }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Ironman Training</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Currently training for an Ironman triathlon - 2.4-mile swim, 112-mile bike, and full marathon. 
                    This challenge has taught me discipline and systematic problem-solving that translates perfectly 
                    to coding: breaking complex tasks into manageable components and maintaining focus during long sessions.
                  </p>
                  <a 
                    href="https://www.strava.com/athletes/141730931" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#321a5aff' }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.599h4.172L10.463 0l-7 13.828h4.172"/>
                    </svg>
                    <span>Follow My Journey on Strava</span>
                  </a>
                </div>
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
