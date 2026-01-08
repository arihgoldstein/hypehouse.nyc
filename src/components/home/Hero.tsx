"use client";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-20 px-4 md:px-8 pt-32 border-b border-white/10">
      <div className="max-w-[95vw]">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] font-bold tracking-tighter uppercase mb-12"
        >
          Culture Meets <br/>
          <span className="text-concrete">The Dance Floor</span>
        </motion.h1>
        
        <div className="flex flex-col md:flex-row gap-8 md:items-end justify-between">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl max-w-xl text-concrete"
          >
            Hye House is an Armenian-led creative community and event series bridging heritage with the underground.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4"
          >
            <a href="/events" className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-colors uppercase tracking-widest text-sm">
              Upcoming Events
            </a>
            <a href="/merch" className="px-6 py-3 border border-transparent hover:border-white transition-colors uppercase tracking-widest text-sm text-concrete hover:text-white">
              Shop Merch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
