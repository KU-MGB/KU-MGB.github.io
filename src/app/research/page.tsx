import { getContentData } from "@/lib/content";
import { FlaskConical, Network, Dna, Leaf } from "lucide-react";

const iconMap: Record<string, any> = {
  FlaskConical,
  Network,
  Dna,
  Leaf,
};

export default function ResearchPage() {
  const research = getContentData("research");

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-white mb-4">Research Themes</h1>
      <p className="text-slate-400 mb-16 max-w-2xl text-lg">
        We integrate microbial ecology, genomics, and computational biology to solve environmental challenges.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {research.map((item: any) => {
          const Icon = iconMap[item.icon] || FlaskConical;
          return (
            <div key={item.id} className="glass-panel p-10 rounded-3xl border border-white/5 hover:border-cyan-500/30 hover:-translate-y-2 transition-all duration-500 group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-8 relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                  <Icon className="w-10 h-10 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6 text-lg">
                    {item.description}
                  </p>
                  <div className="prose prose-invert prose-sm text-slate-500 line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
