import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-bg-dark text-slate-200 font-sans relative">
      {/* Dynamic background grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0 mix-blend-overlay"></div>

      <div className="relative z-10 w-full overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
