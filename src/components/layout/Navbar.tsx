"use client";

import Link from "next/link";
import { Search, Globe, Moon, Sun, ChevronDown } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";
import { useState } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [langOpen, setLangOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5 dark:border-white/5 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="MGB Lab Logo" className="h-10 w-auto group-hover:rotate-[360deg] transition-transform duration-1000" />
          <div className="flex flex-col leading-tight">
            <span className="font-bold tracking-[0.3em] text-foreground uppercase">MGB LAB</span>
            <span className="text-[8px] font-black text-cyan-500 uppercase tracking-widest">PLEN • KU</span>
          </div>
        </Link>
        
        <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
          <Link href="/research" className="hover:text-cyan-500 transition-colors">Research</Link>
          <Link href="/publications" className="hover:text-cyan-500 transition-colors">Publications</Link>
          <Link href="/people" className="hover:text-cyan-500 transition-colors">People</Link>
          <Link href="/projects" className="hover:text-cyan-500 transition-colors">Projects</Link>
          <Link href="/news" className="hover:text-cyan-500 transition-colors">News</Link>
        </div>

        <div className="flex items-center gap-6">
          {/* Utility Bar */}
          <div className="hidden sm:flex items-center gap-5 border-r border-white/10 dark:border-white/10 pr-6">
             <button className="text-slate-500 hover:text-cyan-500 transition-colors cursor-pointer">
                <Search size={18} strokeWidth={2.5} />
             </button>
             
             <div className="relative">
                <button 
                  onClick={() => setLangOpen(!langOpen)}
                  className="text-slate-500 hover:text-cyan-500 transition-colors flex items-center gap-1 cursor-pointer"
                >
                    <Globe size={18} strokeWidth={2.5} />
                    <span className="text-[10px] font-black">EN</span>
                    <ChevronDown size={10} className={`${langOpen ? 'rotate-180' : ''} transition-transform`} />
                </button>
                {langOpen && (
                  <div className="absolute top-full right-0 mt-4 w-48 glass-panel rounded-2xl py-3 overflow-hidden shadow-2xl animate-fade-in border border-white/10 max-h-[400px] overflow-y-auto custom-scrollbar">
                    {[
                      { code: "EN", name: "English" },
                      { code: "DA", name: "Dansk" },
                      { code: "AR", name: "العربية" },
                      { code: "HI", name: "हिन्दी" },
                      { code: "ES", name: "Español" },
                      { code: "FR", name: "Français" },
                      { code: "DE", name: "Deutsch" },
                      { code: "ZH", name: "中文" },
                      { code: "UR", name: "اردو" },
                      { code: "RU", name: "Русский" },
                      { code: "JA", name: "日本語" }
                    ].map((lang) => (
                      <button key={lang.code} className="w-full text-left px-5 py-2.5 text-[11px] font-bold text-foreground hover:bg-cyan-500 hover:text-slate-950 transition-colors flex justify-between items-center group/lang">
                        <span>{lang.name}</span>
                        <span className="text-[9px] opacity-50 group-hover/lang:opacity-100">{lang.code}</span>
                      </button>
                    ))}
                  </div>
                )}
             </div>

             <button 
                onClick={toggleTheme}
                className="text-slate-500 hover:text-cyan-500 transition-colors cursor-pointer"
             >
                {theme === "dark" ? <Sun size={18} strokeWidth={2.5} /> : <Moon size={18} strokeWidth={2.5} />}
             </button>
          </div>
          
          <Link href="/join-us" className="px-6 py-3 rounded-full bg-foreground text-background text-[10px] font-black uppercase tracking-[0.2em] hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-lg hover:shadow-cyan-500/20 active:scale-95">
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  )
}
