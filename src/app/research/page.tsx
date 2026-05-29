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
            <div key={item.id} className="group">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-all">
                  <Icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="prose prose-invert prose-sm text-slate-500">
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
