const Skills = () => {
  const skillCategories = [
    {
      title: "Web & Backend",
      color: "border-blue-500",
      skills: [
        { name: "Django", icon: "django/django-plain.svg" },
        { name: "FastAPI", icon: "fastapi/fastapi-original.svg" },
        { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
        { name: "React", icon: "react/react-original.svg" }
      ],
    },
    {
      title: "Languages",
      color: "border-purple-500",
      skills: [
        { name: "JavaScript", icon: "javascript/javascript-original.svg" },
        { name: "Python", icon: "python/python-original.svg" },
        { name: "C++", icon: "cplusplus/cplusplus-original.svg" },
        { name: "Java", icon: "java/java-original.svg" },
        { name: "TypeScript", icon: "typescript/typescript-original.svg" }
      ],
    },
    {
      title: "Systems & Data",
      color: "border-emerald-500",
      skills: [
        { name: "Linux", icon: "linux/linux-original.svg" },
        { name: "Bash", icon: "bash/bash-original.svg" },
        { name: "MySQL", icon: "mysql/mysql-original.svg" },
        { name: "PostgreSQL", icon: "postgresql/postgresql-original.svg" },
        { name: "MATLAB", icon: "matlab/matlab-original.svg" }
      ],
    },
  ];

  return (
    <section className="py-24 px-6 relative mt-10 md:mt-20">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-border-dark to-transparent left-0"></div>

      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-slate-100 drop-shadow-lg text-glow-white">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 mt-3 text-lg font-light">Areas of expertise and technologies I work with.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`bg-card-dark p-8 rounded-3xl border-t-4 ${category.color} border-l border-r border-b border-border-dark shadow-2xl hover-lift group relative overflow-hidden`}>

              <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center justify-between">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-3 rounded-xl bg-black/50 border border-border-dark hover:border-brand hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:-translate-y-2 transition-all duration-300 group/icon">
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}`}
                      alt={skill.name}
                      className="w-12 h-12 mb-3 filter grayscale opacity-70 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 transition-all duration-300 group-hover/icon:scale-110 drop-shadow-lg"
                    />
                    <span className="text-sm font-medium text-slate-400 group-hover/icon:text-white transition-colors">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
