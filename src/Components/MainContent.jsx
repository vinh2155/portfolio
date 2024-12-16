import Blurb from "./Blurb";
import About from "./About";
import Projects from "./Projects";

export default function MainContent() {
  const primary = "indigo-600";
  const secondary = "rose-600";
  return (
    <>
      <Blurb primary={primary} secondary={secondary} />
      <Projects primary={primary} secondary={secondary} />
      <About primary={primary} secondary={secondary} />
    </>
  );
}
