"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function JoinUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "PhD Candidate",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Application for MGB Lab: ${formData.role} - ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Tue, Shaban, and Asal,\n\nI am writing to express my interest in joining the MGB Lab as a ${formData.role}.\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    window.location.href = `mailto:shaban@plen.ku.dk,tue@plen.ku.dk,asal.f@plen.ku.dk?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-5xl font-bold text-white mb-8">Join the MGB Lab</h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-8">
            We are always looking for talented and motivated researchers to join our mission of engineering microbial futures. 
          </p>
          <div className="space-y-6 text-slate-400">
            <p>We are currently welcoming applications for:</p>
            <ul className="list-disc pl-6 space-y-2 text-cyan-400 font-medium">
              <li>BSc & MSc Thesis Students</li>
              <li>PhD Researchers (Local & Exchange)</li>
              <li>Postdoctoral Scientists</li>
              <li>Visiting Scholars</li>
            </ul>
            <p className="pt-4 italic text-sm">
              If you have a background in Genomics, AI, Bioinformatics, or Environmental Microbiology, we want to hear from you.
            </p>
          </div>
        </div>

        <div className="glass-panel p-10 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full" />
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Mail className="text-cyan-500" /> Get In Touch
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Full Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="Dr. John Smith"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Interested Role</label>
              <select 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors appearance-none"
                onChange={(e) => setFormData({...formData, role: e.target.value})}
              >
                <option value="BSc Student">BSc Student</option>
                <option value="MSc Student">MSc Student</option>
                <option value="PhD Candidate" selected>PhD Candidate</option>
                <option value="Postdoc">Postdoctoral Researcher</option>
                <option value="Visiting Researcher">Visiting Researcher</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Brief Interest Statement</label>
              <textarea 
                required
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="Tell us why you feel you are a fit for the lab..."
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            >
              Prepare Application Email <Send size={18} />
            </button>
            <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest pt-2">
              Note: Clicking will open your default email app
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
