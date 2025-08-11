import Blurb from "./Blurb";
import About from "./About";
import Projects from "./Projects";
import TechStack from "./TechStack";
import Work from "./Work";
import Contact from "./Contact";

export default function MainContent({ activeTab }) {
  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return <Blurb />;
      case "Projects":
        return <Projects />;
      case "Work":
        return <Work />;
      case "Tech Stack":
        return <TechStack />;
      case "About Me":
        return <About />;
      case "Contact Me":
        return <Contact />;
      default:
        return <Blurb />;
    }
  };

  return (
    <div className="w-full flex-1">
      {renderContent()}
    </div>
  );
}
