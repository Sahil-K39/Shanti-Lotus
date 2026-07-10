"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ContactFormProps {
  defaultInterest?: string;
}

const interestOptions = [
  "1:1 Guidance",
  "Rituals & Sessions",
  "Retreats & Courses",
  "Sacred Jewelry",
  "General Inquiry",
];

export default function ContactForm({ defaultInterest = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: defaultInterest,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isInterestOpen, setIsInterestOpen] = useState(false);

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
        className="py-16 text-center"
      >
        <div className="mx-auto mb-6 h-12 w-12 text-antiqueGold">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-4 font-display text-3xl text-ivory md:text-4xl">Message Received</h3>
        <p className="font-body text-parchment/70 font-light">
          Thank you for reaching out. We will connect with you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-[35rem] space-y-7 rounded-[24px] border border-lightGold/20 bg-blancoRitual/78 p-4 shadow-[0_24px_80px_rgba(90,70,54,0.12)] backdrop-blur-xl sm:p-6 md:space-y-8 md:rounded-[30px] md:p-8">
      
      {/* Name Input */}
      <div className="relative group">
        <input
          type="text"
          id="name"
          required
          className="peer w-full rounded-[18px] border border-lightGold/15 bg-blancoRitual/86 px-4 py-4 font-body text-[15px] font-light leading-none text-ivory shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition-all placeholder-transparent focus:border-lightGold focus:outline-none focus:ring-4 focus:ring-lightGold/12 sm:px-5 md:text-base"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <label
          htmlFor="name"
          className="absolute left-4 top-4 font-body text-[15px] font-light text-parchment/55 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[15px] peer-focus:-top-5 peer-focus:left-0 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-lightGold sm:left-5"
          style={formData.name ? { top: '-1.25rem', left: '0', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' } : {}}
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
          className="peer w-full rounded-[18px] border border-lightGold/15 bg-blancoRitual/86 px-4 py-4 font-body text-[15px] font-light leading-none text-ivory shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition-all placeholder-transparent focus:border-lightGold focus:outline-none focus:ring-4 focus:ring-lightGold/12 sm:px-5 md:text-base"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <label
          htmlFor="email"
          className="absolute left-4 top-4 font-body text-[15px] font-light text-parchment/55 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[15px] peer-focus:-top-5 peer-focus:left-0 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-lightGold sm:left-5"
          style={formData.email ? { top: '-1.25rem', left: '0', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' } : {}}
        >
          Your Email
        </label>
      </div>

      {/* Interest Dropdown */}
      <div className="relative">
        <label htmlFor="interest-native" className="mb-3 block text-[10px] font-medium uppercase tracking-[0.24em] text-parchment/68 md:text-[11px]">
          Area of Interest
        </label>
        <input id="interest-native" name="interest" type="hidden" value={formData.interest} />
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isInterestOpen}
          onClick={() => setIsInterestOpen((open) => !open)}
          className={`group flex min-h-14 w-full items-center justify-between gap-4 rounded-[18px] border px-4 py-4 text-left font-body text-[15px] font-light leading-snug shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_18px_45px_rgba(90,70,54,0.08)] backdrop-blur-xl transition-all duration-300 sm:px-5 md:text-base ${
            isInterestOpen
              ? "border-lightGold bg-blancoRitual ring-4 ring-lightGold/15"
              : "border-lightGold/24 bg-blancoRitual/78 hover:border-lightGold/55 hover:bg-blancoRitual"
          }`}
        >
          <span className={`min-w-0 flex-1 ${formData.interest ? "text-ivory" : "text-parchment/55"}`}>
            {formData.interest || "Select an area of interest"}
          </span>
          <span className={`grid h-8 w-8 flex-none place-items-center rounded-full border border-lightGold/25 bg-arenaSagrada text-lightGold transition-transform duration-300 ${isInterestOpen ? "rotate-180" : ""}`}>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </button>

        {isInterestOpen && (
          <button
            type="button"
            aria-label="Close area of interest menu"
            className="fixed inset-0 z-20 cursor-default bg-transparent"
            onClick={() => setIsInterestOpen(false)}
          />
        )}

        {isInterestOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
            role="listbox"
            className="absolute z-30 mt-3 w-full overflow-hidden rounded-[20px] border border-lightGold/24 bg-blancoRitual/95 p-2 shadow-[0_28px_80px_rgba(90,70,54,0.18)] backdrop-blur-2xl"
          >
            {interestOptions.map((option) => {
              const selected = formData.interest === option;
              return (
                <button
                  key={option}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    setFormData({ ...formData, interest: option });
                    setIsInterestOpen(false);
                  }}
                  className={`flex min-h-11 w-full items-center justify-between gap-4 rounded-[14px] px-4 py-3 text-left text-[13px] font-light leading-snug transition-all duration-200 md:text-sm ${
                    selected
                      ? "bg-lightGold text-textDark"
                      : "text-parchment hover:bg-arenaSagrada hover:text-ivory"
                  }`}
                >
                  <span>{option}</span>
                  {selected && (
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </div>

      {/* Message Textarea */}
      <div className="relative group pt-4 md:pt-5">
        <textarea
          id="message"
          required
          rows={4}
          className="peer w-full resize-none rounded-[18px] border border-lightGold/15 bg-blancoRitual/86 px-4 py-4 font-body text-[15px] font-light leading-relaxed text-ivory shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition-all placeholder-transparent focus:border-lightGold focus:outline-none focus:ring-4 focus:ring-lightGold/12 sm:px-5 md:text-base"
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        <label
          htmlFor="message"
          className="absolute left-4 top-8 font-body text-[15px] font-light text-parchment/55 transition-all peer-placeholder-shown:top-8 peer-placeholder-shown:text-[15px] peer-focus:left-0 peer-focus:top-0 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-lightGold sm:left-5"
          style={formData.message ? { top: '0', left: '0', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' } : {}}
        >
          Your Message
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex min-h-14 w-full items-center justify-center gap-4 rounded-[18px] border border-lightGold/45 px-5 py-4 text-lightGold transition-all duration-500 hover:bg-lightGold hover:text-ink disabled:opacity-50"
      >
        <span className="font-body text-[11px] font-medium uppercase tracking-[0.22em]">
          {isSubmitting ? "Sending..." : "Send Message"}
        </span>
      </button>

    </form>
  );
}
