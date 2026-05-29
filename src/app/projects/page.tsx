import { getContentData } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  const projects = getContentData("projects");

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-white mb-4">Active Projects</h1>
      <p className="text-slate-400 mb-16 max-w-2xl text-lg">
        Ongoing initiatives and large-scale collaborations within the MGB Lab.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project: any) => (
          <div key={project.id} className="glass-panel overflow-hidden rounded-3xl border border-white/5 hover:border-emerald-500/40 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-700 flex flex-col group cursor-pointer">
            <div className="h-64 bg-slate-900 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-emerald-500/5 mix-blend-overlay group-hover:bg-emerald-500/10 transition-colors" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
               <span className="text-white/20 font-black text-7xl uppercase tracking-tighter opacity-10 group-hover:scale-110 group-hover:opacity-20 transition-all duration-700 select-none">{project.title}</span>
            </div>
            <div className="p-10 relative">
              <div className="flex items-center gap-3 mb-6">
                 <span className={`w-2.5 h-2.5 rounded-full ${project.status === "Active" ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse" : "bg-slate-500"}`} />
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-emerald-400 transition-colors">{project.status}</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-base leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tags?.map((tag: string) => (
                  <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-md bg-white/5 text-emerald-400 border border-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-white group-hover:text-emerald-400 transition-all">
                Explore Project <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
