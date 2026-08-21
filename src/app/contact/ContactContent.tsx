"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import EditorialImage from "@/components/EditorialImage";
import SacredIcon from "@/components/SacredIcon";
import { brand, photos } from "@/lib/brand";

const interestOptions = [
  "1:1 Mentorship",
  "Rituals & Sessions",
  "Retreats & Courses",
  "Sacred Jewelry",
  "General Inquiry",
];

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isInterestOpen, setIsInterestOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#EFE6DB] text-[#4D667D]">
      <section className="px-6 pb-12 md:pb-24 pt-36 sm:px-8 md:pb-32 md:pt-48">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          
          {/* Left Column: Info & Editorial Photo */}
          <AnimatedSection direction="left" className="space-y-10 text-center lg:text-left">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96B] font-medium">
                Contact
              </p>
              <h1 className="mt-4 font-display text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-wide leading-[1.08] text-[#4D667D]">
                Begin Your <span className="italic text-[#C8A96B]">Journey</span>
              </h1>
              <div className="h-px w-16 bg-[#C8A96B]/50 my-6 mx-auto lg:mx-0" />
              <p className="max-w-xl text-base font-light leading-[2] text-[#4D667D]/80 mx-auto lg:mx-0">
                Write to share where you are, what you are seeking, and which space is calling you. Your message will be met with clarity, care, and presence.
              </p>
            </div>

            {/* Contact Pills */}
            <div className="mx-auto grid max-w-md gap-3 text-sm text-[#4D667D]/85 lg:mx-0">
              <a
                href={brand.contact.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-[#4D667D]/10 bg-white/50 px-5 py-3.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#C8A96B]/50 hover:bg-white/80"
              >
                <span className="font-light">Instagram</span>
                <span className="font-normal text-[#C8A96B] group-hover:text-[#4D667D] transition-colors">
                  {brand.contact.instagram}
                </span>
              </a>

              <div className="flex items-center justify-between rounded-2xl border border-[#4D667D]/10 bg-white/50 px-5 py-3.5 shadow-sm backdrop-blur-sm">
                <span className="font-light">Email</span>
                <span className="font-normal text-[#4D667D]">{brand.contact.email}</span>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-[#4D667D]/10 bg-white/50 px-5 py-3.5 shadow-sm backdrop-blur-sm">
                <span className="font-light">Phone</span>
                <span className="font-normal text-[#4D667D]">{brand.contact.phone}</span>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-[#4D667D]/10 bg-white/50 px-5 py-3.5 shadow-sm backdrop-blur-sm">
                <span className="font-light">Website</span>
                <span className="font-normal text-[#4D667D]">{brand.contact.website}</span>
              </div>
            </div>

            {/* Editorial Portrait */}
            <div className="mx-auto max-w-sm rounded-[28px] border border-[#4D667D]/10 bg-white/40 p-4 shadow-sm backdrop-blur-sm lg:mx-0">
              <EditorialImage
                src={photos.gardenPortrait}
                alt="Kunti garden portrait"
                variant="rounded"
                imageClassName="brightness-[0.98] saturate-[0.95]"
                className="aspect-[4/3] w-full"
              />
            </div>
          </AnimatedSection>

          {/* Right Column: Contact Form */}
          <AnimatedSection direction="right">
            <div className="rounded-[32px] border border-[#4D667D]/10 bg-white/60 p-6 sm:p-8 md:p-10 shadow-[0_12px_40px_rgba(77,102,125,0.05)] backdrop-blur-xl">
              <SacredIcon type="lotus" className="mx-auto mb-8 h-10 w-10 text-[#C8A96B]" />

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 text-center"
                >
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#C8A96B]/15 text-[#C8A96B]">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-light text-[#4D667D]">
                    Message Received
                  </h3>
                  <p className="mt-4 font-light text-base leading-relaxed text-[#4D667D]/75 max-w-md mx-auto">
                    Thank you for reaching out. Your words have been received with love and reverence. I will connect with you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
                    }}
                    className="mt-8 inline-flex items-center justify-center rounded-full border border-[#4D667D]/20 px-8 py-3 text-xs uppercase tracking-[0.2em] text-[#4D667D] transition-all hover:bg-[#4D667D] hover:text-[#EFE6DB]"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-[10px] md:text-[11px] font-medium uppercase tracking-[0.2em] text-[#4D667D]/70"
                    >
                      Your Name <span className="text-[#C8A96B]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-2xl border border-[#4D667D]/15 bg-white/70 px-5 py-4 font-light text-[15px] text-[#4D667D] placeholder-[#4D667D]/35 shadow-sm transition-all duration-300 hover:border-[#4D667D]/30 focus:border-[#C8A96B] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#C8A96B]/15"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[10px] md:text-[11px] font-medium uppercase tracking-[0.2em] text-[#4D667D]/70"
                    >
                      Your Email <span className="text-[#C8A96B]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="youremail@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-2xl border border-[#4D667D]/15 bg-white/70 px-5 py-4 font-light text-[15px] text-[#4D667D] placeholder-[#4D667D]/35 shadow-sm transition-all duration-300 hover:border-[#4D667D]/30 focus:border-[#C8A96B] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#C8A96B]/15"
                    />
                  </div>

                  {/* Phone / WhatsApp (Optional) */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-[10px] md:text-[11px] font-medium uppercase tracking-[0.2em] text-[#4D667D]/70"
                    >
                      Phone / WhatsApp <span className="text-[#4D667D]/40">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-2xl border border-[#4D667D]/15 bg-white/70 px-5 py-4 font-light text-[15px] text-[#4D667D] placeholder-[#4D667D]/35 shadow-sm transition-all duration-300 hover:border-[#4D667D]/30 focus:border-[#C8A96B] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#C8A96B]/15"
                    />
                  </div>

                  {/* Area of Interest */}
                  <div className="relative">
                    <label
                      id="interest-label"
                      className="mb-2 block text-[10px] md:text-[11px] font-medium uppercase tracking-[0.2em] text-[#4D667D]/70"
                    >
                      Area of Interest
                    </label>
                    <button
                      type="button"
                      aria-labelledby="interest-label"
                      aria-haspopup="listbox"
                      aria-expanded={isInterestOpen}
                      onClick={() => setIsInterestOpen((open) => !open)}
                      className={`group flex min-h-[56px] w-full items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left font-light text-[15px] shadow-sm backdrop-blur-sm transition-all duration-300 ${
                        isInterestOpen
                          ? "border-[#C8A96B] bg-white ring-4 ring-[#C8A96B]/15"
                          : "border-[#4D667D]/15 bg-white/70 hover:border-[#4D667D]/30 hover:bg-white"
                      }`}
                    >
                      <span className={formData.interest ? "text-[#4D667D]" : "text-[#4D667D]/40"}>
                        {formData.interest || "Select an area of interest"}
                      </span>
                      <span
                        className={`grid h-7 w-7 flex-none place-items-center rounded-full border border-[#4D667D]/15 bg-[#EFE6DB] text-[#4D667D] transition-transform duration-300 ${
                          isInterestOpen ? "rotate-180 text-[#C8A96B] border-[#C8A96B]" : ""
                        }`}
                      >
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </button>

                    {isInterestOpen && (
                      <button
                        type="button"
                        aria-label="Close interest menu"
                        className="fixed inset-0 z-20 cursor-default bg-transparent"
                        onClick={() => setIsInterestOpen(false)}
                      />
                    )}

                    <AnimatePresence>
                      {isInterestOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -6, scale: 0.99 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -6, scale: 0.99 }}
                          transition={{ duration: 0.16 }}
                          role="listbox"
                          className="absolute z-30 mt-2 w-full overflow-hidden rounded-2xl border border-[#4D667D]/15 bg-[#EFE6DB] p-2 shadow-xl backdrop-blur-xl"
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
                                className={`flex min-h-[44px] w-full items-center justify-between gap-3 rounded-xl px-4 py-2.5 text-left text-sm font-light transition-all duration-200 ${
                                  selected
                                    ? "bg-[#C8A96B] text-white font-normal"
                                    : "text-[#4D667D] hover:bg-white/80 hover:text-[#4D667D]"
                                }`}
                              >
                                <span>{option}</span>
                                {selected && (
                                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[10px] md:text-[11px] font-medium uppercase tracking-[0.2em] text-[#4D667D]/70"
                    >
                      Your Message <span className="text-[#C8A96B]">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Share what is calling you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full resize-none rounded-2xl border border-[#4D667D]/15 bg-white/70 px-5 py-4 font-light text-[15px] leading-relaxed text-[#4D667D] placeholder-[#4D667D]/35 shadow-sm transition-all duration-300 hover:border-[#4D667D]/30 focus:border-[#C8A96B] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#C8A96B]/15"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative flex min-h-[56px] w-full items-center justify-center overflow-hidden rounded-2xl bg-[#4D667D] px-6 py-4 text-xs font-medium uppercase tracking-[0.25em] text-[#EFE6DB] shadow-md transition-all duration-500 hover:bg-[#C8A96B] hover:text-white disabled:opacity-50"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </span>
                  </button>

                  {error && (
                    <p className="rounded-xl bg-rose-50 border border-rose-200/80 p-3 text-center text-xs text-rose-700">
                      {error}
                    </p>
                  )}
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
