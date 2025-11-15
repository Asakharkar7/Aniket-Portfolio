export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" data-aos="fade-down">
          Professional Experience
        </h2>

        <div className="space-y-8">
          <div className="bg-slate-50 p-6 rounded-lg shadow-md" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-slate-800">Data Analyst Intern – XYZ Company</h3>
            <p className="text-slate-600 mt-2">
              • Built dashboards in Power BI and Tableau  
              • Automated ETL pipelines with Python and SQL  
              • Collaborated with business teams to deliver insights
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg shadow-md" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-slate-800">Data Engineer – ABC Corp</h3>
            <p className="text-slate-600 mt-2">
              • Designed scalable data pipelines using AWS Lambda and DynamoDB  
              • Implemented ML models for customer churn prediction  
              • Improved query performance by 40% with optimized SQL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
