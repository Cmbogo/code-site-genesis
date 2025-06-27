
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
        src="https://placehold.co/400x400?text=Your+Photo"
        alt="Profile"
        className="rounded-full w-32 h-32 object-cover mx-auto mb-6 border-2 border-blue-400"
      />
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
