"use client";

import { usePathname } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
  rtl?: boolean;
  category:
    | "Global / Major World Languages"
    | "Indian Regional Languages"
    | "Middle Eastern & Central/South Asian"
    | "European & Nordic"
    | "Southeast Asian & Pacific"
    | "African Languages";
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  // Global / Major World Languages
  { code: "en", name: "English", nativeName: "English", category: "Global / Major World Languages" },
  { code: "es", name: "Spanish", nativeName: "Español", category: "Global / Major World Languages" },
  { code: "fr", name: "French", nativeName: "Français", category: "Global / Major World Languages" },
  { code: "de", name: "German", nativeName: "Deutsch", category: "Global / Major World Languages" },
  { code: "zh-CN", name: "Chinese (Simplified)", nativeName: "简体中文", category: "Global / Major World Languages" },
  { code: "zh-TW", name: "Chinese (Traditional)", nativeName: "繁體中文", category: "Global / Major World Languages" },
  { code: "ja", name: "Japanese", nativeName: "日本語", category: "Global / Major World Languages" },
  { code: "ru", name: "Russian", nativeName: "Русский", category: "Global / Major World Languages" },
  { code: "pt", name: "Portuguese", nativeName: "Português", category: "Global / Major World Languages" },
  { code: "it", name: "Italian", nativeName: "Italiano", category: "Global / Major World Languages" },
  { code: "ar", name: "Arabic", nativeName: "العربية", rtl: true, category: "Global / Major World Languages" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", category: "Global / Major World Languages" },
  { code: "ko", name: "Korean", nativeName: "한국어", category: "Global / Major World Languages" },
  { code: "tr", name: "Turkish", nativeName: "Türkçe", category: "Global / Major World Languages" },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt", category: "Global / Major World Languages" },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia", category: "Global / Major World Languages" },

  // Indian Regional Languages
  { code: "bn", name: "Bengali", nativeName: "বাংলা", category: "Indian Regional Languages" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી", category: "Indian Regional Languages" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ", category: "Indian Regional Languages" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം", category: "Indian Regional Languages" },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", category: "Indian Regional Languages" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்", category: "Indian Regional Languages" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు", category: "Indian Regional Languages" },
  { code: "ur", name: "Urdu", nativeName: "اردو", rtl: true, category: "Indian Regional Languages" },

  // Middle Eastern & Central/South Asian
  { code: "iw", name: "Hebrew", nativeName: "עברית", rtl: true, category: "Middle Eastern & Central/South Asian" },
  { code: "fa", name: "Persian (Farsi)", nativeName: "فارسی", rtl: true, category: "Middle Eastern & Central/South Asian" },
  { code: "ps", name: "Pashto", nativeName: "پښتو", rtl: true, category: "Middle Eastern & Central/South Asian" },
  { code: "ku", name: "Kurdish", nativeName: "Kurdî", category: "Middle Eastern & Central/South Asian" },
  { code: "kk", name: "Kazakh", nativeName: "Қазақша", category: "Middle Eastern & Central/South Asian" },
  { code: "ky", name: "Kyrgyz", nativeName: "Кыргызча", category: "Middle Eastern & Central/South Asian" },
  { code: "tg", name: "Tajik", nativeName: "Тоҷикӣ", category: "Middle Eastern & Central/South Asian" },
  { code: "uz", name: "Uzbek", nativeName: "Oʻzbekcha", category: "Middle Eastern & Central/South Asian" },

  // European & Nordic
  { code: "nl", name: "Dutch", nativeName: "Nederlands", category: "European & Nordic" },
  { code: "pl", name: "Polish", nativeName: "Polski", category: "European & Nordic" },
  { code: "uk", name: "Ukrainian", nativeName: "Українська", category: "European & Nordic" },
  { code: "el", name: "Greek", nativeName: "Ελληνικά", category: "European & Nordic" },
  { code: "sv", name: "Swedish", nativeName: "Svenska", category: "European & Nordic" },
  { code: "no", name: "Norwegian", nativeName: "Norsk", category: "European & Nordic" },
  { code: "da", name: "Danish", nativeName: "Dansk", category: "European & Nordic" },
  { code: "fi", name: "Finnish", nativeName: "Suomi", category: "European & Nordic" },
  { code: "cs", name: "Czech", nativeName: "Čeština", category: "European & Nordic" },
  { code: "hu", name: "Hungarian", nativeName: "Magyar", category: "European & Nordic" },
  { code: "ro", name: "Romanian", nativeName: "Română", category: "European & Nordic" },
  { code: "sk", name: "Slovak", nativeName: "Slovenčina", category: "European & Nordic" },
  { code: "bg", name: "Bulgarian", nativeName: "Български", category: "European & Nordic" },
  { code: "hr", name: "Croatian", nativeName: "Hrvatski", category: "European & Nordic" },
  { code: "sr", name: "Serbian", nativeName: "Српски", category: "European & Nordic" },
  { code: "sl", name: "Slovenian", nativeName: "Slovenščina", category: "European & Nordic" },
  { code: "et", name: "Estonian", nativeName: "Eesti", category: "European & Nordic" },
  { code: "lv", name: "Latvian", nativeName: "Latviešu", category: "European & Nordic" },
  { code: "lt", name: "Lithuanian", nativeName: "Lietuvių", category: "European & Nordic" },
  { code: "sq", name: "Albanian", nativeName: "Shqip", category: "European & Nordic" },
  { code: "hy", name: "Armenian", nativeName: "Հայերեն", category: "European & Nordic" },
  { code: "az", name: "Azerbaijani", nativeName: "Azərbaycan", category: "European & Nordic" },
  { code: "eu", name: "Basque", nativeName: "Euskara", category: "European & Nordic" },
  { code: "be", name: "Belarusian", nativeName: "Беларуская", category: "European & Nordic" },
  { code: "bs", name: "Bosnian", nativeName: "Bosanski", category: "European & Nordic" },
  { code: "ca", name: "Catalan", nativeName: "Català", category: "European & Nordic" },
  { code: "ka", name: "Georgian", nativeName: "ქართული", category: "European & Nordic" },
  { code: "is", name: "Icelandic", nativeName: "Íslenska", category: "European & Nordic" },
  { code: "ga", name: "Irish", nativeName: "Gaeilge", category: "European & Nordic" },
  { code: "la", name: "Latin", nativeName: "Latina", category: "European & Nordic" },
  { code: "mk", name: "Macedonian", nativeName: "Македонски", category: "European & Nordic" },
  { code: "mt", name: "Maltese", nativeName: "Malti", category: "European & Nordic" },
  { code: "cy", name: "Welsh", nativeName: "Cymraeg", category: "European & Nordic" },
  { code: "yi", name: "Yiddish", nativeName: "ייִדיש", rtl: true, category: "European & Nordic" },

  // Southeast Asian & Pacific
  { code: "ms", name: "Malay", nativeName: "Bahasa Melayu", category: "Southeast Asian & Pacific" },
  { code: "th", name: "Thai", nativeName: "ไทย", category: "Southeast Asian & Pacific" },
  { code: "tl", name: "Filipino (Tagalog)", nativeName: "Filipino", category: "Southeast Asian & Pacific" },
  { code: "my", name: "Burmese", nativeName: "မြန်မာဘာသာ", category: "Southeast Asian & Pacific" },
  { code: "km", name: "Khmer", nativeName: "ភាសាខ្មែរ", category: "Southeast Asian & Pacific" },
  { code: "lo", name: "Lao", nativeName: "ພາສາລາວ", category: "Southeast Asian & Pacific" },
  { code: "jw", name: "Javanese", nativeName: "Basa Jawa", category: "Southeast Asian & Pacific" },
  { code: "su", name: "Sundanese", nativeName: "Basa Sunda", category: "Southeast Asian & Pacific" },
  { code: "si", name: "Sinhala", nativeName: "සිංහල", category: "Southeast Asian & Pacific" },
  { code: "ne", name: "Nepali", nativeName: "नेपाली", category: "Southeast Asian & Pacific" },
  { code: "mi", name: "Maori", nativeName: "Te Reo Māori", category: "Southeast Asian & Pacific" },

  // African Languages
  { code: "sw", name: "Swahili", nativeName: "Kiswahili", category: "African Languages" },
  { code: "am", name: "Amharic", nativeName: "አማርኛ", category: "African Languages" },
  { code: "af", name: "Afrikaans", nativeName: "Afrikaans", category: "African Languages" },
  { code: "ha", name: "Hausa", nativeName: "Hausa", category: "African Languages" },
  { code: "mg", name: "Malagasy", nativeName: "Malagasy", category: "African Languages" },
  { code: "so", name: "Somali", nativeName: "Soomaali", category: "African Languages" },
  { code: "xh", name: "Xhosa", nativeName: "isiXhosa", category: "African Languages" },
  { code: "yo", name: "Yoruba", nativeName: "Yorùbá", category: "African Languages" },
  { code: "zu", name: "Zulu", nativeName: "isiZulu", category: "African Languages" },
];

