import { motion } from 'framer-motion';

export default function Projects() {
  const projectList = [
    {
      title: 'Supply Chain ML Inference Application',
      description:
        'Built a model-time ML inference system using AWS Lambda and API Gateway to predict demand for a supply chain dataset.',
      link: 'https://github.com/Asakharkar7/supply-chain-disruption-radar',
      icons: [
        { src: 'icons/snowflake.png', alt: 'Snowflake', size: 'w-12 h-12' },
        { src: 'icons/databricks.png', alt: 'Databricks', size: 'w-12 h-12' },
        { src: 'icons/docker.svg', alt: 'Docker', size: 'w-10 h-10' },
        { src: 'icons/lambda.svg', alt: 'AWS Lambda', size: 'w-10 h-10' },
        { src: 'icons/API.svg', alt: 'API Gateway', size: 'w-10 h-10' },
      ],
    },
    {
      title: 'AWS Serverless ETL Pipeline',
      description:
        'Developed an end-to-end serverless ETL pipeline using AWS Lambda, Python, and DynamoDB.',
      link: 'https://github.com/Asakharkar7/aws-serverless-etl-s3-lambda-dynamodb',
      icons: [
        { src: 'icons/lambda.svg', alt: 'AWS Lambda', size: 'w-10 h-10' },
        { src: 'icons/dynamo.svg', alt: 'DynamoDB', size: 'w-10 h-10' },
      ],
    },
    {
      title: 'Serverless ML Prediction API',
      description:
        'Developed a model-time inference API using AWS Lambda and API Gateway to predict customer churn for low-latency prediction serving.',
      link: 'https://github.com/Asakharkar7/aws-serverless-ml-api-lambda-api',
      icons: [
        { src: 'icons/lambda.svg', alt: 'AWS Lambda', size: 'w-10 h-10' },
        { src: 'icons/API.svg', alt: 'API Gateway', size: 'w-10 h-10' },
        { src: 'icons/scikit.png', alt: 'Scikit-learn', size: 'w-10 h-10' },
      ],
    },
    {
      title: 'Databricks Retail ELT Pipeline',
      description:
        'Designed and implemented an end-to-end Spark ETL pipeline on Databricks to process and analyze retail data for business insights.',
      link: 'https://github.com/Asakharkar7/databricks-retail-elt-pipeline',
      icons: [
        { src: 'icons/databricks.png', alt: 'Databricks', size: 'w-12 h-12' },
        { src: 'icons/deltalake.png', alt: 'Delta Lake', size: 'w-10 h-10' },
      ],
    },
    {
      title: 'Predictive Maintenance Analysis',
      description:
        'Built machine failures predictive model using Scikit-learn; applied SMOTE to balance classes and improve recall to 0.89. Analyzed 10K+ records with 14 features, evaluating precision, recall, and F1-score to select the most effective failure prediction model.',
      link: 'https://github.com/Asakharkar7/Predictive-Maintenance-Analysis',
      icons: [
        { src: 'icons/python.png', alt: 'Python', size: 'w-10 h-10' },
        { src: 'icons/scikit.png', alt: 'Scikit-learn', size: 'w-10 h-10' },
        { src: 'icons/git.svg', alt: 'Git', size: 'w-10 h-10' },
      ],
    },
    {
      title: 'Crime Rate NYPD Predictions',
      description:
        'Cleaned and transformed a 150K-row dataset, applying PCA to reduce dimensionality and improve model efficiency by 10%. Compared 5 classifiers, optimizing Random Forest through hyperparameter tuning to enhance crime rate prediction accuracy.',
      link: 'https://github.com/Asakharkar7/NYPD-CRIME-ARREST',
      icons: [
        { src: 'icons/python.png', alt: 'Python', size: 'w-10 h-10' },
        { src: 'icons/excel.png', alt: 'Microsoft Excel', size: 'w-10 h-10' },
        { src: 'icons/ml.png', alt: 'Machine Learning', size: 'w-10 h-10' },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-slate-800">
                {project.title}
              </h3>
              <p className="text-slate-600 mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-4 mt-4">
                {project.icons.map((icon, i) => (
                  <img
                    key={i}
                    src={`${import.meta.env.BASE_URL}${icon.src}`}
                    alt={icon.alt}
                    className={`${icon.size} object-contain`}
                  />
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-4 inline-block"
              >
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
