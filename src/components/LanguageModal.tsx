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
          className="relative w-full max-w-4xl max-h-[85vh] flex flex-col bg-[#EFE6DB] border border-[#4D667D]/10 shadow-[0_20px_60px_-15px_rgba(77,102,125,0.1)] overflow-hidden rounded-sm"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 sm:px-10 py-6 sm:py-8 border-b border-[#4D667D]/10 bg-white/40">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#4D667D]/60 block mb-3 font-medium">
                Universal Portal
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-light tracking-wide text-[#4D667D]">
                Select Your <span className="italic text-[#C8A96B]">Language</span>
              </h2>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="p-2.5 -mr-2 text-[#4D667D]/60 hover:text-[#C8A96B] transition-colors"
              aria-label="Close language selector"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Search bar */}
          <div className="px-6 sm:px-10 py-5 border-b border-[#4D667D]/10 bg-white/20">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search languages by name..."
                className="w-full bg-transparent border-b border-[#4D667D]/20 px-1 py-3 text-base text-[#4D667D] placeholder:text-[#4D667D]/40 focus:outline-none focus:border-[#C8A96B] transition-colors font-light"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] text-[#4D667D]/50 hover:text-[#C8A96B] uppercase tracking-[0.2em] p-2"
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
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#4D667D]/50 font-medium">
                      {cat}
                    </span>
                    <div className="flex-1 h-px bg-[#4D667D]/5" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {langsInCat.map((lang: LanguageOption) => {
                      const isSelected = currentLanguage.code === lang.code;
                      return (
                        <button
                          key={lang.code}
                          onClick={() => setLanguage(lang)}
                          className={`group text-left px-5 py-4 border transition-all duration-500 flex items-center justify-between ${
                            isSelected
                              ? "border-[#C8A96B] bg-[#C8A96B]/5 text-[#4D667D] shadow-sm"
                              : "border-[#4D667D]/10 hover:border-[#4D667D]/30 hover:bg-white/40 text-[#4D667D]"
                          }`}
                        >
                          <div>
                            <span className={`block text-sm sm:text-base ${isSelected ? 'font-medium' : 'font-light'}`}>
                              {lang.name}
                            </span>
                            <span className="block text-xs font-light text-[#4D667D]/60 mt-1 group-hover:text-[#4D667D]/80 transition-colors">
                              {lang.nativeName}
                            </span>
                          </div>

                          {isSelected && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B] flex-shrink-0" />
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
