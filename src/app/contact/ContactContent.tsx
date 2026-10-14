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
    <div className="min-h-screen bg-[#EFE6DB] text-[#261710]">
      <section className="px-6 pb-12 md:pb-24 pt-36 sm:px-8 md:pb-32 md:pt-48">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          
          {/* Left Column: Info & Editorial Photo */}
          <AnimatedSection direction="left" className="space-y-10 text-center lg:text-left">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-[#261710] font-bold">
                Contact
              </p>
              <h1 className="mt-4 font-display text-4xl sm:text-6xl md:text-7xl font-normal uppercase tracking-wide leading-[1.08] text-[#261710]">
                Begin Your <span className="italic text-[#8C6527] font-serif">Journey</span>
              </h1>
              <div className="h-0.5 w-16 bg-[#8C6527]/50 my-6 mx-auto lg:mx-0" />
              <p className="max-w-xl text-base font-normal leading-[2] text-[#33231A] mx-auto lg:mx-0">
                Write to share where you are, what you are seeking, and which space is calling you. Your message will be met with clarity, care, and presence.
              </p>
            </div>

            {/* Contact Pills */}
            <div className="mx-auto grid max-w-md gap-3 text-sm text-[#261710] lg:mx-0">
              <a
                href={brand.contact.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border-2 border-[#D8C8B6] bg-[#F8F5F1] px-5 py-3.5 shadow-sm transition-all duration-300 hover:border-[#261710] hover:bg-white"
              >
                <span className="font-semibold">Instagram</span>
                <span className="font-bold text-[#8C6527] group-hover:text-[#261710] transition-colors">
                  {brand.contact.instagram}
                </span>
              </a>

              <div className="flex items-center justify-between rounded-2xl border-2 border-[#D8C8B6] bg-[#F8F5F1] px-5 py-3.5 shadow-sm">
                <span className="font-semibold">Email</span>
                <span className="font-bold text-[#261710]">{brand.contact.email}</span>
              </div>

              <div className="flex items-center justify-between rounded-2xl border-2 border-[#D8C8B6] bg-[#F8F5F1] px-5 py-3.5 shadow-sm">
                <span className="font-semibold">Phone</span>
                <span className="font-bold text-[#261710]">{brand.contact.phone}</span>
              </div>

              <div className="flex items-center justify-between rounded-2xl border-2 border-[#D8C8B6] bg-[#F8F5F1] px-5 py-3.5 shadow-sm">
                <span className="font-semibold">Website</span>
                <span className="font-bold text-[#261710]">{brand.contact.website}</span>
              </div>
            </div>

            {/* Editorial Portrait */}
            <div className="mx-auto max-w-sm rounded-[28px] border-2 border-[#D8C8B6] bg-[#F8F5F1] p-4 shadow-sm lg:mx-0">
              <EditorialImage
                src={photos.gardenPortrait}
                alt="Kunti garden portrait"
                variant="rounded"
                imageClassName="brightness-[0.98] saturate-[0.95] object-cover object-[center_20%]"
                className="aspect-[4/3] w-full"
              />
            </div>
          </AnimatedSection>

          {/* Right Column: Contact Form */}
          <AnimatedSection direction="right">
            <div className="rounded-[32px] border-2 border-[#D8C8B6] bg-[#F8F5F1] p-6 sm:p-8 md:p-10 shadow-sm">
              <SacredIcon type="lotus" className="mx-auto mb-8 h-10 w-10 text-[#8C6527]" />

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 text-center"
                >
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#8C6527]/15 text-[#8C6527]">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-medium text-[#261710]">
                    Message Received
                  </h3>
                  <p className="mt-4 font-normal text-base leading-relaxed text-[#33231A] max-w-md mx-auto">
                    Thank you for reaching out. Your words have been received with love and reverence. I will connect with you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
                    }}
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-[#261710] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFFFFF] transition-all hover:bg-[#3D2C20]"
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
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[#261710]"
                    >
                      Your Name <span className="text-[#A8422B]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-2xl border-2 border-[#D8C8B6] bg-white px-5 py-4 font-normal text-[15px] text-[#261710] placeholder-[#736357] shadow-sm transition-all duration-300 hover:border-[#261710] focus:border-[#261710] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#8C6527]/15"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[#261710]"
                    >
                      Your Email <span className="text-[#A8422B]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="youremail@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-2xl border-2 border-[#D8C8B6] bg-white px-5 py-4 font-normal text-[15px] text-[#261710] placeholder-[#736357] shadow-sm transition-all duration-300 hover:border-[#261710] focus:border-[#261710] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#8C6527]/15"
                    />
                  </div>

                  {/* Phone / WhatsApp (Optional) */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[#261710]"
                    >
                      Phone / WhatsApp <span className="text-[#736357] font-normal tracking-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-2xl border-2 border-[#D8C8B6] bg-white px-5 py-4 font-normal text-[15px] text-[#261710] placeholder-[#736357] shadow-sm transition-all duration-300 hover:border-[#261710] focus:border-[#261710] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#8C6527]/15"
                    />
                  </div>

                  {/* Area of Interest */}
                  <div className="relative">
                    <label
                      id="interest-label"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[#261710]"
                    >
                      Area of Interest
                    </label>
                    <button
                      type="button"
                      aria-labelledby="interest-label"
                      aria-haspopup="listbox"
                      aria-expanded={isInterestOpen}
                      onClick={() => setIsInterestOpen((open) => !open)}
                      className={`group flex min-h-[56px] w-full items-center justify-between gap-4 rounded-2xl border-2 px-5 py-4 text-left font-normal text-[15px] shadow-sm transition-all duration-300 ${
                        isInterestOpen
                          ? "border-[#261710] bg-white ring-4 ring-[#8C6527]/15"
                          : "border-[#D8C8B6] bg-white hover:border-[#261710]"
                      }`}
                    >
                      <span className={formData.interest ? "text-[#261710] font-medium" : "text-[#736357]"}>
                        {formData.interest || "Select an area of interest"}
                      </span>
                      <span
                        className={`grid h-7 w-7 flex-none place-items-center rounded-full border border-[#D8C8B6] bg-[#EFE6DB] text-[#261710] transition-transform duration-300 ${
                          isInterestOpen ? "rotate-180 text-[#8C6527] border-[#8C6527]" : ""
                        }`}
                      >
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
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
                          className="absolute z-30 mt-2 w-full overflow-hidden rounded-2xl border-2 border-[#D8C8B6] bg-[#F8F5F1] p-2 shadow-xl"
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
                                className={`flex min-h-[44px] w-full items-center justify-between gap-3 rounded-xl px-4 py-2.5 text-left text-sm font-medium transition-all duration-200 ${
                                  selected
                                    ? "bg-[#261710] text-[#FFFFFF]"
                                    : "text-[#261710] hover:bg-white hover:text-[#261710]"
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
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[#261710]"
                    >
                      Your Message <span className="text-[#A8422B]">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Share what is calling you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full resize-none rounded-2xl border-2 border-[#D8C8B6] bg-white px-5 py-4 font-normal text-[15px] leading-relaxed text-[#261710] placeholder-[#736357] shadow-sm transition-all duration-300 hover:border-[#261710] focus:border-[#261710] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#8C6527]/15"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative flex min-h-[56px] w-full items-center justify-center overflow-hidden rounded-2xl bg-[#261710] px-6 py-4 text-xs font-bold uppercase tracking-[0.25em] text-[#FFFFFF] shadow-md transition-all duration-500 hover:bg-[#3D2C20] disabled:opacity-50"
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
