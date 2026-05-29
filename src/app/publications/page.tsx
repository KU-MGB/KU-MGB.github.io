import { getContentData } from "@/lib/content";

export default function PublicationsPage() {
  const publications = getContentData("publications").sort((a: any, b: any) => b.year - a.year);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-6xl font-bold text-foreground mb-4 tracking-tighter">Publications</h1>
      <p className="text-slate-500 mb-16 max-w-2xl text-lg font-medium">Our latest research published in peer-reviewed journals and international conferences.</p>
      
      <div className="space-y-8">
        {publications.map((pub: any) => (
          <div key={pub.id} className="glass-panel p-10 rounded-[30px] super-card-hover flex flex-col md:flex-row md:items-center justify-between gap-10 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex-1 relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[10px] font-black text-cyan-500 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 tracking-[0.2em] uppercase">
                  {pub.year}
                </span>
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{pub.venue}</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-cyan-500 transition-colors">{pub.title}</h3>
              <p className="text-sm text-slate-500 mb-6 font-medium italic">
                {pub.authors?.join(", ")}
              </p>
              <div className="flex flex-wrap gap-2">
                {pub.tags?.map((tag: string) => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest font-black px-3 py-1 rounded-md bg-white/5 text-slate-600 border border-white/5 group-hover:border-cyan-500/20 group-hover:text-cyan-500 transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 relative z-10">
              {pub.doi && (
                <a href={`https://doi.org/${pub.doi}`} target="_blank" className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-foreground transition-all border border-white/10">
                  DOI Reference
                </a>
              )}
              <a href="#" className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-cyan-500/10">
                Full Paper (PDF)
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
