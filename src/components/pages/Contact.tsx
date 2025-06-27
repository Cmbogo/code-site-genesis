
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission success
    setFormStatus('success');
    setTimeout(() => setFormStatus(''), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            required
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Send Message
        </Button>
        {formStatus === 'success' && (
          <p className="text-green-400 text-center">Message sent successfully!</p>
        )}
      </form>

      <div className="mt-8 text-center space-x-6">
        <a 
          href="https://www.linkedin.com/in/cicily-mbogo/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
        >
          <Linkedin className="w-5 h-5 mr-2" />
          LinkedIn
        </a>
        <a 
          href="https://github.com/Cmbogo/Cmbogo" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
        >
          <Github className="w-5 h-5 mr-2" />
          GitHub
        </a>
        <a href="mailto:cicilymbogo820@gmail.com" className="text-blue-400 hover:text-blue-300">
          cicilymbogo820@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
