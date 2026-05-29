import { getContentData } from "@/lib/content";

export default function PublicationsPage() {
  const publications = getContentData("publications").sort((a: any, b: any) => b.year - a.year);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-white mb-4">Publications</h1>
      <p className="text-slate-400 mb-12 max-w-2xl">Our research published in peer-reviewed journals and conferences.</p>
      
      <div className="space-y-6">
        {publications.map((pub: any) => (
          <div key={pub.id} className="glass-panel p-6 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10">
                  {pub.year}
                </span>
                <span className="text-xs text-slate-500 italic">{pub.venue}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-snug">{pub.title}</h3>
              <p className="text-sm text-slate-400 mb-3">
                {pub.authors?.join(", ")}
              </p>
              <div className="flex flex-wrap gap-2">
                {pub.tags?.map((tag: string) => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-slate-500 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              {pub.doi && (
                <a href={`https://doi.org/${pub.doi}`} target="_blank" className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-all border border-white/10">
                  DOI
                </a>
              )}
              <a href="#" className="px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-xs font-semibold text-cyan-400 transition-all border border-cyan-500/20">
                PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
