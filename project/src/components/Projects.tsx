import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'MK E-Commerce Website',
      description:
        'A fully responsive e-commerce platform with shopping cart, product filters, and checkout functionality.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Muralimk10/E-Commerce-Site',
      demo: 'https://www.linkedin.com/posts/murali-karthick-s-5a83b72a2_frontend-webdev-codingjourney-activity-7444044746026745857-Xiko?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkHsZABrzXGHG5_FUIMRRfoHqodDEGvhOQ',
    },
    {
      title: 'Weather Dashboard',
      description:
        'Real-time weather application that displays current conditions and forecasts for multiple locations.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Muralimk10/Weather-Management',
      demo: 'https://www.linkedin.com/posts/murali-karthick-s-5a83b72a2_webdevelopment-frontenddeveloper-javascript-activity-7446569171439558657-VWws?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkHsZABrzXGHG5_FUIMRRfoHqodDEGvhOQ',
    },
    {
      title: 'Task Management',
      description:
        'A productivity app with drag-and-drop functionality, task categories, and progress tracking.',
      technologies: ['HTML', 'CSS', 'Javascript'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Muralimk10/Task-Management',
      demo: 'https://www.linkedin.com/posts/murali-karthick-s-5a83b72a2_opentowork-frontenddeveloper-webdeveloper-activity-7453785493239943168-rfuh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkHsZABrzXGHG5_FUIMRRfoHqodDEGvhOQ',
    },
  ];

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* 3D animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 animate-3d-bg" />

      {/* Floating 3D orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-2/3 left-2/3 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,133,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,133,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-teal-400/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-teal-500/10"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-teal-200/60 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-teal-500/15 text-teal-300 rounded-full text-sm font-medium border border-teal-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-teal-200/70 hover:text-teal-400 transition-colors font-medium"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-teal-200/70 hover:text-teal-400 transition-colors font-medium"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
