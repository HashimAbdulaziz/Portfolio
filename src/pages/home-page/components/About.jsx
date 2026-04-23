const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-border-dark to-transparent left-0"></div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 z-10 relative">
        <div className="bg-card-dark/80 p-10 rounded-2xl border border-border-dark shadow-xl hover-lift reveal-gradient backdrop-blur-sm">
          <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center mb-6 border border-brand/50">
            <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-100 mb-4 relative z-10">
            Hardware Foundation
          </h2>
          <p className="text-slate-400 leading-relaxed font-light relative z-10">
            Graduated from the Faculty of Engineering at Ain Shams University. I spent my first year in hardware design, including a PCB design internship at Siemens. This experience gave me a deep understanding of standard engineering processes and low-level system design.
          </p>
        </div>

        <div className="bg-card-dark/80 p-10 rounded-2xl border border-border-dark shadow-xl hover-lift reveal-gradient backdrop-blur-sm md:translate-y-12">
          <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-6 border border-cyan-500/50">
            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-100 mb-4 relative z-10">
            Software Evolution
          </h2>
          <p className="text-slate-400 leading-relaxed font-light relative z-10">
            Fully transitioned into software development. Currently completing an intensive 9-month ITI scholarship in Open Source Application Development. Passionate about writing clean, maintainable code and solving complex architectural bottlenecks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
