import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ExperienceTimeline() {
  const experiences = [
    { title: 'Data Analyst', company: 'KGS Technology, USA', period: 'Feb 2025 - Aug 2025' },
    { title: 'Data Analyst', company: 'Rebecca Everlene Trust Company, USA', period: 'Feb 2024 - Jan 2025' },
    { title: 'Data Analyst Intern', company: 'State Farm Insurance, USA', period: 'May 2023 - Aug 2023' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Professional Experience</h2>
        <div className="relative border-l-4 border-blue-500 ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative bg-white p-6 rounded-xl shadow-lg w-[80%]"
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              style={{ transformOrigin: index % 2 === 0 ? 'left center' : 'right center' }}
            >
              <h3 className="text-2xl font-bold text-slate-900">{exp.title}</h3>
              <p className="text-lg text-slate-600">{exp.company}</p>
              <p className="text-sm text-slate-500">{exp.period}</p>
              <ChevronRight className="absolute -left-8 top-6 text-blue-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
