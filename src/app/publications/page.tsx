import { getContentData } from "@/lib/content";

export default function PublicationsPage() {
  const publications = getContentData("publications").sort((a: any, b: any) => b.year - a.year);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-white mb-4">Publications</h1>
      <p className="text-slate-400 mb-12 max-w-2xl">Our research published in peer-reviewed journals and conferences.</p>
      
      <div className="space-y-6">
        {publications.map((pub: any) => (
          <div key={pub.id} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-8 group">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-[10px] font-black text-cyan-400 px-2.5 py-1 rounded-md bg-cyan-500/10 tracking-[0.2em] uppercase border border-cyan-500/20">
                  {pub.year}
                </span>
                <span className="text-xs text-slate-500 font-medium italic tracking-wide group-hover:text-slate-300 transition-colors">{pub.venue}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-cyan-400 transition-colors">{pub.title}</h3>
              <p className="text-sm text-slate-400 mb-4 font-medium opacity-80">
                {pub.authors?.join(", ")}
              </p>
              <div className="flex flex-wrap gap-2">
                {pub.tags?.map((tag: string) => (
                  <span key={tag} className="text-[9px] uppercase tracking-[0.1em] font-bold px-2 py-0.5 rounded bg-white/5 text-slate-500 border border-white/5 group-hover:border-white/10 transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              {pub.doi && (
                <a href={`https://doi.org/${pub.doi}`} target="_blank" className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[10px] font-bold uppercase tracking-widest text-white transition-all border border-white/10">
                  DOI
                </a>
              )}
              <a href="#" className="px-5 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-[10px] font-bold uppercase tracking-widest text-cyan-400 transition-all border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
