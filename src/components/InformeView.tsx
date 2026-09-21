import React, { useState, useMemo } from "react";
import {
  Search,
  ExternalLink,
  BookOpen,
  Video,
  Newspaper,
  Sparkles,
  Bookmark,
  Building2,
  FileText,
  X,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  ArrowRight,
  Info
} from "lucide-react";
import { INFORME_ITEMS, InformeItem } from "../data/informe";

export const InformeView: React.FC = () => {
  const [busca, setBusca] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>("Todos");
  const [fonteAtiva, setFonteAtiva] = useState<string>("Todas");
  const [artigoSelecionado, setArtigoSelecionado] = useState<InformeItem | null>(null);

  const categorias = ["Todos", "Cartilhas", "Artigos", "Reportagens", "Vídeos"];

  const fontes = [
    { id: "Todas", nome: "Todas as Fontes" },
    { id: "IDEC", nome: "Cartilhas do IDEC" },
    { id: "Anvisa", nome: "Anvisa & Saúde Pública" },
    { id: "Universidades", nome: "Institutos & Universidades" },
    { id: "Midia", nome: "Imprensa & Notícias" }
  ];

  // Identificação automática da fonte caso não esteja explícita
  const getFonteTipo = (item: InformeItem): string => {
    if (item.fonteTipo) return item.fonteTipo;
    const v = (item.veiculo || "").toLowerCase();
    if (v.includes("idec")) return "IDEC";
    if (v.includes("anvisa") || v.includes("secretaria") || v.includes("gov.br")) return "Anvisa";
    if (v.includes("inca") || v.includes("ufmg") || v.includes("unicamp") || v.includes("ufla") || v.includes("scielo")) return "Universidades";
    return "Midia";
  };

  const itensFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return INFORME_ITEMS.filter((item) => {
      const matchCat = categoriaAtiva === "Todos" || item.categoria === categoriaAtiva;
      const tipoFonte = getFonteTipo(item);
      const matchFonte = fonteAtiva === "Todas" || tipoFonte === fonteAtiva;
      const matchBusca =
        termo === "" ||
        item.titulo.toLowerCase().includes(termo) ||
        item.veiculo.toLowerCase().includes(termo) ||
        (item.subtitulo && item.subtitulo.toLowerCase().includes(termo)) ||
        (item.fonteOriginal && item.fonteOriginal.toLowerCase().includes(termo));

      return matchCat && matchFonte && matchBusca;
    });
  }, [busca, categoriaAtiva, fonteAtiva]);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "Cartilhas":
        return <FileText className="w-3.5 h-3.5" />;
      case "Vídeos":
        return <Video className="w-3.5 h-3.5" />;
      case "Artigos":
        return <BookOpen className="w-3.5 h-3.5" />;
      default:
        return <Newspaper className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16 space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--leaf)]">
          <Sparkles className="w-3.5 h-3.5" />
          Acervo e Evidências Científicas
        </span>
        <h1 className="mt-2 text-4xl md:text-5xl font-display font-bold text-primary">
          Informe-se!
        </h1>
        <p className="mt-3 text-foreground/75 text-sm sm:text-base leading-relaxed">
          Reunimos as pesquisas do IDEC sobre defensivos em ultraprocessados, relatórios da Anvisa, manifestos do INCA, estudos da Fiocruz e investigações de credibilidade para fundamentar seu consumo consciente.
        </p>
      </div>

      {/* Featured Callout - Cartilhas IDEC */}
      <div className="rounded-3xl border border-primary/20 bg-linear-to-r from-primary/5 via-emerald-500/5 to-primary/10 p-5 sm:p-6 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="p-3 rounded-2xl bg-primary/10 text-primary shrink-0">
            <Bookmark className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wide">
              Nova Fonte em Destaque
            </div>
            <h3 className="text-base sm:text-lg font-bold text-foreground mt-1">
              Série de Pesquisas: Tem Veneno Nesse Pacote (IDEC)
            </h3>
            <p className="text-xs sm:text-sm text-foreground/75 mt-0.5">
              Confira os artigos educativos baseados nos três volumes dos estudos laboratoriais do IDEC (2021, 2022 e 2024) sobre resíduos de agrotóxicos em alimentos ultraprocessados.
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            setFonteAtiva("IDEC");
            setCategoriaAtiva("Todos");
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-xs hover:bg-primary/90 transition shrink-0 cursor-pointer"
        >
          <span>Ver cartilhas e artigos do IDEC</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Search & Filters */}
      <div className="space-y-4 max-w-3xl mx-auto">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Pesquisar por tema, alimento ou fonte (ex: IDEC, glifosato, Anvisa, INCA, trigo)..."
            className="w-full rounded-full border border-border bg-card pl-11 pr-4 py-2.5 text-sm outline-none focus:border-primary shadow-xs"
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

        {/* Source Filter Tabs */}
        <div className="space-y-1.5 text-center">
          <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center justify-center gap-1">
            <Building2 className="w-3 h-3" />
            Filtrar por Fonte Institucional
          </label>
          <div className="flex flex-wrap justify-center gap-2">
            {fontes.map((f) => {
              const active = fonteAtiva === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setFonteAtiva(f.id)}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition cursor-pointer flex items-center gap-1.5 ${
                    active
                      ? "bg-primary text-primary-foreground border-primary shadow-xs"
                      : "border-border bg-card hover:border-primary/50 text-foreground/80"
                  }`}
                >
                  {f.id === "IDEC" && <FileText className="w-3 h-3 text-amber-300" />}
                  {f.nome}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Pills */}
        <div className="space-y-1.5 text-center">
          <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center justify-center gap-1">
            <BookOpen className="w-3 h-3" />
            Formato do Conteúdo
          </label>
          <div className="flex flex-wrap justify-center gap-2">
            {categorias.map((cat) => {
              const active = categoriaAtiva === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategoriaAtiva(cat)}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition cursor-pointer flex items-center gap-1.5 ${
                    active
                      ? "bg-secondary text-secondary-foreground border-secondary font-bold shadow-xs"
                      : "border-border bg-card hover:border-secondary/50 text-foreground/75"
                  }`}
                >
                  {cat !== "Todos" && getCategoryIcon(cat)}
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Count */}
      <div className="text-center text-xs font-semibold text-muted-foreground">
        Exibindo {itensFiltrados.length} de {INFORME_ITEMS.length} publicações
      </div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {itensFiltrados.map((item) => {
          const hasFullContent = !!item.conteudoCompleto;

          return (
            <article
              key={item.id}
              className={`rounded-3xl border bg-card shadow-xs hover:shadow-md transition duration-200 flex flex-col justify-between overflow-hidden group ${
                item.fonteTipo === "IDEC" ? "border-primary/30 ring-1 ring-primary/15" : "border-border hover:border-primary/50"
              }`}
            >
              <div>
                {/* Image */}
                <div className="relative aspect-video bg-secondary/30 overflow-hidden">
                  <img
                    src={item.imagem}
                    alt={item.titulo}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/assets/hero-bg.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-background/90 backdrop-blur-xs text-foreground border border-border shadow-xs flex items-center gap-1">
                      {getCategoryIcon(item.categoria)}
                      {item.categoria}
                    </span>

                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground shadow-xs truncate max-w-[170px]">
                      {item.veiculo}
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-3 text-xs text-white/90 font-semibold drop-shadow-sm">
                    {item.data}
                  </div>
                </div>

                {/* Text content */}
                <div className="p-5 space-y-2">
                  <h3 className="font-display text-lg font-bold text-foreground leading-snug group-hover:text-primary transition">
                    {item.titulo}
                  </h3>
                  {item.subtitulo && (
                    <p className="text-xs text-foreground/75 leading-relaxed line-clamp-3">
                      {item.subtitulo}
                    </p>
                  )}
                  {item.fonteOriginal && (
                    <p className="text-[11px] text-muted-foreground pt-1 flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-primary shrink-0" />
                      <span className="truncate">{item.fonteOriginal}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom links */}
              <div className="p-5 pt-0 space-y-2">
                {hasFullContent ? (
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={() => setArtigoSelecionado(item)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold py-2.5 px-3 transition cursor-pointer shadow-xs"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Ler artigo completo</span>
                    </button>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 rounded-2xl bg-secondary/80 hover:bg-secondary text-secondary-foreground text-xs font-bold py-2.5 px-3 transition cursor-pointer"
                      title="Abrir página oficial do IDEC"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ) : (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-secondary/80 hover:bg-secondary text-secondary-foreground text-xs font-bold py-2.5 px-4 transition cursor-pointer"
                  >
                    <span>Acessar conteúdo oficial</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {itensFiltrados.length === 0 && (
        <div className="text-center py-16 bg-card rounded-3xl border border-border p-8">
          <p className="text-sm font-semibold text-muted-foreground">
            Nenhuma publicação encontrada para os filtros selecionados.
          </p>
          <button
            onClick={() => {
              setBusca("");
              setCategoriaAtiva("Todos");
              setFonteAtiva("Todas");
            }}
            className="mt-3 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold cursor-pointer"
          >
            Limpar todos os filtros
          </button>
        </div>
      )}

      {/* Full Article Modal */}
      {artigoSelecionado && artigoSelecionado.conteudoCompleto && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          <div className="bg-card border border-border rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative my-auto animate-in fade-in duration-200">
            {/* Header Image with close button */}
            <div className="relative aspect-video sm:aspect-21/9 bg-secondary/40 overflow-hidden">
              <img
                src={artigoSelecionado.imagem}
                alt={artigoSelecionado.titulo}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-black/40" />

              <button
                onClick={() => setArtigoSelecionado(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white transition cursor-pointer"
                aria-label="Fechar artigo"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  {artigoSelecionado.veiculo}
                </span>
                <span className="px-3 py-1 rounded-full bg-background/90 text-foreground text-xs font-bold">
                  {artigoSelecionado.data}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Title & Subtitle */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground leading-tight">
                  {artigoSelecionado.titulo}
                </h2>
                {artigoSelecionado.subtitulo && (
                  <p className="mt-2 text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {artigoSelecionado.subtitulo}
                  </p>
                )}
              </div>

              {/* Main Theme Callout */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 flex items-start gap-3">
                <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                    Tema Central da Pesquisa
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground/80 mt-0.5">
                    {artigoSelecionado.conteudoCompleto.temaPrincipal}
                  </p>
                </div>
              </div>

              {/* Introduction */}
              <div className="text-sm leading-relaxed text-foreground/85 border-l-2 border-primary/40 pl-4 py-1">
                {artigoSelecionado.conteudoCompleto.introducao}
              </div>

              {/* Sections */}
              <div className="space-y-6 pt-2">
                {artigoSelecionado.conteudoCompleto.secoes.map((secao, idx) => (
                  <div key={idx} className="rounded-2xl border border-border bg-secondary/15 p-5 space-y-3">
                    <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-mono font-bold">
                        {idx + 1}
                      </span>
                      {secao.subtitulo}
                    </h3>

                    <p className="text-xs sm:text-sm leading-relaxed text-foreground/80">
                      {secao.conteudo}
                    </p>

                    {secao.destaque && (
                      <div className="rounded-xl bg-primary/10 border-l-4 border-primary p-3 text-xs font-semibold text-foreground">
                        {secao.destaque}
                      </div>
                    )}

                    {secao.dadosChave && secao.dadosChave.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                        {secao.dadosChave.map((dado, i) => (
                          <div key={i} className="rounded-xl border border-border bg-card p-2.5 text-center shadow-xs">
                            <span className="block text-[11px] text-muted-foreground">{dado.label}</span>
                            <span className="block text-xs sm:text-sm font-bold text-primary mt-0.5">{dado.valor}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Recommendations Box */}
              <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-5 space-y-3">
                <h4 className="font-bold text-sm text-foreground flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-emerald-600" />
                  <span>Orientações Práticas e Escolhas Conscientes</span>
                </h4>
                <ul className="space-y-2">
                  {artigoSelecionado.conteudoCompleto.cuidadosRecomendados.map((cuidado, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{cuidado}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Educational Conclusion */}
              <div className="rounded-2xl border border-amber-500/25 bg-amber-500/5 p-5 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    Conclusão e Cidadania
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                    {artigoSelecionado.conteudoCompleto.conclusaoEducativa}
                  </p>
                </div>
              </div>

              {/* Bibliographic References */}
              <div className="border-t border-border pt-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Fontes e Referências Citadas no Material
                </h5>
                <ul className="space-y-1">
                  {artigoSelecionado.conteudoCompleto.referencias.map((ref, i) => (
                    <li key={i} className="text-[11px] text-muted-foreground/90 font-mono">
                      • {ref}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border pt-4">
                <a
                  href={artigoSelecionado.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold transition shadow-xs cursor-pointer"
                >
                  <span>Acessar pesquisa completa no portal do IDEC</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setArtigoSelecionado(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-border bg-card hover:bg-secondary text-foreground text-xs font-semibold transition cursor-pointer"
                >
                  Fechar leitura
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

