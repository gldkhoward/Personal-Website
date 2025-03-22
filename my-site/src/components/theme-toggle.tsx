"use client";

import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Light mode icon (sun) */}
      {!isDark && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: isAnimating ? [1, 1.2, 1] : 1, 
            opacity: 1 
          }}
          transition={{ duration: 0.5 }}
          className="text-primary"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
            <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 12L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M22 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M19.7782 4.22183L17.5563 6.44365" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M6.44365 17.5563L4.22183 19.7782" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M19.7782 19.7782L17.5563 17.5563" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M6.44365 6.44365L4.22183 4.22183" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>
      )}
      
      {/* Dark mode icon (moon) */}
      {isDark && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: isAnimating ? [1, 1.2, 1] : 1, 
            opacity: 1 
          }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-full p-1.5"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
              stroke="#1a1a1a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      )}
    </motion.button>
  );
}
