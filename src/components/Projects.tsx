export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          Projects
        </h2>

        <div className="space-y-8">

          {/* Project 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-2">
              <img src="/icons/snowflake.png" alt="Snowflake" className="w-6 h-6" />
              <img src="/icons/databricks.png" alt="Databricks" className="w-6 h-6" />
              <img src="/icons/docker.svg" alt="Docker" className="w-6 h-6" />
              <img src="/icons/lambda.svg" alt="AWS Lambda" className="w-6 h-6" />
              <img src="/icons/API.svg" alt="API Gateway" className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800">
              Supply Chain ML Inference Application
            </h3>
            <p className="text-slate-600 mt-2">
              Built a model-time ML inference system using AWS Lambda and API Gateway to predict demand for a supply chain dataset.
            </p>
            <a
              href="https://github.com/Asakharkar7/supply-chain-disruption-radar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              View on GitHub
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-2">
              <img src="/icons/lambda.svg" alt="AWS Lambda" className="w-6 h-6" />
              <img src="/icons/dynamo.svg" alt="DynamoDB" className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800">
              AWS Serverless ETL Pipeline
            </h3>
            <p className="text-slate-600 mt-2">
              Developed an end-to-end serverless ETL pipeline using AWS Lambda, Python, and DynamoDB.
            </p>
            <a
              href="https://github.com/Asakharkar7/aws-serverless-etl-s3-lambda-dynamodb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              View on GitHub
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-2">
              <img src="/icons/lambda.svg" alt="AWS Lambda" className="w-6 h-6" />
              <img src="/icons/API.svg" alt="API Gateway" className="w-6 h-6" />
              <img src="/icons/scikit.png" alt="Scikit-learn" className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800">
              Serverless ML Prediction API
            </h3>
            <p className="text-slate-600 mt-2">
              Developed a model-time inference API using AWS Lambda and API Gateway to predict customer churn for low-latency prediction serving.
            </p>
            <a
              href="https://github.com/Asakharkar7/aws-serverless-ml-api-lambda-api"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              View on GitHub
            </a>
          </div>

          {/* Project 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-2">
              <img src="/icons/databricks.png" alt="Databricks" className="w-6 h-6" />
              <img src="/icons/deltalake.png" alt="Delta Lake" className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800">
              Databricks Retail ELT Pipeline
            </h3>
            <p className="text-slate-600 mt-2">
              Designed and implemented an end-to-end Spark ETL pipeline on Databricks to process and analyze retail data for business insights.
            </p>
            <a
              href="https://github.com/Asakharkar7/databricks-retail-elt-pipeline"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              View on GitHub
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
