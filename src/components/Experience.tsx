import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ExperienceTimeline() {
  const experiences = [
    // ... your experiences array
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 relative"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Professional Experience
        </h2>
        <div className="relative border-l-4 border-blue-500 ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative bg-white p-6 rounded-xl shadow-lg w-[85%]"
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              style={{
                transformOrigin: index % 2 === 0 ? 'left center' : 'right center',
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 p-2 bg-blue-100 rounded-lg flex items-center justify-center">
                  <img
                    src={exp.logo}
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
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.15 } },
                }}
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
