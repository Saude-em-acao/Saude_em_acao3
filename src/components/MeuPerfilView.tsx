import React, { useMemo } from "react";
import { ArrowRight, Flame, Award, Calendar, CheckCircle2, Shield, Sparkles, User } from "lucide-react";
import {
  calcularEstatisticasGerais,
  UserProfile,
  formatarDataExtenso
} from "../utils/storage";
import {
  NIVEIS_PROGRESSO,
  getNivel,
  getProximoNivel,
  CONQUISTAS
} from "../data/cuidados";

interface MeuPerfilViewProps {
  navigate: (route: string) => void;
  user: UserProfile;
  onOpenAuth: () => void;
}

export const MeuPerfilView: React.FC<MeuPerfilViewProps> = ({ navigate, user, onOpenAuth }) => {
  const stats = useMemo(() => calcularEstatisticasGerais(), []);
  const nivelAtual = getNivel(stats.pontosTotais);
  const proximoNivel = getProximoNivel(stats.pontosTotais);

  // Calculate unlocked achievements
  const conquistasDesbloqueadas = useMemo(() => {
    const set = new Set<string>();
    if (stats.refeicoesRegistradas > 0) set.add("primeiro-registro");
    if (stats.diasRegistrados.length > 0) set.add("primeiro-dia");
    if (stats.sequencia >= 3) set.add("sequencia-3");
    if (stats.sequencia >= 7) set.add("sequencia-7");
    if (stats.pontosTotais >= 100) set.add("cuidador-atento");
    if (stats.pontosTotais >= 250) set.add("guardiao-alimentacao");
    if (stats.pontosTotais >= 500) set.add("guardiao-prato");
    if (stats.cuidadosRealizados >= 50) set.add("cuidados-50");
    return set;
  }, [stats]);

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-16 space-y-8">
      {/* Profile Header */}
      <div className="text-center space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--leaf)] flex items-center justify-center gap-1">
          <Sparkles className="w-3.5 h-3.5" />
          Minha Jornada Consciente
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
          {nivelAtual.emoji} {nivelAtual.nome}
        </h1>
        <div className="flex items-center justify-center gap-2 pt-1 text-sm text-foreground/75">
          <span>{user.nome}</span>
          <span>•</span>
          <button
            onClick={onOpenAuth}
            className="text-xs text-primary font-bold hover:underline cursor-pointer"
          >
            Editar perfil
          </button>
        </div>
      </div>

      {/* Main Points Card */}
      <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 text-center shadow-xs">
        <div className="font-display text-4xl sm:text-5xl font-bold text-primary">
          🌱 {stats.pontosTotais}
        </div>
        <div className="text-xs uppercase font-bold tracking-wider text-muted-foreground mt-1">
          Pontos Saúde em Ação Acumulados
        </div>

        {proximoNivel && (
          <div className="mt-4 max-w-sm mx-auto">
            <div className="flex justify-between text-xs text-muted-foreground mb-1 font-semibold">
              <span>{nivelAtual.nome}</span>
              <span>
                Faltam {proximoNivel.min - stats.pontosTotais} pts para {proximoNivel.emoji}{" "}
                {proximoNivel.nome}
              </span>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{
                  width: `${Math.min(
                    100,
                    Math.round(
                      ((stats.pontosTotais - nivelAtual.min) /
                        (proximoNivel.min - nivelAtual.min)) *
                        100
                    )
                  )}%`
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* 4 Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-2xl border border-border bg-card p-4 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Sequência
          </div>
          <div className="mt-1 font-display text-xl sm:text-2xl font-bold text-primary flex items-center justify-center gap-1">
            <Flame className="w-5 h-5 text-[var(--tomato)]" />
            {stats.sequencia} {stats.sequencia === 1 ? "dia" : "dias"}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-4 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Índice médio
          </div>
          <div className="mt-1 font-display text-xl sm:text-2xl font-bold text-primary">
            {stats.indiceMedio === null ? "—" : `${stats.indiceMedio}/100`}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-4 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Refeições
          </div>
          <div className="mt-1 font-display text-xl sm:text-2xl font-bold text-primary">
            {stats.refeicoesRegistradas}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-4 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Cuidados
          </div>
          <div className="mt-1 font-display text-xl sm:text-2xl font-bold text-primary">
            {stats.cuidadosRealizados}
          </div>
        </div>
      </div>

      {/* Níveis */}
      <div className="space-y-3">
        <h2 className="font-display text-2xl font-bold text-primary flex items-center gap-2">
          <Shield className="w-5 h-5" /> Níveis de Consciência
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {NIVEIS_PROGRESSO.map((nv) => {
            const isAtual = nv.nome === nivelAtual.nome;
            return (
              <div
                key={nv.nome}
                className={`rounded-2xl border p-4 transition ${
                  isAtual
                    ? "border-primary bg-primary/10 shadow-xs ring-1 ring-primary/40"
                    : "border-border bg-card"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-foreground text-sm">
                    {nv.emoji} {nv.nome}
                  </span>
                  {isAtual && (
                    <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
                      Atual
                    </span>
                  )}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {nv.max === Number.POSITIVE_INFINITY
                    ? `${nv.min}+ pontos`
                    : `${nv.min} – ${nv.max} pontos`}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Conquistas (Badges) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold text-primary flex items-center gap-2">
            <Award className="w-5 h-5" /> Conquistas
          </h2>
          <span className="text-xs font-semibold text-muted-foreground">
            {conquistasDesbloqueadas.size} de {CONQUISTAS.length} desbloqueadas
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {CONQUISTAS.map((cq) => {
            const unlocked = conquistasDesbloqueadas.has(cq.slug);
            return (
              <div
                key={cq.id}
                className={`rounded-2xl border p-4 text-center transition ${
                  unlocked
                    ? "border-primary bg-primary/10 shadow-xs"
                    : "border-border bg-card opacity-50 grayscale"
                }`}
              >
                <div className="text-3xl mb-1">{cq.emoji}</div>
                <div className="font-bold text-xs sm:text-sm text-foreground">
                  {cq.nome}
                </div>
                <div className="text-xs text-muted-foreground mt-1 leading-snug">
                  {cq.descricao}
                </div>
                <div className="mt-2">
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      unlocked
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {unlocked ? "Conquistado" : "Bloqueado"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Histórico */}
      <div className="space-y-3">
        <h2 className="font-display text-2xl font-bold text-primary flex items-center gap-2">
          <Calendar className="w-5 h-5" /> Histórico de Dias Registrados
        </h2>

        {stats.diasRegistrados.length > 0 ? (
          <ul className="grid sm:grid-cols-2 gap-2">
            {[...stats.diasRegistrados].reverse().map((dia) => (
              <li
                key={dia}
                onClick={() => navigate("/meu-dia")}
                className="rounded-2xl border border-border bg-card px-4 py-3 text-xs sm:text-sm flex items-center justify-between hover:border-primary transition cursor-pointer"
              >
                <span className="font-medium text-foreground">
                  {formatarDataExtenso(dia)}
                </span>
                <span className="text-primary font-bold">Ver dia →</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-2xl border border-border bg-card p-6 text-center text-xs text-muted-foreground">
            Seu histórico de hábitos aparecerá aqui assim que você registrar suas primeiras refeições no Meu Dia.
          </div>
        )}
      </div>

      {/* Footer Navigation Buttons */}
      <div className="pt-4 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => navigate("/meu-dia")}
          className="rounded-full bg-primary text-primary-foreground font-bold px-6 py-3 text-xs sm:text-sm hover:opacity-90 transition cursor-pointer shadow-xs inline-flex items-center gap-2"
        >
          Ir para o Diário (Meu Dia) <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => navigate("/")}
          className="rounded-full border border-border bg-card font-semibold px-6 py-3 text-xs sm:text-sm hover:border-primary transition cursor-pointer"
        >
          Página Inicial
        </button>
      </div>
    </section>
  );
};
