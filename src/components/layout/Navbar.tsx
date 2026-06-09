"use client";

import Link from "next/link";
import { Search, Globe, Moon, Sun, ChevronDown, Menu, X } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";
import { useLocale } from "@/components/locale/LocaleProvider";
import { languageNames } from "@/lib/i18n";
import { useState, useEffect } from "react";
import SearchOverlay from "@/components/ui/SearchOverlay";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { locale, localeLabel, t, setLocale } = useLocale();
  const [langOpen, setLangOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const navLinks = [
    { href: "/research", label: t("nav.research") },
    { href: "/publications", label: t("nav.publications") },
    { href: "/people", label: t("nav.people") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/news", label: t("nav.news") },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white dark:bg-background border-b border-slate-200 dark:border-slate-800/50 shadow-sm ${scrolled ? 'h-16' : 'h-24'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="MGB Lab Logo" className="h-10 w-auto group-hover:rotate-[360deg] transition-transform duration-1000" />
            <div className="flex flex-col leading-tight">
              <span className="font-bold tracking-[0.3em] text-foreground uppercase">MGB LAB</span>
              <span className="text-[8px] font-black text-cyan-500 uppercase tracking-widest">PLEN • KU</span>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
            {navLinks.map(link => (
               <Link key={link.href} href={link.href} className="hover:text-cyan-500 transition-colors relative group/link">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-500 transition-all group-hover/link:w-full" />
               </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            {/* Utility Bar */}
            <div className="hidden sm:flex items-center gap-5 border-r border-slate-200 dark:border-white/10 pr-6">
               <button onClick={() => setSearchOpen(true)} className="text-slate-500 hover:text-cyan-500 transition-colors cursor-pointer p-2">
                  <Search size={18} strokeWidth={2.5} />
               </button>
               
               <div className="relative">
                  <button 
                    onClick={() => setLangOpen(!langOpen)}
                    className="text-slate-500 hover:text-cyan-500 transition-colors flex items-center gap-1 cursor-pointer p-2"
                    aria-label={t("nav.language")}
                  >
                      <Globe size={18} strokeWidth={2.5} />
                      <span className="text-[10px] font-black">{localeLabel}</span>
                      <ChevronDown size={10} className={`${langOpen ? 'rotate-180' : ''} transition-transform`} />
                  </button>
                  {langOpen && (
                    <div className="absolute top-full right-0 mt-4 w-48 glass-panel rounded-2xl py-3 overflow-hidden shadow-2xl animate-fade-in">
                      {[
                        { code: "en", name: languageNames.en },
                        { code: "da", name: languageNames.da }
                      ].map((lang) => (
                        <button 
                          key={lang.code}
                          onClick={() => {
                            setLocale(lang.code as any);
                            setLangOpen(false);
                          }}
                          className="w-full text-left px-5 py-2.5 text-[11px] font-bold text-foreground hover:bg-cyan-500 hover:text-slate-950 transition-colors flex justify-between items-center"
                        >
                          <span>{lang.name}</span>
                          <span className="text-[9px] opacity-50">{lang.code.toUpperCase()}</span>
                        </button>
                      ))}
                    </div>
                  )}
               </div>

               <button 
                  onClick={toggleTheme}
                  className="text-slate-500 hover:text-cyan-500 transition-colors cursor-pointer p-2"
               >
                  {theme === "dark" ? <Sun size={18} strokeWidth={2.5} /> : <Moon size={18} strokeWidth={2.5} />}
               </button>
            </div>
            
            <Link href="/join-us" className="hidden sm:flex px-6 py-3 rounded-full bg-foreground text-background text-[10px] font-black uppercase tracking-[0.2em] hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-lg hover:shadow-cyan-500/20 active:scale-95">
              {t("nav.joinUs")}
            </Link>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-slate-500 hover:text-foreground cursor-pointer">
               {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
            <div className={`lg:hidden fixed inset-0 ${scrolled ? 'top-16' : 'top-24'} bg-background z-40 p-8 flex flex-col gap-8 animate-fade-in overflow-y-auto`}>
              {navLinks.map(link => (
                  <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold text-foreground hover:text-cyan-500 transition-colors">
                    {link.label}
                 </Link>
              ))}
               <div className="h-[1px] bg-foreground/10 w-full" />
              <div className="flex flex-wrap gap-4">
                  <button onClick={toggleTheme} className="p-4 rounded-2xl bg-foreground/5 text-foreground flex items-center gap-3 w-full cursor-pointer">
                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />} 
                    <span className="font-bold text-sm uppercase tracking-widest">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                 </button>
                 <Link href="/join-us" onClick={() => setMobileMenuOpen(false)} className="p-4 rounded-2xl bg-cyan-500 text-slate-950 font-black text-center w-full uppercase tracking-widest text-sm">
                    Join Us Today
                 </Link>
              </div>
           </div>
        )}
      </nav>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
