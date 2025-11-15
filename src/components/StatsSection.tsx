import { useCountUp } from '../hooks/useCountUp';
import { TrendingUp, Code2, Zap } from 'lucide-react';

export default function StatsSection() {
  const { count: projectsCount, ref: projectsRef } = useCountUp(4);
  const { count: yearsCount, ref: yearsRef } = useCountUp(3);
  const { count: dataCount, ref: dataRef } = useCountUp(500);

  const stats = [
    {
      ref: projectsRef,
      icon: Code2,
      count: projectsCount,
      suffix: '+',
      label: 'Projects Built',
      color: 'blue',
    },
    {
      ref: yearsRef,
      icon: TrendingUp,
      count: yearsCount,
      suffix: '+',
      label: 'Years Experience',
      color: 'green',
    },
    {
      ref: dataRef,
      icon: Zap,
      count: dataCount,
      suffix: 'K+',
      label: 'Data Points Analyzed',
      color: 'purple',
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; icon: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-900', icon: 'text-blue-600' },
    green: { bg: 'bg-green-50', text: 'text-green-900', icon: 'text-green-600' },
    purple: { bg: 'bg-violet-50', text: 'text-violet-900', icon: 'text-violet-600' },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-100 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colors = colorMap[stat.color];

            return (
              <div
                key={index}
                ref={stat.ref as React.RefObject<HTMLDivElement>}
                className={`${colors.bg} rounded-xl p-8 text-center border border-slate-200 hover:shadow-lg transition-shadow`}
              >
                <div className={`flex justify-center mb-4`}>
                  <div className="p-3 bg-white rounded-lg">
                    <Icon className={colors.icon} size={32} />
                  </div>
                </div>
                <h3 className={`text-4xl font-bold ${colors.text} mb-2`}>
                  {stat.count}{stat.suffix}
                </h3>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
