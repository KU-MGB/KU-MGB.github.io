"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Dna, FlaskConical, Network, Leaf, Microscope, Binary, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const FADE_DOWN_ANIMATION_VARIANTS: Variants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", duration: 1.2 } },
  };

  return (
    <div className="relative">
      {/* Immersive Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <div className="w-[1000px] h-[1000px] border border-cyan-500/20 rounded-full absolute animate-[spin_100s_linear_infinite]" />
            <div className="w-[800px] h-[800px] border border-emerald-500/20 rounded-full absolute animate-[spin_80s_linear_infinite_reverse]" />
            <div className="w-[600px] h-[600px] border border-blue-500/20 rounded-full absolute animate-[spin_40s_linear_infinite]" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="max-w-7xl mx-auto px-6 relative z-10 w-full"
        >
          <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-xl shadow-cyan-500/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Next-Gen Environmental Genomics
          </motion.div>

          <motion.h1 variants={FADE_DOWN_ANIMATION_VARIANTS} className="text-6xl md:text-8xl lg:text-[100px] font-bold tracking-tighter text-foreground max-w-5xl leading-[0.9] mb-10">
            Decoding <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500">Biodegradation</span> <br/> 
            at Molecular Scale
          </motion.h1>

          <motion.p variants={FADE_DOWN_ANIMATION_VARIANTS} className="text-xl md:text-2xl text-slate-500 max-w-3xl mb-12 leading-relaxed font-medium">
            The **Microbial Genomics and Biodegradation (MGB) Lab** at PLEN, University of Copenhagen, leverages AI, multi-omics, and structural biology to solve the global PFAS challenge.
          </motion.p>

          <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="flex flex-wrap gap-6">
            <Link href="/research" className="px-10 py-5 rounded-full bg-foreground text-background font-black uppercase tracking-widest text-[11px] hover:bg-cyan-500 transition-all flex items-center gap-3 shadow-2xl hover:shadow-cyan-500/30 group">
              Explore Research <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/join-us" className="px-10 py-5 rounded-full bg-white/5 border border-white/10 text-foreground font-black uppercase tracking-widest text-[11px] hover:bg-white/10 transition-all">
              Join the Mission
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
           <span className="text-[9px] font-black uppercase tracking-widest">Scroll</span>
           <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Lab Philosophy Section */}
      <section className="py-32 border-y border-white/5 bg-slate-950/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500 mb-6">Our Philosophy</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">Bridging AI with <br/> Environmental Reality</h3>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                 We believe that the secrets to a cleaner planet are hidden within the complex genetic makeup of the global microbiome. By combining high-resolution sequencing with advanced machine learning, we don't just observe nature—we engineer it for restoration.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                 <div>
                    <div className="text-3xl font-black text-cyan-400 mb-1">98%</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Uncultivated Microbes Mined</div>
                 </div>
                 <div>
                    <div className="text-3xl font-black text-emerald-400 mb-1"> Boltz-2</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Structural Validation</div>
                 </div>
              </div>
           </div>
           <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-8 rounded-[30px] aspect-square flex flex-col justify-end bg-gradient-to-br from-cyan-500/10 to-transparent">
                 <Binary className="text-cyan-500 mb-4" size={32} />
                 <h4 className="font-bold text-white uppercase text-xs tracking-widest">Genomic Intelligence</h4>
              </div>
              <div className="glass-panel p-8 rounded-[30px] translate-y-8 aspect-square flex flex-col justify-end bg-gradient-to-br from-emerald-500/10 to-transparent">
                 <ShieldCheck className="text-emerald-500 mb-4" size={32} />
                 <h4 className="font-bold text-white uppercase text-xs tracking-widest">Bio-Restoration</h4>
              </div>
              <div className="glass-panel p-8 rounded-[30px] aspect-square flex flex-col justify-end bg-gradient-to-br from-blue-500/10 to-transparent">
                 <Zap className="text-blue-500 mb-4" size={32} />
                 <h4 className="font-bold text-white uppercase text-xs tracking-widest">Rapid Prototyping</h4>
              </div>
              <div className="glass-panel p-8 rounded-[30px] translate-y-8 aspect-square flex flex-col justify-end bg-gradient-to-br from-teal-500/10 to-transparent">
                 <Microscope className="text-teal-500 mb-4" size={32} />
                 <h4 className="font-bold text-white uppercase text-xs tracking-widest">Enzyme Design</h4>
              </div>
           </div>
        </div>
      </section>

      {/* Core Research Tickers/Cards */}
      <section id="research" className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 mb-6">Research Frontiers</h2>
              <h3 className="text-5xl md:text-6xl font-bold text-foreground">Mission Critical <br/> Domains</h3>
            </div>
            <Link href="/research" className="text-slate-400 hover:text-cyan-500 font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 mb-2 transition-colors">
               See Full Roadmap <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "PFAS Defluorination", desc: "Targeting the carbon-fluorine bond—the strongest in organic chemistry—through novel dehalogenase discovery.", icon: FlaskConical, color: "text-cyan-400" },
              { title: "Microbial Genomics", desc: "Decoding the evolutionary history of mobile genetic elements and their role in pollutant adaptation.", icon: Dna, color: "text-emerald-400" },
              { title: "Metagenomics", desc: "Mapping the functional potential of complex environmental communities across global soil and water systems.", icon: Network, color: "text-blue-400" },
              { title: "AI Biodegradation", desc: "Training specialized LLMs and GNNs to predict biodegradation pathways for synthetic compounds.", icon: Binary, color: "text-teal-400" }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-10 rounded-[40px] super-card-hover group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center mb-8 border border-white/5 shadow-xl group-hover:bg-cyan-500 transition-all duration-500`}>
                   <pillar.icon className={`w-6 h-6 ${pillar.color} group-hover:text-slate-950 transition-colors duration-500`} />
                </div>
                <h3 className="text-xl font-black text-foreground mb-4 uppercase tracking-tighter">{pillar.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News / Recent Highlights */}
      <section className="py-32 bg-slate-950/40 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-foreground mb-12 flex items-center gap-4">
               Recent Highlights <div className="h-[1px] flex-1 bg-white/5" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                  { date: "2025", title: "DFF Sapere Aude Grant", desc: "Awarded DKK 6.2M for PFAS degradation research group establishment." },
                  { date: "2024", title: "NNF Project Grant", desc: "New collaboration focused on identifying novel PFAS enzymatic targets." },
                  { date: "2023", title: "4EU+ Professorship", desc: "Tue Nielsen appointed Visiting Professor at University of Geneva." }
               ].map((news, i) => (
                  <div key={i} className="group">
                     <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest">{news.date}</span>
                     <h4 className="text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-cyan-400 transition-colors">{news.title}</h4>
                     <p className="text-sm text-slate-500 leading-relaxed mb-4">{news.desc}</p>
                     <Link href="/news" className="text-[9px] font-black uppercase tracking-widest text-slate-600 hover:text-white transition-colors">Read Details &rarr;</Link>
                  </div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
}
