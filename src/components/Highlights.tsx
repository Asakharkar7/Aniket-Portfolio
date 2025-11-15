import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'Data-Driven Results',
    description:
      'Delivered insights that improved decision-making cycles by 12% and operational efficiency by up to 60%.',
  },
  {
    title: 'Master’s Degree',
    description:
      'M.S. in Data Analytics Engineering from Northeastern University with a 3.9 GPA.',
  },
  {
    title: 'Innovation Focus',
    description:
      'Planned POCs achieving 81% seamless data migration at two organizations with diverse systems.',
  },
  {
    title: 'Cross-Functional Leader',
    description:
      'Collaborated with multiple teams to identify root causes and drive operational improvements.',
  },
];

export default function WhyWorkWithMe() {
  return (
    <section id="why-work" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Why Work With Me?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
