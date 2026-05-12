/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Brain, 
  Layers, 
  Terminal,
  ArrowRight,
  MapPin,
  Calendar,
  Briefcase
} from "lucide-react";
import { RESUME_DATA } from "./constants.ts";

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-orange-500 selection:text-white">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Summary />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center border-b border-white/10 bg-zinc-950/30 px-6 py-4 backdrop-blur-xl backdrop-saturate-150 md:px-12 md:py-5">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-2xl tracking-tighter text-zinc-100"
      >
        SYED <span className="text-orange-600">.</span> ARSAL
      </motion.div>
      
      <div className="flex gap-8 items-center text-xs font-medium uppercase tracking-[0.2em] font-technical text-zinc-400">
        {["Projects", "Skills", "Experience", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hidden transition-colors hover:text-zinc-100 md:block">
            {item}
          </a>
        ))}
        <div className="ml-4 flex gap-4 text-zinc-300">
          <a href={RESUME_DATA.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-orange-500">
            <Github size={18} />
          </a>
          <a href={RESUME_DATA.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-orange-500">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
}

const HERO_PROFILE_SRC = "/profile-hero.png";
const HERO_PROFILE_MOBILE_SRC = "/profile-hero-mobile.png";

function Hero() {
  return (
    <section className="relative flex h-dvh min-h-0 flex-col overflow-hidden bg-black">
      {/* Mobile: portrait asset (full bleed, top-weighted crop). md+: landscape hero + top inset */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black" aria-hidden>
        <img
          src={HERO_PROFILE_MOBILE_SRC}
          alt=""
          className="absolute bottom-0 left-0 right-0 top-0 h-full min-h-full w-full object-cover object-top md:hidden"
          loading="eager"
        />
        <img
          src={HERO_PROFILE_SRC}
          alt=""
          className="absolute bottom-0 left-0 right-0 top-0 hidden h-full min-h-full w-full object-cover object-center md:block md:top-14 md:object-[center_58%] lg:top-11 lg:object-[center_54%] xl:top-9 xl:object-[center_52%]"
          loading="eager"
        />
        <div className="absolute inset-y-0 left-0 hidden w-1/2 bg-gradient-to-r from-black/70 to-transparent md:block" />
      </div>

      {/* Mobile: strong bottom fade so role line + name read on the portrait */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[min(72dvh,85%)] bg-gradient-to-t from-black from-[8%] via-black/92 via-[42%] to-transparent md:hidden"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-0 w-full flex-1 flex-col justify-end gap-8 px-6 pb-8 max-md:pb-[max(1.5rem,env(safe-area-inset-bottom))] md:grid md:grid-cols-2 md:items-end md:gap-12 md:px-12 md:pb-12">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-xs md:text-sm font-technical tracking-[0.2em] uppercase text-orange-500 font-bold">
              <span className="w-8 h-px bg-orange-500" />
              Computer Science Graduate
            </div>
            <h2 className="font-display text-6xl md:text-[120px] leading-[0.9] tracking-tighter uppercase max-w-2xl">
              {RESUME_DATA.name}
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#111]/90 p-6 backdrop-blur-md md:p-8"
        >
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-md">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500">Location</p>
              <p className="font-technical text-sm uppercase italic">{RESUME_DATA.location}</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-md">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500">Status</p>
              <p className="font-technical text-sm uppercase italic">Available for Hire</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Summary() {
  return (
    <section className="px-6 md:px-12 py-32 border-y border-white/5 bg-[#080808]">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <h3 className="text-xs uppercase font-technical tracking-[0.4em] text-orange-500 font-bold mb-8">
          The Mission
        </h3>
        <p className="text-4xl md:text-7xl font-sans font-light leading-[1.1] tracking-tight selection:bg-white selection:text-black">
          Syed Ali Arsal is a computer science graduate <span className="text-zinc-600 italic">specializing in machine learning</span> and robust full-stack development, bridging the gap between <span className="text-zinc-400">complex data</span> and <span className="text-white">intuitive user interfaces.</span>
        </p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto mb-20 flex justify-between items-end">
        <div>
          <h3 className="text-xs uppercase font-technical tracking-[0.4em] text-orange-500 font-bold mb-4">
            Featured Work
          </h3>
          <h2 className="text-6xl md:text-8xl font-display uppercase tracking-tighter">
            Selected <br /> Projects
          </h2>
        </div>
        <p className="text-xs font-technical uppercase text-zinc-500 hidden md:block max-w-[200px] leading-relaxed">
          A Curation of engineering challenges solved through code and creativity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[400px]">
        {RESUME_DATA.projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -10 }}
            className={`group relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d] p-8 transition-all hover:border-orange-500/30 md:min-h-0 ${
              index % 3 === 0 ? "md:col-span-8" : "md:col-span-4"
            }`}
          >
            <div className="pointer-events-none absolute inset-0 z-0">
              <img
                src={project.image}
                alt=""
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] from-[5%] via-[#050505]/92 via-[55%] to-[#050505]/35" />
            </div>

            <div className="absolute bottom-0 right-0 z-[1] p-8 opacity-[0.07] transition-opacity group-hover:opacity-[0.14] pointer-events-none">
              <span className="whitespace-nowrap font-display text-9xl uppercase tracking-tighter">0{index + 1}</span>
            </div>

            <div className="relative z-10 flex flex-1 flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                 <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 transition-colors">
                    {index % 4 === 0 ? <Brain size={20} /> : index % 4 === 1 ? <Code2 size={20} /> : index % 4 === 2 ? <Briefcase size={20} /> : <Layers size={20} />}
                 </div>
                 <div className="flex gap-2">
                   {project.tech.slice(0, 2).map(tag => (
                     <span key={tag} className="px-3 py-1 rounded-full bg-black/40 border border-white/10 text-[10px] uppercase font-technical tracking-widest backdrop-blur-sm">{tag}</span>
                   ))}
                 </div>
              </div>
              <h4 className="text-3xl font-display uppercase tracking-tight mb-2 drop-shadow-md">{project.title}</h4>
              <p className="text-orange-500 text-xs font-technical uppercase tracking-widest font-bold mb-4 italic drop-shadow">{project.subtitle}</p>
              <p className="text-zinc-300 text-sm leading-relaxed max-w-sm line-clamp-2 drop-shadow md:line-clamp-none">
                {project.description}
              </p>
            </div>

            <div className="mt-8 flex justify-between items-center">
              <div className="flex gap-1">
                {project.tech.map((_, i) => (
                   <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-orange-500/40 transition-colors" />
                ))}
              </div>
              <span className="flex items-center gap-2 text-[10px] uppercase font-technical tracking-[0.2em] font-bold text-orange-500 group-hover:gap-4 transition-all">
                Explore Core <ArrowRight size={14} />
              </span>
            </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const skillCategories = [
    { title: "Frontend Architecture", skills: RESUME_DATA.skills.frontend, icon: <Layers size={24} /> },
    { title: "Backend Systems", skills: RESUME_DATA.skills.backend, icon: <Terminal size={24} /> },
    { title: "Model Intelligence", skills: RESUME_DATA.skills.ml, icon: <Cpu size={24} /> },
    { title: "Core Engineering", skills: RESUME_DATA.skills.tools, icon: <Code2 size={24} /> },
  ];

  return (
    <section id="skills" className="py-32 px-6 md:px-12 bg-white text-black overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full overflow-hidden whitespace-nowrap flex py-4 bg-black text-white pointer-events-none z-20">
         <motion.div 
           initial={{ x: 0 }}
           animate={{ x: "-50%" }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="flex gap-20 items-center text-[80px] font-display uppercase tracking-tight"
         >
           {Array(4).fill(null).map((_, i) => (
             <span key={i} className="flex gap-20 items-center">
               <span>Syed Ali Arsal</span>
               <span className="text-orange-500">.</span>
               <span className="text-zinc-800">CS Graduate</span>
               <span className="text-orange-500">.</span>
             </span>
           ))}
         </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 pt-24">
        <div className="lg:col-span-4 self-start sticky top-32">
          <h3 className="text-xs uppercase font-technical tracking-[0.4em] text-orange-500 font-bold mb-6">
            Capability _ Stack
          </h3>
          <h2 className="text-7xl font-display uppercase tracking-tighter leading-[0.9] mb-8">
            The Digital <br /> Toolkit
          </h2>
          <p className="text-sm font-sans leading-relaxed text-zinc-600 max-w-xs">
            Blending cutting-edge machine learning research with industrial-grade web technologies to build systems that scale.
          </p>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200">
           {skillCategories.map((cat, idx) => (
             <div key={cat.title} className="bg-white p-10 flex flex-col gap-8 group hover:bg-zinc-50 transition-colors">
                <div className="text-orange-600 group-hover:scale-110 transition-transform origin-left">
                  {cat.icon}
                </div>
                <div>
                   <h4 className="text-xs font-technical uppercase tracking-widest font-bold text-zinc-400 mb-6">0{idx+1} // {cat.title}</h4>
                   <div className="flex flex-wrap gap-2">
                     {cat.skills.map(skill => (
                       <span key={skill} className="px-4 py-2 border border-zinc-200 text-sm font-technical font-medium uppercase hover:border-black hover:bg-black hover:text-white transition-all cursor-default">
                         {skill}
                       </span>
                     ))}
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-black">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xs uppercase font-technical tracking-[0.4em] text-orange-500 font-bold mb-12 text-center">
          The Journey
        </h3>
        
        <div className="flex flex-col gap-px bg-white/5 border border-white/5">
           {RESUME_DATA.experience.map((exp, idx) => (
             <div key={idx} className="p-10 md:p-16 flex flex-col md:flex-row gap-12 group hover:bg-white/[0.02] transition-colors relative">
                <div className="md:w-1/3">
                   <div className="text-xs font-technical text-zinc-500 uppercase tracking-widest mb-2 italic">
                     {exp.period}
                   </div>
                   <h4 className="text-3xl font-display uppercase tracking-tight text-white group-hover:text-orange-500 transition-colors">
                     {exp.company}
                   </h4>
                   <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1 flex items-center gap-2">
                     <MapPin size={10} /> {exp.location}
                   </p>
                </div>
                <div className="md:w-2/3 flex flex-col gap-6">
                   <h5 className="text-xl font-technical font-bold uppercase italic text-zinc-300">
                     {exp.title}
                   </h5>
                   <p className="text-zinc-600 leading-relaxed text-sm">
                     {exp.description}
                   </p>
                   {exp.highlights && (
                      <div className="flex flex-wrap gap-2 mt-2">
                         {exp.highlights.map(h => (
                           <span key={h} className="text-[10px] border border-white/10 px-3 py-1 rounded uppercase font-technical tracking-wider text-zinc-500">
                             {h}
                           </span>
                         ))}
                      </div>
                   )}
                </div>
                
                {/* Horizontal progress bar */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-orange-600 w-0 group-hover:w-full transition-all duration-700" />
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  const edu = RESUME_DATA.education;
  return (
    <section id="education" className="py-32 px-6 md:px-12 bg-[#050505]">
       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="p-12 md:p-20 bg-gradient-to-br from-orange-600 to-orange-800 rounded-[40px] flex flex-col justify-between aspect-square lg:aspect-auto">
             <div className="flex justify-between items-start">
               <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter leading-[0.8] text-black">
                 Academic <br /> Foundation
               </h2>
               <div className="w-16 h-16 rounded-full bg-black/10 flex items-center justify-center border border-black/5">
                 <Brain size={32} className="text-black/40" />
               </div>
             </div>
             <div>
                <p className="text-xs font-technical uppercase font-black text-black/50 tracking-[0.3em] mb-4">Final Grade Metrics</p>
                <div className="text-[10vw] lg:text-[140px] font-display text-black leading-none tracking-tighter">
                  {edu.cgpa} <span className="text-xl md:text-3xl font-technical align-top opacity-50">CGPA</span>
                </div>
             </div>
          </div>

          <div className="flex flex-col justify-center gap-12">
             <div className="flex flex-col gap-4">
                <div className="text-xs font-technical uppercase tracking-[0.2em] font-bold text-orange-500 flex items-center gap-2">
                   <Calendar size={14} /> {edu.period}
                </div>
                <h4 className="text-4xl md:text-5xl font-display uppercase tracking-tighter leading-none">
                  {edu.institution}
                </h4>
                <p className="text-xl font-technical italic text-zinc-400">
                  {edu.degree}
                </p>
             </div>

             <div className="flex flex-col gap-6 border-t border-white/10 pt-8">
                <p className="text-[10px] font-technical uppercase font-bold tracking-[0.4em] text-zinc-600">Specialized Focus Areas</p>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                   {edu.electives.map((item, i) => (
                     <div key={i} className="flex items-center gap-4 group cursor-default">
                        <span className="text-orange-500 font-display text-lg opacity-50 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                        <span className="font-technical uppercase text-xs tracking-widest text-zinc-400 group-hover:text-white transition-colors">{item}</span>
                     </div>
                   ))}
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-white text-black min-h-[80vh] flex items-center justify-center relative overflow-hidden">
       {/* Dramatic Big Text Gradient */}
       <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-5">
          <h2 className="font-display text-[30vw] uppercase tracking-tighter rotate-[-10deg]">ARSAL</h2>
       </div>

       <div className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center gap-16">
          <div className="flex flex-col gap-6">
            <h3 className="text-xs uppercase font-technical tracking-[0.5em] text-orange-600 font-black">Get In Touch</h3>
            <h2 className="text-6xl md:text-[100px] font-display uppercase leading-[0.85] tracking-tighter">
              Let's build <br /> something <span className="italic text-orange-600">extraordinary</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
             <a 
               href={`mailto:${RESUME_DATA.email}`}
               className="group flex flex-col p-10 bg-zinc-50 border border-zinc-200 rounded-2xl items-center hover:bg-black hover:border-black transition-all duration-500 overflow-hidden relative"
             >
                <Mail size={32} className="mb-6 group-hover:text-white transition-colors" />
                <span className="text-xs font-technical uppercase font-bold tracking-widest text-zinc-400 mb-2 group-hover:text-zinc-600 transition-colors">Direct Email</span>
                <span className="text-lg font-technical font-bold group-hover:text-white transition-colors">{RESUME_DATA.email}</span>
                <div className="absolute top-4 right-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0 translate-x-4">
                  <ExternalLink size={18} />
                </div>
             </a>

             <a 
               href={RESUME_DATA.linkedin}
               target="_blank"
               rel="noreferrer"
               className="group flex flex-col p-10 bg-zinc-50 border border-zinc-200 rounded-2xl items-center hover:bg-black hover:border-black transition-all duration-500 overflow-hidden relative"
             >
                <Linkedin size={32} className="mb-6 group-hover:text-white transition-colors" />
                <span className="text-xs font-technical uppercase font-bold tracking-widest text-zinc-400 mb-2 group-hover:text-zinc-600 transition-colors">Professional Network</span>
                <span className="text-lg font-technical font-bold group-hover:text-white transition-colors">LinkedIn Profile</span>
                <div className="absolute top-4 right-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0 translate-x-4">
                  <ExternalLink size={18} />
                </div>
             </a>

             <a
               href="https://wa.me/923224310344"
               target="_blank"
               rel="noreferrer"
               className="group flex flex-col p-10 bg-zinc-50 border border-zinc-200 rounded-2xl items-center hover:bg-black hover:border-black transition-all duration-500 overflow-hidden relative md:col-span-2 lg:col-span-1"
             >
                <img src="/whatsapp-icon.png" alt="" width={32} height={32} className="mb-6 h-8 w-8 shrink-0 object-contain transition-[filter] duration-300 group-hover:brightness-0 group-hover:invert" decoding="async" />
                <span className="text-xs font-technical uppercase font-bold tracking-widest text-zinc-400 mb-2 group-hover:text-zinc-600 transition-colors">WhatsApp</span>
                <span className="text-lg font-technical font-bold group-hover:text-white transition-colors">0322 4310344</span>
                <div className="absolute top-4 right-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0 translate-x-4">
                  <ExternalLink size={18} />
                </div>
             </a>
          </div>

          <div className="flex gap-12 text-xs font-technical uppercase tracking-[0.3em] font-bold text-zinc-400">
             <a href={RESUME_DATA.github} className="hover:text-black transition-colors">Github</a>
             <a href="#" className="hover:text-black transition-colors">Resume Download</a>
          </div>
       </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-black border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
       <div className="text-[10px] font-technical uppercase tracking-[0.4em] font-bold text-zinc-600">
         © 2024 Syed Ali Arsal <span className="mx-4">/</span> Portfolio v1.0
       </div>
       <div className="flex gap-8 items-center text-[10px] font-technical uppercase tracking-[0.4em] font-bold text-zinc-600">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            System Online
          </div>
          <a href="#top" className="hover:text-white transition-colors">Back to top</a>
       </div>
    </footer>
  );
}
