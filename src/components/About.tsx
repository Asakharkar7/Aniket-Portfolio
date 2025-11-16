import { GraduationCap, Code, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center animate-fade-in">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Master's Degree */}
          <div className="space-y-6">
            <div className="group flex items-start gap-4 p-6 rounded-lg hover:bg-green-50 transition-colors">
              <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 group-hover:scale-110 transition-all">
                <GraduationCap className="text-green-600 group-hover:rotate-12 transition-transform" size={28} />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-green-700 transition-colors">
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-600 pl-4 hover:border-green-700 transition-colors hover:bg-white p-3 -ml-3 rounded">
                    <h4 className="font-semibold text-slate-900">
                      Master of Science in Data Analytics Engineering
                    </h4>
                    <p className="text-slate-700">Northeastern University, Boston, USA</p>
                    <p className="text-slate-500 text-sm">Aug 2022 – May 2024</p>
                    <p className="text-green-600 font-semibold mt-1 group-hover:text-green-700 transition-colors">
                      GPA: 3.9
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bachelor's Degree */}
          <div className="space-y-6">
            <div className="group flex items-start gap-4 p-6 rounded-lg hover:bg-blue-50 transition-colors">
              <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 group-hover:scale-110 transition-all">
                <GraduationCap className="text-blue-600 group-hover:rotate-12 transition-transform" size={28} />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  Previous Education
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4 hover:border-blue-700 transition-colors hover:bg-white p-3 -ml-3 rounded">
                    <h4 className="font-semibold text-slate-900">
                      Bachelor of Engineering in Mechanical Engineering
                    </h4>
                    <p className="text-slate-700">Thakur College of Engineering and Technology, Mumbai, India</p>
                    <p className="text-slate-500 text-sm">Aug 2017 – May 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Philosophy */}
        <div className="mt-12 flex items-start gap-4">
          <div className="p-3 bg-indigo-100 rounded-lg">
            <Code className="text-indigo-600" size={24} />
          </div>
          <p className="text-slate-700 leading-relaxed italic">
            I believe great data work is equal parts engineering, analysis, and design. Every dataset tells a story —
            and I make sure it’s heard clearly, beautifully, and intelligently.
          </p>
        </div>

        {/* Fun Fact */}
        <div className="mt-8 flex items-start gap-4">
          <div className="p-3 bg-yellow-100 rounded-lg">
            <Sparkles className="text-yellow-600" size={24} />
          </div>
          <p className="text-slate-700 leading-relaxed">
            Away from pipelines and dashboards, I focus on creating experiences that connect with people — interfaces that are intuitive, engaging, and a little bit magical.

Beyond tech, I find joy in 🏏 cricket, experimenting with games, and diving into hobbies that challenge both mind and body. These pursuits remind me that creativity isn’t just about design — it’s about play, connection, and energy.
          </p>
        </div>
      </div>
    </section>
  );
}
