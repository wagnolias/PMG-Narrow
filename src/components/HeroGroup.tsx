import React from 'react';
import { ArrowRight, Layers, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const HeroGroup = () => {
  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-pmg-navy text-white">
      {/* Static Gradient Background (sem fotos de fábrica ainda confirmadas para a Narrow) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 tech-gradient" />
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-pmg-cyan/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-pmg-cyan animate-pulse"></span>
              <span className="text-white font-bold">PMG NARROW</span>
              <span className="text-slate-400">| Clicheria de Banda Estreita</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Clichês de precisão para <span className="text-pmg-cyan">rótulos e etiquetas</span>.
            </h1>

            {/* Concise Purpose Statement */}
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-xl mb-8">
              Pré-impressão e clichês dedicados exclusivamente ao mercado de banda estreita, com
              gestão de cor rigorosa e atendimento técnico próximo do convertedor de rótulos.
            </p>

            {/* CTA Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#cliches"
                className="bg-pmg-cyan hover:bg-pmg-cyan/90 text-white px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-pmg-cyan/20 flex items-center gap-2 group"
              >
                <span>Conhecer Tecnologias</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contato"
                className="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-6 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all"
              >
                Falar com Especialista
              </a>
            </div>

            {/* Differentiator Pills (sem números não confirmados) */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-3 max-w-lg">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 rounded-full px-3.5 py-2">
                Banda Estreita
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 rounded-full px-3.5 py-2">
                Rótulos & Etiquetas
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 rounded-full px-3.5 py-2">
                Atendimento Premium
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 rounded-full px-3.5 py-2">
                Gestão de Cor
              </span>
            </div>
          </motion.div>

          {/* Right Column: Diferenciais */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8 shadow-2xl space-y-4">

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-300">
                  Diferenciais PMG Narrow
                </div>
                <span className="text-[10px] text-pmg-cyan font-bold bg-pmg-cyan/10 px-2.5 py-1 rounded-full uppercase">
                  Atendimento Premium
                </span>
              </div>

              {/* Tecnologias PMG Narrow */}
              <a
                href="#cliches"
                className="block p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-pmg-cyan/40 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-pmg-cyan/15 text-pmg-cyan flex items-center justify-center shrink-0">
                      <Layers size={20} />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-white group-hover:text-pmg-cyan transition-colors">Tecnologias PMG Narrow</h2>
                      <p className="text-xs text-slate-400">Retículas K2® e Everest® — alta resolução, microcélulas de precisão</p>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-white/30 group-hover:text-pmg-cyan group-hover:translate-x-0.5 transition-all" />
                </div>
              </a>

              {/* Atendimento Premium */}
              <a
                href="#apresentacao"
                className="block p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-blue-400/40 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">Atendimento Humanizado</h2>
                      <p className="text-xs text-slate-400">Entendimento real da necessidade do job antes de rodar o teste</p>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-white/30 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                </div>
              </a>

              {/* GMG Proofs */}
              <a
                href="#provas"
                className="block p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-emerald-400/40 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h2 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">GMG Certified Proofs</h2>
                        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-bold">ISO</span>
                      </div>
                      <p className="text-xs text-slate-400">Provas contratuais e mockups em substratos reais</p>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-white/30 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                </div>
              </a>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
