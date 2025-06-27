
const About = () => {
  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <div className="space-y-6 text-gray-300">
        <p>
          I am a passionate cloud security engineer and technical writer with experience in building secure AI-powered systems. My journey began with a deep interest in how technology can be used safely and ethically to solve real-world problems.
        </p>
        <p>
          Currently working as a B2B insurance platform developer while expanding my expertise in AWS cloud security and machine learning-based threat detection.
        </p>
        <h3 className="text-xl font-semibold mt-6">Certifications & Training</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>AWS Certified Cloud Practitioner – Associate</li>
          <li>CyberGirls Fellowship (Nov 2023 – Oct 2024)</li>
        </ul>
        <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4 mt-6">
          <p className="text-blue-300 font-medium">
            Currently pursuing Kubernetes Cloud Native Associate certification.
          </p>
        </div>
        <h3 className="text-xl font-semibold mt-6">What I'm Learning Now</h3>
        <p>
          Exploring advanced anomaly detection techniques using unsupervised learning models and diving deeper into zero-trust architecture principles.
        </p>
      </div>
    </section>
  );
};

export default About;
