import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="m-0 flex flex-col items-center text-slate-700 bg-gradient-to-r from-blue-600 to-indigo-900 w-screen h-full">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}

export default App;
