import React from 'react';
import { Sparkles, Layers, Cpu, Zap, Check } from 'lucide-react';

export const TecnologiasCliche = () => {
  return (
    <section id="cliches" className="py-24 bg-slate-50 text-pmg-dark relative overflow-hidden border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-pmg-cyan uppercase tracking-wider mb-4">
            <Sparkles size={13} />
            <span>Tecnologias PMG Narrow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-pmg-navy tracking-tight mb-4">
            Retículas de alta resolução para banda estreita
          </h2>
          <p className="text-slate-600 text-base font-light">
            K2® e Everest® são posicionadas juntas como as Tecnologias PMG Narrow — microcélulas de
            precisão e alta resolução para rótulos e etiquetas.
          </p>
        </div>

        {/* 3 Core Technologies */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">

          {/* 1. K2 */}
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 flex flex-col justify-between hover:border-pmg-cyan/50 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-pmg-cyan/10 text-pmg-cyan flex items-center justify-center font-black">
                  <Cpu size={22} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-pmg-cyan bg-pmg-cyan/10 px-3 py-1 rounded-full">
                  Microcélulas
                </span>
              </div>

              <h3 className="text-2xl font-bold text-pmg-navy mb-1">K2<span className="text-pmg-cyan">®</span></h3>
              <div className="text-xs font-semibold text-pmg-cyan mb-4">Retícula de Precisão PMG Narrow</div>

              <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">
                Microcélulas de precisão desenvolvidas para estabilidade de ponto e repetibilidade em
                tiragens de rótulos e etiquetas.
              </p>

              <div className="space-y-2.5 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-pmg-cyan shrink-0" />
                  <span>Estabilidade de ponto em altas-luzes</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-pmg-cyan shrink-0" />
                  <span>Repetibilidade entre tiragens</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-pmg-cyan shrink-0" />
                  <span>Indicada para detalhe fino em embalagem premium</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-center">
              <span className="text-xs font-semibold text-slate-500">Tecnologia PMG Narrow</span>
            </div>
          </div>

          {/* 2. EVEREST */}
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 flex flex-col justify-between hover:border-blue-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-black">
                  <Layers size={22} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  Alta Resolução
                </span>
              </div>

              <h3 className="text-2xl font-bold text-pmg-navy mb-1">Everest<span className="text-blue-600">®</span></h3>
              <div className="text-xs font-semibold text-blue-600 mb-4">Retícula Híbrida de Alta Resolução</div>

              <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">
                Degradês contínuos e fidelidade fotográfica para rótulos e etiquetas de alto padrão
                visual, com estabilidade em grandes tiragens.
              </p>

              <div className="space-y-2.5 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-blue-600 shrink-0" />
                  <span>Degradês suaves sem degrau óptico</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-blue-600 shrink-0" />
                  <span>Resolução ultra-alta para detalhe fino</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-blue-600 shrink-0" />
                  <span>Alta estabilidade em grandes tiragens</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-center">
              <span className="text-xs font-semibold text-blue-600">Tecnologia PMG Narrow</span>
            </div>
          </div>

          {/* 3. PROVAS GMG & GESTÃO DE COR */}
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 flex flex-col justify-between hover:border-emerald-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black">
                  <Zap size={22} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                  GMG OpenColor
                </span>
              </div>

              <h3 className="text-2xl font-bold text-pmg-navy mb-1">Gestão de Cor & Provas GMG</h3>
              <div className="text-xs font-semibold text-emerald-600 mb-4">Colorimetria & Fidelidade Espectral</div>

              <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">
                Simulação precisa da impressão flexográfica em substratos reais, garantindo aprovação
                de cor antes da produção em escala.
              </p>

              <div className="space-y-2.5 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-emerald-600 shrink-0" />
                  <span>Provas calibradas em substratos reais de rótulo</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-emerald-600 shrink-0" />
                  <span>Menor ganho de ponto com Delta E controlado</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-emerald-600 shrink-0" />
                  <span>Aprovação de cor antes do acerto de máquina</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-center">
              <span className="text-xs font-semibold text-emerald-600">Aprovação Segura de Cor</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
