import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const VITE_EMAIL_ID = import.meta.env.VITE_EMAIL_ID;
const VITE_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = "pNKa7x6AE6evisT6m";

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
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center text-gray-800">
          Contact Me
        </h2>
        
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
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span className="text-gray-700">katie.duryea@example.com</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Durham, NC</span>
                </div>
              </div>
              
              <div className="pt-4">
                <p className="text-gray-600 mb-4">Connect with me:</p>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/katiegd" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-300"
                  >
                    <img
                      src="images/github-svgrepo-com.svg"
                      alt="Github"
                      className="h-6 w-6"
                    />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/katiegduryea/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-300"
                  >
                    <img
                      src="images/linkedin-svgrepo-com.svg"
                      alt="LinkedIn"
                      className="h-6 w-6"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submit}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
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
