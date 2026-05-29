import { getContentData } from "@/lib/content";

export default function NewsPage() {
  const news = getContentData("news").sort((a: any, b: any) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-white mb-4">Lab News</h1>
      <p className="text-slate-400 mb-16 max-w-2xl text-lg">
        Updates, grants, awards, and media coverage from the MGB Lab.
      </p>
      
      <div className="space-y-12">
        {news.map((item: any) => (
          <div key={item.id} className="relative pl-8 border-l border-white/10 group">
            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] group-hover:scale-125 transition-transform" />
            <div className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-2">
              {item.date} • {item.category}
            </div>
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
              {item.title}
            </h2>
            <p className="text-slate-400 leading-relaxed max-w-3xl mb-6">
              {item.description}
            </p>
            <div className="prose prose-invert prose-sm text-slate-500 italic">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
