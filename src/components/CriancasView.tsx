import React from "react";
import {
  Gamepad2,
  Play,
  Sparkles,
  ExternalLink,
  Youtube,
  Award
} from "lucide-react";
import { KIDS_GAMES } from "../data/kids";

export const CriancasView: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--berry)] bg-[var(--berry)]/10 px-3.5 py-1 rounded-full border border-[var(--berry)]/20">
          <Sparkles className="w-3.5 h-3.5" />
          Diversão com Propósito
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
          Área Kids: Aprender Brincando
        </h1>
        <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
          Jogos educativos, desafios de memória e vídeos animados para incentivar a turminha a reconhecer os alimentos saudáveis e proteger o prato desde cedo.
        </p>
      </div>

      {/* Featured Main Game: Guardiões do Prato VS Turma da Contaminação */}
      <div className="rounded-3xl border-2 border-primary/30 bg-card p-6 sm:p-8 shadow-lg relative overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--sun)] text-foreground text-xs font-bold">
              <Award className="w-3.5 h-3.5" />
              Jogo Destaque
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
              Guardiões do Prato <br className="hidden sm:inline" />
              <span className="text-primary">VS Turma da Contaminação</span>
            </h2>

            <p className="text-sm text-foreground/80 leading-relaxed">
              Junte-se aos heróis da boa alimentação! Identifique os vegetais frescos, vença os vilões dos resíduos químicos e conquiste o selo oficial de Guardião da Saúde.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://wordwall.net/play/78229/440/400"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-full shadow hover:opacity-90 transition cursor-pointer text-sm"
              >
                <Play className="w-4 h-4 fill-current" /> Jogar Agora Grátis
              </a>
              <span className="text-xs font-semibold text-muted-foreground">
                Classificação Livre • No computador ou celular
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="w-full max-w-[440px] rounded-2xl overflow-hidden shadow-md border border-border/80 bg-white/80 dark:bg-card flex items-center justify-center p-1.5 sm:p-2">
              <img
                src="/assets/logo-guardioes-do-prato.png"
                alt="Guardiões do Prato - Alimentos Limpos, Saúde Garantida!"
                className="w-full h-auto max-h-[350px] object-contain rounded-xl select-none"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes("Logo - Guardiões do Prato.png")) {
                    target.src = "/assets/Logo - Guardiões do Prato.png";
                  } else {
                    target.src = "/assets/guardioes-vs-contaminacao.png";
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Kids Video */}
      <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Vídeo Animado Infantil
          </span>
          <h3 className="text-2xl font-display font-bold text-foreground mt-1">
            Assista e Descubra os Segredos da Comida
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Uma animação leve e divertida para assistir em família ou na sala de aula.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden aspect-video bg-black/10 shadow-md">
          <iframe
            src="https://www.youtube.com/embed/NOQNEPZstes"
            title="Vídeo Infantil — Saúde em Ação"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      </div>

      {/* Games Grid with New Official Logos */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <Gamepad2 className="w-4 h-4" />
            Minijogos Interativos
          </span>
          <h3 className="mt-1 text-2xl sm:text-3xl font-display font-bold text-foreground">
            Escolha seu Desafio
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {KIDS_GAMES.map((game) => (
            <article
              key={game.id}
              className="rounded-3xl border border-border bg-card p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-primary/50 transition duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag Bar */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {game.plataforma || "Genially"}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">
                    {game.categoria}
                  </span>
                </div>

                {/* New Logo Display: Centralized, original proportions preserved, no stretching */}
                <div className="w-full h-40 sm:h-48 flex items-center justify-center p-3 bg-secondary/15 rounded-2xl mb-5 border border-border/60 group-hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src={game.logo}
                    alt={game.titulo}
                    className="max-h-full max-w-full w-auto h-auto object-contain mx-auto select-none drop-shadow-xs"
                    loading="lazy"
                  />
                </div>

                {/* Text Info */}
                <div className="text-center px-2">
                  <h4 className="font-display text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition leading-tight mb-2.5">
                    {game.titulo}
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed max-w-md mx-auto">
                    {game.descricao}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-border">
                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-bold py-3.5 px-6 hover:opacity-90 transition cursor-pointer shadow-xs group-hover:shadow-sm"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Acessar Jogo</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* YouTube Channel Callout Banner */}
      <div className="rounded-3xl border border-destructive/20 bg-destructive/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-destructive text-destructive-foreground flex items-center justify-center shrink-0 shadow-md">
            <Youtube className="w-8 h-8" />
          </div>
          <div>
            <h4 className="font-display text-lg sm:text-xl font-bold text-foreground">
              Conheça nosso canal no YouTube!
            </h4>
            <p className="text-xs sm:text-sm text-foreground/75 mt-0.5">
              Inscreva-se para acompanhar novas animações educativas e conteúdos exclusivos sobre saúde.
            </p>
          </div>
        </div>

        <a
          href="https://www.youtube.com/@Sa%C3%BAdeema%C3%A7%C3%A3oDLJ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground font-bold px-6 py-3 rounded-full text-xs sm:text-sm hover:opacity-90 transition cursor-pointer shadow-xs shrink-0"
        >
          Acessar Canal <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};
