import { Mail, Phone, Linkedin, Github, Award, MapPin, FileText } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aniketsakharkar4@gmail.com',
      href: 'mailto:aniketsakharkar4@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 857-230-5126',
      href: 'tel:+18572305126',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Boston, MA, USA',
      href: null,
    },
    {
      icon: FileText,
      label: 'Resume',
      value: 'Download Resume',
      href: '/Aniket_Sakharkar_resume.pdf',
      download: true,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aniketsakharkar/',
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Asakharkar7',
      color: 'bg-slate-800 hover:bg-slate-900',
    },
    {
      icon: Award,
      label: 'Kaggle',
      href: 'https://www.kaggle.com/aniketsakharkar',
      color: 'bg-teal-600 hover:bg-teal-700',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          I'm currently open to new opportunities in data analytics, data engineering,
          and data science roles. Let's connect and discuss how I can add value to your team.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Contact Information
            </h3>
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const isResume = item.download;
              return (
                <div key={index} className={`group flex items-center gap-4 p-4 rounded-lg transition-all ${isResume ? 'hover:bg-blue-50 hover:shadow-md' : ''}`}>
                  <div className={`p-3 rounded-lg ${isResume ? 'bg-blue-200 group-hover:bg-blue-300 group-hover:scale-110' : 'bg-blue-100'} transition-all`}>
                    <Icon className={`${isResume ? 'text-blue-700' : 'text-blue-600'}`} size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-500">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        {...(item.download ? { download: 'Aniket_Sakharkar_resume.pdf' } : { target: '_blank', rel: 'noopener noreferrer' })}
                        className={`font-medium transition-all ${isResume ? 'text-blue-600 hover:text-blue-700 group-hover:underline' : 'text-slate-900 hover:text-blue-600'}`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-900 font-medium">{item.value}</p>
                    )}
                  </div>
                  {isResume && (
                    <div className="text-blue-600 group-hover:translate-x-1 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Connect With Me
            </h3>
            <div className="space-y-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 ${link.color} text-white p-4 rounded-lg transition-colors`}
                  >
                    <Icon size={24} />
                    <span className="font-medium">{link.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-slate-700 leading-relaxed">
                Available for full-time positions and contract work.
                Open to remote, hybrid, and on-site opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-slate-200 text-center">
        <p className="text-slate-600">
          © 2025 Aniket Sakharkar. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
