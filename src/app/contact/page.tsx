"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageCircle,
  CheckCircle,
  X,
} from "lucide-react";
import Footer from "@/Components/Footer";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowToast(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Success Toast */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed top-8 right-8 z-50"
        >
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-2xl shadow-2xl border border-green-400/30 backdrop-blur-md">
            <div className="flex items-center space-x-3">
              <CheckCircle size={24} />
              <span className="font-medium">Message sent successfully!</span>
              <button
                onClick={() => setShowToast(false)}
                className="ml-4 hover:bg-white/20 rounded-full p-1 transition-colors duration-200"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2 }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/30 blur-3xl rounded-full animate-pulse"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-400/20 blur-3xl rounded-full animate-pulse"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full animate-pulse"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Got an event idea or just want to talk? Drop us a message below and
            we&apos;ll get back to you soon!
          </p>
          <p className="text-lg text-cyan-300">
            We&apos;d love to hear from you and collaborate on amazing projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  {
                    label: "Full Name",
                    name: "name",
                    icon: <User size={16} />,
                    type: "text",
                    placeholder: "Enter your full name",
                  },
                  {
                    label: "Email Address",
                    name: "email",
                    icon: <Mail size={16} />,
                    type: "email",
                    placeholder: "Enter your email address",
                  },
                  {
                    label: "Subject",
                    name: "subject",
                    icon: <MessageCircle size={16} />,
                    type: "text",
                    placeholder: "What's this about?",
                  },
                ].map(({ label, name, icon, type, placeholder }) => (
                  <div key={name}>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {icon} <span className="ml-2">{label}</span>
                    </label>
                    <input
                      type={type}
                      name={name}
                      value={formData[name as keyof typeof formData]}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all duration-300 input-glow"
                      placeholder={placeholder}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <MessageCircle size={16} className="inline mr-2" /> Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all duration-300 resize-none input-glow"
                    placeholder="Tell us more about your idea or question..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-cyan-600 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <Send size={20} /> <span>Send Message</span>
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            {/* Contact Information */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="space-y-8">
                {/* Get in Touch */}
                <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
                  <h2 className="text-3xl font-bold mb-6 text-white">
                    Get in Touch
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    We&apos;re always excited to connect with fellow tech
                    enthusiasts, students, and innovators. Whether you have an
                    event idea, want to collaborate, or just want to say hello,
                    we&apos;d love to hear from you!
                  </p>

                  <div className="space-y-4">
                    {/* Email */}
                    <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                        <Mail size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Email us</p>
                        <p className="text-cyan-300">acm@ghrcem.edu.in</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                        <Phone size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Call us</p>
                        <p className="text-cyan-300">+91 98765 43210</p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                        <MapPin size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Visit us</p>
                        <p className="text-cyan-300">
                          G H Raisoni College of Engineering and Management,
                          Pune
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    Why Connect With Us?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                      <p className="text-gray-300">
                        Join our tech community and networking events
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <p className="text-gray-300">
                        Collaborate on innovative projects and hackathons
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <p className="text-gray-300">
                        Learn from industry experts and workshops
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                      <p className="text-gray-300">
                        Share your ideas and get mentorship
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
