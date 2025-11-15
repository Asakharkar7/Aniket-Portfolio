import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ExperienceHologram() {
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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-blue-400 mb-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative bg-slate-800 p-8 rounded-xl border border-blue-500 shadow-lg overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse" />

              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 p-2 bg-blue-900 rounded-lg flex items-center justify-center">
                  <img src={exp.logo} alt="company-logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-300">{exp.title}</h3>
                  <p className="text-lg text-slate-200">{exp.company}</p>
                  <p className="text-sm text-slate-400">{exp.period}</p>
                </div>
              </div>

              <motion.ul
                className="space-y-3 mt-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
              >
                {exp.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ChevronRight className="text-blue-400 mt-1" size={20} />
                    <span className="text-slate-200">{achievement}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
