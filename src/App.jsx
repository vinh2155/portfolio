import { Observer } from "tailwindcss-intersect";
import { useEffect } from "react";

import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  useEffect(() => {
    Observer.start();
  }, []);

  return (
    <>
      <div className="m-0 flex flex-col items-center text-slate-700 bg-gradient-to-t from-slate-50 to-slate-200 w-screen h-full scroll-smooth">
        <ScrollToTop />
        <Header />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}

export default App;
