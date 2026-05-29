import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MGB | Microbial Genomics and Biodegradation",
  description: "Advancing PFAS Defluorination and Environmental Biotechnology through modern computational biology.",
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

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center">
            <span className="font-bold text-slate-950 text-sm">M</span>
          </div>
          <span className="font-bold tracking-tight text-xl tracking-widest text-white">MGB</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-cyan-400 transition-colors">Research</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Publications</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">People</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Projects</a>
        </div>
        <div>
          <a href="#" className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium transition-all">
            Join Us
          </a>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/5 mt-32 py-12 glass-panel">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <span className="font-bold text-white tracking-widest">MGB INSTITUTE</span>
        </div>
        <p className="text-slate-500 text-sm text-center md:text-left">
          Microbial Genomics and Biodegradation Research Group &copy; {new Date().getFullYear()}
        </p>
        <div className="flex gap-4 text-slate-400">
          <a href="https://github.com/KU-MGB" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
