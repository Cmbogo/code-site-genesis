
import { Github } from 'lucide-react';

const Home = () => {
  return (
    <section className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Cloud Security Engineer & AI Enthusiast
      </h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
        Building secure, intelligent systems at the intersection of cybersecurity, cloud computing, and machine learning.
      </p>
      <img
        src="/lovable-uploads/b7ded153-0333-4cbd-a044-fdb718be8f48.png"
        alt="Cicily Mbogo"
        className="rounded-full w-32 h-32 object-cover mx-auto mb-6 border-2 border-blue-400"
      />
      <div className="flex justify-center items-center gap-4 mb-6">
        <a
          href="https://github.com/Cmbogo/Cmbogo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition"
        >
          <Github size={32} />
        </a>
      </div>
      <a
        href="/Cicily Mbogo (1).docx"
        download="Cicily_Mbogo_Resume.docx"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Home;
