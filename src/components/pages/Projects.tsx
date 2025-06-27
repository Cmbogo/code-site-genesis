
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ML-Based Intrusion Detection System",
      description:
        "A machine learning model trained on network traffic data to detect and classify potential threats in real time.",
      image: "https://placehold.co/600x400?text=Intrusion+Detection",
      github: "https://github.com/yourusername/intrusion-detection-system",
    },
    {
      title: "AWS WAF & VPC Demo",
      description:
        "Secure AWS infrastructure setup with WAF rules and VPC configurations for enhanced cloud security.",
      image: "https://placehold.co/600x400?text=AWS+WAF+%26+VPC",
      github: "https://github.com/yourusername/aws-security-demo",
    },
    {
      title: "B2B Insurance Platform",
      description:
        "Developing a secure and scalable platform for insurance services tailored to enterprise clients.",
      image: "https://placehold.co/600x400?text=B2B+Insurance+Platform",
      github: "https://github.com/yourusername/b2b-insurance-platform",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition group">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:underline"
              >
                View on GitHub
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
