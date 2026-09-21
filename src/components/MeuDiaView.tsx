import React, { useState, useEffect, useMemo } from "react";
import {
  Plus,
  Search,
  Trash2,
  Check,
  X,
  AlertTriangle,
  BookOpen,
  Calendar,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { ALIMENTOS, Alimento } from "../data/alimentos";
import {
  CUIDADOS_PADRAO,
  CuidadoItem,
  NIVEIS_ATENCAO,
  AVISO_ORIENTATIVO,
  AVISO_HIGIENIZACAO,
  getMensagemIndice
} from "../data/cuidados";
import {
  obterDia,
  getHojeString,
  formatarDataExtenso,
  adicionarAlimentoNaRefeicao,
  removerAlimentoDaRefeicao,
  salvarCuidadosConsumo,
  salvarRefeicaoStatus,
  calcularPontosDoDia,
  RegistroDia,
  ConsumoItem,
  RefeicaoDia
} from "../utils/storage";

interface MeuDiaViewProps {
  navigate: (route: string) => void;
}

export const MeuDiaView: React.FC<MeuDiaViewProps> = ({ navigate }) => {
  const [dataSelecionada, setDataSelecionada] = useState<string>(getHojeString());
  const [registroDia, setRegistroDia] = useState<RegistroDia>(() => obterDia(getHojeString()));

  // Modals state
  const [refeicaoParaAdicionar, setRefeicaoParaAdicionar] = useState<string | null>(null);
  const [consumoDetalhes, setConsumoDetalhes] = useState<ConsumoItem | null>(null);

  // Toast / Points animation state
  const [pontosGanhosFeedback, setPontosGanhosFeedback] = useState<number | null>(null);

  // Reload day data when date changes
  useEffect(() => {
    const reg = obterDia(dataSelecionada);
    setRegistroDia(reg);
  }, [dataSelecionada]);

  const recarregar = () => {
    const reg = obterDia(dataSelecionada);
    setRegistroDia({ ...reg });
  };

  // Calculations
  const refeicoes = registroDia.refeicoes;
  const totalAlimentos = refeicoes.reduce((acc, r) => acc + (r.status !== "nao-faco" ? r.consumos.length : 0), 0);
  const totalCuidados = refeicoes.reduce(
    (acc, r) => acc + r.consumos.reduce((s, c) => s + c.cuidados.length, 0),
    0
  );
  const refeicoesOrganizadas = refeicoes.filter((r) => r.status !== "pendente").length;

  const totalCuidadosPossiveis = totalAlimentos * CUIDADOS_PADRAO.length;
  const indiceCuidado =
    totalCuidadosPossiveis > 0
      ? Math.min(100, Math.round((totalCuidados / totalCuidadosPossiveis) * 100))
      : null;

  const pontosHoje = calcularPontosDoDia(registroDia, CUIDADOS_PADRAO);

  const dispararFeedback = (pts: number) => {
    if (pts > 0) {
      setPontosGanhosFeedback(pts);
      setTimeout(() => setPontosGanhosFeedback(null), 1800);
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-16 space-y-8">
      {/* Floating Points Notification */}
      {pontosGanhosFeedback !== null && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 pointer-events-none rounded-full bg-primary text-primary-foreground font-bold text-sm px-6 py-2.5 shadow-2xl animate-[pontos-sobe_1.6s_ease-out_forwards] border-2 border-white/20 flex items-center gap-2">
          <span>🌱</span>
          <span>+{pontosGanhosFeedback} pontos</span>
        </div>
      )}

      {/* Header */}
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--leaf)]">
          <Sparkles className="w-3.5 h-3.5" />
          Seu Diário Alimentar Consciente
        </span>
        <h1 className="mt-2 text-4xl md:text-5xl font-display font-bold text-primary">
          Meu Dia
        </h1>
        <p className="mt-2 text-foreground/75 text-sm sm:text-base">
          {formatarDataExtenso(dataSelecionada)}
        </p>

        {/* Date Picker */}
        <div className="mt-3 flex items-center justify-center gap-2">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <input
            type="date"
            value={dataSelecionada}
            max={getHojeString()}
            onChange={(e) => setDataSelecionada(e.target.value)}
            className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-foreground outline-none shadow-xs hover:border-primary cursor-pointer"
          />
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid sm:grid-cols-3 gap-3">
        <div className="rounded-2xl border border-border bg-card p-4 text-center shadow-xs">
          <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Pontos de hoje
          </div>
          <div className="mt-1 font-display text-3xl font-bold text-primary">
            🌱 {pontosHoje}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-4 text-center shadow-xs">
          <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Refeições organizadas
          </div>
          <div className="mt-1 font-display text-3xl font-bold text-primary">
            {refeicoesOrganizadas}/{refeicoes.length}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-4 text-center shadow-xs">
          <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Índice de Cuidado
          </div>
          <div className="mt-1 font-display text-3xl font-bold text-primary">
            {indiceCuidado === null ? (
              "—"
            ) : (
              <span>
                {getMensagemIndice(indiceCuidado).emoji} {indiceCuidado}/100
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Meals List */}
      <div className="space-y-4">
        {refeicoes.map((refeicao) => {
          const naoFaco = refeicao.status === "nao-faco";

          return (
            <article
              key={refeicao.tipo}
              className={`rounded-3xl border p-5 transition ${
                naoFaco ? "border-border bg-secondary/30" : "border-border bg-card shadow-xs"
              }`}
            >
              {/* Meal Header */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{refeicao.icone}</span>
                  <div>
                    <h2 className="font-display text-xl font-bold text-primary">
                      {refeicao.nome}
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      {naoFaco
                        ? "Você marcou que não faz essa refeição — tudo bem, dá para mudar quando quiser."
                        : refeicao.consumos.length > 0
                        ? `${refeicao.consumos.length} ${
                            refeicao.consumos.length === 1 ? "alimento registrado" : "alimentos registrados"
                          }`
                        : "Ainda sem alimentos registrados"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Consumed Foods List */}
              {!naoFaco && refeicao.consumos.length > 0 && (
                <ul className="mt-4 space-y-3">
                  {refeicao.consumos.map((consumo) => {
                    const nivel = NIVEIS_ATENCAO[consumo.alimento.nivel_atencao] || NIVEIS_ATENCAO.moderado;

                    return (
                      <li
                        key={consumo.id}
                        className="rounded-2xl border border-border bg-background/70 p-3.5 space-y-3"
                      >
                        {/* Top: Food Info */}
                        <div className="flex items-center gap-3">
                          {consumo.alimento.imagem_url ? (
                            <img
                              src={consumo.alimento.imagem_url}
                              alt={consumo.alimento.nome}
                              className={`w-12 h-12 rounded-xl ${
                                consumo.alimento.id === "biscoito-agua-sal"
                                  ? "object-contain bg-white p-0.5"
                                  : "object-cover"
                              } border border-border shrink-0`}
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <span className="w-12 h-12 rounded-xl bg-secondary/60 flex items-center justify-center text-2xl shrink-0">
                              {consumo.alimento.emoji}
                            </span>
                          )}

                          <button
                            onClick={() => setConsumoDetalhes(consumo)}
                            className="text-left flex-1 cursor-pointer group"
                          >
                            <span className="block font-bold text-sm text-foreground group-hover:text-primary transition">
                              {consumo.alimento.emoji} {consumo.alimento.nome}
                            </span>
                            <div className="mt-1 flex items-center gap-2">
                              <span
                                className="text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1"
                                style={{
                                  background: `color-mix(in oklab, ${nivel.cor} 22%, var(--card))`
                                }}
                              >
                                {nivel.emoji} {nivel.rotulo}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {consumo.cuidados.length} de {CUIDADOS_PADRAO.length} cuidados
                              </span>
                            </div>
                          </button>

                          <button
                            onClick={() => {
                              removerAlimentoDaRefeicao(dataSelecionada, consumo.id);
                              recarregar();
                            }}
                            aria-label={`Remover ${consumo.alimento.nome}`}
                            title="Remover alimento"
                            className="p-2 rounded-xl hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Inline Care Checklist */}
                        <div className="pt-2 border-t border-border/70">
                          <ChecklistCuidados
                            compacto={true}
                            cuidados={CUIDADOS_PADRAO}
                            selecionados={consumo.cuidados}
                            onSalvar={async (novosCuidados) => {
                              salvarCuidadosConsumo(dataSelecionada, consumo.id, novosCuidados);
                              recarregar();
                              const pts = CUIDADOS_PADRAO.filter((c) => novosCuidados.includes(c.id)).reduce(
                                (acc, c) => acc + c.pontos,
                                0
                              );
                              dispararFeedback(pts);
                            }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}

              {/* Meal Bottom Buttons */}
              <div className="mt-4 flex flex-wrap gap-2">
                {!naoFaco && (
                  <button
                    onClick={() => setRefeicaoParaAdicionar(refeicao.tipo)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold px-4 py-2 hover:opacity-90 transition cursor-pointer shadow-xs"
                  >
                    <Plus className="w-3.5 h-3.5" /> Adicionar alimento
                  </button>
                )}

                <button
                  onClick={() => {
                    const novoStatus = naoFaco ? "pendente" : "nao-faco";
                    salvarRefeicaoStatus(dataSelecionada, refeicao.tipo, novoStatus);
                    recarregar();
                  }}
                  className="rounded-full border border-border bg-card text-xs font-semibold px-4 py-2 hover:border-primary transition cursor-pointer"
                >
                  {naoFaco ? "Quero registrar essa refeição" : "Não faço essa refeição"}
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* Resumo do Dia */}
      <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 text-center space-y-3 shadow-sm">
        <h2 className="font-display text-2xl font-bold text-primary">
          🌟 Resumo do dia
        </h2>
        <p className="text-sm text-foreground/85">
          Você registrou <strong>{totalAlimentos}</strong>{" "}
          {totalAlimentos === 1 ? "alimento" : "alimentos"} e <strong>{totalCuidados}</strong>{" "}
          {totalCuidados === 1 ? "cuidado" : "cuidados"} em <strong>{refeicoesOrganizadas}</strong>{" "}
          de {refeicoes.length} refeições.
        </p>
        <p className="text-xs sm:text-sm text-foreground/75 italic max-w-xl mx-auto">
          {indiceCuidado === null
            ? "Quando quiser, registre um alimento para começar. Não existe dia certo ou errado por aqui."
            : getMensagemIndice(indiceCuidado).mensagem}
        </p>

        <div className="pt-3">
          <button
            onClick={() => navigate("/meu-perfil")}
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground font-bold px-6 py-2.5 text-xs sm:text-sm hover:opacity-90 transition cursor-pointer shadow-xs"
          >
            Ver minha jornada e conquistas
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* MODAL: Adicionar Alimento */}
      {refeicaoParaAdicionar && (
        <ModalAdicionarAlimento
          alimentos={ALIMENTOS}
          onEscolher={(alimentoId) => {
            adicionarAlimentoNaRefeicao(dataSelecionada, refeicaoParaAdicionar, alimentoId);
            recarregar();
            setRefeicaoParaAdicionar(null);
            dispararFeedback(2); // +2 pts per registered food
          }}
          onFechar={() => setRefeicaoParaAdicionar(null)}
        />
      )}

      {/* MODAL: Ficha Completa do Alimento e Cuidados */}
      {consumoDetalhes && (
        <ModalFichaAlimento
          consumo={consumoDetalhes}
          cuidados={CUIDADOS_PADRAO}
          onFechar={() => setConsumoDetalhes(null)}
          onSalvarCuidados={(novosCuidados) => {
            salvarCuidadosConsumo(dataSelecionada, consumoDetalhes.id, novosCuidados);
            recarregar();
            setConsumoDetalhes(null);
            const pts = CUIDADOS_PADRAO.filter((c) => novosCuidados.includes(c.id)).reduce(
              (acc, c) => acc + c.pontos,
              0
            );
            dispararFeedback(pts);
          }}
        />
      )}
    </section>
  );
};

/* Componente Checklist de Cuidados */
interface ChecklistCuidadosProps {
  cuidados: CuidadoItem[];
  selecionados: string[];
  onSalvar: (ids: string[]) => void;
  compacto?: boolean;
}

const ChecklistCuidados: React.FC<ChecklistCuidadosProps> = ({
  cuidados,
  selecionados,
  onSalvar,
  compacto = false
}) => {
  const [selecionadosState, setSelecionadosState] = useState<string[]>(selecionados ?? []);
  const [salvando, setSalvando] = useState(false);

  useEffect(() => {
    setSelecionadosState(selecionados ?? []);
  }, [selecionados]);

  const toggleItem = (id: string) => {
    setSelecionadosState((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const totalPts = cuidados
    .filter((c) => selecionadosState.includes(c.id))
    .reduce((acc, c) => acc + c.pontos, 0);

  return (
    <div
      className={`rounded-2xl border border-primary/40 bg-primary/5 ${
        compacto ? "p-3" : "p-4"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <h4 className="font-display font-bold text-primary flex items-center gap-1.5 text-xs sm:text-sm">
          <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs shrink-0 font-bold">
            ✓
          </span>
          O que você fez neste alimento?
        </h4>
        <span className="text-xs font-bold text-primary">🌱 {totalPts} pts</span>
      </div>

      <div className="mt-2.5 space-y-1.5">
        {cuidados.map((item) => {
          const ativo = selecionadosState.includes(item.id);
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggleItem(item.id)}
              className={`w-full text-left flex items-start gap-2.5 rounded-xl border p-2 text-xs transition cursor-pointer ${
                ativo
                  ? "border-primary bg-primary/15 font-semibold text-foreground animate-[cuidado-pulsa_0.3s_ease-out]"
                  : "border-border bg-card hover:border-primary/50 text-foreground/80"
              }`}
            >
              <span
                className={`mt-0.5 w-4 h-4 rounded-md border flex items-center justify-center shrink-0 transition ${
                  ativo ? "bg-primary border-primary text-primary-foreground" : "border-border"
                }`}
              >
                {ativo && <Check className="w-3 h-3" />}
              </span>

              <div className="flex-1 leading-tight">
                <span className="block font-semibold">{item.nome}</span>
                {item.descricao && !compacto && (
                  <span className="block text-xs text-muted-foreground mt-0.5">
                    {item.descricao}
                  </span>
                )}
              </div>

              <span className="text-xs font-bold text-primary shrink-0">
                +{item.pontos}
              </span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        disabled={salvando}
        onClick={async () => {
          setSalvando(true);
          onSalvar(selecionadosState);
          setSalvando(false);
        }}
        className="mt-3 w-full rounded-full bg-primary text-primary-foreground font-bold py-2 text-xs hover:opacity-90 transition disabled:opacity-60 cursor-pointer shadow-xs"
      >
        {salvando ? "Salvando…" : `Salvar cuidados 🌱 ${totalPts} pts`}
      </button>
    </div>
  );
};

/* Modal para Adicionar Alimento */
interface ModalAdicionarAlimentoProps {
  alimentos: Alimento[];
  onEscolher: (alimentoId: string) => void;
  onFechar: () => void;
}

const ModalAdicionarAlimento: React.FC<ModalAdicionarAlimentoProps> = ({
  alimentos,
  onEscolher,
  onFechar
}) => {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todos");

  const categorias = useMemo(() => {
    return ["Todos", ...Array.from(new Set(alimentos.map((a) => a.categoria)))];
  }, [alimentos]);

  const filtrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return alimentos.filter((a) => {
      const matchCat = categoria === "Todos" || a.categoria === categoria;
      const matchBusca =
        termo === "" ||
        a.nome.toLowerCase().includes(termo) ||
        a.categoria.toLowerCase().includes(termo) ||
        a.defensivos.some((d) => d.toLowerCase().includes(termo));
      return matchCat && matchBusca;
    });
  }, [alimentos, busca, categoria]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="w-full max-w-lg max-h-[90vh] sm:max-h-[85vh] rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-border shrink-0">
          <h3 className="font-display text-xl font-bold text-primary">
            Adicionar alimento
          </h3>
          <button
            onClick={onFechar}
            className="p-1.5 rounded-xl hover:bg-secondary text-muted-foreground cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="mt-3 relative shrink-0">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            autoFocus
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Pesquisar alimento..."
            className="w-full rounded-full border border-border bg-background pl-10 pr-4 py-2 text-xs sm:text-sm outline-none focus:border-primary"
          />
        </div>

        {/* Categories / Filtro */}
        <div className="mt-3 shrink-0">
          <label className="block text-xs font-bold text-foreground/80 mb-1.5">
            Filtrar por categoria:
          </label>
          <div className="flex flex-wrap gap-1.5 pb-1 max-h-24 overflow-y-auto pr-0.5">
            {categorias.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoria(cat)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition cursor-pointer whitespace-nowrap ${
                  cat === categoria
                    ? "bg-primary text-primary-foreground border-primary shadow-xs font-bold"
                    : "border-border bg-muted/40 hover:bg-muted text-foreground hover:border-primary/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Alimentos List */}
        <div className="mt-3 flex-1 min-h-0 overflow-y-auto space-y-2 pr-1">
          {filtrados.map((alimento) => {
            const nivel = NIVEIS_ATENCAO[alimento.nivel_atencao] || NIVEIS_ATENCAO.moderado;
            return (
              <button
                key={alimento.id}
                onClick={() => onEscolher(alimento.id)}
                className="w-full flex items-center gap-3 rounded-2xl border border-border p-2.5 hover:border-primary hover:bg-secondary/20 transition text-left cursor-pointer group"
              >
                {alimento.imagem_url ? (
                  <img
                    src={alimento.imagem_url}
                    alt={alimento.nome}
                    className={`w-10 h-10 rounded-xl ${
                      alimento.id === "biscoito-agua-sal"
                        ? "object-contain bg-white p-0.5"
                        : "object-cover"
                    } border border-border shrink-0`}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span className="w-10 h-10 rounded-xl bg-secondary/60 flex items-center justify-center text-xl shrink-0">
                    {alimento.emoji}
                  </span>
                )}

                <div className="flex-1 min-w-0">
                  <span className="block text-sm font-bold text-foreground group-hover:text-primary transition truncate">
                    {alimento.emoji} {alimento.nome}
                  </span>
                  <span className="text-xs text-muted-foreground block truncate">
                    {alimento.categoria}
                  </span>
                </div>

                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full shrink-0"
                  style={{
                    background: `color-mix(in oklab, ${nivel.cor} 22%, var(--card))`
                  }}
                >
                  {nivel.emoji} {nivel.rotulo}
                </span>
              </button>
            );
          })}

          {filtrados.length === 0 && (
            <p className="text-center text-xs text-muted-foreground py-8">
              Nenhum alimento encontrado.
            </p>
          )}
        </div>

        <p className="mt-3 shrink-0 text-xs text-muted-foreground text-center border-t border-border pt-2">
          Você pode registrar quantos alimentos desejar em cada refeição.
        </p>
      </div>
    </div>
  );
};

/* Modal Ficha Completa do Alimento e Cuidados */
interface ModalFichaAlimentoProps {
  consumo: ConsumoItem;
  cuidados: CuidadoItem[];
  onFechar: () => void;
  onSalvarCuidados: (novosCuidados: string[]) => void;
}

const ModalFichaAlimento: React.FC<ModalFichaAlimentoProps> = ({
  consumo,
  cuidados,
  onFechar,
  onSalvarCuidados
}) => {
  const al = consumo.alimento;
  const nivel = NIVEIS_ATENCAO[al.nivel_atencao] || NIVEIS_ATENCAO.moderado;
  const precisaAtencaoExtra = al.nivel_atencao === "atencao" || al.nivel_atencao === "maior";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="w-full max-w-lg max-h-[88vh] rounded-3xl border border-border bg-card p-6 shadow-2xl overflow-y-auto space-y-5">
        {/* Top bar with close button */}
        <div className="flex justify-end">
          <button
            onClick={onFechar}
            className="p-1.5 rounded-xl hover:bg-secondary text-muted-foreground cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Header Food Info */}
        <div className="flex gap-4 items-start">
          {al.imagem_url ? (
            <img
              src={al.imagem_url}
              alt={al.nome}
              className={`w-24 h-24 sm:w-28 sm:h-28 rounded-2xl ${
                al.id === "biscoito-agua-sal"
                  ? "object-contain bg-white p-1"
                  : "object-cover"
              } border border-border shrink-0`}
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-24 h-24 rounded-2xl bg-secondary/50 flex items-center justify-center text-5xl shrink-0">
              {al.emoji}
            </div>
          )}

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {al.categoria}
            </div>
            <h3 className="font-display text-2xl font-bold text-primary">
              {al.emoji} {al.nome}
            </h3>
            <div className="mt-2">
              <span
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full"
                style={{
                  background: `color-mix(in oklab, ${nivel.cor} 22%, var(--card))`
                }}
              >
                {nivel.emoji} {nivel.rotulo}
              </span>
            </div>
          </div>
        </div>

        {/* Orientative Warning */}
        <p className="text-xs text-muted-foreground bg-secondary/40 rounded-2xl p-3 leading-relaxed">
          {AVISO_ORIENTATIVO}
        </p>

        {/* O que você precisa saber */}
        {al.saiba_mais && (
          <section>
            <h4 className="font-display text-base font-bold text-primary">
              O que você precisa saber?
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-foreground/80 leading-relaxed">
              {al.saiba_mais}
            </p>

            {al.defensivos.length > 0 ? (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {al.defensivos.map((def, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {def}
                  </span>
                ))}
              </div>
            ) : (
              <div className="mt-2">
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[var(--leaf)]/15 text-[var(--leaf)] font-semibold inline-flex items-center gap-1">
                  ✓ Nenhum resíduo de defensivo detectado no lote analisado
                </span>
              </div>
            )}

            {al.riscos.length > 0 && (
              <ul className="mt-2 space-y-1">
                {al.riscos.map((risco, i) => (
                  <li key={i} className="flex gap-1.5 text-xs text-foreground/85">
                    <AlertTriangle className="w-3.5 h-3.5 text-[var(--tomato)] shrink-0 mt-0.5" />
                    <span>{risco}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}

        {/* Como cuidar */}
        <section>
          <h4 className="font-display text-base font-bold text-primary">
            {al.categoria === "Ultraprocessados"
              ? "Como reduzir a exposição e consumir com consciência?"
              : "Como reduzir a exposição e cuidar melhor desse alimento?"}
          </h4>
          <p className="mt-1 text-xs sm:text-sm text-foreground/80 leading-relaxed">
            {al.cuidados_texto ||
              "Lave abundantemente em água potável corrente, esfregando com escovinha própria se a casca for firme."}
          </p>
          {al.categoria !== "Ultraprocessados" && (
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              {AVISO_HIGIENIZACAO}
            </p>
          )}
        </section>

        {/* Medidas extras se for atencao ou maior */}
        {precisaAtencaoExtra && (
          <section className="rounded-2xl border-2 border-[var(--sun)]/60 bg-[var(--sun)]/10 p-4">
            <h4 className="font-display text-base font-bold text-primary flex items-center gap-1.5">
              🛡️ Medidas para reduzir os riscos
            </h4>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              {al.categoria === "Ultraprocessados"
                ? "Por ser um alimento ultraprocessado, o processamento industrial não neutraliza os resíduos químicos agrícolas. Adote estas práticas preventivas:"
                : `Por estar no nível ${nivel.rotulo}, este alimento pede um cuidado extra. Siga estas medidas sempre que possível:`}
            </p>
            <ol className="mt-2.5 space-y-1.5 text-xs text-foreground/85">
              {al.categoria === "Ultraprocessados" ? (
                <>
                  <li className="flex gap-2">
                    <span className="w-4 h-4 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <span>Reduzir a frequência de consumo, priorizando alimentos in natura segundo o Guia Alimentar.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="w-4 h-4 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <span>Substituir por opções caseiras preparadas na hora com ingredientes frescos.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="w-4 h-4 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <span>Buscar marcas certificadas com ingredientes orgânicos ou agroecológicos.</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex gap-2">
                    <span className="w-4 h-4 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <span>Lavar em água corrente e colocar de molho em solução clorada por 15 min.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="w-4 h-4 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <span>Descascar sempre que a receita permitir, diminuindo resíduos externos.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="w-4 h-4 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <span>Comprar de produtores orgânicos ou agroecológicos certificados.</span>
                  </li>
                </>
              )}
            </ol>
          </section>
        )}

        {/* Care checklist section */}
        <section className="pt-2 border-t border-border">
          <ChecklistCuidados
            cuidados={cuidados}
            selecionados={consumo.cuidados}
            onSalvar={onSalvarCuidados}
          />
        </section>

        {/* Fontes */}
        {al.fontes.length > 0 && (
          <section className="border-t border-border pt-3">
            <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Fontes consultadas</span>
            </div>
            <ul className="mt-1.5 space-y-0.5 text-xs text-muted-foreground">
              {al.fontes.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};
