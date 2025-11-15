import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ExperienceHologram() {
  const experiences = [/* same data with logos + achievements */];

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
