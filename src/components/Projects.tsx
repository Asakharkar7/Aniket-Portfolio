import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const projectList = [
    {
      title: "Supply Chain ML Inference Application",
      description:
        "Built a model-time ML inference system using AWS Lambda and API Gateway to predict demand for a supply chain dataset.",
      link: "https://github.com/Asakharkar7/supply-chain-disruption-radar",
      icons: [
        { src: "icons/snowflake.png", alt: "Snowflake", size: "w-12 h-12" },
        { src: "icons/databricks.png", alt: "Databricks", size: "w-12 h-12" },
        { src: "icons/docker.svg", alt: "Docker", size: "w-10 h-10" },
        { src: "icons/lambda.svg", alt: "AWS Lambda", size: "w-10 h-10" },
        { src: "icons/API.svg", alt: "API Gateway", size: "w-10 h-10" },
      ],
    },
    {
      title: "AWS Serverless ETL Pipeline",
      description:
        "Developed an end-to-end serverless ETL pipeline using AWS Lambda, Python, and DynamoDB.",
      link: "https://github.com/Asakharkar7/aws-serverless-etl-s3-lambda-dynamodb",
      icons: [
        { src: "icons/lambda.svg", alt: "AWS Lambda", size: "w-10 h-10" },
        { src: "icons/dynamo.svg", alt: "DynamoDB", size: "w-10 h-10" },
      ],
    },
    {
      title: "Serverless ML Prediction API",
      description:
        "Developed a model-time inference API using AWS Lambda and API Gateway to predict customer churn for low-latency prediction serving.",
      link: "https://github.com/Asakharkar7/aws-serverless-ml-api-lambda-api",
      icons: [
        { src: "icons/lambda.svg", alt: "AWS Lambda", size: "w-10 h-10" },
        { src: "icons/API.svg", alt: "API Gateway", size: "w-10 h-10" },
        { src: "icons/scikit.png", alt: "Scikit-learn", size: "w-10 h-10" },
      ],
    },
    {
      title: "Databricks Retail ELT Pipeline",
      description:
        "Designed and implemented an end-to-end Spark ETL pipeline on Databricks to process and analyze retail data for business insights.",
      link: "https://github.com/Asakharkar7/databricks-retail-elt-pipeline",
      icons: [
        { src: "icons/databricks.png", alt: "Databricks", size: "w-12 h-12" },
        { src: "icons/deltalake.png", alt: "Delta Lake", size: "w-10 h-10" },
      ],
    },
    {
      title: "Predictive Maintenance Analysis",
      description:
        "Built a machine failure prediction model using Scikit-learn and SMOTE, improving recall to 0.89 across 10K+ records.",
      link: "https://github.com/Asakharkar7/Predictive-Maintenance-Analysis",
      icons: [
        { src: "icons/python.png", alt: "Python", size: "w-10 h-10" },
        { src: "icons/scikit.png", alt: "Scikit-learn", size: "w-10 h-10" },
        { src: "icons/excel.png", alt: "Microsoft Excel", size: "w-10 h-10" },
      ],
    },
    {
      title: "Crime Rate NYPD Predictions",
      description:
        "Cleaned and transformed a 150K-row dataset, applied PCA for efficiency gains, and optimized Random Forest for higher crime rate prediction accuracy.",
      link: "https://github.com/Asakharkar7/NYPD-CRIME-ARREST",
      icons: [
        { src: "icons/python.png", alt: "Python", size: "w-10 h-10" },
        { src: "icons/excel.png", alt: "Microsoft Excel", size: "w-10 h-10" },
        { src: "icons/scikit.png", alt: "Scikit-learn", size: "w-10 h-10" },
      ],
    },
    {
      title: "Healthcare Cost Predictor",
      description:
        "Developed a regression-based model to estimate healthcare costs using patient demographics and medical features, improving prediction accuracy through feature engineering and model evaluation.",
      link: "https://github.com/Asakharkar7/Healthcare-Cost-Predictor",
      streamlit: "https://healthcare-cost-predictor-ezmjefxzhqftu6azvzjt5q.streamlit.app/",
      icons: [
        { src: "icons/streamlit.png", alt: "Streamlit", size: "w-10 h-10" },
        { src: "icons/python.png", alt: "Python", size: "w-10 h-10" },
        { src: "icons/ollama.png", alt: "Ollama", size: "w-10 h-10" },
      ],
    },
    {
      title: "Walmart Sales Dashboard",
      description:
        "Built an interactive dashboard to analyze Walmart sales trends, leveraging Streamlit and Python for data cleaning, visualization, and insights into regional performance and product categories.",
      link: "https://github.com/Asakharkar7/walmart_sales_dashboard",
      streamlit: "https://walmartsalesdashboard-hpswqrhdgrszpjrzym9xz7.streamlit.app/",
      icons: [
        { src: "icons/streamlit.png", alt: "Streamlit", size: "w-10 h-10" },
        { src: "icons/python.png", alt: "Python", size: "w-10 h-10" },
        { src: "icons/ollama.png", alt: "Ollama", size: "w-10 h-10" },
      ],
    },
  ];


    const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          Projects
        </h2>

        {/* Scroll buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-slate-100"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-slate-100"
        >
          <ChevronRight size={28} />
        </button>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 hide-scrollbar"
        >
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] max-w-sm bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex-shrink-0"
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
             <div className="mt-4 space-x-4">

               <a
                 href={project.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-blue-600 hover:underline inline-block"
                 >
                 View on GitHub
               </a>
               {project.streamlit && (
              <a
                href={project.streamlit}
                target="_blank"
                className="text-green-600 hover:underline inline-block"
                >
                View on Streamlit
              </a>
              )}
             </div>
