"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const floatingBadges = [
  { label: "Liquid Glass", x: "-60%", y: "20%", delay: 0 },
  { label: "iOS 26", x: "55%", y: "15%", delay: 0.3 },
  { label: "Offline Ready", x: "-50%", y: "65%", delay: 0.6 },
];

export default function MobileHero() {
  return (
    <section className="mesh-gradient grain min-h-screen flex items-center justify-center pt-16">
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="gradient-text text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight max-w-3xl mb-6"
        >
          Crawlio on iPhone
          <br />
          &amp; iPad
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mb-10 leading-relaxed"
        >
          Download websites on the go. Same powerful engine, native iOS
          experience with Liquid Glass design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#"
            className="btn-primary text-base px-8 py-3.5 flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on the App Store
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-16 md:mt-20 w-full max-w-sm relative"
        >
          {/* Floating badges */}
          {floatingBadges.map((badge) => (
            <motion.span
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -8, 0],
              }}
              transition={{
                opacity: { duration: 0.4, delay: 0.9 + badge.delay },
                scale: { duration: 0.4, delay: 0.9 + badge.delay },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2 + badge.delay,
                },
              }}
              className="hidden md:flex absolute glass-card px-3 py-1.5 text-xs font-medium text-[var(--text-primary)] z-20 whitespace-nowrap"
              style={{
                left: badge.x,
                top: badge.y,
                borderRadius: "9999px",
              }}
            >
              {badge.label}
            </motion.span>
          ))}

          <div className="glass-card p-2 md:p-3 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--accent-purple)]/10 via-[var(--accent-blue)]/10 to-[var(--accent-red)]/10 rounded-3xl blur-2xl -z-10" />
            <Image
              src="/mobile-hero.png"
              alt="CrawlioMobile — iOS website downloader with Liquid Glass design"
              width={390}
              height={844}
              className="rounded-[18px] w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
