
import { ArrowRight } from "lucide-react";

const Projects = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
          <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
            alt="Intrusion Detection Model" 
            className="w-full h-48 object-cover" 
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Intrusion Detection Model of IoT Devices in the Financial Sector</h3>
            <p className="text-gray-300 mb-4">
              A machine learning-based intrusion detection model targeting threats from IoT devices in banks. Built to improve resilience in financial institutions by detecting anomalies and potential cyber threats.
            </p>
            <a
              href="https://github.com/yourusername/intrusion-detection-iot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:underline"
            >
              View on GitHub
              <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
