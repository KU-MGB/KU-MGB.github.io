import { getContentData } from "@/lib/content";

export default function PeoplePage() {
  const people = getContentData("people");

  const categories = [
    { id: "faculty", label: "Faculty / Group Leaders" },
    { id: "postdocs", label: "Postdoctoral Researchers" },
    { id: "phd", label: "PhD Students" },
    { id: "masters", label: "MSc Students" },
    { id: "bachelors", label: "BSc Students" },
    { id: "alumni", label: "Alumni" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-white mb-12">Our Team</h1>
      
      <div className="space-y-20">
        {categories.map((cat) => {
          const catPeople = people.filter((p: any) => p.category === cat.id);

          if (catPeople.length === 0) return null;

          return (
            <section key={cat.id}>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-8 pb-2 border-b border-white/5">
                {cat.label}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {catPeople.map((person: any) => (
                  <div key={person.id} className="glass-panel p-8 rounded-2xl hover:bg-white/[0.04] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500 flex flex-col items-center text-center group">
                    {person.avatar && (
                      <a 
                        href={person.website || person.github || person.scholar || "#"} 
                        target="_blank" 
                        className="w-28 h-24 rounded-2xl overflow-hidden mb-6 border-2 border-white/5 group-hover:border-cyan-500/50 transition-all duration-500 block relative"
                      >
                        <img 
                          src={person.avatar} 
                          alt={person.name} 
                          decoding="async"
                          loading="lazy"
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                        />
                        <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      </a>
                    )}
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{person.name}</h3>
                    <p className="text-emerald-400 text-[10px] mb-4 font-bold uppercase tracking-[0.2em]">{person.role}</p>
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {person.tags?.map((tag: string) => (
                        <span key={tag} className="text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-md bg-white/5 text-slate-500 border border-white/10 group-hover:border-cyan-500/20 group-hover:text-cyan-500/80 transition-all">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-400 text-sm line-clamp-3 mb-8 leading-relaxed italic opacity-80 group-hover:opacity-100">{person.content}</p>
                    <div className="flex gap-6 mt-auto">
                      {person.email && <a href={`mailto:${person.email}`} className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-cyan-400 transition-colors">Email</a>}
                      {person.github && <a href={person.github} target="_blank" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-cyan-400 transition-colors">GitHub</a>}
                      {person.website && <a href={person.website} target="_blank" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-cyan-400 transition-colors">Website</a>}
                      {person.orcid && <a href={`https://orcid.org/${person.orcid}`} target="_blank" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-cyan-400 transition-colors">ORCID</a>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
