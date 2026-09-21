import React, { useState } from "react";
import { Sparkles, HelpCircle, CheckCircle, XCircle, RotateCw, BookOpen } from "lucide-react";
import { MITOS_VERDADES, MitoVerdadeItem } from "../data/mitosVerdades";

export const MitoVerdadeSection: React.FC = () => {
  // Estado com os IDs dos cards virados
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleCard = (id: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const desvirarTodos = () => {
    setFlippedCards({});
  };

  const virarTodos = () => {
    const todosVirados: Record<number, boolean> = {};
    MITOS_VERDADES.forEach((item) => {
      todosVirados[item.id] = true;
    });
    setFlippedCards(todosVirados);
  };

  const totalVirados = Object.values(flippedCards).filter(Boolean).length;

  return (
    <section className="space-y-8" id="secao-mito-ou-verdade">
      {/* Header da Seção */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--leaf)]">
          <Sparkles className="w-3.5 h-3.5" />
          Jogo Interativo de Conhecimento
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary">
          Mito ou Verdade?
        </h2>
        <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">
          Toque em cada um dos <strong>9 cards</strong> abaixo para testar o que você sabe sobre defensivos agrícolas e alimentação consciente, com respostas fundamentadas pelo relatório oficial do <strong>IDEC</strong>.
        </p>

        {/* Status / Controles rápidos */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
            {totalVirados} de {MITOS_VERDADES.length} cards descobertos
          </span>
          {totalVirados > 0 && (
            <button
              onClick={desvirarTodos}
              className="text-xs font-bold text-muted-foreground hover:text-primary transition underline cursor-pointer"
            >
              Virar todos de volta
            </button>
          )}
          {totalVirados < MITOS_VERDADES.length && (
            <button
              onClick={virarTodos}
              className="text-xs font-bold text-muted-foreground hover:text-primary transition underline cursor-pointer"
            >
              Revelar todos
            </button>
          )}
        </div>
      </div>

      {/* Grid de 9 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MITOS_VERDADES.map((item: MitoVerdadeItem) => {
          const isFlipped = !!flippedCards[item.id];
          const isVerdade = item.tipo === "VERDADE";

          return (
            <div
              key={item.id}
              className="flip-card-container h-[400px] sm:h-[420px] w-full select-none"
            >
              <div
                onClick={() => toggleCard(item.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleCard(item.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-pressed={isFlipped}
                aria-label={`Afirmação ${item.id}: ${item.afirmacao}. Toque para virar o card.`}
                className={`flip-card-inner relative w-full h-full rounded-3xl cursor-pointer shadow-md hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary/30 active:scale-[0.98] ${
                  isFlipped ? "is-flipped" : ""
                }`}
              >
                {/* FRENTE DO CARD */}
                <div className="flip-card-face absolute inset-0 w-full h-full rounded-3xl p-6 sm:p-7 flex flex-col justify-between items-center text-center border-2 border-border bg-card text-foreground overflow-hidden">
                  {/* Fundo decorativo sutil */}
                  <div
                    aria-hidden="true"
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/5 blur-2xl pointer-events-none"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-[var(--leaf)]/5 blur-2xl pointer-events-none"
                  />

                  {/* Topo da Frente */}
                  <div className="w-full flex items-center justify-between gap-3">
                    <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs font-mono border border-primary/20">
                      Card #{String(item.id).padStart(2, "0")}
                    </span>

                    <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground px-2.5 py-1 rounded-full bg-secondary/70">
                      <HelpCircle className="w-3.5 h-3.5 text-primary" />
                      Toque para virar
                    </span>
                  </div>

                  {/* Miolo Central: Emoji + Afirmação Perfeitamente Centralizada */}
                  <div className="my-auto flex flex-col items-center justify-center text-center w-full px-1 sm:px-3 py-2">
                    {/* Emoji Temático */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-secondary/90 border border-border/80 flex items-center justify-center text-3xl sm:text-4xl shadow-xs mb-3.5 transform transition-transform duration-300 hover:scale-105">
                      <span role="img" aria-hidden="true">
                        {item.emoji}
                      </span>
                    </div>

                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[var(--leaf)] mb-2 block">
                      Mito ou Verdade?
                    </span>

                    {/* Afirmação Centralizada com Proporção Ideal */}
                    <h3 className="text-lg sm:text-xl font-display font-bold leading-snug sm:leading-relaxed text-foreground max-w-[280px] sm:max-w-[320px] mx-auto">
                      “{item.afirmacao}”
                    </h3>
                  </div>

                  {/* Rodapé da Frente */}
                  <div className="w-full pt-3.5 border-t border-border/70 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-semibold text-primary flex items-center gap-1.5">
                      <RotateCw className="w-3.5 h-3.5 text-primary" />
                      Clique para descobrir
                    </span>
                    <span className="text-[11px] opacity-75 font-mono">IDEC</span>
                  </div>
                </div>

                {/* VERSO DO CARD */}
                <div
                  className={`flip-card-face flip-card-back absolute inset-0 w-full h-full rounded-3xl p-6 sm:p-7 flex flex-col justify-between text-white overflow-hidden shadow-2xl ${
                    isVerdade
                      ? "bg-gradient-to-br from-emerald-600 via-emerald-700 to-green-800"
                      : "bg-gradient-to-br from-rose-600 via-rose-700 to-red-800"
                  }`}
                >
                  {/* Topo do Verso: Identificação VERDADE ou MITO */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-display text-sm font-extrabold uppercase tracking-wider shadow-xs">
                      {isVerdade ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-emerald-200" />
                          <span>VERDADE</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-rose-200" />
                          <span>MITO</span>
                        </>
                      )}
                    </div>

                    <span className="text-xs font-bold text-white/95 bg-black/25 px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
                      <span role="img" aria-hidden="true">{item.emoji}</span>
                      <span className="font-mono">#{String(item.id).padStart(2, "0")}</span>
                    </span>
                  </div>

                  {/* Conteúdo Explicativo */}
                  <div className="my-auto py-2 space-y-2 overflow-y-auto max-h-[230px] sm:max-h-[250px] pr-1 scrollbar-thin">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white/80 flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      Explicação Científica
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed text-white/95 font-medium">
                      {item.explicacao}
                    </p>
                  </div>

                  {/* Rodapé do Verso */}
                  <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs text-white/80">
                    <span className="text-[11px] truncate max-w-[200px]" title={item.fonte}>
                      Fonte: {item.fonte}
                    </span>
                    <span className="font-bold flex items-center gap-1 text-white hover:underline cursor-pointer">
                      <RotateCw className="w-3 h-3" />
                      Desvirar
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
