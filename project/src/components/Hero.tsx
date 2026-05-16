import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 3D animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 animate-3d-bg" />

      {/* Floating 3D orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Grid overlay for depth */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,133,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,133,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <p className="text-teal-400 font-medium text-lg md:text-xl mb-4 tracking-wider uppercase">
            Welcome to my world
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 perspective-1000">
            <span className="block text-gray-200 mb-2">Hi, I'm</span>
            <span className="animate-name-glow bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-500 preserve-3d">
              Murali Karthick
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-teal-200/80 mb-4 font-light tracking-wide">
            Student | Developer | Designer
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about creating beautiful and functional web experiences.
            Currently studying and building projects to enhance my skills.
          </p>

          <div className="flex justify-center space-x-5 mb-12">
            <a
              href="https://github.com/Muralimk10"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-teal-500/20 hover:border-teal-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/20"
            >
              <Github className="text-gray-300 group-hover:text-teal-400 transition-colors" size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/murali-karthick-s-5a83b72a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-teal-500/20 hover:border-teal-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/20"
            >
              <Linkedin className="text-gray-300 group-hover:text-teal-400 transition-colors" size={24} />
            </a>
            <a
              href="mailto:muralimk.s10@gmail.com"
              className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-teal-500/20 hover:border-teal-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/20"
            >
              <Mail className="text-gray-300 group-hover:text-teal-400 transition-colors" size={24} />
            </a>
          </div>

          <button
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group relative bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-4 rounded-full font-medium hover:from-teal-400 hover:to-emerald-400 transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/40 transform hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-teal-400/50" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
