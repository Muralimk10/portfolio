import { Code, Palette, Rocket } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code size={32} />,
      title: 'Development',
      description: 'Building responsive websites using modern technologies like HTML, CSS, and JavaScript.',
    },
    {
      icon: <Palette size={32} />,
      title: 'Design',
      description: 'Creating beautiful and intuitive user interfaces with attention to detail and user experience.',
    },
    {
      icon: <Rocket size={32} />,
      title: 'Innovation',
      description: 'Always learning and exploring new technologies to build innovative solutions.',
    },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* 3D animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 animate-3d-bg" />

      {/* Floating 3D orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '5s' }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,133,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,133,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-teal-200/70 text-center leading-relaxed">
            I'm a dedicated with a passion for web development and design.
            I love turning ideas into reality through code and creating digital
            experiences that make a difference. When I'm not coding, you can find
            me learning new technologies and working on exciting projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-teal-400/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-teal-500/10"
            >
              <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-14 h-14 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-teal-500/20">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {skill.title}
              </h3>
              <p className="text-teal-200/60">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
