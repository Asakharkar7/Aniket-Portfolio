import { GraduationCap, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="group flex items-start gap-4 p-6 rounded-lg hover:bg-blue-50 transition-colors">
              <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 group-hover:scale-110 transition-all">
                <TrendingUp className="text-blue-600 group-hover:rotate-12 transition-transform" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  Professional Summary
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Data professional with experience across analytics, data engineering, and applied machine learning.
                  Skilled in transforming raw data into actionable insights, building automated reporting pipelines,
                  and developing predictive models using Python, SQL, and cloud technologies.
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  Strong background in dashboard development, ETL workflows, and statistical analysis to support
                  strategic, operational, and financial decision-making. Adept at collaborating with cross-functional
                  teams, improving data quality, and delivering scalable end-to-end data solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="group flex items-start gap-4 p-6 rounded-lg hover:bg-green-50 transition-colors">
              <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 group-hover:scale-110 transition-all">
                <GraduationCap className="text-green-600 group-hover:rotate-12 transition-transform" size={24} />
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
                    <p className="text-slate-600">Northeastern University, Boston, USA</p>
                    <p className="text-slate-500 text-sm">January 2022 - December 2023</p>
                    <p className="text-green-600 font-semibold mt-1 group-hover:text-green-700 transition-colors">GPA: 3.9</p>
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
