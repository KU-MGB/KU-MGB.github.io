import { getContentData } from "@/lib/content";
import { FlaskConical, Network, Dna, Leaf, Binary, Microscope, ShieldAlert } from "lucide-react";

const iconMap: Record<string, any> = {
  FlaskConical,
  Network,
  Dna,
  Leaf,
  Binary,
  Microscope,
  ShieldAlert,
};

export default function ResearchPage() {
  const research = getContentData("research");

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-6xl font-bold text-foreground mb-4 tracking-tighter">Research Themes</h1>
      <p className="text-slate-500 mb-10 max-w-2xl text-xl font-medium leading-relaxed">
        We integrate microbial ecology, genomics, and computational biology to solve high-stakes environmental challenges, specifically focusing on the mineralization of recalcitrant fluorinated compounds.
      </p>

      <div className="grid gap-6 md:grid-cols-3 mb-20">
        {[
          { title: "Discovery", text: "Capturing the genetic diversity of uncultivated microbes to reveal hidden biodegradation potential." },
          { title: "Prediction", text: "Applying AI and structural biology to prioritize enzymes that can break PFAS bonds." },
          { title: "Impact", text: "Translating computational leads into biochemical, environmental, and remediation strategies." }
        ].map((item, idx) => (
          <div key={idx} className="glass-panel p-8 rounded-[40px]">
            <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {research.map((item: any) => {
          const Icon = iconMap[item.icon] || FlaskConical;
          return (
            <div key={item.id} className="glass-panel p-12 rounded-[50px] super-card-hover group relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-start gap-10 relative z-10">
                <div className="w-24 h-24 rounded-[30px] bg-foreground text-background flex items-center justify-center shrink-0 group-hover:bg-cyan-500 transition-all duration-700 shadow-2xl">
                  <Icon className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-6 group-hover:text-cyan-500 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-8 text-lg font-medium opacity-90">
                    {item.description}
                  </p>
                  <div className="prose prose-invert prose-sm text-slate-500 dark:text-slate-400 font-medium leading-loose border-t border-slate-200 dark:border-white/5 pt-8 italic group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Facilities/Methodology Section */}
      <section className="mt-40 py-24 glass-panel rounded-[60px] px-12 relative overflow-hidden">
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full" />
         <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-500 mb-8">Experimental & Computational Suite</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Advanced Methodologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
               {[
                  { icon: ShieldAlert, label: "PFAS Toxicity Assays" },
                  { icon: Microscope, label: "Nanopore Sequencing" },
                  { icon: Binary, label: "In Silico Enzyme Design" },
                  { icon: Network, label: "Metabolic Modeling" }
               ].map((feat, i) => (
                  <div key={i} className="flex flex-col items-center gap-4">
                     <feat.icon className="text-slate-500 group-hover:text-cyan-400" size={32} />
                     <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">{feat.label}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
