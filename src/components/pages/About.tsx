
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
          <li>AWS Certified Solutions Architect – Associate</li>
          <li>CyberGirls Fellowship – Cybersecurity Track</li>
          <li>Google IT Support Professional Certificate</li>
          <li>MIT OpenCourseWare – Intro to Computer Science and Programming</li>
        </ul>
        <h3 className="text-xl font-semibold mt-6">What I'm Learning Now</h3>
        <p>
          Exploring advanced anomaly detection techniques using unsupervised learning models and diving deeper into zero-trust architecture principles.
        </p>
      </div>
    </section>
  );
};

export default About;
