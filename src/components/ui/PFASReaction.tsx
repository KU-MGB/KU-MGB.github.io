"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { FlaskConical, HelpCircle, Activity } from "lucide-react";

export default function PFASReaction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // --- Phase scroll ranges ---
  // Phase 1 (Entry/Pre-organization): 0.0 -> 0.35
  // Phase 2 (SN2 Attack & C-F Cleavage): 0.35 -> 0.70
  // Phase 3 (Ester Hydrolysis & Regeneration): 0.70 -> 1.0

  // Substrate (Fluoroacetate / PFAS) entry and transition
  const substrateX = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.65, 0.8, 1], ["-120%", "0%", "0%", "0%", "30%", "250%"]);
  const substrateY = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.65, 0.8, 1], ["20px", "0px", "0px", "0px", "10px", "50px"]);
  const substrateOpacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [0, 1, 1, 0]);

  // Asp10 Nucleophile (Carboxylate) motion (moves slightly for SN2 attack)
  const nucX = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.7, 0.8], ["-40px", "0px", "0px", "-20px", "-40px"]);
  const nucY = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.7, 0.8], ["40px", "0px", "0px", "20px", "40px"]);
  
  // Target C-F Bond stretching and breaking
  const cfBondLength = useTransform(scrollYProgress, [0.35, 0.48, 0.52, 0.6], [40, 50, 80, 120]);
  const cfBondOpacity = useTransform(scrollYProgress, [0.35, 0.5], [1, 0]);
  
  // Fluoride Leaving Group (F-) migration to Halide Cradle (Arg41 / Trp179)
  const fluorideX = useTransform(scrollYProgress, [0, 0.45, 0.55, 0.7, 1], ["0px", "0px", "70px", "120px", "120px"]);
  const fluorideY = useTransform(scrollYProgress, [0, 0.45, 0.55, 0.7, 1], ["-35px", "-35px", "-110px", "-150px", "-150px"]);
  const fluorideOpacity = useTransform(scrollYProgress, [0, 0.1, 0.55, 0.9, 1], [0, 1, 1, 1, 0]);
  const cradleGlow = useTransform(scrollYProgress, [0.55, 0.7, 0.9], [0, 1, 0]);

  // Catalytic Water Molecule (H2O) entering and attacking the ester intermediate
  const waterOpacity = useTransform(scrollYProgress, [0.65, 0.72, 0.9, 1], [0, 1, 1, 0]);
  const waterX = useTransform(scrollYProgress, [0.65, 0.78, 0.85], ["180px", "60px", "10px"]);
  const waterY = useTransform(scrollYProgress, [0.65, 0.78, 0.85], ["120px", "60px", "0px"]);

  // Proton Transfer (H+) to Asp180 Base
  const protonX = useTransform(scrollYProgress, [0.78, 0.85, 0.9], ["0px", "30px", "60px"]);
  const protonY = useTransform(scrollYProgress, [0.78, 0.85, 0.9], ["0px", "50px", "100px"]);
  const protonOpacity = useTransform(scrollYProgress, [0.75, 0.8, 0.9], [0, 1, 0]);

  // Phase narration opacities
  const opPhase1 = useTransform(scrollYProgress, [0.05, 0.15, 0.32, 0.38], [0, 1, 1, 0]);
  const opPhase2 = useTransform(scrollYProgress, [0.35, 0.42, 0.65, 0.72], [0, 1, 1, 0]);
  const opPhase3 = useTransform(scrollYProgress, [0.68, 0.75, 0.95], [0, 1, 1]);

  // Progress bar phase states
  const scalePhase1 = useTransform(scrollYProgress, [0, 0.35], [0.2, 1]);
  const scalePhase2 = useTransform(scrollYProgress, [0.35, 0.7], [0.2, 1]);
  const scalePhase3 = useTransform(scrollYProgress, [0.7, 1], [0.2, 1]);

  return (
    <div ref={containerRef} className="relative w-full h-[650px] glass-panel rounded-[60px] overflow-hidden flex items-center justify-center">
      {/* Background grid representing active site grid lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #06b6d4 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />

      {/* Dynamic Ambient Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0.35, 0.55, 0.75], [0.1, 0.8, 0.2]) }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 blur-[130px] rounded-full" 
        />
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0.7, 0.85], [0.1, 0.8]) }}
          className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500 blur-[130px] rounded-full" 
        />
      </div>

      {/* Narrative Overlay (Top Left) */}
      <div className="absolute top-12 left-12 z-20 max-w-sm pointer-events-none">
        <AnimatePresence>
          {/* Phase 1 Narration */}
          <motion.div style={{ opacity: opPhase1 }} className="absolute inset-0">
            <div className="flex items-center gap-3 text-cyan-400 font-black text-[10px] uppercase tracking-[0.2em] mb-2">
              <span className="w-8 h-[1px] bg-cyan-500" /> Phase 1: Substrate Entry
            </div>
            <h4 className="text-2xl font-bold text-foreground mb-3">Pre-organization</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              PFAS molecule enters the dehalogenase active site, positioning the target carbon near the Asp10 nucleophile oxygen (~3.2 Å) in a collinear backside attack geometry.
            </p>
          </motion.div>

          {/* Phase 2 Narration */}
          <motion.div style={{ opacity: opPhase2 }} className="absolute inset-0">
            <div className="flex items-center gap-3 text-cyan-400 font-black text-[10px] uppercase tracking-[0.2em] mb-2">
              <span className="w-8 h-[1px] bg-cyan-500" /> Phase 2: SN2 Cleavage
            </div>
            <h4 className="text-2xl font-bold text-foreground mb-3">C-F Bond Breakage</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              The negatively charged Asp10 nucleophile attacks the $\alpha$-carbon, displacing the fluoride leaving group. The cradle (Arg41/Trp179) stabilizes the transition state.
            </p>
          </motion.div>

          {/* Phase 3 Narration */}
          <motion.div style={{ opacity: opPhase3 }} className="absolute inset-0">
            <div className="flex items-center gap-3 text-emerald-400 font-black text-[10px] uppercase tracking-[0.2em] mb-2">
              <span className="w-8 h-[1px] bg-emerald-500" /> Phase 3: Hydrolysis
            </div>
            <h4 className="text-2xl font-bold text-foreground mb-3">Enzyme Regeneration</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              A catalytic water molecule is activated by the Asp180 base (abstracting H+). The hydroxyl attacks the ester, releasing defluorinated product and restoring Asp10.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Legend / Info (Top Right - Resolves Overlap Bug) */}
      <div className="absolute top-12 right-12 hidden md:flex flex-col gap-3 glass-panel px-6 py-4 rounded-3xl shadow-2xl z-20">
        <div className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1 flex items-center gap-2">
          <Activity size={10} className="text-cyan-500" /> Chemistry Guide
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">F (Fluorine)</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Asp10 Nuc</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Asp180 Base / Water</span>
        </div>
      </div>

      {/* Active Site Visual Container */}
      <div className="relative w-full max-w-3xl h-full flex items-center justify-center z-10">
        
        {/* Halide Cradle / Stabilizer Site (Arg41 & Trp179) - Top Right Area */}
        <div className="absolute top-[20%] right-[30%] flex flex-col items-center">
          <motion.div 
            style={{ 
              borderColor: useTransform(scrollYProgress, [0.5, 0.7], ["rgba(255,255,255,0.05)", "rgba(6,182,212,0.4)"]),
              backgroundColor: useTransform(scrollYProgress, [0.5, 0.7], ["rgba(255,255,255,0.02)", "rgba(6,182,212,0.05)"])
            }}
            className="w-20 h-20 rounded-[24px] border border-slate-200 dark:border-white/5 bg-foreground/[0.02] flex flex-col items-center justify-center p-3 text-center transition-all duration-300 shadow-xl"
          >
            <span className="text-[8px] font-black uppercase text-slate-500 mb-1">Cradle</span>
            <span className="text-[9px] font-bold text-foreground leading-tight">Arg41<br/>Trp179</span>
          </motion.div>
          {/* Cradle Halide coordination dashed lines */}
          <motion.div 
            style={{ scale: cradleGlow, opacity: useTransform(scrollYProgress, [0.55, 0.75], [0, 0.6]) }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 border border-dashed border-cyan-400 rounded-full pointer-events-none" 
          />
        </div>

        {/* Catalytic Base (Asp180) - Bottom Right Area */}
        <div className="absolute bottom-[20%] right-[30%] flex flex-col items-center">
          <div className="w-20 h-20 rounded-[24px] glass-panel flex flex-col items-center justify-center p-3 text-center shadow-xl">
            <span className="text-[8px] font-black uppercase text-slate-500 mb-1">Base</span>
            <span className="text-[9px] font-bold text-emerald-400 leading-tight">Asp180</span>
          </div>
        </div>

        {/* --- MOLECULAR GRAPH CORE --- */}
        <div className="relative w-full h-[300px] flex items-center justify-center">

          {/* Nucleophile (Asp10 Carboxylate Arm) */}
          <motion.div 
            style={{ x: nucX, y: nucY }}
            className="absolute left-[20%] flex flex-col items-center z-10"
          >
            {/* Nucleophile Asp10 carboxylate arm oxygen atom */}
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 font-black text-sm shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                O-
              </div>
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-bold tracking-widest text-cyan-500 uppercase bg-background px-2 py-0.5 rounded border border-foreground/10">Asp10</span>
            </div>
            {/* C-O nucleophilic attack vector indicator */}
            <motion.div 
              style={{ 
                opacity: useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]),
                width: useTransform(scrollYProgress, [0.25, 0.45], ["100px", "40px"]) 
              }}
              className="absolute left-12 top-6 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent border-t border-dashed border-cyan-400 origin-left"
            />
          </motion.div>

          {/* Substrate Complex Molecule */}
          <motion.div 
            style={{ x: substrateX, y: substrateY, opacity: substrateOpacity }}
            className="absolute flex items-center"
          >
            {/* PFAS Alkyl Chain segment (representing fluoroacetate electrophile carbon) */}
            <div className="relative flex items-center">
              
              {/* Target Electrophilic Cα Carbon */}
              <div className="relative w-14 h-14 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center text-slate-100 font-black text-lg shadow-2xl z-20">
                Cα
                
                {/* Attack Angle indicator arc */}
                <motion.div 
                  style={{ opacity: useTransform(scrollYProgress, [0.15, 0.35], [0, 0.7]) }}
                  className="absolute inset-[-15px] border border-cyan-500/20 border-dashed rounded-full"
                />
              </div>

              {/* Fluorine Leaving Group (F) */}
              <motion.div 
                style={{ x: fluorideX, y: fluorideY, opacity: fluorideOpacity }}
                className="absolute z-30"
              >
                <div className="relative w-11 h-11 rounded-full bg-blue-500/30 border-2 border-blue-400 flex items-center justify-center text-blue-300 font-bold text-xs shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  F
                </div>
                {/* Dynamic coordination indicator while in cradle */}
                <motion.div 
                  style={{ opacity: useTransform(scrollYProgress, [0.65, 0.75], [0, 0.8]) }}
                  className="absolute inset-[-4px] border border-dashed border-cyan-400 rounded-full animate-pulse"
                />
              </motion.div>

              {/* Backside C-F covalent bond line (Phase 1 -> 2 transition) */}
              <motion.div 
                style={{ 
                  opacity: cfBondOpacity,
                  width: cfBondLength,
                  rotate: -60
                }}
                className="absolute left-6 top-6 h-1 bg-gradient-to-r from-slate-400 via-blue-400 to-blue-500 origin-left z-10"
              />

              {/* Substrate tail (remaining PFAS carboxylate/alkyl chain) */}
              <div className="flex items-center gap-1 absolute right-12 z-0">
                <div className="w-1 h-8 bg-slate-800 rotate-12" />
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 text-[10px] font-bold">R</div>
              </div>
            </div>
          </motion.div>

          {/* Catalytic Water (H2O) entering in Phase 3 */}
          <motion.div 
            style={{ opacity: waterOpacity, x: waterX, y: waterY }}
            className="absolute z-20 flex items-center gap-1"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-300 font-bold text-xs shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              O
            </div>
            <div className="flex flex-col gap-1">
              {/* Proton 1 (abstracted by Asp180 Base) */}
              <motion.div 
                style={{ x: protonX, y: protonY, opacity: protonOpacity }}
                className="w-5 h-5 rounded-full bg-emerald-500/30 border border-emerald-400 flex items-center justify-center text-emerald-300 font-bold text-[8px]"
              >
                H+
              </motion.div>
              {/* Proton 2 (retained) */}
              <div className="w-5 h-5 rounded-full bg-emerald-500/30 border border-emerald-400 flex items-center justify-center text-emerald-300 font-bold text-[8px]">
                H
              </div>
            </div>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[7px] font-bold tracking-widest text-emerald-500 uppercase bg-background px-2 py-0.5 rounded border border-foreground/10">H2O</span>
          </motion.div>

          {/* Dynamic H-bonds inside active site (dashed lines) */}
          {/* Asp180 Base -> Water coordination */}
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.7, 0.82], [0, 0.8]) }}
            className="absolute bottom-[28%] right-[32%] w-16 border-t-2 border-dashed border-emerald-400/50 rotate-45 pointer-events-none"
          />
          {/* Halide Cradle -> Fluorine stabilization bonds */}
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.58, 0.75], [0, 0.8]) }}
            className="absolute top-[28%] right-[32%] w-20 border-t-2 border-dashed border-cyan-400/50 -rotate-[30deg] pointer-events-none"
          />
        </div>
      </div>

      {/* Progress & Phases (Bottom Center) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20">
        <div className="flex items-center gap-8">
          {/* Phase 1 Indicator */}
          <div className="flex items-center gap-3">
            <motion.div 
              style={{ scale: scalePhase1 }}
              className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.45)]" 
            />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">1. Entry</span>
          </div>

          {/* Phase 2 Indicator */}
          <div className="flex items-center gap-3">
            <motion.div 
              style={{ scale: scalePhase2 }}
              className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.45)]" 
            />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">2. SN2 Attack</span>
          </div>

          {/* Phase 3 Indicator */}
          <div className="flex items-center gap-3">
            <motion.div 
              style={{ scale: scalePhase3 }}
              className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.45)]" 
            />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">3. Hydrolysis</span>
          </div>
        </div>

        {/* Global Progress bar bar */}
        <div className="h-1 w-[320px] rounded-full bg-foreground/10 overflow-hidden">
          <motion.div style={{ scaleX: scrollYProgress }} className="h-full origin-left bg-gradient-to-r from-cyan-500 to-emerald-500" />
        </div>
      </div>
    </div>
  );
}
