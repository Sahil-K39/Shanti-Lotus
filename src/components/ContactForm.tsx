"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ContactFormProps {
  defaultInterest?: string;
}

export default function ContactForm({ defaultInterest = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: defaultInterest,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
      >
        <div className="w-12 h-12 text-antiqueGold mx-auto mb-6">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-3xl text-textDark mb-4">Message Received</h3>
        <p className="font-body text-textDark/60 font-light">
          Thank you for reaching out. We will connect with you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10 w-full max-w-lg mx-auto">
      
      {/* Name Input */}
      <div className="relative group">
        <input
          type="text"
          id="name"
          required
          className="peer w-full bg-transparent border-b border-textDark/20 py-3 text-textDark font-body text-lg focus:outline-none focus:border-antiqueGold transition-colors placeholder-transparent"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <label
          htmlFor="name"
          className="absolute left-0 top-3 text-textDark/50 font-body text-base transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-antiqueGold peer-focus:uppercase peer-focus:tracking-widest"
          style={formData.name ? { top: '-1rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' } : {}}
        >
          Your Name
        </label>
      </div>

      {/* Email Input */}
      <div className="relative group">
        <input
          type="email"
          id="email"
          required
          className="peer w-full bg-transparent border-b border-textDark/20 py-3 text-textDark font-body text-lg focus:outline-none focus:border-antiqueGold transition-colors placeholder-transparent"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <label
          htmlFor="email"
          className="absolute left-0 top-3 text-textDark/50 font-body text-base transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-antiqueGold peer-focus:uppercase peer-focus:tracking-widest"
          style={formData.email ? { top: '-1rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' } : {}}
        >
          Your Email
        </label>
      </div>

      {/* Interest Select (Simplified for elegance) */}
      <div className="relative group">
        <select
          id="interest"
          className="w-full bg-transparent border-b border-textDark/20 py-3 text-textDark font-body text-lg focus:outline-none focus:border-antiqueGold transition-colors appearance-none"
          value={formData.interest}
          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
        >
          <option value="" disabled>Select an area of interest</option>
          <option value="1:1 Mentorship">1:1 Mentorship</option>
          <option value="Retreats & Courses">Retreats & Courses</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>
        <div className="absolute right-0 top-4 pointer-events-none text-textDark/40">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Message Textarea */}
      <div className="relative group pt-4">
        <textarea
          id="message"
          required
          rows={4}
          className="peer w-full bg-transparent border-b border-textDark/20 py-3 text-textDark font-body text-lg focus:outline-none focus:border-antiqueGold transition-colors placeholder-transparent resize-none"
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        <label
          htmlFor="message"
          className="absolute left-0 top-7 text-textDark/50 font-body text-base transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-7 peer-focus:-top-0 peer-focus:text-xs peer-focus:text-antiqueGold peer-focus:uppercase peer-focus:tracking-widest"
          style={formData.message ? { top: '0', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' } : {}}
        >
          Your Message
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-5 border border-antiqueGold/40 text-antiqueGold hover:bg-antiqueGold hover:text-ivory transition-colors duration-700 disabled:opacity-50 flex items-center justify-center gap-4"
      >
        <span className="text-xs font-body uppercase tracking-[0.2em]">
          {isSubmitting ? "Sending..." : "Send Message"}
        </span>
      </button>

    </form>
  );
}
