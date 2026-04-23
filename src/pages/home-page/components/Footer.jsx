const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-border-dark mt-20 relative z-20">

      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">

        <h3 className="text-2xl font-bold text-slate-100 mb-3 text-glow-white">
          Hashim Abdulaziz
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed max-w-lg mb-8 italic">
          "Thoughts without content are empty, intuitions without concepts are blind."
          <br />
          <span className="text-brand font-semibold mt-2 inline-block not-italic text-glow">— Critique of Pure Reason</span>
        </p>

        <div className="pt-6 border-t border-border-dark w-full max-w-md flex justify-center text-sm text-slate-500 font-light">
          <p className="flex items-center gap-1 group">
            &copy; {new Date().getFullYear()} Hashim Abdulaziz. Built with logic.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
