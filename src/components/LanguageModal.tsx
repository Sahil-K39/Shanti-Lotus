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
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-parchment/80 backdrop-blur-xl"
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsModalOpen(false);
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-surfaceDark border border-antiqueGold/30 shadow-2xl overflow-hidden rounded-2xl sm:rounded-3xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 sm:px-8 py-5 sm:py-6 border-b border-antiqueGold/20 bg-ivory text-surfaceDark">
            <div>
              <span className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-antiqueGold block mb-1 font-medium">
                Universal Portal
              </span>
              <h2 className="font-display text-xl sm:text-3xl font-light tracking-wide">
                Select Your Sacred Language
              </h2>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="p-2.5 -mr-2 text-surfaceDark/65 hover:text-antiqueGold transition-colors"
              aria-label="Close language selector"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Search bar */}
          <div className="px-5 sm:px-8 py-3.5 sm:py-4 border-b border-antiqueGold/15 bg-surfaceDark">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 80+ languages by name..."
                className="w-full bg-transparent border border-textDark/20 rounded-xl px-11 py-3 text-base sm:text-sm text-textDark placeholder:text-textDark/40 focus:outline-none focus:border-antiqueGold transition-colors"
              />
              <svg
                className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-textDark/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-textDark/50 hover:text-antiqueGold uppercase tracking-wider p-1"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Languages List grouped by category */}
          <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-5 sm:py-6 space-y-8 sm:space-y-10">
            {CATEGORIES.map((cat) => {
              const langsInCat = filteredLanguages.filter((l) => l.category === cat);
              if (langsInCat.length === 0) return null;

              return (
                <div key={cat}>
                  <div className="flex items-center gap-3 mb-3.5 sm:mb-4">
                    <span className="text-[10px] sm:text-[11px] font-body uppercase tracking-[0.2em] text-antiqueGold font-semibold">
                      {cat}
                    </span>
                    <div className="flex-1 h-px bg-antiqueGold/20" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3">
                    {langsInCat.map((lang: LanguageOption) => {
                      const isSelected = currentLanguage.code === lang.code;
                      return (
                        <button
                          key={lang.code}
                          onClick={() => setLanguage(lang)}
                          className={`group text-left px-4 py-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                            isSelected
                              ? "border-antiqueGold bg-antiqueGold/15 text-antiqueGold shadow-sm"
                              : "border-textDark/10 hover:border-antiqueGold/50 hover:bg-ivory/50 text-textDark"
                          }`}
                        >
                          <div>
                            <span className="block font-medium text-sm sm:text-base leading-tight">
                              {lang.name}
                            </span>
                            <span className="block text-xs text-textDark/60 mt-0.5 group-hover:text-textDark/80">
                              {lang.nativeName}
                            </span>
                          </div>

                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-antiqueGold flex-shrink-0" />
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
