"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mesh-gradient grain min-h-screen flex items-center justify-center pt-16">
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28 flex flex-col items-center text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="gradient-text text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight max-w-3xl mb-6"
        >
          Download Everything.
          <br />
          Build With It.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mb-10 leading-relaxed"
        >
          Crawlio downloads entire websites into local files — browse offline,
          or hand them to your AI. Native macOS. One-time purchase.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/download"
            className="btn-primary text-base px-8 py-3.5 flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download for Mac
          </a>
        </motion.div>

        {/* App Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-16 md:mt-20 w-full max-w-4xl"
        >
          <div className="glass-card p-2 md:p-3 relative">
            {/* Ambient glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--accent-purple)]/10 via-[var(--accent-blue)]/10 to-[var(--accent-red)]/10 rounded-3xl blur-2xl -z-10" />
            <Image
              src="/preview-hero.png"
              alt="Crawlio — macOS website downloader with live waterfall view"
              width={1200}
              height={750}
              className="rounded-[18px] w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
