"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/locale/LocaleProvider";
import { Mail, GitBranch, Globe2, ExternalLink } from "lucide-react";

export default function PeopleGrid({ people }: { people: any[] }) {
  const { t } = useLocale();

  const categories = [
    { id: "faculty", label: t("people.categories.faculty") },
    { id: "postdocs", label: t("people.categories.postdocs") },
    { id: "phd", label: t("people.categories.phd") },
    { id: "masters", label: t("people.categories.masters") },
    { id: "bachelors", label: t("people.categories.bachelors") },
    { id: "alumni", label: t("people.categories.alumni") },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-20">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-6xl font-bold text-foreground mb-4 tracking-tighter">{t("people.title")}</h1>
            <p className="text-slate-500 max-w-2xl text-lg font-medium leading-relaxed">{t("people.description")}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <a key={cat.id} href={`#${cat.id}`} className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-slate-300 hover:bg-cyan-500/15 hover:text-cyan-300 transition-all">
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-28">
        {categories.map((cat) => {
          const catPeople = people.filter((person) => person.category === cat.id);
          if (catPeople.length === 0) return null;

          return (
            <section key={cat.id} id={cat.id} className="scroll-mt-24">
              <h2 className="text-[11px] font-black text-cyan-500 mb-8 pb-4 border-b border-white/5 uppercase tracking-[0.4em]">
                {cat.label}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {catPeople.map((person) => (
                  <motion.div
                    key={person.id}
                    whileHover={{ y: -8 }}
                    className="glass-panel p-10 rounded-[40px] border border-white/10 bg-slate-950/80 shadow-xl transition-all duration-500"
                  >
                    {person.avatar ? (
                      <div className="relative mx-auto mb-8 w-40 h-40 rounded-[36px] overflow-hidden border border-white/10 shadow-2xl">
                        <img
                          src={person.avatar}
                          alt={person.name}
                          decoding="async"
                          loading="lazy"
                          className="w-full h-full object-cover grayscale transition duration-700 hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent" />
                      </div>
                    ) : null}

                    <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">{person.name}</h3>
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-[9px] font-black uppercase tracking-[0.25em] text-cyan-300 mb-6">
                      {person.role}
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-4">{person.content}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {person.tags?.map((tag: string) => (
                        <span key={tag} className="text-[9px] uppercase tracking-widest font-black px-3 py-1 rounded-md bg-white/5 text-slate-400 border border-white/5 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-[10px] font-black uppercase tracking-[0.28em] text-slate-400">
                      {person.email && (
                        <a href={`mailto:${person.email}`} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 hover:border-cyan-500/30 hover:text-cyan-300 transition-all">
                          <Mail size={12} /> {t("people.contact.email")}
                        </a>
                      )}
                      {person.github && (
                        <a href={person.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 hover:border-cyan-500/30 hover:text-cyan-300 transition-all">
                          <GitBranch size={12} /> {t("people.contact.github")}
                        </a>
                      )}
                      {person.website && (
                        <a href={person.website} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 hover:border-cyan-500/30 hover:text-cyan-300 transition-all">
                          <ExternalLink size={12} /> {t("people.contact.website")}
                        </a>
                      )}
                      {person.orcid && (
                        <a href={`https://orcid.org/${person.orcid}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 hover:border-cyan-500/30 hover:text-cyan-300 transition-all">
                          <Globe2 size={12} /> ORCID
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
