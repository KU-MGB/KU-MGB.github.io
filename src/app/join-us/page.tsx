"use client";

import { useState } from "react";
import { Mail, Send, Paperclip, CheckCircle2 } from "lucide-react";

export default function JoinUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "PhD Candidate",
    message: "",
  });
  const [fileAttached, setFileAttached] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Application for MGB Lab: ${formData.role} - ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Tue, Shaban, and Asal,\n\nI am writing to express my interest in joining the MGB Lab as a ${formData.role}.\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n[Note: Please remember to attach your CV/Cover Letter to this email before sending]\n\nBest regards,\n${formData.name}`
    );
    window.location.href = `mailto:shaban@plen.ku.dk,tue@plen.ku.dk,asal.f@plen.ku.dk?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="sticky top-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-[10px] font-black uppercase tracking-widest mb-6">
             Opportunities 2026
          </div>
          <h1 className="text-6xl font-bold text-foreground mb-8 leading-[1.1]">Join the <span className="text-cyan-500">MGB Lab</span></h1>
          <p className="text-xl text-slate-500 leading-relaxed mb-12 max-w-xl">
            We are pioneering the future of environmental biotechnology. Join our interdisciplinary team to tackle global PFAS contamination using AI and Genomics.
          </p>
          
          <div className="space-y-8">
            {[
               { title: "BSc & MSc Projects", desc: "Gain hands-on experience in metagenomics and bioinformatics." },
               { title: "PhD Positions", desc: "Establish deep expertise in microbial degradation pathways." },
               { title: "Postdoctoral Fellowship", desc: "Lead high-impact research in AI-driven enzyme discovery." }
            ].map((item, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                   <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                </div>
                <div>
                   <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                   <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel p-12 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <h2 className="text-3xl font-bold text-foreground mb-10">Application Inquiry</h2>
          
          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-black mb-3">Full Name</label>
                <input 
                    type="text" 
                    required
                    className="w-full bg-foreground/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-foreground focus:outline-none focus:border-cyan-500 transition-all font-medium placeholder:text-slate-600"
                    placeholder="E.g. Dr. Shaban Ahmad"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                </div>
                <div>
                <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-black mb-3">Interested Role</label>
                <select 
                    className="w-full bg-foreground/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-foreground focus:outline-none focus:border-cyan-500 transition-all font-medium appearance-none"
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                >
                    <option value="BSc Student">BSc Student</option>
                    <option value="MSc Student">MSc Student</option>
                    <option value="PhD Candidate">PhD Candidate</option>
                    <option value="Postdoc">Postdoctoral Researcher</option>
                    <option value="Exchange Scholar">Exchange Scholar</option>
                </select>
                </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-black mb-3">Statement of Interest</label>
              <textarea 
                required
                rows={4}
                className="w-full bg-foreground/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-foreground focus:outline-none focus:border-cyan-500 transition-all font-medium placeholder:text-slate-600 resize-none"
                placeholder="Briefly describe your background and why you want to join our lab..."
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <div>
               <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-black mb-3">CV & Documents</label>
               <div className="flex items-center gap-4">
                  <label className={`flex-1 flex items-center justify-center gap-3 border-2 border-dashed rounded-2xl py-8 cursor-pointer transition-all ${fileAttached ? 'border-emerald-500 bg-emerald-500/5' : 'border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5'}`}>
                      <input 
                        type="file" 
                        className="hidden" 
                        onChange={() => setFileAttached(true)}
                        multiple
                      />
                      {fileAttached ? (
                        <><CheckCircle2 className="text-emerald-500" size={20} /> <span className="text-emerald-500 font-bold text-sm">Files Ready to Attach</span></>
                      ) : (
                        <><Paperclip className="text-slate-500" size={20} /> <span className="text-slate-500 font-bold text-sm text-center px-4">Click to select CV / Cover Letter</span></>
                      )}
                  </label>
               </div>
               <p className="text-[9px] text-slate-600 mt-3 uppercase tracking-wider font-bold">
                  The form will prepare an email. You must attach your files in your email app.
               </p>
            </div>

            <button 
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-[0_15px_30px_rgba(6,182,212,0.3)] hover:scale-[1.02] active:scale-95 text-sm uppercase tracking-widest"
            >
              Send Application Inquiry <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
