import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Navbar from "@/components/layout/Navbar";

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
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body className="antialiased selection:bg-cyan-500/30">
        <ThemeProvider>
          {/* Cinematic Ambient Glow */}
          <div className="fixed inset-0 z-[-1] pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/10 dark:bg-cyan-900/10 blur-[120px] rounded-full" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/10 dark:bg-emerald-900/10 blur-[120px] rounded-full" />
          </div>
          
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 dark:border-white/5 mt-32 py-12 glass-panel">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <span className="font-bold text-foreground tracking-widest uppercase">MGB LAB</span>
          <span className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">Department of Plant and Environmental Sciences</span>
        </div>
        <p className="text-slate-500 text-sm text-center md:text-left">
          Microbial Genomics and Biodegradation @ PLEN, KU &copy; {new Date().getFullYear()}
        </p>
        <div className="flex gap-4 text-slate-400">
          <a href="https://github.com/KU-MGB" target="_blank" className="hover:text-cyan-500 transition-colors">GitHub</a>
          <a href="/join-us" className="hover:text-cyan-500 transition-colors">Join Us</a>
        </div>
      </div>
    </footer>
  )
}
