import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MGB Lab | Microbial Genomics and Biodegradation",
  description: "Microbial Genomics and Biodegradation Lab @ PLEN, University of Copenhagen. Advancing PFAS Defluorination and Environmental Biotechnology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-slate-950 text-slate-50 selection:bg-cyan-500/30">
        {/* Cinematic Ambient Glow */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/10 blur-[120px] rounded-full" />
        </div>
        
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import Link from "next/link";
import { Search, Globe, Moon } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="MGB Lab Logo" className="h-10 w-auto group-hover:scale-110 transition-transform duration-500" />
          <span className="font-bold tracking-tight text-xl tracking-widest text-white uppercase">MGB</span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
          <Link href="/research" className="hover:text-cyan-400 transition-colors">Research</Link>
          <Link href="/publications" className="hover:text-cyan-400 transition-colors">Publications</Link>
          <Link href="/people" className="hover:text-cyan-400 transition-colors">People</Link>
          <Link href="/projects" className="hover:text-cyan-400 transition-colors">Projects</Link>
          <Link href="/news" className="hover:text-cyan-400 transition-colors">News</Link>
        </div>

        <div className="flex items-center gap-6">
          {/* Utility Bar */}
          <div className="hidden sm:flex items-center gap-4 border-r border-white/10 pr-6">
             <button className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                <Search size={16} />
             </button>
             <button className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
                <Globe size={16} />
                <span className="text-[10px] font-bold">EN</span>
             </button>
             <button className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                <Moon size={16} />
             </button>
          </div>
          
          <Link href="/join-us" className="px-5 py-2.5 rounded-full bg-cyan-500 text-slate-950 text-[11px] font-bold uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/5 mt-32 py-12 glass-panel">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-1">
          <span className="font-bold text-white tracking-widest uppercase">MGB LAB</span>
          <span className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">Department of Plant and Environmental Sciences</span>
        </div>
        <p className="text-slate-500 text-sm text-center md:text-left">
          Microbial Genomics and Biodegradation @ PLEN, KU &copy; {new Date().getFullYear()}
        </p>
        <div className="flex gap-4 text-slate-400">
          <a href="https://github.com/KU-MGB" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
