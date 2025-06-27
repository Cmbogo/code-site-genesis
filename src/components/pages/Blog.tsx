
const Blog = () => {
  const blogPosts = [
    {
      title: "Securing Cloud Infrastructure with AWS WAF",
      excerpt:
        "How I configured AWS WAF to protect web applications from common vulnerabilities.",
      date: "April 15, 2025",
    },
    {
      title: "Using Machine Learning to Detect Network Anomalies",
      excerpt:
        "Building an intrusion detection system using supervised learning techniques.",
      date: "March 30, 2025",
    },
    {
      title: "Best Practices for Technical Writing in Cybersecurity",
      excerpt:
        "Tips for documenting complex security systems clearly and effectively.",
      date: "March 10, 2025",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Blog</h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        {blogPosts.map((post, index) => (
          <article key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <time className="text-sm text-gray-400">{post.date}</time>
            <h3 className="text-xl font-semibold mt-2 mb-2">{post.title}</h3>
            <p className="text-gray-300 mb-4">{post.excerpt}</p>
            <a href="#" className="text-blue-400 hover:underline">
              Read more →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
