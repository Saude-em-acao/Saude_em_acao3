import React, { useState, useEffect, useRef, useMemo } from "react";
import { Award, CheckCircle, XCircle, RotateCcw, ArrowRight, Sparkles, ShieldAlert, Leaf, HelpCircle, Layers } from "lucide-react";
import { QUIZ_QUESTIONS, QuizQuestion } from "../data/quiz";
import { MitoVerdadeSection } from "./MitoVerdadeSection";

interface QuizViewProps {
  navigate: (route: string) => void;
}

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export const QuizView: React.FC<QuizViewProps> = ({ navigate }) => {
  const [activeTab, setActiveTab] = useState<"mito-verdade" | "contaminado-limpo">("mito-verdade");
  const [questions, setQuestions] = useState<QuizQuestion[]>(() => shuffleArray(QUIZ_QUESTIONS));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<{ ok: boolean; item: QuizQuestion } | null>(null);
  const [finished, setFinished] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = questions.length;
  const currentItem = questions[currentIndex];
  const displayItem = feedback ? questions[currentIndex] || currentItem : currentItem;
  const progressPercent = useMemo(() => Math.round((currentIndex / total) * 100), [currentIndex, total]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleAnswer = (choseContaminated: boolean) => {
    if (feedback || !currentItem) return;

    const isCorrect = choseContaminated === currentItem.contaminado;
    const nextScore = isCorrect ? score + 1 : score;

    setFeedback({ ok: isCorrect, item: currentItem });
    if (isCorrect) setScore(nextScore);

    timerRef.current = setTimeout(() => {
      setFeedback(null);
      if (currentIndex + 1 >= total) {
        setFinished(true);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 1700);
  };

  const restartQuiz = () => {
    setQuestions(shuffleArray(QUIZ_QUESTIONS));
    setCurrentIndex(0);
    setScore(0);
    setFeedback(null);
    setFinished(false);
  };

  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16">
      {/* Decorative blurs */}
      <div
        aria-hidden="true"
        className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-[var(--leaf)]/15 blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-[var(--tomato)]/15 blur-3xl -z-10"
      />

      {/* Page Header */}
      <header className="text-center max-w-3xl mx-auto mb-8 space-y-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--leaf)]">
          <Sparkles className="w-3.5 h-3.5" />
          Saúde em Ação · Desafios Interativos
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary">
          Quiz + Mito ou Verdade?
        </h1>
        <p className="text-sm sm:text-base text-foreground/75 max-w-xl mx-auto leading-relaxed">
          Aprenda na prática: investigue os <strong>9 mitos e verdades</strong> do IDEC sobre defensivos agrícolas ou teste seus conhecimentos no <strong>quiz de alimentos</strong>.
        </p>
      </header>

      {/* Tab Selector */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1.5 rounded-full bg-secondary/70 border border-border shadow-xs max-w-md w-full sm:w-auto">
          <button
            type="button"
            onClick={() => setActiveTab("mito-verdade")}
            className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTab === "mito-verdade"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-foreground/75 hover:text-foreground"
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Mito ou Verdade?</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
              activeTab === "mito-verdade" ? "bg-white/20 text-white" : "bg-primary/15 text-primary"
            }`}>
              9 Cards
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("contaminado-limpo")}
            className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTab === "contaminado-limpo"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-foreground/75 hover:text-foreground"
            }`}
          >
            <Leaf className="w-4 h-4" />
            <span>Contaminado ou Limpo?</span>
          </button>
        </div>
      </div>

      {/* RENDER ACTIVE SECTION */}
      {activeTab === "mito-verdade" ? (
        <MitoVerdadeSection />
      ) : (
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Header */}
          <header className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--leaf)]">
              <Sparkles className="w-3.5 h-3.5" />
              Saúde em Ação — O Quiz
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary">
              Contaminado ou limpo?
            </h1>
            <p className="mt-3 text-sm sm:text-base text-foreground/75 leading-relaxed">
              Veja o alimento e decida: ele está entre os <strong>campeões de defensivos agrícolas</strong> ou é um dos <strong>mais limpos</strong> segundo a Anvisa? Aprenda os dados reais a cada rodada.
            </p>
          </header>

          {/* Playing state */}
          {!finished && displayItem && (
            <div className="mt-8 space-y-6">
              {/* Progress row */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 h-2.5 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[var(--leaf)] to-primary transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <div className="text-xs sm:text-sm font-bold text-foreground/70 whitespace-nowrap">
                  {currentIndex + 1} / {total}
                </div>
                <div className="text-xs sm:text-sm font-bold px-3 py-1 rounded-full bg-primary text-primary-foreground whitespace-nowrap shadow-xs">
                  🏆 {score}
                </div>
              </div>

              {/* Question Card */}
              <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-lg">
                {/* Food Image */}
                <div className="relative aspect-[16/10] bg-secondary/50 overflow-hidden">
                  <img
                    src={displayItem.img}
                    alt={displayItem.nome}
                    className="w-full h-full object-cover transition-opacity duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white drop-shadow-lg">
                      {displayItem.nome}
                    </h2>
                    <span className="text-4xl sm:text-5xl md:text-6xl drop-shadow-lg">
                      {displayItem.emoji}
                    </span>
                  </div>
                </div>

                {/* Answer Feedback or Buttons */}
                {feedback ? (
                  <div className="p-6">
                    <div
                      className={`flex items-start gap-3 p-4 rounded-2xl ${
                        feedback.ok
                          ? "bg-[var(--leaf)]/15 border border-[var(--leaf)]/40"
                          : "bg-destructive/15 border border-destructive/40"
                      }`}
                    >
                      {feedback.ok ? (
                        <CheckCircle className="w-6 h-6 text-[var(--leaf)] shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
                      )}
                      <div>
                        <div className="font-bold text-foreground text-sm sm:text-base">
                          {feedback.ok ? "Certo!" : "Quase!"} O {feedback.item.nome.toLowerCase()} é{" "}
                          <span
                            className={
                              feedback.item.contaminado
                                ? "text-[var(--tomato)] font-extrabold"
                                : "text-[var(--leaf)] font-extrabold"
                            }
                          >
                            {feedback.item.contaminado ? "contaminado" : "relativamente limpo"}
                          </span>
                          .
                        </div>
                        <p className="text-xs sm:text-sm text-foreground/80 mt-1 leading-relaxed">
                          {feedback.item.fato}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs text-foreground/50 text-center font-medium">
                      {currentIndex + 1 >= total
                        ? "Calculando seu resultado final…"
                        : "Próximo alimento em instantes…"}
                    </p>
                  </div>
                ) : (
                  <div className="p-6 grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => handleAnswer(false)}
                      className="group flex flex-col items-center gap-2 p-5 rounded-2xl border-2 border-[var(--leaf)]/40 bg-[var(--leaf)]/5 hover:bg-[var(--leaf)]/15 hover:border-[var(--leaf)] transition cursor-pointer active:scale-95"
                    >
                      <Leaf className="w-8 h-8 text-[var(--leaf)] group-hover:scale-110 transition" />
                      <span className="font-bold text-foreground text-sm sm:text-base">Limpo</span>
                      <span className="text-xs text-muted-foreground">baixo resíduo</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleAnswer(true)}
                      className="group flex flex-col items-center gap-2 p-5 rounded-2xl border-2 border-[var(--tomato)]/40 bg-[var(--tomato)]/5 hover:bg-[var(--tomato)]/15 hover:border-[var(--tomato)] transition cursor-pointer active:scale-95"
                    >
                      <ShieldAlert className="w-8 h-8 text-[var(--tomato)] group-hover:scale-110 transition" />
                      <span className="font-bold text-foreground text-sm sm:text-base">
                        Contaminado
                      </span>
                      <span className="text-xs text-muted-foreground">campeão Anvisa</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Results Screen */}
          {finished && (
            <div className="mt-10 bg-card border border-border rounded-3xl p-8 md:p-12 text-center shadow-xl space-y-4">
              <div className="w-20 h-20 rounded-full bg-[var(--sun)]/20 text-[var(--sun)] flex items-center justify-center text-4xl mx-auto shadow-inner">
                🏆
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary">
                {score === total
                  ? "Especialista Saúde em Ação!"
                  : score >= total * 0.7
                  ? "Muito bem!"
                  : "Hora de se informar mais"}
              </h2>

              <p className="text-foreground/80 text-base sm:text-lg">
                Você acertou{" "}
                <strong className="text-primary font-display text-2xl sm:text-3xl">{score}</strong> de{" "}
                {total} alimentos.
              </p>

              <p className="max-w-md mx-auto text-xs sm:text-sm text-foreground/75 leading-relaxed bg-secondary/30 p-4 rounded-2xl">
                💡 <strong>Lembre-se:</strong> lavar em água corrente reduz resíduos da casca, mas não elimina defensivos agrícolas sistêmicos. Prefira orgânicos, descasque sempre que possível e diversifique a alimentação para reduzir a exposição cumulativa!
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={restartQuiz}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold shadow hover:shadow-lg transition cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" /> Jogar de novo
                </button>

                <button
                  onClick={() => setActiveTab("mito-verdade")}
                  className="inline-flex items-center gap-2 bg-[var(--leaf)] text-white px-6 py-3 rounded-full font-bold shadow hover:shadow-lg transition cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4" /> Jogar Mito ou Verdade
                </button>

                <button
                  onClick={() => navigate("/informe-se")}
                  className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-bold shadow hover:shadow-lg transition cursor-pointer"
                >
                  Ver Notícias & Artigos <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
