import { GraduationCap } from 'lucide-react';

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
          {/* Education */}
          <div className="space-y-6">
            <div className="group flex items-start gap-4 p-6 rounded-lg hover:bg-green-50 transition-colors shadow-md">
              <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 group-hover:scale-110 transition-all">
                <GraduationCap
                  className="text-green-600 group-hover:rotate-12 transition-transform"
                  size={28}
                />
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
                    <p className="text-slate-500 text-sm">January 2022 - December 2023</p>
                    <p className="text-green-600 font-semibold mt-1 group-hover:text-green-700 transition-colors">
                      GPA: 3.9
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
