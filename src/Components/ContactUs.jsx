import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; // Make sure the path is correct

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    number: '',
    type: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '', number: '', type: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-800 to-gray-700 text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-amber-200 mb-12 mt-10">CONTACT US</h1>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col space-y-6 justify-center">
            <h2 className="text-2xl font-semibold text-amber-300 italic">GET IN TOUCH</h2>
            <p className="text-amber-600">We’d love to hear from you. Drop us a line and we’ll get back to you shortly.</p>
            <p className="text-sm text-amber-600">1 asparagus street, halfway house</p>
            <p className="text-sm text-amber-600">Phone: +27 83 276 7446</p>
            <p className="text-sm text-amber-600">Email: info@glmedia.co.za</p>
            <iframe
              src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3999.7004613787294!2d28.11587512119798!3d-25.99947361302395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956e03321dfeed%3A0xfbcf71c416a7003f!2s1%20Asparagus%20Rd%2C%20Halfway%20Gardens%2C%20Midrand%2C%201686!5e0!3m2!1sen!2sza!4v1750929473853!5m2!1sen!2sza"
              width="100%"
              height="200"
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-xl border-2 border-gray-600"
              title="Forge Academy Location"
            ></iframe>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-6 bg-gray-900 rounded-xl shadow-xl transform transition-transform duration-300 hover:rotate-x-0 hover:scale-105"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-md bg-gray-800 border border-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-md bg-gray-800 border border-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            />
            <input
              type="tel"
              name="number"
              placeholder="Phone Number"
              value={formData.number}
              onChange={handleChange}
              className="p-3 rounded-md bg-gray-800 border border-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            />
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="p-3 rounded-md bg-gray-800 border border-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            >
              <option value="" disabled>Select Type</option>
              <option value="Enquiry">Enquiry</option>
              <option value="Consultation">Consultation</option>
            </select>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="p-3 rounded-md bg-gray-800 border border-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 rounded-md bg-gray-800 border border-purple-700 text-white min-h-[100px] focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-amber-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-amber-400 transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
