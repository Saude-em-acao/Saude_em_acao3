export interface CuidadoItem {
  id: string;
  slug: string;
  nome: string;
  descricao: string;
  pontos: number;
  ordem: number;
}

export const CUIDADOS_PADRAO: CuidadoItem[] = [
  {
    id: "agua-corrente",
    slug: "agua-corrente",
    nome: "Lavar em água corrente",
    descricao: "Lavar abundantemente folha a folha ou esfregar a casca sob água corrente potável.",
    pontos: 5,
    ordem: 1
  },
  {
    id: "solucao-clorada",
    slug: "solucao-clorada",
    nome: "Imersão em solução clorada",
    descricao: "1 colher de sopa de hipoclorito de sódio (ou água sanitária para alimentos) por litro de água por 15 min.",
    pontos: 10,
    ordem: 2
  },
  {
    id: "descascar",
    slug: "descascar",
    nome: "Descascar o alimento",
    descricao: "Remover a casca reduz resíduos superficiais que não penetraram totalmente na polpa.",
    pontos: 10,
    ordem: 3
  },
  {
    id: "retirar-partes",
    slug: "retirar-partes",
    nome: "Retirar folhas externas ou partes danificadas",
    descricao: "Descartar as primeiras camadas de folhas ou áreas machucadas onde há maior concentração.",
    pontos: 5,
    ordem: 4
  },
  {
    id: "organico",
    slug: "organico",
    nome: "Optar por orgânico ou agroecológico",
    descricao: "Sempre que viável, escolher alimentos cultivados sem defensivos agrícolas sintéticos.",
    pontos: 15,
    ordem: 5
  },
  {
    id: "cozimento",
    slug: "cozimento",
    nome: "Cozinhar, refogar ou branquear",
    descricao: "O calor e o cozimento podem degradar parte de certas substâncias químicas sensíveis.",
    pontos: 10,
    ordem: 6
  }
];

export interface NivelProgresso {
  min: number;
  max: number;
  nome: string;
  emoji: string;
}

export const NIVEIS_PROGRESSO: NivelProgresso[] = [
  { min: 0, max: 99, nome: "Começando a Cuidar", emoji: "🌱" },
  { min: 100, max: 249, nome: "Cuidador Atento", emoji: "🧡" },
  { min: 250, max: 499, nome: "Guardião da Alimentação", emoji: "🛡️" },
  { min: 500, max: Number.POSITIVE_INFINITY, nome: "Guardião do Prato", emoji: "🏆" }
];

export function getNivel(pontos: number): NivelProgresso {
  return NIVEIS_PROGRESSO.find(n => pontos >= n.min && pontos <= n.max) ?? NIVEIS_PROGRESSO[0];
}

export function getProximoNivel(pontos: number): NivelProgresso | null {
  return NIVEIS_PROGRESSO.find(n => n.min > pontos) ?? null;
}

export const PONTUACAO_REGRAS = {
  alimentoRegistrado: 2,
  refeicaoRegistrada: 5,
  diaCompleto: 15
};

export const REFEICOES_PADRAO = [
  { tipo: "cafe", nome: "Café da manhã", icone: "☕" },
  { tipo: "lanche-manha", nome: "Lanche da manhã", icone: "🍎" },
  { tipo: "almoco", nome: "Almoço", icone: "🍽️" },
  { tipo: "lanche-tarde", nome: "Lanche da tarde", icone: "🥪" },
  { tipo: "jantar", nome: "Jantar", icone: "🌙" }
];

export const NIVEIS_ATENCAO = {
  baixo: { emoji: "🟢", rotulo: "Baixo", cor: "var(--leaf)" },
  moderado: { emoji: "🟡", rotulo: "Moderado", cor: "var(--sun)" },
  atencao: { emoji: "🟠", rotulo: "Atenção", cor: "var(--accent)" },
  maior: { emoji: "🔴", rotulo: "Maior atenção", cor: "var(--tomato)" }
};

export const AVISO_ORIENTATIVO = "Esta classificação é orientativa. Ela indica o nível de atenção sugerido pelos relatórios consultados e não representa quantidade fixa, porcentagem nem resultado de análise do alimento que está na sua casa.";
export const AVISO_HIGIENIZACAO = "Higienizar reduz resíduos de superfície, mas não elimina totalmente o que já foi absorvido pelo alimento. Por isso evitamos indicar métodos caseiros sem comprovação.";

export function getMensagemIndice(indice: number) {
  if (indice >= 70) {
    return { emoji: "🟢", mensagem: "Seu dia teve bastante cuidado. Continue assim!" };
  }
  if (indice >= 40) {
    return { emoji: "🟡", mensagem: "Você já cuidou de boa parte do seu dia. Cada passo conta." };
  }
  return { emoji: "🟠", mensagem: "Todo começo vale. Amanhã dá para cuidar um pouquinho mais." };
}

export interface Conquista {
  id: string;
  slug: string;
  nome: string;
  descricao: string;
  emoji: string;
}

export const CONQUISTAS: Conquista[] = [
  { id: "1", slug: "primeiro-registro", nome: "Primeiro Registro", descricao: "Registrou seu primeiro alimento no prato", emoji: "🌱" },
  { id: "2", slug: "primeiro-dia", nome: "Dia Completo", descricao: "Organizou todas as refeições de um dia", emoji: "📅" },
  { id: "3", slug: "sequencia-3", nome: "Foco de 3 Dias", descricao: "Registrou refeições por 3 dias seguidos", emoji: "🔥" },
  { id: "4", slug: "sequencia-7", nome: "Semana de Ouro", descricao: "Manteve o registro por 7 dias seguidos", emoji: "⭐" },
  { id: "5", slug: "cuidador-atento", nome: "Cuidador Atento", descricao: "Alcançou 100 pontos no Saúde em Ação", emoji: "🧡" },
  { id: "6", slug: "guardiao-alimentacao", nome: "Guardião da Alimentação", descricao: "Alcançou 250 pontos no Saúde em Ação", emoji: "🛡️" },
  { id: "7", slug: "guardiao-prato", nome: "Guardião do Prato", descricao: "Alcançou 500 pontos no Saúde em Ação", emoji: "🏆" },
  { id: "8", slug: "cuidados-50", nome: "Mestre da Higienização", descricao: "Realizou 50 ações de cuidado em alimentos", emoji: "✨" }
];
