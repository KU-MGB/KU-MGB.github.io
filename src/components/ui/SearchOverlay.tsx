"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search as SearchIcon, X, Command } from "lucide-react";
import { useEffect, useState } from "react";

export default function SearchOverlay({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-background/80 dark:bg-slate-950/90 backdrop-blur-xl flex items-start justify-center pt-[15vh] px-6"
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="w-full max-w-2xl glass-panel rounded-[40px] p-8 shadow-2xl relative"
          >
            <button onClick={onClose} className="absolute top-6 right-8 text-slate-500 hover:text-foreground transition-colors cursor-pointer">
               <X size={24} />
            </button>
            
            <div className="flex items-center gap-4 mb-8 border-b border-slate-200 dark:border-white/5 pb-6">
               <SearchIcon className="text-cyan-500" size={28} />
               <input 
                  autoFocus
                  type="text"
                  placeholder="Search research, publications, people..."
                  className="bg-transparent border-none text-2xl font-bold text-foreground focus:outline-none w-full placeholder:text-slate-400 dark:placeholder:text-slate-700"
                  onChange={(e) => setQuery(e.target.value)}
               />
            </div>

            <div className="space-y-4">
               <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">Quick Links</p>
               <div className="grid grid-cols-2 gap-4">
                  {["PFAS Defluorination", "Microbial Genomics", "Postdoc Positions", "Tue Kjærgaard Nielsen"].map(link => (
                     <button key={link} className="text-left px-6 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-300">
                        {link}
                     </button>
                  ))}
               </div>
            </div>

            <div className="mt-12 flex items-center gap-2 text-slate-400 dark:text-slate-600">
               <Command size={14} />
               <span className="text-[10px] font-bold uppercase tracking-widest">Press Esc to close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
