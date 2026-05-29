import { getContentData } from "@/lib/content";

export default function ProjectsPage() {
  const projects = getContentData("projects");

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-white mb-4">Active Projects</h1>
      <p className="text-slate-400 mb-16 max-w-2xl text-lg">
        Ongoing initiatives and large-scale collaborations within the MGB Institute.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project: any) => (
          <div key={project.id} className="glass-panel overflow-hidden rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all flex flex-col">
            <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
               <div className="absolute inset-0 bg-emerald-500/5 mix-blend-overlay" />
               <span className="text-white/20 font-black text-6xl uppercase tracking-tighter opacity-10">{project.title}</span>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                 <span className={`w-2 h-2 rounded-full ${project.status === "Active" ? "bg-emerald-500 animate-pulse" : "bg-slate-500"}`} />
                 <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{project.status}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags?.map((tag: string) => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-emerald-400 border border-emerald-500/20">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                Learn more &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
