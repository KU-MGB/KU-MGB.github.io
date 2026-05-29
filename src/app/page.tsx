"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Dna, FlaskConical, Network, Leaf } from "lucide-react";

export default function Home() {
  const FADE_DOWN_ANIMATION_VARIANTS: Variants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            {/* Abstract Molecular Network representation (pure CSS) */}
            <div className="w-[800px] h-[800px] border border-cyan-500/20 rounded-full absolute animate-[spin_60s_linear_infinite]" />
            <div className="w-[600px] h-[600px] border border-emerald-500/20 rounded-full absolute animate-[spin_40s_linear_infinite_reverse]" />
            <div className="w-[400px] h-[400px] border border-blue-500/20 rounded-full absolute animate-[spin_20s_linear_infinite]" />
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="max-w-7xl mx-auto px-6 relative z-10 w-full"
        >
          <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Pioneering PFAS Defluorination
          </motion.div>

          <motion.h1 variants={FADE_DOWN_ANIMATION_VARIANTS} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white max-w-4xl leading-tight mb-8">
            Engineering Microbial Futures for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Environmental Restoration</span>
          </motion.h1>

          <motion.p variants={FADE_DOWN_ANIMATION_VARIANTS} className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
            The Microbial Genomics and Biodegradation (MGB) group decodes complex biodegradation pathways using computational biology, AI, and metagenomics.
          </motion.p>

          <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="flex flex-wrap gap-4">
            <a href="#research" className="px-8 py-4 rounded-full bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-all flex items-center gap-2">
              Explore Research <ArrowRight size={18} />
            </a>
            <a href="#publications" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all">
              Latest Publications
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Research Pillars */}
      <section id="research" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Core Research Pillars</h2>
            <p className="text-slate-400 max-w-2xl text-lg">Integrating multi-omics and computational modeling to understand and engineer novel degradation capabilities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "PFAS Defluorination", desc: "Discovering novel enzymes capable of breaking strong C-F bonds using Boltz-2 and deep learning.", icon: FlaskConical, color: "text-cyan-400" },
              { title: "Microbial Genomics", desc: "High-throughput sequence analysis to mine the global microbiome for bioremediation potential.", icon: Dna, color: "text-emerald-400" },
              { title: "Metagenomics", desc: "Analyzing complex environmental communities to trace large-scale biodegradation pathways.", icon: Network, color: "text-blue-400" },
              { title: "Environmental Biotech", desc: "Translating computational discoveries into synthetic biology applications for real-world impact.", icon: Leaf, color: "text-teal-400" }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-2xl hover:bg-white/[0.03] transition-colors group cursor-pointer"
              >
                <pillar.icon className={`w-10 h-10 ${pillar.color} mb-6 opacity-80 group-hover:opacity-100 transition-opacity`} />
                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
            {[
              { label: "Active Projects", value: "12+" },
              { label: "Publications", value: "45+" },
              { label: "Analyzed Genomes", value: "2.4M" },
              { label: "Novel Enzymes", value: "300+" }
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
