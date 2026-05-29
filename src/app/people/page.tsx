import { getContentData } from "@/lib/content";

export default function PeoplePage() {
  const people = getContentData("people");

  const categories = ["Faculty", "Postdocs", "PhD", "Masters", "Bachelors", "Alumni"];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-white mb-12">Our Team</h1>
      
      <div className="space-y-20">
        {categories.map((cat) => {
          const catPeople = people.filter((p: any) => 
            p.role?.toLowerCase().includes(cat.toLowerCase()) || 
            (cat === "PhD" && p.role?.toLowerCase().includes("phd"))
          );

          if (catPeople.length === 0) return null;

          return (
            <section key={cat}>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-8 pb-2 border-b border-white/5">
                {cat}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {catPeople.map((person: any) => (
                  <div key={person.id} className="glass-panel p-6 rounded-xl hover:bg-white/[0.03] transition-all">
                    <h3 className="text-xl font-bold text-white mb-1">{person.name}</h3>
                    <p className="text-emerald-400 text-sm mb-4 font-medium">{person.role}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {person.tags?.map((tag: string) => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-400 text-sm line-clamp-3 mb-4">{person.content}</p>
                    <div className="flex gap-4">
                      {person.email && <a href={`mailto:${person.email}`} className="text-xs text-cyan-500 hover:underline">Email</a>}
                      {person.github && <a href={person.github} className="text-xs text-cyan-500 hover:underline">GitHub</a>}
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
