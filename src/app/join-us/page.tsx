"use client";

import { useState } from "react";
import { Mail, Send, Paperclip, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function JoinUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "PhD Candidate",
    message: "",
  });
  const [fileAttached, setFileAttached] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Construct the submission data
    // Note: To make this fully functional, the user should replace 'FORM_ID' 
    // with their Formspree ID (e.g., https://formspree.io/f/xyza123)
    const formEndpoint = "https://formspree.io/f/YOUR_FORMSPREE_ID";

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("role", formData.role);
      data.append("message", formData.message);
      if (fileAttached) {
        data.append("attachment", fileAttached);
      }

      // We'll simulate a success for now since we don't have a real ID, 
      // but the code is ready for the real endpoint.
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // If using a real endpoint, use:
      /*
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) setStatus("success"); else setStatus("error");
      */
      
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="sticky top-32 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-[10px] font-black uppercase tracking-widest mb-6 mx-auto lg:mx-0">
             Opportunities 2026
          </div>
          <h1 className="text-6xl font-bold text-foreground mb-8 leading-[1.1]">Join the <span className="text-cyan-500 font-black">MGB Lab</span></h1>
          <p className="text-xl text-slate-500 leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0 font-medium">
            We are pioneering the future of environmental biotechnology. Join our interdisciplinary team to tackle global PFAS contamination using AI and Genomics.
          </p>
          
          <div className="space-y-8 max-w-lg mx-auto lg:mx-0">
            {[
               { title: "BSc & MSc Projects", desc: "Gain hands-on experience in metagenomics and bioinformatics." },
               { title: "PhD Positions", desc: "Establish deep expertise in microbial degradation pathways." },
               { title: "Postdoctoral Fellowship", desc: "Lead high-impact research in AI-driven enzyme discovery." }
            ].map((item, i) => (
              <div key={i} className="flex gap-5 items-start text-left">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
                   <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                </div>
                <div>
                   <h4 className="font-bold text-foreground text-lg mb-1 uppercase tracking-tight">{item.title}</h4>
                   <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel p-8 md:p-14 rounded-[50px] relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-500/20">
                   <CheckCircle2 size={48} className="text-emerald-500" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Application Received</h2>
                <p className="text-slate-500 max-w-xs mx-auto font-medium">Thank you for your interest. Tue, Shaban, and Asal will review your profile and get back to you shortly.</p>
                <button 
                   onClick={() => setStatus("idle")}
                   className="mt-10 text-[10px] font-black uppercase tracking-widest text-cyan-500 hover:text-foreground transition-colors"
                >
                   Send another inquiry
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-10 flex items-center gap-4">
                  <span className="w-12 h-1 bg-cyan-500 rounded-full" /> Direct Application
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                      <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-black mb-3">Full Name</label>
                      <input 
                          type="text" 
                          required
                          disabled={status === "submitting"}
                          className="w-full bg-foreground/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-foreground focus:outline-none focus:border-cyan-500 transition-all font-medium placeholder:text-slate-600 disabled:opacity-50"
                          placeholder="Dr. Shaban Ahmad"
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                      </div>
                      <div>
                      <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-black mb-3">Your Email Address</label>
                      <input 
                          type="email" 
                          required
                          disabled={status === "submitting"}
                          className="w-full bg-foreground/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-foreground focus:outline-none focus:border-cyan-500 transition-all font-medium placeholder:text-slate-600 disabled:opacity-50"
                          placeholder="shaban@plen.ku.dk"
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                      </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                    <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-black mb-3">Interested Role</label>
                    <div className="relative">
                      <select 
                          className="w-full bg-foreground/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-foreground focus:outline-none focus:border-cyan-500 transition-all font-medium appearance-none disabled:opacity-50"
                          disabled={status === "submitting"}
                          onChange={(e) => setFormData({...formData, role: e.target.value})}
                      >
                          <option value="BSc Student" className="bg-background text-foreground">BSc Student</option>
                          <option value="MSc Student" className="bg-background text-foreground">MSc Student</option>
                          <option value="PhD Candidate" className="bg-background text-foreground">PhD Candidate</option>
                          <option value="Postdoc" className="bg-background text-foreground">Postdoctoral Researcher</option>
                          <option value="Exchange Scholar" className="bg-background text-foreground">Exchange Scholar</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                         <Send size={12} className="rotate-90" />
                      </div>
                    </div>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-black mb-3">Upload CV (Optional)</label>
                      <label className={`flex items-center justify-between gap-3 border-2 border-dashed rounded-2xl px-5 py-3 cursor-pointer transition-all ${fileAttached ? 'border-emerald-500 bg-emerald-500/5' : 'border-slate-200 dark:border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5'} ${status === "submitting" ? "pointer-events-none opacity-50" : ""}`}>
                          <input 
                            type="file" 
                            className="hidden" 
                            onChange={(e) => setFileAttached(e.target.files?.[0] || null)}
                          />
                          <span className="text-[11px] font-bold text-slate-500 truncate max-w-[150px]">
                            {fileAttached ? fileAttached.name : "Select File"}
                          </span>
                          {fileAttached ? <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> : <Paperclip size={16} className="text-slate-500 shrink-0" />}
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-black mb-3">Statement of Interest</label>
                    <textarea 
                      required
                      rows={4}
                      disabled={status === "submitting"}
                      className="w-full bg-foreground/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-foreground focus:outline-none focus:border-cyan-500 transition-all font-medium placeholder:text-slate-600 resize-none disabled:opacity-50"
                      placeholder="Briefly describe your background and why you want to join our lab..."
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-foreground text-background hover:bg-cyan-500 hover:text-slate-950 font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-[0_15px_30px_rgba(0,0,0,0.1)] dark:shadow-cyan-500/10 hover:scale-[1.01] active:scale-95 text-sm uppercase tracking-[0.2em] disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <><Loader2 className="animate-spin" size={18} /> Processing...</>
                    ) : (
                      <><Send size={18} /> Submit Application</>
                    )}
                  </button>

                  {status === "error" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-500 text-[10px] font-bold uppercase tracking-widest justify-center">
                       <AlertCircle size={14} /> Something went wrong. Please try again.
                    </motion.div>
                  )}
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
