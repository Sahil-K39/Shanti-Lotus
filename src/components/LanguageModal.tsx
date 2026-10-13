"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  useLanguage,
  SUPPORTED_LANGUAGES,
  CATEGORIES,
  LanguageOption,
} from "@/context/LanguageContext";

export default function LanguageModal() {
  const { isModalOpen, setIsModalOpen, currentLanguage, setLanguage } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLanguages = useMemo(() => {
    if (!searchQuery.trim()) return SUPPORTED_LANGUAGES;
    const q = searchQuery.toLowerCase().trim();
    return SUPPORTED_LANGUAGES.filter(
      (lang) =>
        lang.name.toLowerCase().includes(q) ||
        lang.nativeName.toLowerCase().includes(q) ||
        lang.code.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  if (!isModalOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#EFE6DB]/90 backdrop-blur-md"
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsModalOpen(false);
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-4xl max-h-[85vh] flex flex-col bg-[#F8F5F1] border-2 border-[#D8C8B6] shadow-[0_20px_60px_-15px_rgba(38,23,16,0.2)] overflow-hidden rounded-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 sm:px-10 py-6 sm:py-8 border-b-2 border-[#D8C8B6] bg-white">
            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-[#261710] block mb-2 font-bold">
                Universal Portal
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-normal tracking-wide text-[#261710]">
                Select Your <span className="italic text-[#8C6527] font-serif">Language</span>
              </h2>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="p-2.5 -mr-2 text-[#261710] hover:text-[#8C6527] transition-colors rounded-full hover:bg-[#EFE6DB]"
              aria-label="Close language selector"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Search bar */}
          <div className="px-6 sm:px-10 py-5 border-b-2 border-[#D8C8B6] bg-[#EFE6DB]">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search languages by name..."
                className="w-full bg-white rounded-xl border-2 border-[#D8C8B6] px-4 py-3 text-base text-[#261710] placeholder:text-[#736357] focus:outline-none focus:border-[#261710] transition-colors font-normal shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#261710] hover:text-[#8C6527] uppercase tracking-[0.15em] font-bold p-1"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Languages List grouped by category */}
          <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-8 space-y-12">
            {CATEGORIES.map((cat) => {
              const langsInCat = filteredLanguages.filter((l) => l.category === cat);
              if (langsInCat.length === 0) return null;

              return (
                <div key={cat}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs uppercase tracking-[0.25em] text-[#261710] font-bold">
                      {cat}
                    </span>
                    <div className="flex-1 h-0.5 bg-[#D8C8B6]" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {langsInCat.map((lang: LanguageOption) => {
                      const isSelected = currentLanguage.code === lang.code;
                      return (
                        <button
                          key={lang.code}
                          onClick={() => setLanguage(lang)}
                          className={`group text-left px-5 py-4 border-2 rounded-xl transition-all duration-300 flex items-center justify-between ${
                            isSelected
                              ? "border-[#261710] bg-[#261710] text-[#FFFFFF] shadow-md"
                              : "border-[#D8C8B6] bg-white hover:border-[#261710] text-[#261710]"
                          }`}
                        >
                          <div>
                            <span className={`block text-sm sm:text-base font-semibold ${isSelected ? 'text-[#FFFFFF]' : 'text-[#261710]'}`}>
                              {lang.name}
                            </span>
                            <span className={`block text-xs mt-1 ${isSelected ? 'text-[#E2C98F]' : 'text-[#5A4636]'}`}>
                              {lang.nativeName}
                            </span>
                          </div>

                          {isSelected && (
                            <span className="w-2.5 h-2.5 rounded-full bg-[#E2C98F] flex-shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
