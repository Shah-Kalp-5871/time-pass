"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Backend integration will happen later
      console.log("Email submitted:", email);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleSubmit}
            className={`relative flex items-center w-full p-1 rounded-full transition-all duration-300 ${
              isFocused
                ? "bg-white/10 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                : "bg-white/5 border-white/10"
            } border backdrop-blur-md`}
          >
            <input
              suppressHydrationWarning
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Enter your email to join the waitlist..."
              required
              className="flex-1 bg-transparent px-6 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-0"
            />
            <button
              suppressHydrationWarning
              type="submit"
              className="relative flex items-center justify-center p-3 ml-2 text-black bg-white rounded-full hover:bg-zinc-200 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center space-y-3 py-4"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 text-green-400">
              <Check className="w-6 h-6" />
            </div>
            <p className="text-white text-lg font-medium font-serif tracking-wide">
              You're on the list.
            </p>
            <p className="text-zinc-400 text-sm">
              We will notify you when The Fylex launches.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
