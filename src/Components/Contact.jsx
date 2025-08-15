import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Icon } from '@iconify/react';

const VITE_EMAIL_ID = import.meta.env.VITE_EMAIL_ID;
const VITE_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submit, setSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function clearForm() {
    setFormData({ name: "", email: "", message: "" });
  }

  function sendEmail(e) {
    e.preventDefault();
    setSubmitting(true);

    emailjs
      .sendForm(`${VITE_EMAIL_ID}`, `${VITE_TEMPLATE_ID}`, form.current, {
        publicKey: `${publicKey}`,
      })
      .then(
        () => {
          setMessage("Email sent successfully! I'll get back to you soon.");
          setSubmitting(false);
          clearForm();
        },
        (error) => {
          setMessage(`Error sending email: ${error.text}`);
          setSubmitting(false);
        }
      );
  }

  return (
    <div className="bg-gray-50 p-8 w-full flex flex-col items-center justify-start min-h-[calc(100vh-80px)]">
      <div className="max-w-4xl mx-auto w-full">
        {/* Premium Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-normal tracking-tight mb-6" style={{ fontFamily: 'Gloock, serif' }}>
            <span 
              className="bg-clip-text text-transparent"
              style={{ 
                backgroundImage: 'linear-gradient(to top right, #271d97ff, #bba3e4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Get in touch:
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Want to collaborate on a project? Have a question? Let me know!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                I'm always interested in new opportunities and collaborations. 
                Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="#321a5aff" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span className="text-gray-700">vinh.huyn4@gmail.com</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="#321a5aff" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Montreal, Quebec</span>
                </div>
              </div>
              
              <div className="pt-4">
                <p className="text-gray-600 mb-6 font-medium">Connect with me:</p>
                <div className="flex gap-6">
                  <a 
                    href="https://github.com/vinh2155" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden text-white p-2 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                    style={{ backgroundColor: '#321a5aff' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <Icon 
                      icon="mdi:github" 
                      className="text-4xl relative z-10" 
                    />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/vinh-huynh-764230293/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden text-white p-2 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                    style={{ backgroundColor: '#321a5aff' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <Icon 
                      icon="mdi:linkedin" 
                      className="text-4xl relative z-10" 
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Send a Message</h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors"
                  style={{ 
                    '&:focus': { 
                      outline: 'none',
                      borderColor: '#321a5aff',
                      boxShadow: '0 0 0 2px rgba(50, 26, 90, 0.2)'
                    }
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#321a5aff';
                    e.target.style.boxShadow = '0 0 0 2px rgba(50, 26, 90, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#321a5aff';
                    e.target.style.boxShadow = '0 0 0 2px rgba(50, 26, 90, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors resize-none"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#321a5aff';
                    e.target.style.boxShadow = '0 0 0 2px rgba(50, 26, 90, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submit}
                className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                style={{ 
                  backgroundColor: submit ? 'rgba(50, 26, 90, 0.6)' : '#321a5aff',
                  '&:hover': { backgroundColor: 'rgba(50, 26, 90, 0.8)' }
                }}
                onMouseEnter={(e) => {
                  if (!submit) e.target.style.backgroundColor = 'rgba(50, 26, 90, 0.8)';
                }}
                onMouseLeave={(e) => {
                  if (!submit) e.target.style.backgroundColor = '#321a5aff';
                }}
              >
                {submit ? "Sending..." : "Send Message"}
              </button>

              {message && (
                <div className={`p-4 rounded-lg ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
