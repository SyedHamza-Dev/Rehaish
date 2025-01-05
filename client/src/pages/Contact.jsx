import React from 'react';

export default function ContactUs() {
  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Contact Us</h1>
        <p className="text-lg text-slate-600">
          We'd love to hear from you! Reach out with any questions, feedback, or inquiries.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Your Email</label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Your Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
                placeholder="Type your message here"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-indigo-600 text-white p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
          <p className="mb-4">
            <span className="font-semibold">Address:</span> 123 Real Estate Lane, Dream City, DC 10101
          </p>
          <p className="mb-4">
            <span className="font-semibold">Phone:</span> +1 (555) 123-4567
          </p>
          <p className="mb-4">
            <span className="font-semibold">Email:</span> contact@rehaish.com
          </p>
          <div>
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-indigo-300 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 5.25C22 4.01 21 3 19.75 3H4.25C3.01 3 2 4.01 2 5.25v13.5C2 20 3 21 4.25 21h7.82v-7.25H9.75V11h2.32V8.88c0-2.27 1.38-3.53 3.43-3.53.99 0 1.86.07 2.11.11v2.45h-1.45c-1.14 0-1.36.54-1.36 1.33V11h2.7l-.35 2.75h-2.35V21H19.75c1.24 0 2.25-1 2.25-2.25V5.25z"></path>
                </svg>
              </a>
              <a href="#" className="text-indigo-300 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.89 2s-4 .18-6.1 2.27a5.33 5.33 0 00-.87 3A4.1 4.1 0 002 6.15v.05a4.39 4.39 0 002 4.07 4.3 4.3 0 01-2-.55v.05a4.41 4.41 0 003.45 4.28A4.36 4.36 0 013 15v.03a4.48 4.48 0 004 4.4A8.94 8.94 0 011 19.5a12.72 12.72 0 006.29 1.84c7.54 0 11.74-6.15 11.74-11.49v-.54A8.18 8.18 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-indigo-300 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42c-.77.34-1.61.57-2.49.67a4.49 4.49 0 001.98-2.47 8.9 8.9 0 01-2.82 1.07 4.48 4.48 0 00-7.65 3.06 4.29 4.29 0 00.11.99 12.79 12.79 0 01-9.27-4.73c-.37.63-.58 1.36-.58 2.13 0 1.47.75 2.76 1.89 3.52a4.41 4.41 0 01-2.02-.56v.06a4.47 4.47 0 003.57 4.38c-.47.12-.96.19-1.46.19-.36 0-.7-.03-1.04-.09a4.5 4.5 0 004.2 3.13 9.02 9.02 0 01-5.57 1.92A8.9 8.9 0 010 19.54a12.79 12.79 0 006.91 2.02c8.31 0 12.86-6.87 12.86-12.84v-.6c.88-.63 1.64-1.41 2.25-2.3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
