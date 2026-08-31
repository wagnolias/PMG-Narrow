import React, { useState, useEffect } from 'react';
import {
  Building2,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Eye,
  FileCheck,
  Sparkles,
  ArrowRight,
  Target,
  Database
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const QuemSomosOQueFazemos = () => {
  const [activeTab, setActiveTab] = useState<'quem-somos' | 'o-que-fazemos'>('quem-somos');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#quem-somos') {
        setActiveTab('quem-somos');
      } else if (hash === '#o-que-fazemos') {
        setActiveTab('o-que-fazemos');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const pilaresQuemSomos = [
    {
      icon: <Cpu className="text-pmg-cyan" size={22} />,
      title: "Tecnologias PMG Narrow",
      desc: "K2® e Everest® posicionadas juntas como as tecnologias próprias da PMG Narrow — alta resolução e microcélulas de precisão."
    },
    {
      icon: <ShieldCheck className="text-blue-400" size={22} />,
      title: "Gestão de Cor Rigorosa",
      desc: "Provas GMG calibradas e controle espectral, garantindo aprovação de cor antes do acerto de máquina."
    },
    {
      icon: <Sparkles className="text-emerald-400" size={22} />,
      title: "Atendimento Premium & Humanizado",
      desc: "Entendimento real da necessidade do job antes de rodar o teste — não um atendimento genérico de balcão."
    },
    {
      icon: <Target className="text-purple-400" size={22} />,
      title: "Foco Exclusivo em Banda Estreita",
      desc: "Clicheria dedicada ao mercado de rótulos e etiquetas, sem dividir engenharia com outras larguras de máquina."
    }
  ];

  const servicosOQueFazemos = [
    {
      id: "cliches-narrow",
      icon: <Layers className="text-pmg-cyan" size={24} />,
      title: "Gravação de Clichês em Fotopolímero",
      tag: "Tecnologia Própria",
      tagColor: "bg-pmg-cyan/10 text-pmg-cyan border-pmg-cyan/20",
      desc: "Produção de matrizes fotopolímeras digitais para banda estreita com as Tecnologias PMG Narrow:",
      bullets: [
        "K2®: microcélulas de precisão para estabilidade de ponto e repetibilidade.",
        "Everest®: retícula híbrida de alta resolução, degradês contínuos sem degrau óptico.",
        "Engenharia dedicada a rótulos e etiquetas de detalhe fino."
      ],
      link: "#cliches",
      linkText: "Ver Tecnologias PMG Narrow"
    },
    {
      id: "provas-mockups",
      icon: <Eye className="text-blue-500" size={24} />,
      title: "Provas Contratuais GMG & Mockups",
      tag: "Fidelidade Certificada",
      tagColor: "bg-blue-50 text-blue-600 border-blue-200",
      desc: "Simulação de cor precisa antes de gravar o fotopolímero ou ligar a impressora:",
      bullets: [
        "Provas GMG OpenColor calibradas com a curva espectral real da impressão.",
        "Mockups em substratos reais de rótulo (BOPP, PE, PET, metalizados).",
        "Aprovação de cor antes da produção em escala."
      ],
      link: "#provas",
      linkText: "Conhecer Provas e Mockups"
    },
    {
      id: "pre-impressao",
      icon: <FileCheck className="text-purple-500" size={24} />,
      title: "Engenharia de Pré-Impressão & Colorimetria",
      tag: "Arquivos Prontos para Rodar",
      tagColor: "bg-purple-50 text-purple-600 border-purple-200",
      desc: "Tratamento técnico dos arquivos gráficos recebidos de agências e marcas:",
      bullets: [
        "Preflight e separação técnica de cores.",
        "Padronização de mínimos, nominais e máximos de densidade e ganho de ponto.",
        "Gestão de cor de ponta a ponta, do arquivo à máquina."
      ],
      link: "#kaiaki",
      linkText: "Explorar Automação & Sistema Kaiaki"
    },
    {
      id: "kaiaki-narrow",
      icon: <Database className="text-emerald-600" size={24} />,
      title: "Acompanhamento via Sistema Kaiaki",
      tag: "Rastreabilidade Total",
      tagColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
      desc: "Mesma plataforma usada em todo o ecossistema PMG Group para acompanhar seu trabalho:",
      bullets: [
        "Envio de arquivos e acompanhamento de OS 100% online.",
        "Aprovação remota de artes e provas.",
        "Rastreamento do trabalho por status, da entrada à expedição."
      ],
      link: "#kaiaki",
      linkText: "Saber Mais sobre o Kaiaki"
    }
  ];

  return (
    <section id="apresentacao" className="py-20 bg-pmg-navy text-white relative border-b border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Navigation Tabs Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-pmg-cyan uppercase tracking-wider mb-6">
            <span>Apresentação Institucional</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 max-w-2xl">
            Conheça a essência da <span className="text-pmg-cyan">PMG Narrow</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-light max-w-xl mb-8">
            Escolha uma aba: nossa estrutura ou nossas soluções.
          </p>

          {/* Clean Dual Tabs Selector */}
          <div className="inline-flex p-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md shadow-lg" role="tablist">
            <button
              id="tab-btn-quem-somos"
              onClick={() => setActiveTab('quem-somos')}
              role="tab"
              aria-selected={activeTab === 'quem-somos'}
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === 'quem-somos'
                  ? 'bg-pmg-cyan text-white shadow-md shadow-pmg-cyan/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Building2 size={16} />
              <span>Quem Somos</span>
            </button>

            <button
              id="tab-btn-o-que-fazemos"
              onClick={() => setActiveTab('o-que-fazemos')}
              role="tab"
              aria-selected={activeTab === 'o-que-fazemos'}
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === 'o-que-fazemos'
                  ? 'bg-pmg-cyan text-white shadow-md shadow-pmg-cyan/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers size={16} />
              <span>O Que Fazemos</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {activeTab === 'quem-somos' ? (
            <motion.div
              key="tab-quem-somos"
              id="quem-somos"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="scroll-mt-24"
            >
              {/* Introduction Box */}
              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 sm:p-12 mb-10">
                <span className="text-xs font-bold text-pmg-cyan uppercase tracking-widest block mb-2">
                  Clicheria Premium de Banda Estreita
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 max-w-3xl">
                  Clicheria técnica dedicada exclusivamente a rótulos e etiquetas
                </h3>
                <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-4 max-w-3xl">
                  A <strong>PMG Narrow</strong> é a clicheria do PMG Group dedicada exclusivamente ao mercado de
                  banda estreita — pré-impressão, gerenciamento de cores e gravação de clichês para
                  convertedores de rótulos e etiquetas.
                </p>
                <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-3xl">
                  Nossa estrutura foi pensada para oferecer agilidade, estabilidade de processo e um
                  atendimento técnico próximo — entendendo a real necessidade do job antes de rodar o
                  teste, em vez de um atendimento genérico de balcão.
                </p>
              </div>

              {/* 4 Pillars of Quem Somos */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {pilaresQuemSomos.map((pilar, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                        {pilar.icon}
                      </div>
                      <h4 className="text-base font-bold text-white mb-2">{pilar.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed font-light">{pilar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact Link */}
              <div className="mt-10 text-center">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pmg-cyan hover:text-white transition-colors"
                >
                  <span>Falar com a equipe de atendimento</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="tab-o-que-fazemos"
              id="o-que-fazemos"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="scroll-mt-24"
            >
              {/* Grid of Main Service Areas */}
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {servicosOQueFazemos.map((servico) => (
                  <div
                    key={servico.id}
                    className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-pmg-cyan/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          {servico.icon}
                        </div>
                        <span className={`text-[10px] font-bold uppercase px-3 py-1 rounded-full border ${servico.tagColor}`}>
                          {servico.tag}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pmg-cyan transition-colors">
                        {servico.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4">
                        {servico.desc}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {servico.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                            <CheckCircle2 size={14} className="text-pmg-cyan shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <a
                        href={servico.link}
                        className="text-xs font-bold text-white group-hover:text-pmg-cyan uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                      >
                        <span>{servico.linkText}</span>
                        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Callout */}
              <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-pmg-cyan/10 border border-pmg-cyan/20 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-base font-bold text-white mb-1">
                    Precisa de uma análise técnica da sua linha de rótulos?
                  </h4>
                  <p className="text-xs text-slate-300 font-light">
                    Avaliamos suas artes, anilox e substratos para indicar o melhor pacote tecnológico.
                  </p>
                </div>
                <a
                  href="#contato"
                  className="bg-pmg-cyan hover:bg-pmg-cyan/90 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 shadow-lg shadow-pmg-cyan/20"
                >
                  Solicitar Avaliação Técnica
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
