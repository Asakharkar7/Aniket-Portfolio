import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Award,
  MapPin,
  FileText,
  Eye,
} from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aniketsakharkar4@gmail.com",
      href: "mailto:aniketsakharkar4@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 857-230-5126",
      href: "tel:+18572305126",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Boston, MA, USA",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aniketsakharkar/",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Asakharkar7",
      color: "bg-slate-800 hover:bg-slate-900",
    },
    {
      icon: Award,
      label: "Kaggle",
      href: "https://www.kaggle.com/aniketsakharkar",
      color: "bg-teal-600 hover:bg-teal-700",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          I'm currently open to new opportunities in data analytics, data
          engineering, and data science roles. Let's connect and discuss how I
          can add value to your team.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Contact Information
            </h3>
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-slate-900 font-medium hover:text-blue-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-900 font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Resume Cards */}
            <div className="mt-8">
              <p className="text-slate-700 leading-relaxed mb-4">
                View and download my resume to explore my experience and skills
                in detail.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* View Resume */}
                <a
                  href={`${import.meta.env.BASE_URL}Aniket_Sakharkar_resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 rounded-xl border border-blue-600 bg-blue-50 hover:bg-blue-100 transition-all shadow-md hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <Eye
                      size={28}
                      className="text-blue-600 group-hover:scale-110 transition-transform"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-blue-700">
                        View Resume
                      </h4>
                      <p className="text-sm text-blue-600">
                        Open in browser to preview
                      </p>
                    </div>
                  </div>
                </a>

                {/* Download Resume */}
                <a
                  href={`${import.meta.env.BASE_URL}Aniket_Sakharkar_resume.pdf`}
                  download="Aniket_Sakharkar_resume.pdf"
                  className="group block p-6 rounded-xl border border-slate-800 bg-slate-100 hover:bg-slate-200 transition-all shadow-md hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <FileText
                      size={28}
                      className="text-slate-800 group-hover:scale-110 transition-transform"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">
                        Download Resume
                      </h4>
                      <p className="text-sm text-slate-700">Save as PDF file</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
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
