"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FlaskConical } from "lucide-react";

export default function PFASReaction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const moleculeX = useTransform(scrollYProgress, [0, 0.25], ["-100%", "0%"]);
  const enzymeY = useTransform(scrollYProgress, [0.25, 0.45], ["-200%", "0%"]);
  const bondOpacity = useTransform(scrollYProgress, [0.5, 0.65], [1, 0]);
  const productX = useTransform(scrollYProgress, [0.7, 1], ["0%", "220%"]);
  const glowScale = useTransform(scrollYProgress, [0.5, 0.75], [0, 2]);

  const phase1 = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 0.2, 0.2]);
  const phase2 = useTransform(scrollYProgress, [0.2, 0.45, 0.7], [0.2, 1, 0.2]);
  const phase3 = useTransform(scrollYProgress, [0.6, 0.85, 1], [0.2, 0.2, 1]);

  return (
    <div ref={containerRef} className="relative w-full h-[600px] glass-panel rounded-[60px] border border-white/10 overflow-hidden flex items-center justify-center bg-slate-950/50">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #06b6d4 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Narrative Overlay */}
      <div className="absolute top-12 left-12 z-20">
         <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.1, 0.3], [0, 1]) }}
            className="flex items-center gap-3 text-cyan-400 font-black text-[10px] uppercase tracking-widest mb-2"
         >
            <span className="w-8 h-[1px] bg-cyan-500" /> Phase 1: Entry
         </motion.div>
         <motion.h4 
            style={{ opacity: useTransform(scrollYProgress, [0.1, 0.3], [0, 1]) }}
            className="text-2xl font-bold text-white"
         >PFAS Contamination</motion.h4>
      </div>

      <div className="absolute bottom-12 right-12 text-right z-20">
         <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.7, 0.9], [0, 1]) }}
            className="flex items-center justify-end gap-3 text-emerald-400 font-black text-[10px] uppercase tracking-widest mb-2"
         >
            Phase 3: Remediation <span className="w-8 h-[1px] bg-emerald-500" />
         </motion.div>
         <motion.h4 
            style={{ opacity: useTransform(scrollYProgress, [0.7, 0.9], [0, 1]) }}
            className="text-2xl font-bold text-white"
         >Mineralized Products</motion.h4>
      </div>

      {/* The Animation Core */}
      <div className="relative w-full max-w-2xl h-full flex items-center justify-center">
         
         {/* Reaction Pulse Glow */}
         <motion.div 
            style={{ scale: glowScale, opacity: useTransform(scrollYProgress, [0.5, 0.7], [0, 0.4]) }}
            className="absolute w-40 h-40 bg-cyan-400 blur-[80px] rounded-full"
         />

         {/* PFAS Molecule (Simplified SVG) */}
         <motion.div 
            style={{ x: moleculeX }}
            className="relative flex items-center gap-2"
         >
            {/* Chain of "F" atoms */}
            <div className="flex gap-4">
               {[1, 2].map(i => (
                  <div key={i} className="flex flex-col gap-8">
                     <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center text-blue-400 font-bold text-xs shadow-[0_0_15px_rgba(59,130,246,0.3)]">F</div>
                     <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center text-blue-400 font-bold text-xs shadow-[0_0_15px_rgba(59,130,246,0.3)]">F</div>
                  </div>
               ))}
            </div>

            {/* The TARGET Bond */}
            <div className="relative w-24 flex flex-col items-center">
               <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-white/20 flex items-center justify-center text-white font-black text-sm z-10">C</div>
               <motion.div 
                  style={{ opacity: bondOpacity }}
                  className="w-1 h-20 bg-gradient-to-b from-white/40 via-cyan-400 to-white/40 absolute top-[-10px]" 
               />
               <motion.div 
                  style={{ opacity: bondOpacity, y: useTransform(scrollYProgress, [0, 1], [-20, 20]) }}
                  className="w-8 h-8 rounded-full bg-cyan-500/40 border border-cyan-400 flex items-center justify-center text-cyan-300 font-black text-[10px] absolute top-[-40px] shadow-[0_0_20px_rgba(6,182,212,0.5)]"
               >F</motion.div>
               
               {/* Fragments that fly out */}
               <motion.div 
                  style={{ x: productX, opacity: useTransform(scrollYProgress, [0.6, 0.8], [0, 1]) }}
                  className="absolute top-[-60px] right-[-100px] w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 font-bold text-[8px]"
               >F-</motion.div>
            </div>
         </motion.div>

         {/* The Enzyme (Interceptor) */}
         <motion.div 
            style={{ y: enzymeY, x: 80 }}
            className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center gap-4"
         >
            <div className="glass-panel p-6 rounded-[30px] border-cyan-500/30 bg-cyan-500/5 shadow-2xl relative">
               <div className="absolute -top-2 -left-2 w-4 h-4 bg-cyan-500 rounded-full animate-ping" />
               <FlaskConical className="text-cyan-400" size={48} />
               <motion.div 
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-cyan-500/20 rounded-[30px]" 
               />
            </div>
            <span className="text-[9px] font-black text-cyan-500 uppercase tracking-[0.3em] bg-slate-950 px-3 py-1 rounded-full border border-white/10">Active Site: NAC</span>
         </motion.div>

         <motion.div
           style={{ opacity: useTransform(scrollYProgress, [0.2, 0.45], [0, 1]) }}
           className="absolute left-[calc(50%+70px)] top-1/2 h-[2px] w-28 bg-cyan-500/20"
         />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20">
         <div className="flex items-center gap-8">
            <motion.div style={{ opacity: phase1 }} className="flex items-center gap-3">
               <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.45)]" />
               <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">Entry</span>
            </motion.div>
            <motion.div style={{ opacity: phase2 }} className="flex items-center gap-3">
               <div className="w-3 h-3 rounded-full bg-slate-500/60 shadow-[0_0_10px_rgba(148,163,184,0.5)]" />
               <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">Binding</span>
            </motion.div>
            <motion.div style={{ opacity: phase3 }} className="flex items-center gap-3">
               <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.45)]" />
               <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">Remediation</span>
            </motion.div>
         </div>
         <div className="h-1 w-[320px] rounded-full bg-white/10 overflow-hidden">
            <motion.div style={{ scaleX: scrollYProgress }} className="h-full origin-left bg-cyan-500" />
         </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-12 bg-slate-900/80 backdrop-blur-md px-8 py-4 rounded-full border border-white/5 shadow-2xl">
         <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PFAS Chain</span>
         </div>
         <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Target Bond</span>
         </div>
         <div className="flex items-center gap-3">
            <FlaskConical className="text-cyan-500" size={14} />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Dehalogenase</span>
         </div>
      </div>
    </div>
  );
}
