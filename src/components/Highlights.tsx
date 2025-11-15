import { CheckCircle2, Award, Users, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion'; // ✅ Add this import

export default function Highlights() {
  const highlights = [
    {
      icon: CheckCircle2,
      title: 'Data-Driven Results',
      description: 'Delivered insights that improved decision-making cycles by 12% and operational efficiency by up to 60%',
    },
    {
      icon: Award,
      title: 'Master\'s Degree',
      description: 'M.S. in Data Analytics Engineering from Northeastern University with 3.9 GPA',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Pioneered POCs achieving 85% seamless data migration to AWS with predictive analytics at scale',
    },
    {
      icon: Users,
      title: 'Cross-Functional Leader',
      description: 'Collaborated with multiple teams to identify root causes and drive operational improvements',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Why Work With Me?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="group p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-slate-50"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Icon className="text-blue-600 group-hover:scale-110 transition-transform" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
