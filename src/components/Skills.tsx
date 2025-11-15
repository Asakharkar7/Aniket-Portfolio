import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { name: 'React', level: 90, icon: '/icons/react.svg' },
    { name: 'TypeScript', level: 85, icon: '/icons/typescript.svg' },
    { name: 'Tailwind CSS', level: 80, icon: '/icons/tailwind.svg' },
    { name: 'Python', level: 90, icon: '/icons/python.svg' },
    { name: 'SQL', level: 88, icon: '/icons/sql.svg' },
    { name: 'AWS', level: 75, icon: '/icons/aws.svg' },
    { name: 'Snowflake', level: 70, icon: '/icons/snowflake.png' },
    { name: 'Databricks', level: 72, icon: '/icons/databricks.png' },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 object-contain"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-800">
                  {skill.name}
                </h3>
                <div className="w-full bg-slate-200 rounded-full h-3 mt-2">
                  <motion.div
                    className="bg-blue-600 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
                <p className="text-sm text-slate-500 mt-1">{skill.level}%</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
