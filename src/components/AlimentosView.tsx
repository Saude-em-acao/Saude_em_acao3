import React, { useState, useMemo } from "react";
import { Search, RotateCcw, AlertTriangle, ShieldCheck, CheckCircle2, Info, BookOpen } from "lucide-react";
import { ALIMENTOS, Alimento } from "../data/alimentos";
import { NIVEIS_ATENCAO, AVISO_ORIENTATIVO, AVISO_HIGIENIZACAO } from "../data/cuidados";

export const AlimentosView: React.FC = () => {
  const [busca, setBusca] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const [nivelAtivo, setNivelAtivo] = useState<string>("Todos");
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const categorias = useMemo(() => {
    const cats = Array.from(new Set(ALIMENTOS.map((a) => a.categoria)));
    return ["Todos", ...cats];
  }, []);

  const alimentosFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return ALIMENTOS.filter((item) => {
      const matchCategoria = categoriaAtiva === "Todos" || item.categoria === categoriaAtiva;
      const matchNivel = nivelAtivo === "Todos" || item.nivel_atencao === nivelAtivo;
      const matchBusca =
        termo === "" ||
        item.nome.toLowerCase().includes(termo) ||
        item.categoria.toLowerCase().includes(termo) ||
        item.defensivos.some((d) => d.toLowerCase().includes(termo));

      return matchCategoria && matchNivel && matchBusca;
    });
  }, [busca, categoriaAtiva, nivelAtivo]);

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16 space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--leaf)]">
          <ShieldCheck className="w-3.5 h-3.5" />
          Base Científica Oficial
        </span>
        <h1 className="mt-2 text-4xl md:text-5xl font-display font-bold text-primary">
          Tabela de Alimentos e Defensores
        </h1>
        <p className="mt-3 text-foreground/75 text-sm sm:text-base leading-relaxed">
          Consulte o nível de atenção de alimentos in natura e ultraprocessados consumidos no Brasil, descubra as substâncias identificadas em análises oficiais e científicas (Anvisa e Idec) e saiba as melhores práticas de prevenção e higienização.
        </p>
      </div>

      {/* Orientative Disclaimer */}
      <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 text-sm sm:text-base text-muted-foreground flex gap-3.5 sm:gap-4 items-start max-w-4xl mx-auto shadow-xs">
        <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <div className="space-y-2">
          <p className="leading-relaxed text-foreground/85">{AVISO_ORIENTATIVO}</p>
          <p className="font-semibold text-foreground/95 leading-relaxed">{AVISO_HIGIENIZACAO}</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {/* Search bar */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Pesquisar alimento ou substância (ex: morango, tomate, acefato, maçã)..."
            className="w-full rounded-full border border-border bg-card pl-11 pr-4 py-3 text-sm outline-none focus:border-primary shadow-sm"
          />
          {busca && (
            <button
              onClick={() => setBusca("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer"
            >
              Limpar
            </button>
          )}
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap items-center gap-1.5 justify-center">
          {categorias.map((cat) => {
            const active = categoriaAtiva === cat;
            return (
              <button
                key={cat}
                onClick={() => setCategoriaAtiva(cat)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition cursor-pointer ${
                  active
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "border-border bg-card hover:border-primary/50 text-foreground/80"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Attention level filter pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs">
          <span className="font-semibold text-muted-foreground mr-1">Filtrar por risco:</span>
          <button
            onClick={() => setNivelAtivo("Todos")}
            className={`px-3 py-1 rounded-full border font-medium cursor-pointer transition ${
              nivelAtivo === "Todos" ? "bg-foreground text-background" : "bg-card border-border"
            }`}
          >
            Todos ({ALIMENTOS.length})
          </button>
          {(Object.keys(NIVEIS_ATENCAO) as (keyof typeof NIVEIS_ATENCAO)[]).map((chave) => {
            const nivel = NIVEIS_ATENCAO[chave];
            const active = nivelAtivo === chave;
            const count = ALIMENTOS.filter((a) => a.nivel_atencao === chave).length;
            return (
              <button
                key={chave}
                onClick={() => setNivelAtivo(chave)}
                className={`px-3 py-1 rounded-full border font-medium cursor-pointer transition flex items-center gap-1.5 ${
                  active
                    ? "border-primary bg-primary/15 font-bold text-foreground"
                    : "border-border bg-card hover:border-primary/40 text-foreground/75"
                }`}
              >
                <span>{nivel.emoji}</span>
                <span>{nivel.rotulo}</span>
                <span className="opacity-60 text-xs">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count */}
      <div className="text-center text-xs font-semibold text-muted-foreground">
        Exibindo {alimentosFiltrados.length} de {ALIMENTOS.length} alimentos
      </div>

      {/* Grid of 3D Flip Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {alimentosFiltrados.map((item) => {
          const isFlipped = !!flippedCards[item.id];
          const nivel = NIVEIS_ATENCAO[item.nivel_atencao] || NIVEIS_ATENCAO.moderado;

          return (
            <div
              key={item.id}
              className="relative rounded-3xl border border-border bg-card shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* TOP: Image & Level Badge */}
              <div className="relative aspect-[16/10] bg-secondary/30 overflow-hidden">
                {item.imagem_url ? (
                  <img
                    src={item.imagem_url}
                    alt={item.nome}
                    loading="lazy"
                    className={`w-full h-full ${
                      item.id === "biscoito-agua-sal"
                        ? "object-contain bg-white p-2"
                        : "object-cover group-hover:scale-105"
                    } transition duration-500`}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl">
                    {item.emoji}
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Badges on image */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-background/90 backdrop-blur-xs text-foreground border border-border shadow-xs">
                    {item.categoria}
                  </span>

                  <span
                    className="text-xs font-bold px-2.5 py-0.5 rounded-full backdrop-blur-xs shadow-xs flex items-center gap-1 border border-black/10"
                    style={{
                      background: `color-mix(in oklab, ${nivel.cor} 85%, white)`,
                      color: "#133015"
                    }}
                  >
                    <span>{nivel.emoji}</span>
                    <span>{nivel.rotulo}</span>
                  </span>
                </div>

                {/* Name over bottom of image */}
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <h3 className="text-2xl font-display font-bold text-white drop-shadow-md">
                    {item.emoji} {item.nome}
                  </h3>
                  {item.rank && (
                    <span className="text-xs font-bold text-white/90 bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-xs">
                      Top #{item.rank}
                    </span>
                  )}
                </div>
              </div>

              {/* CARD BODY: Front or Back */}
              {!isFlipped ? (
                /* FRONT VIEW: Pesticides, Risks, and Info */
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Pesticides or Substances found */}
                    {item.defensivos.length > 0 ? (
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                          {item.categoria === "Ultraprocessados"
                            ? "Substâncias detectadas em análises:"
                            : "Defensivos detectados pela Anvisa:"}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {item.defensivos.map((def, i) => (
                            <span
                              key={i}
                              className="text-xs font-medium px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground"
                            >
                              {def}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                          Substâncias detectadas em análises:
                        </div>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-[var(--leaf)]/15 text-[var(--leaf)] font-semibold inline-flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Nenhum resíduo detectado no lote analisado
                        </span>
                      </div>
                    )}

                    {/* Health Risks */}
                    {item.riscos.length > 0 && (
                      <div className="space-y-1">
                        <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Potenciais riscos à saúde:
                        </div>
                        <ul className="space-y-1">
                          {item.riscos.map((risco, i) => (
                            <li key={i} className="flex items-start gap-1.5 text-xs text-foreground/85 leading-tight">
                              <AlertTriangle className="w-3.5 h-3.5 text-[var(--tomato)] shrink-0 mt-0.5" />
                              <span>{risco}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.saiba_mais && (
                      <p className="text-xs text-foreground/75 line-clamp-2 italic">
                        "{item.saiba_mais}"
                      </p>
                    )}
                  </div>

                  {/* Flip Action Button */}
                  <div className="pt-2 border-t border-border">
                    <button
                      onClick={() => toggleFlip(item.id)}
                      className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-secondary/80 hover:bg-secondary text-secondary-foreground text-xs font-bold transition cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      {item.categoria === "Ultraprocessados" ? "Prevenção & Cuidados" : "Como Higienizar & Cuidados"}
                    </button>
                  </div>
                </div>
              ) : (
                /* BACK VIEW: Scientific Cleaning Method & Care Steps */
                <div className="p-5 flex-1 flex flex-col justify-between bg-secondary/15 animate-in fade-in duration-200">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-border pb-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--leaf)]" />
                        {item.categoria === "Ultraprocessados" ? "Prevenção & Recomendações" : "Higienização Recomendada"}
                      </div>
                      <span className="text-xs text-muted-foreground font-semibold">
                        {item.categoria}
                      </span>
                    </div>

                    {item.limpeza ? (
                      <div className="space-y-2 text-xs text-foreground/85">
                        <p className="font-bold text-primary">{item.limpeza.metodo}</p>
                        <ol className="space-y-1.5 list-decimal list-inside text-foreground/80 leading-relaxed">
                          {item.limpeza.passos.map((passo, idx) => (
                            <li key={idx} className="pl-1">
                              <span>{passo}</span>
                            </li>
                          ))}
                        </ol>

                        {item.limpeza.observacao && (
                          <div className="rounded-xl bg-card border border-border p-2.5 mt-2 text-xs text-muted-foreground leading-normal">
                            <strong>Nota:</strong> {item.limpeza.observacao}
                          </div>
                        )}
                      </div>
                    ) : item.cuidados_texto ? (
                      <p className="text-xs text-foreground/85 leading-relaxed">
                        {item.cuidados_texto}
                      </p>
                    ) : (
                      <p className="text-xs text-foreground/75 leading-relaxed">
                        Lavar em água corrente potável por pelo menos 1 minuto e, se possível, deixar de molho em solução clorada por 15 minutos.
                      </p>
                    )}

                    {/* Sources */}
                    {item.fontes && item.fontes.length > 0 && (
                      <div className="pt-2 text-xs text-muted-foreground flex items-center gap-1">
                        <BookOpen className="w-3 h-3 text-primary shrink-0" />
                        <span className="truncate">Fonte: {item.fontes.join(", ")}</span>
                      </div>
                    )}
                  </div>

                  {/* Return Button */}
                  <div className="pt-3 border-t border-border mt-3">
                    <button
                      onClick={() => toggleFlip(item.id)}
                      className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Voltar aos Detalhes
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {alimentosFiltrados.length === 0 && (
        <div className="text-center py-16 bg-card rounded-3xl border border-border p-8">
          <div className="text-4xl mb-2">🔍</div>
          <h3 className="font-display text-lg font-bold text-foreground">Nenhum alimento encontrado</h3>
          <p className="text-xs text-muted-foreground mt-1">
            Tente buscar com outro nome ou remova os filtros de categoria e nível de risco.
          </p>
          <button
            onClick={() => {
              setBusca("");
              setCategoriaAtiva("Todos");
              setNivelAtivo("Todos");
            }}
            className="mt-4 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-bold"
          >
            Limpar todos os filtros
          </button>
        </div>
      )}
    </section>
  );
};
