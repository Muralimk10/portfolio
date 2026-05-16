import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* 3D animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 animate-3d-bg" />

      {/* Floating 3D orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '5s' }} />
        <div className="absolute top-2/3 right-1/2 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '7s' }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,133,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,133,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Let's talk about everything!
            </h3>
            <p className="text-teal-200/60 mb-8">
              Feel free to reach out if you want to collaborate on a project,
              have a question, or just want to connect.
            </p>

            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="bg-gradient-to-br from-teal-500 to-emerald-500 p-3 rounded-xl mr-4 shadow-lg shadow-teal-500/20 group-hover:shadow-teal-500/40 transition-shadow">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <p className="text-teal-300 font-medium">muralimk.s10@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-gradient-to-br from-teal-500 to-emerald-500 p-3 rounded-xl mr-4 shadow-lg shadow-teal-500/20 group-hover:shadow-teal-500/40 transition-shadow">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Phone</h4>
                  <p className="text-teal-300 font-medium">+919942434626</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-gradient-to-br from-teal-500 to-emerald-500 p-3 rounded-xl mr-4 shadow-lg shadow-teal-500/20 group-hover:shadow-teal-500/40 transition-shadow">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Location</h4>
                  <p className="text-teal-300 font-medium">Srivilliputtur, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-xl shadow-teal-500/5">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-teal-200/80 font-medium mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  required
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 bg-white/5 text-white placeholder-gray-500 ${
                    focused === 'name'
                      ? 'border-teal-400 bg-teal-400/10 shadow-lg shadow-teal-500/15'
                      : 'border-white/10 hover:border-teal-400/30'
                  }`}
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-teal-200/80 font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  required
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 bg-white/5 text-white placeholder-gray-500 ${
                    focused === 'email'
                      ? 'border-teal-400 bg-teal-400/10 shadow-lg shadow-teal-500/15'
                      : 'border-white/10 hover:border-teal-400/30'
                  }`}
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-teal-200/80 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 resize-none bg-white/5 text-white placeholder-gray-500 ${
                    focused === 'message'
                      ? 'border-teal-400 bg-teal-400/10 shadow-lg shadow-teal-500/15'
                      : 'border-white/10 hover:border-teal-400/30'
                  }`}
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-4 rounded-xl font-medium hover:from-teal-400 hover:to-emerald-400 transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/40 flex items-center justify-center group transform hover:scale-[1.02]"
              >
                <span>Send Message</span>
                <Send
                  size={20}
                  className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
