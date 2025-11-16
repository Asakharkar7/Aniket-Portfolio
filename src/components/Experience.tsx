import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ExperienceCarousel() {
  const experiences = [
    {
      title: 'Data Analyst',
      company: 'KGS Technology, USA',
      period: 'Feb 2025 - Aug 2025',
      logo: '/logos/kgs.png',
      achievements: [
        'Built Power BI dashboards to track service quality, regional performance, AOV, and delivery efficiency across 4 regions and 17 product categories',
        'Analyzed 500K+ operational transactions using SQL, improving data accuracy by 30% and reducing reporting discrepancies',
        'Identified performance gaps through trend analysis and delivered insights that improved decision-making cycles by 12%',
        'Documented KPI definitions, data flows, and logic enabling consistent reporting across operations and finance teams',
        'Partnered with cross-functional teams to highlight root causes in margin and performance variation, helping drive operational improvements',
      ],
    },
    {
      title: 'Data Analyst',
      company: 'Rebecca Everlene Trust Company, USA',
      period: 'Feb 2024 - Jan 2025',
      logo: '/logos/retc.png',
      achievements: [
        'Built operational dashboards in Power BI to monitor program engagement, completion rates, and satisfaction metrics for 1,083 students',
        'Consolidated CRM + attendance data (10K+ rows/month) using SQL, improving data consistency by 35% and reducing manual cleanup',
        'Conducted trend analysis to identify performance drop-offs, boosting overall attendance and user experience by 8%',
        'Automated reporting pipelines; increased refresh frequency from monthly to weekly and reduced manual work by 60%',
        'Created comprehensive documentation for reporting standards, KPI logic, and data quality processes',
      ],
    },
    {
      title: 'Data Analyst Intern',
      company: 'State Farm Insurance, USA',
      period: 'May 2023 - Aug 2023',
      logo: '/logos/sf.png',
      achievements: [
        "Enhanced health policy analysis efficiency by 15% through advanced data extraction and analysis of prior year's health data using DBeaver",
        'Automated SQL query execution and report generation, increasing accuracy by 64% and reducing manual intervention',
        'Integrated DBeaver with QuickSight to streamline SAS-to-Excel processes for faster monthly health reporting',
        'Led a Health Analytics Proof of Concept (POC) that achieved 85% seamless data migration to AWS',
        'Developed statistical algorithms for pricing function analysis, improving model accuracy and overall efficiency by 25%',
      ],
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % experiences.length);
  const prev = () => setIndex((i) => (i - 1 + experiences.length) % experiences.length);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-slate-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: 'spring', stiffness: 120, damping: 15 }}
              className="bg-white p-8 rounded-xl shadow-lg text-left"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 p-2 bg-blue-100 rounded-lg flex items-center justify-center">
                  <img src={experiences[index].logo} alt="company-logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{experiences[index].title}</h3>
                  <p className="text-lg text-slate-600">{experiences[index].company}</p>
                  <p className="text-sm text-slate-500">{experiences[index].period}</p>
                </div>
              </div>

              <ul className="space-y-3 mt-4">
                {experiences[index].achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ChevronRight className="text-blue-600 mt-1" size={20} />
                    <span className="text-slate-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-6">
            <button onClick={prev} className="p-2 bg-slate-200 rounded-full hover:bg-slate-300">
              <ChevronLeft />
            </button>
            <button onClick={next} className="p-2 bg-slate-200 rounded-full hover:bg-slate-300">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
