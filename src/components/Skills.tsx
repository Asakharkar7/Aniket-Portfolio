import { Database, Code, BarChart3, Brain, Cloud, Users } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming & Analytics',
      icon: Code,
      color: 'blue',
      skills: [
        'Python (Pandas, NumPy, Scikit-learn)',
        'SQL (MySQL, Oracle, SQL Server)',
        'Data Wrangling',
        'Statistical Modeling',
        'A/B Testing',
        'Feature Engineering',
      ],
    },
    {
      title: 'BI & Visualization',
      icon: BarChart3,
      color: 'green',
      skills: [
        'Power BI',
        'Tableau',
        'QuickSight',
        'Advanced Excel',
        'Data Storytelling',
        'DAX',
      ],
    },
    {
      title: 'ETL & Data Engineering',
      icon: Database,
      color: 'purple',
      skills: [
        'ETL/ELT Pipelines',
        'Airflow',
        'Snowflake',
        'Databricks',
        'API Integration',
        'Data Quality Checks',
      ],
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      color: 'orange',
      skills: [
        'Classification',
        'Regression',
        'Model Evaluation',
        'Predictive Analytics',
        'Precision, Recall, F1',
      ],
    },
    {
      title: 'Cloud & Databases',
      icon: Cloud,
      color: 'cyan',
      skills: [
        'AWS (S3, Lambda, DynamoDB, API Gateway, ECR)',
        'Azure',
        'GCP BigQuery',
      ],
    },
    {
      title: 'Business Skills',
      icon: Users,
      color: 'slate',
      skills: [
        'KPI Development',
        'Requirements Gathering',
        'Root Cause Analysis',
        'Documentation',
        'Cross-Functional Collaboration',
      ],
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; icon: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-900', icon: 'text-blue-600' },
    green: { bg: 'bg-green-50', text: 'text-green-900', icon: 'text-green-600' },
    purple: { bg: 'bg-violet-50', text: 'text-violet-900', icon: 'text-violet-600' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-900', icon: 'text-orange-600' },
    cyan: { bg: 'bg-cyan-50', text: 'text-cyan-900', icon: 'text-cyan-600' },
    slate: { bg: 'bg-slate-50', text: 'text-slate-900', icon: 'text-slate-600' },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colors = colorMap[category.color];

            return (
              <div
                key={index}
                className={`group ${colors.bg} rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:scale-105 hover:border-blue-300 transition-all duration-300 cursor-pointer`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white rounded-lg group-hover:scale-110 group-hover:shadow-md transition-all">
                    <Icon className={`${colors.icon} group-hover:rotate-12 transition-transform`} size={24} />
                  </div>
                  <h3 className={`text-xl font-bold ${colors.text} group-hover:text-blue-600 transition-colors`}>
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li
                      key={i}
                      className={`${colors.text} text-sm leading-relaxed group-hover:translate-x-1 transition-transform`}
                    >
                      ▸ {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
