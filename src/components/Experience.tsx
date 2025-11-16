import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ExperienceTimeline() {
  const experiences = [
    {
      title: 'Data Analyst',
      company: 'KGS Technology, USA',
      period: 'Feb 2025 - Aug 2025',
      logo: 'logos/kgs.png',
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
      logo: 'logos/retc.png',
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
      logo: 'logos/sf.png',
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
                  <img
                    src={`${import.meta.env.BASE_URL}${exp.logo}`}
                    alt="company-logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{exp.title}</h3>
                  <p className="text-lg text-slate-600">{exp.company}</p>
                  <p className="text-sm text-slate-500">{exp.period}</p>
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
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ChevronRight className="text-blue-500 mt-1" size={20} />
                    <span className="text-slate-700">{achievement}</span>
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
