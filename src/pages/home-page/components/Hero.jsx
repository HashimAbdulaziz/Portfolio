import profileImg from "../../../assets/Hashim.jpeg";

const Hero = () => {
  return (
    <section className="relative py-24 px-6 min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10 w-full">

        <div className="md:w-[55%] flex flex-col space-y-8 text-center md:text-left order-2 md:order-1">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-2xl text-glow-white">
              Hashim Abdulaziz
            </h1>
            <p className="text-xl md:text-2xl text-brand font-semibold tracking-wide text-glow">
              Software Developer & Engineer
            </p>
          </div>

          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-xl font-light">
            I build robust applications using modern technologies like the MERN stack, Django, FastAPI, Java, and C++. With roots in hardware design, I now focus on full-stack web development and clean architectures.
          </p>

          <div className="flex flex-wrap gap-5 justify-center md:justify-start pt-4 border-t border-border-dark">
            <a
              href="https://drive.google.com/file/d/1qmm3ND8JwKoyTWHx4AZr8WooSewQwNYh/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="group relative px-8 py-3.5 bg-brand text-white font-bold rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-[400ms] ease-out group-hover:w-full"></div>
              <span className="relative z-10 flex items-center gap-2 text-glow-white">
                Download CV
                <span className="group-hover:translate-x-1 transition-transform border border-white/30 px-1 rounded">PDF</span>
              </span>
            </a>

            <div className="flex gap-4 items-center">
              <a
                href="https://github.com/HashimAbdulaziz"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center w-14 h-14 bg-card-dark border border-border-dark rounded-full hover:bg-slate-800 hover:border-brand hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 hover-lift"
                title="GitHub"
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="w-8 h-8 filter invert opacity-80 group-hover:opacity-100" />
              </a>
              <a
                href="https://www.linkedin.com/in/hashim-abdulaziz-095b68281/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center w-14 h-14 bg-card-dark border border-border-dark rounded-full hover:bg-[#0a66c2]/10 hover:border-[#0a66c2] hover:shadow-[0_0_15px_rgba(10,102,194,0.3)] transition-all duration-300 hover-lift"
                title="LinkedIn"
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-8 h-8 opacity-80 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>

        <div className="md:w-[45%] flex justify-center order-1 md:order-2 w-full">
          <div className="relative floating">
            {/* Soft backdrop glow to make image pop, but strictly behind */}
            <div className="absolute inset-0 bg-brand rounded-full blur-3xl opacity-20 scale-100 z-0 pointer-events-none"></div>

            <img
              src={profileImg}
              alt="Hashim Abdulaziz"
              className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-[50px] shadow-[0_20px_50px_rgba(0,0,0,0.5),_0_0_30px_rgba(59,130,246,0.3)] border-2 border-brand/50 z-10 hover:scale-105 transition-transform duration-500 hover:rounded-[60px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
