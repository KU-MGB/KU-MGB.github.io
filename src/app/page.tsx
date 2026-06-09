"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Dna, FlaskConical, Network, Binary, ShieldAlert, Microscope, Zap, Globe2, Beaker } from "lucide-react";
import Link from "next/link";
import PFASReaction from "@/components/ui/PFASReaction";
import Counter from "@/components/ui/Counter";
import { useLocale } from "@/components/locale/LocaleProvider";

export default function Home() {
  const { t } = useLocale();
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
          className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center lg:text-left"
        >
          <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-xl shadow-cyan-500/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            {String(t("hero.badge"))}
          </motion.div>

          <motion.h1 variants={FADE_DOWN_ANIMATION_VARIANTS} className="text-5xl md:text-7xl lg:text-[100px] font-bold tracking-tighter text-foreground max-w-5xl leading-[0.9] mb-10 mx-auto lg:mx-0">
            {String(t("hero.titlePrefix"))} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500">{String(t("hero.titleHighlight"))}</span> <br />
            {String(t("hero.titleSuffix"))}
          </motion.h1>

          <motion.p variants={FADE_DOWN_ANIMATION_VARIANTS} className="text-lg md:text-2xl text-slate-500 max-w-3xl mb-12 leading-relaxed font-medium mx-auto lg:mx-0">
            {String(t("hero.subtitle"))}
          </motion.p>

          <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="flex flex-wrap justify-center lg:justify-start gap-6">
            <Link href="/research" className="px-10 py-5 rounded-full bg-foreground text-background font-black uppercase tracking-widest text-[11px] hover:bg-cyan-500 transition-all flex items-center gap-3 shadow-2xl hover:shadow-cyan-500/30 group">
              {String(t("hero.ctaResearch"))} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/join-us" className="px-10 py-5 rounded-full bg-white/5 border border-white/10 text-foreground font-black uppercase tracking-widest text-[11px] hover:bg-white/10 transition-all">
              {String(t("hero.ctaJoin"))}
            </Link>
          </motion.div>

          <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="mt-14 grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto lg:mx-0">
            {(t("hero.stats") as any[]).map((item, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-[40px] shadow-xl">
                <div className="text-xs uppercase tracking-[0.3em] text-slate-500 font-black mb-3">{item.label}</div>
                <div className="text-4xl md:text-5xl font-black text-foreground">{item.value}</div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="mt-10 flex flex-wrap gap-3 max-w-4xl mx-auto lg:mx-0">
            <Link href="#why-mgb" className="px-4 py-3 rounded-full border border-slate-200 dark:border-white/10 text-[11px] uppercase tracking-[0.3em] font-black text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all">Why MGB</Link>
            <Link href="#workflow" className="px-4 py-3 rounded-full border border-slate-200 dark:border-white/10 text-[11px] uppercase tracking-[0.3em] font-black text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all">Our Process</Link>
            <Link href="#pipeline" className="px-4 py-3 rounded-full border border-slate-200 dark:border-white/10 text-[11px] uppercase tracking-[0.3em] font-black text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all">PFAS Journey</Link>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
           <span className="text-[9px] font-black uppercase tracking-widest">Discover</span>
           <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent animate-pulse" />
        </div>
      </section>

      <section id="why-mgb" className="py-24 border-t border-slate-200 dark:border-white/5 bg-slate-100/30 dark:bg-slate-950/10">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500 mb-6">{t("mgb.sectionLabel")}</div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t("mgb.title")}</h2>
            <p className="text-slate-500 text-lg leading-relaxed font-medium">
              {t("mgb.intro")}
            </p>
          </div>

          <div className="glass-panel p-8 rounded-[40px]">
            <h3 className="text-xl font-bold text-foreground mb-4">{t("mgb.whyTitle")}</h3>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {(t("mgb.whyItems") as any[]).map((item, idx) => (
                <li key={idx}><span className="font-bold text-foreground">{item.strong}</span> {item.text}</li>
              ))}
            </ul>
          </div>

          <div className="glass-panel p-8 rounded-[40px]">
            <h3 className="text-xl font-bold text-foreground mb-4">{t("mgb.focusTitle")}</h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {(t("mgb.focusItems") as any[]).map((item, idx) => (
                <p key={idx}><span className="font-bold text-foreground">{item.strong}</span> — {item.text}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Problem: Why PFAS? */}
      <section className="py-32 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
               <div className="grid grid-cols-2 gap-6">
                  {[
                     { label: "Stability", value: "C-F Bond", desc: "Strongest bond in organic chemistry.", icon: ShieldAlert },
                     { label: "Longevity", value: "Forever", desc: "Estimated half-life of 1000+ years.", icon: Zap },
                     { label: "Presence", value: "Global", desc: "Detected in 98% of human blood samples.", icon: Globe2 },
                     { label: "Toxicity", value: "Proven", desc: "Linked to cancer and immune disorders.", icon: Beaker }
                  ].map((fact, i) => (
                     <div key={i} className="glass-panel p-8 rounded-[40px] border-white/5 hover:border-red-500/20 transition-all group">
                        <fact.icon className="text-slate-600 group-hover:text-red-500 transition-colors mb-4" size={24} />
                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{fact.label}</div>
                        <div className="text-xl font-bold text-foreground mb-2">{fact.value}</div>
                        <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{fact.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
            <div className="order-1 lg:order-2">
               <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500 mb-6">The Crisis</h2>
               <h3 className="text-5xl md:text-6xl font-bold text-foreground mb-10 leading-[0.95]">The Forever <br/> Chemical Dilemma</h3>
               <p className="text-xl text-slate-500 leading-relaxed font-medium mb-8">
                  Per- and Polyfluoroalkyl Substances (PFAS) are man-made chemicals that do not break down in the environment. Their extreme resistance to degradation makes them a catastrophic threat to global water systems and human health.
               </p>
               <Link href="/research" className="inline-flex items-center gap-2 text-[11px] font-black text-foreground uppercase tracking-widest hover:text-cyan-500 transition-colors">
                  How we approach this &rarr;
               </Link>
            </div>
         </div>
      </section>

      <section id="workflow" className="py-24 bg-slate-100/30 dark:bg-slate-950/10 border-t border-slate-200 dark:border-white/5">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
               <div>
                 <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500 mb-6">{t("workflow.sectionLabel")}</h2>
                 <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">{t("workflow.title")}</h3>
               </div>
               <p className="text-slate-500 max-w-2xl text-lg font-medium leading-relaxed">
                 {t("workflow.intro")}
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
               {(t("workflow.steps") as any[]).map((item, idx) => (
                 <div key={idx} className="glass-panel p-10 rounded-[40px] shadow-xl">
                   <div className={`inline-flex items-center justify-center rounded-full w-14 h-14 mb-6 ${idx === 0 ? "bg-cyan-500/10 text-cyan-300" : idx === 1 ? "bg-emerald-500/10 text-emerald-300" : idx === 2 ? "bg-blue-500/10 text-blue-300" : "bg-teal-500/10 text-teal-300"}`}>
                     <span className="text-sm font-black uppercase tracking-[0.3em]">{item.title[0]}</span>
                   </div>
                   <h4 className="text-2xl font-bold text-foreground mb-4">{item.title}</h4>
                   <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.description}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* The Solution: Reaction Journey */}
      <PFASReaction />

      {/* Sustainable Bioremediation Section */}
      <section className="py-32 border-t border-slate-200 dark:border-white/5 relative overflow-hidden bg-background">
         <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 mb-6">
                  {t("sustainability.sectionLabel")}
               </h2>
               <h3 className="text-4xl md:text-6xl font-bold text-foreground mb-8 tracking-tight max-w-3xl mx-auto leading-tight">
                  {t("sustainability.title")}
               </h3>
               <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                  {t("sustainability.subtitle")}
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               {(t("sustainability.pillars") as any[]).map((pillar, idx) => (
                  <motion.div
                     key={idx}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.15 }}
                     className="glass-panel p-10 rounded-[40px] super-card-hover group relative overflow-hidden flex flex-col justify-between"
                  >
                     <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                     <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[9px] font-black uppercase tracking-widest mb-8">
                           {pillar.badge}
                        </div>
                        <h4 className="text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-emerald-500 transition-colors">
                           {pillar.title}
                        </h4>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium mb-8">
                           {pillar.desc}
                        </p>
                     </div>
                     <div className="h-[1px] bg-slate-200 dark:bg-white/5 w-full mt-4" />
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Lab Impact Stats */}
      <section className="py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Analyzed Sequences", value: 3200000, suffix: "+" },
              { label: "Enzyme Candidates", value: 450, suffix: "" },
              { label: "Peer Publications", value: 120, suffix: "+" },
              { label: "Global Partners", value: 18, suffix: "" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl md:text-6xl font-black text-foreground mb-3 tracking-tighter">
                   <Counter value={stat.value} />{stat.suffix}
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Domains */}
      <section id="research" className="py-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-32">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500 mb-6">Scientific Domains</h2>
              <h3 className="text-5xl md:text-7xl font-bold text-foreground leading-[0.9]">Transforming <br/> Metagenomics</h3>
            </div>
            <p className="text-slate-500 max-w-md font-medium text-lg lg:pb-2">
               Our lab combines massive data mining with structural biophysics to identify dehalogenases from uncultivated microbial dark matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "PFAS Defluorination", desc: "Discovering novel enzymes capable of breaking strong C-F bonds using Boltz-2 and deep learning.", icon: FlaskConical, color: "text-cyan-400" },
              { title: "Microbial Genomics", desc: "High-throughput sequence analysis to mine the global microbiome for bioremediation potential.", icon: Dna, color: "text-emerald-400" },
              { title: "Metagenomics", desc: "Analyzing complex environmental communities to trace large-scale biodegradation pathways.", icon: Network, color: "text-blue-400" },
              { title: "Environmental Biotech", desc: "Translating computational discoveries into synthetic biology applications for real-world impact.", icon: Microscope, color: "text-teal-400" }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-10 rounded-[50px] super-card-hover group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-[25px] bg-slate-900 border border-white/5 flex items-center justify-center mb-8 group-hover:bg-cyan-500 transition-all duration-500 shadow-2xl">
                   <pillar.icon className={`w-7 h-7 ${pillar.color} group-hover:text-slate-950 transition-colors duration-500`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 uppercase tracking-tighter leading-tight">{pillar.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6 italic">{pillar.desc}</p>
                <div className="text-[10px] font-black uppercase tracking-widest text-cyan-500 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                   Explore Theme &rarr;
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
               <div>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500 mb-6">Research Engine</h2>
                  <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">Why our methods drive breakthrough science</h3>
               </div>
               <p className="text-slate-500 max-w-2xl text-lg font-medium leading-relaxed">
                  At MGB we deploy a balanced research strategy that values both deep sequencing insights and practical environmental impact, ensuring our discoveries are ready for real-world PFAS remediation.
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <div className="glass-panel p-10 rounded-[40px] shadow-xl">
                  <h4 className="text-2xl font-bold text-foreground mb-4">Integrated data science</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6">We fuse genomics, structural bioinformatics, and machine learning to predict enzymes that can tackle legacy contaminants.</p>
                  <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
                     <li>Genome-wide discovery</li>
                     <li>Active-site prioritization</li>
                     <li>Pathway modeling</li>
                  </ul>
               </div>
               <div className="glass-panel p-10 rounded-[40px] shadow-xl">
                  <h4 className="text-2xl font-bold text-foreground mb-4">Experimental grounding</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6">Lab validation is essential: we confirm candidate enzymes with structural simulation, kinetics, and degradation tests.</p>
                  <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
                     <li>Protein structure modeling</li>
                     <li>Enzyme assay design</li>
                     <li>Toxicity screening</li>
                  </ul>
               </div>
               <div className="glass-panel p-10 rounded-[40px] shadow-xl">
                  <h4 className="text-2xl font-bold text-foreground mb-4">Field-ready outcomes</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6">Our goal is not just discovery, but practical remediation pathways that can be translated to soil and water systems.</p>
                  <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
                     <li>Scalable biotechnologies</li>
                     <li>Environmental monitoring</li>
                     <li>Cross-sector partnerships</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* Lab Highlights */}
      <section className="py-32 bg-slate-100/30 dark:bg-slate-950/40 relative border-t border-slate-200 dark:border-white/5">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-6 mb-16">
               <h2 className="text-3xl font-bold text-foreground shrink-0">Recent Lab Milestones</h2>
               <div className="h-[1px] flex-1 bg-slate-200 dark:bg-white/5" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                  { date: "May 2025", title: "Sapere Aude Starting Grant", desc: "Awarded DKK 6.2M for establishing our PFAS research group.", tag: "Award" },
                  { date: "March 2024", title: "ISME Journal Publication", desc: "New research on large-scale genomic screening of dehalogenases.", tag: "Research" },
                  { date: "Sept 2023", title: "4EU+ Visiting Professor", desc: "Tue Nielsen appointed to University of Geneva for MGE research.", tag: "Activity" }
               ].map((news, i) => (
                  <div key={i} className="group relative">
                     <div className="inline-block px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-500 text-[8px] font-black uppercase tracking-widest mb-4">{news.tag}</div>
                     <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-cyan-400 transition-colors leading-tight">{news.title}</h4>
                     <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">{news.desc}</p>
                     <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">{news.date}</span>
                        <Link href="/news" className="text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-cyan-500 dark:hover:text-white transition-colors">Read More &rarr;</Link>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Final Join Us Call */}
      <section className="py-40">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="glass-panel p-16 rounded-[60px] border border-cyan-500/20 relative overflow-hidden">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/10 blur-[120px] rounded-full" />
               <h3 className="text-5xl md:text-6xl font-black text-foreground mb-8 tracking-tighter">Become part of <br/> the solution.</h3>
               <p className="text-xl text-slate-500 mb-12 font-medium leading-relaxed">
                  We are actively recruiting BSc, MSc, and PhD students, as well as Postdoctoral researchers to join our multidisciplinary team.
               </p>
               <Link href="/join-us" className="px-12 py-6 rounded-full bg-cyan-500 text-slate-950 font-black uppercase tracking-[0.2em] text-xs hover:bg-cyan-400 transition-all shadow-[0_20px_40px_rgba(6,182,212,0.3)] active:scale-95">
                  View Open Positions
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
}
