import { getContentData } from "@/lib/content";

export default function PeoplePage() {
  const people = getContentData("people");

  const categories = [
    { id: "faculty", label: "Faculty / Group Leaders" },
    { id: "postdocs", label: "Postdoctoral Researchers" },
    { id: "phd", label: "PhD Researchers" },
    { id: "masters", label: "MSc Students" },
    { id: "bachelors", label: "BSc Students" },
    { id: "alumni", label: "Alumni / Former Members" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-20">
         <h1 className="text-6xl font-bold text-foreground mb-4 tracking-tighter">Our Team</h1>
         <p className="text-slate-500 max-w-2xl text-lg font-medium">A global group of scientists dedicated to solving the C-F bond challenge through interdisciplinary innovation.</p>
      </div>
      
      <div className="space-y-32">
        {categories.map((cat) => {
          const catPeople = people.filter((p: any) => p.category === cat.id);

          if (catPeople.length === 0) return null;

          return (
            <section key={cat.id}>
              <h2 className="text-[11px] font-black text-cyan-500 mb-12 pb-4 border-b border-white/5 uppercase tracking-[0.4em]">
                {cat.label}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {catPeople.map((person: any) => (
                  <div key={person.id} className="glass-panel p-10 rounded-[40px] super-card-hover flex flex-col items-center text-center group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {person.avatar && (
                      <a 
                        href={person.website || person.github || person.scholar || `mailto:${person.email}`} 
                        target="_blank" 
                        className="w-40 h-36 rounded-[30px] overflow-hidden mb-8 border-2 border-white/10 dark:border-white/5 group-hover:border-cyan-500/40 transition-all duration-500 block relative group/avatar shadow-2xl bg-slate-900"
                        title={`View ${person.name}'s profile`}
                      >
                        <img 
                          src={person.avatar} 
                          alt={person.name} 
                          decoding="async"
                          loading="lazy"
                          className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                        />
                        <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
                           <span className="text-[8px] font-black text-white uppercase tracking-widest bg-cyan-500/80 px-2 py-1 rounded">View Profile</span>
                        </div>
                      </a>
                    )}
                    <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-cyan-500 transition-colors tracking-tight">{person.name}</h3>
                    <p className="text-emerald-500 text-[9px] mb-6 font-black uppercase tracking-[0.25em]">{person.role}</p>
                    
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                      {person.tags?.map((tag: string) => (
                        <span key={tag} className="text-[9px] uppercase tracking-widest font-black px-3 py-1 rounded-md bg-white/5 text-slate-500 border border-white/5 group-hover:border-cyan-500/10 group-hover:text-cyan-500 transition-all">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-slate-500 text-sm line-clamp-3 mb-10 leading-relaxed font-medium italic opacity-80 group-hover:opacity-100">{person.content}</p>
                    
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-auto">
                      {person.email && <a href={`mailto:${person.email}`} className="text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-cyan-400 transition-colors">Email</a>}
                      {person.github && <a href={person.github} target="_blank" className="text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-cyan-400 transition-colors">GitHub</a>}
                      {person.website && <a href={person.website} target="_blank" className="text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-cyan-400 transition-colors">Website</a>}
                      {person.orcid && <a href={`https://orcid.org/${person.orcid}`} target="_blank" className="text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-cyan-400 transition-colors">ORCID</a>}
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
