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
                  <div key={person.id} className="glass-panel p-6 rounded-xl hover:bg-white/[0.03] transition-all flex flex-col items-center text-center">
                    {person.avatar && (
                      <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-cyan-500/20">
                        <img 
                          src={person.avatar} 
                          alt={person.name} 
                          decoding="async"
                          loading="lazy"
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                        />
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-white mb-1">{person.name}</h3>
                    <p className="text-emerald-400 text-sm mb-4 font-medium uppercase tracking-wider">{person.role}</p>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {person.tags?.map((tag: string) => (
                        <span key={tag} className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-400 text-sm line-clamp-3 mb-6">{person.content}</p>
                    <div className="flex gap-4 mt-auto">
                      {person.email && <a href={`mailto:${person.email}`} className="text-[10px] font-bold uppercase tracking-widest text-cyan-500 hover:text-white transition-colors">Email</a>}
                      {person.github && <a href={person.github} target="_blank" className="text-[10px] font-bold uppercase tracking-widest text-cyan-500 hover:text-white transition-colors">GitHub</a>}
                      {person.website && <a href={person.website} target="_blank" className="text-[10px] font-bold uppercase tracking-widest text-cyan-500 hover:text-white transition-colors">Site</a>}
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
