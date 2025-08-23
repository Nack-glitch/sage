import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Skills/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
