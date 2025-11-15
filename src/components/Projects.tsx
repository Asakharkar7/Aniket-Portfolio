import { ExternalLink, Code2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Supply Chain ML Inference Application',
      period: 'Sep 2025 - Nov 2025',
      description:
        'Built a real-time ML inference system using Snowflake, Databricks, Docker/ECR, AWS Lambda, and API Gateway to predict shipment ETA delays',
      technologies: ['Snowflake', 'Databricks', 'Docker', 'AWS Lambda', 'API Gateway', 'Machine Learning'],
      github: 'https://github.com/Asakharkar7/supply-chain-disruption-radar',
    },
    {
      title: 'AWS Serverless ETL Pipeline',
      period: 'Jun 2025 - Jul 2025',
      description:
        'Developed a fully serverless ETL pipeline using S3 event triggers, AWS Lambda (Python), and DynamoDB for automated CSV ingestion and transformation',
      technologies: ['AWS S3', 'AWS Lambda', 'Python', 'DynamoDB', 'ETL'],
      github: 'https://github.com/Asakharkar7/aws-serverless-etl-s3-lambda-dynamodb',
    },
    {
      title: 'Serverless ML Prediction API',
      period: 'Mar 2025 - Apr 2025',
      description:
        'Deployed a real-time inference API using AWS Lambda, API Gateway, and a scikit-learn Lambda Layer for low-latency prediction serving',
      technologies: ['AWS Lambda', 'API Gateway', 'Scikit-learn', 'Python', 'REST API'],
      github: 'https://github.com/Asakharkar7/aws-serverless-ml-api-lambda-api',
    },
    {
      title: 'Databricks Retail ELT Pipeline',
      period: 'Nov 2024 - Jan 2025',
      description:
        'Developed an end-to-end PySpark ELT pipeline on Databricks using Delta Lake (Bronze–Silver–Gold), generating retail KPIs and dashboards for sales and customer insights',
      technologies: ['Databricks', 'PySpark', 'Delta Lake', 'ELT', 'Data Analytics'],
      github: 'https://github.com/Asakharkar7/databricks-retail-elt-pipeline',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Academic Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-50 rounded-xl p-8 hover:shadow-xl hover:border-blue-300 hover:scale-105 transition-all duration-300 border border-slate-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-slate-50"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 group-hover:scale-110 transition-all">
                  <Code2 className="text-green-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500">{project.period}</p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white text-slate-700 text-sm rounded-full border border-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform"
                >
                  View on GitHub
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
