import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contactme = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        'service_5cblnbb', 
        'template_ofu6aso', 
        formData,           
        '9KtsbTFFi99BVHBop'      
      );
      
      if (response.status === 200) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        setStatus('Error sending message. Please try again.');
      }
    } catch (error) {
      setStatus('Error sending message. Please try again.');
    }
  };

  return (
    <div className="bg-[#242038] text-white relative h-[60vh] w-[50vw] top-[25vh] flex flex-col justify-center items-center rounded-[12px] py-16">
      <h1 className="text-3xl font-semibold mb-6">Contact Me</h1>
      <form onSubmit={handleSubmit} className="relative w-[50vw]  bg-[#242038] p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 text-black rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 text-black rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 text-black rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#9067C6] text-white py-3 rounded-md hover:bg-[#CAC4CE] focus:outline-none"
        >
          Send Message
        </button>
        
        {status && (
          <p className="mt-4 text-center text-sm text-green-400">{status}</p>
        )}
      </form>
    </div>
  );
};

export default Contactme;
