import Blurb from "./Blurb";
import About from "./About";
import Projects from "./Projects";
import TechStack from "./TechStack";

export default function MainContent() {
  return (
    <>
      <Blurb />
      <Projects />
      <TechStack />
      <About />
    </>
  );
}
