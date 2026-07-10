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
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-parchment/80 backdrop-blur-xl"
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsModalOpen(false);
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-4xl max-h-[85vh] flex flex-col bg-surfaceDark border border-antiqueGold/30 shadow-2xl overflow-hidden rounded-none"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-6 border-b border-antiqueGold/20 bg-ivory text-surfaceDark">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-antiqueGold block mb-1">
                Universal Portal
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-light tracking-wide">
                Select Your Sacred Language
              </h2>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="p-2 text-surfaceDark/60 hover:text-antiqueGold transition-colors"
              aria-label="Close language selector"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Search bar */}
          <div className="px-6 sm:px-8 py-4 border-b border-antiqueGold/15 bg-surfaceDark">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 80+ languages by English or native name..."
                className="w-full bg-transparent border border-textDark/20 px-11 py-3 text-sm text-textDark placeholder:text-textDark/40 focus:outline-none focus:border-antiqueGold transition-colors"
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
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-textDark/50 hover:text-antiqueGold uppercase tracking-wider"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Languages List grouped by category */}
          <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 space-y-10">
            {CATEGORIES.map((cat) => {
              const langsInCat = filteredLanguages.filter((l) => l.category === cat);
              if (langsInCat.length === 0) return null;

              return (
                <div key={cat}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[11px] font-body uppercase tracking-[0.22em] text-antiqueGold font-medium">
                      {cat}
                    </span>
                    <div className="flex-1 h-px bg-antiqueGold/20" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {langsInCat.map((lang: LanguageOption) => {
                      const isSelected = currentLanguage.code === lang.code;
                      return (
                        <button
                          key={lang.code}
                          onClick={() => setLanguage(lang)}
                          className={`group text-left p-3.5 border transition-all duration-300 flex items-center justify-between ${
                            isSelected
                              ? "border-antiqueGold bg-antiqueGold/15 text-textDark"
                              : "border-textDark/10 hover:border-antiqueGold/50 hover:bg-surface text-textDark/85"
                          }`}
                        >
                          <div>
                            <div className="font-body text-sm font-medium flex items-center gap-2">
                              <span>{lang.name}</span>
                              {lang.rtl && (
                                <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 border border-terracotta/40 text-terracotta rounded-none">
                                  RTL
                                </span>
                              )}
                            </div>
                            <div className="font-display text-xs text-textDark/60 group-hover:text-textDark/80">
                              {lang.nativeName}
                            </div>
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

            {filteredLanguages.length === 0 && (
              <div className="text-center py-12 text-textDark/60">
                <p className="font-display italic text-xl">No matching languages found.</p>
              </div>
            )}
          </div>

          {/* Footer Note */}
          <div className="px-6 sm:px-8 py-3.5 bg-surface border-t border-antiqueGold/15 flex flex-col sm:flex-row items-center justify-between text-xs text-textDark/60">
            <span>
              Right-to-Left (RTL) layout direction is automatically applied for Arabic, Hebrew, Persian, Urdu, Pashto, and Yiddish.
            </span>
            <span className="mt-1 sm:mt-0 font-medium text-textDark">
              80+ Languages Enabled
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