export const CATEGORIES = [
  "Global / Major World Languages",
  "Indian Regional Languages",
  "Middle Eastern & Central/South Asian",
  "European & Nordic",
  "Southeast Asian & Pacific",
  "African Languages",
] as const;

interface LanguageContextType {
  currentLanguage: LanguageOption;
  setLanguage: (lang: LanguageOption) => void;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: SUPPORTED_LANGUAGES[0],
  setLanguage: () => {},
  isModalOpen: false,
  setIsModalOpen: () => {},
  isRtl: false,
});

export const useLanguage = () => useContext(LanguageContext);

const RTL_CODES = ["ar", "iw", "he", "fa", "ur", "ps", "yi"];

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguageState] = useState<LanguageOption>(
    SUPPORTED_LANGUAGES[0]
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const savedCode = localStorage.getItem("shakti_lang_code");
    if (savedCode) {
      const found = SUPPORTED_LANGUAGES.find((item) => item.code === savedCode);
      if (found) {
        setCurrentLanguageState(found);
        applyLanguageAndRtl(found);
      }
    }

    const addGoogleTranslateScript = () => {
      if (document.getElementById("google-translate-script")) return;
      (window as unknown as Record<string, unknown>).googleTranslateElementInit = () => {
        new (window as unknown as {
          google: {
            translate: {
              TranslateElement: new (config: unknown, id: string) => unknown;
            };
          };
        }).google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: SUPPORTED_LANGUAGES.map((l) => l.code).join(","),
            autoDisplay: false,
            multilanguagePage: true,
          },
          "google_translate_element"
        );
      };

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.head.appendChild(script);
    };

    addGoogleTranslateScript();
  }, []);

  // Re-trigger translation when navigating between pages on client side
  useEffect(() => {
    if (currentLanguage.code !== "en") {
      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (select) {
        select.value = currentLanguage.code;
        select.dispatchEvent(new Event("change"));
      }
    }
  }, [pathname, currentLanguage.code]);

  const applyLanguageAndRtl = (lang: LanguageOption) => {
    const isRtl = RTL_CODES.includes(lang.code) || Boolean(lang.rtl);
    const host = window.location.hostname;

    document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", lang.code);

    if (lang.code === "en") {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${host};`;
      if (host.includes(".")) {
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${host};`;
      }
    } else {
      const cookies = [`/en/${lang.code}`, `/auto/${lang.code}`];
      cookies.forEach((val) => {
        document.cookie = `googtrans=${val}; path=/;`;
        document.cookie = `googtrans=${val}; path=/; domain=${host};`;
        if (host.includes(".")) {
          document.cookie = `googtrans=${val}; path=/; domain=.${host};`;
        }
      });
    }

    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (select) {
      select.value = lang.code;
      select.dispatchEvent(new Event("change"));
    }
  };

  const setLanguage = (lang: LanguageOption) => {
    const previousCode = currentLanguage.code;
    setCurrentLanguageState(lang);
    localStorage.setItem("shakti_lang_code", lang.code);
    applyLanguageAndRtl(lang);
    setIsModalOpen(false);

    if (lang.code !== previousCode) {
      setTimeout(() => {
        window.location.reload();
      }, 80);
    }
  };

  const isRtl = RTL_CODES.includes(currentLanguage.code) || Boolean(currentLanguage.rtl);

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        isModalOpen,
        setIsModalOpen,
        isRtl,
      }}
    >
      <div id="google_translate_element" className="hidden opacity-0 pointer-events-none" />
      {children}
    </LanguageContext.Provider>
  );
}
