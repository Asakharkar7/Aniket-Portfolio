import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ExperienceTimeline() {
  const experiences = [
    {
      title: 'Data Analyst',
      company: 'KGS Technology, USA',
      period: 'Feb 2025 - Aug 2025',
      logo: '/logos/kgs.png',
      achievements: [
        'Built Power BI dashboards...',
        'Analyzed 500K+ operational transactions...',
        'Identified performance gaps...',
        'Documented KPI definitions...',
        'Partnered with cross-functional teams...',
      ],
    },
    {
      title: 'Data Analyst',
      company: 'Rebecca Everlene Trust Company, USA',
      period: 'Feb 2024 - Jan 2025',
      logo: '/logos/retc.png',
      achievements: [
        'Built operational dashboards...',
        'Consolidated CRM + attendance data...',
        'Conducted trend analysis...',
        'Automated reporting pipelines...',
        'Created comprehensive documentation...',
      ],
    },
    {
      title: 'Data Analyst Intern',
      company: 'State Farm Insurance, USA',
      period: 'May 2023 - Aug 2023',
      logo: '/logos/sf.png',
      achievements: [
        'Enhanced health policy analysis efficiency...',
        'Automated SQL query execution...',
        'Integrated DBeaver with QuickSight...',
        'Led a Health Analytics Proof of Concept...',
        'Developed statistical algorithms...',
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Professional Experience</h2>
        <div className="relative border-l-4 border-blue-500 ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative bg-white p-6 rounded-xl shadow-lg w-[85%]"
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              style={{ transformOrigin: index % 2 === 0 ? 'left center' : 'right center' }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 p-2 bg-blue-100 rounded-lg flex items-center justify-center">
                  <img src={exp.logo} alt="company-logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{exp.title}</h3>
                  <p className="text-lg text-slate-600">{exp.company}</p>
                  <p className="text-sm text-slate-500">{exp.period}</p>
                </div>
              </div>

