"use client";

import { motion } from "framer-motion";

export default function StatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="flex items-center justify-center gap-2 py-6 text-[13px] text-[var(--text-dim)] tracking-wide"
    >
      <span>6 parsers</span>
      <span className="text-black/10">|</span>
      <span>4 export formats</span>
      <span className="text-black/10">|</span>
      <span>0 telemetry</span>
      <span className="text-black/10">|</span>
      <span>Any MCP client</span>
    </motion.div>
  );
}
