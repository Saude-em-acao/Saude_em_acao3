import { CuidadoItem, CUIDADOS_PADRAO, PONTUACAO_REGRAS, REFEICOES_PADRAO, getNivel, getProximoNivel } from "../data/cuidados";
import { ALIMENTOS, Alimento } from "../data/alimentos";

export interface ConsumoItem {
  id: string;
  alimentoId: string;
  alimento: Alimento;
  cuidados: string[]; // array of cuidado_id
}

export interface RefeicaoDia {
  id: string;
  tipo: string;
  nome: string;
  icone: string;
  status: "pendente" | "registrada" | "nao-faco";
  consumos: ConsumoItem[];
}

export interface RegistroDia {
  dia: string; // YYYY-MM-DD
  pontos: number;
  refeicoes: RefeicaoDia[];
}

export interface UserProfile {
  id: string;
  nome: string;
  email: string;
  avatar_url?: string;
  logado: boolean;
}

const STORAGE_KEY_DIAS = "saude_em_acao_dias";
const STORAGE_KEY_USER = "saude_em_acao_user";

export function getHojeString(): string {
  const agora = new Date();
  const ano = agora.getFullYear();
  const mes = String(agora.getMonth() + 1).padStart(2, "0");
  const dia = String(agora.getDate()).padStart(2, "0");
  return `${ano}-${mes}-${dia}`;
}

export function formatarDataExtenso(dataIso: string): string {
  const [ano, mes, dia] = dataIso.split("-").map(Number);
  const data = new Date(ano, (mes || 1) - 1, dia || 1);
  return data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}

export function carregarUsuario(): UserProfile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_USER);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error(e);
  }
  return {
    id: "user_default",
    nome: "Visitante Consciente",
    email: "visitante@saudeemacao.org",
    logado: false
  };
}

export function salvarUsuario(user: UserProfile) {
  try {
    localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
  } catch (e) {
    console.error(e);
  }
}

export function carregarTodosDias(): Record<string, RegistroDia> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_DIAS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error(e);
  }
  return {};
}

export function salvarTodosDias(dias: Record<string, RegistroDia>) {
  try {
    localStorage.setItem(STORAGE_KEY_DIAS, JSON.stringify(dias));
  } catch (e) {
    console.error(e);
  }
}

export function obterDia(dia: string): RegistroDia {
  const todos = carregarTodosDias();
  if (todos[dia]) {
    // Re-link alimento objects
    const registro = todos[dia];
    registro.refeicoes.forEach(r => {
      r.consumos.forEach(c => {
        const found = ALIMENTOS.find(a => a.id === c.alimentoId);
        if (found) c.alimento = found;
      });
    });
    return registro;
  }

  // Create default day with standard 5 meals
  const refeicoes: RefeicaoDia[] = REFEICOES_PADRAO.map(r => ({
    id: `ref_${dia}_${r.tipo}`,
    tipo: r.tipo,
    nome: r.nome,
    icone: r.icone,
    status: "pendente",
    consumos: []
  }));

  const novoDia: RegistroDia = {
    dia,
    pontos: 0,
    refeicoes
  };
  todos[dia] = novoDia;
  salvarTodosDias(todos);
  return novoDia;
}

export function calcularPontosDoDia(diaRegistro: RegistroDia, cuidadosLista: CuidadoItem[]): number {
  let pts = 0;
  let refeicoesComRegistro = 0;

  for (const ref of diaRegistro.refeicoes) {
    if (ref.status === "nao-faco") continue;

    if (ref.consumos.length > 0) {
      refeicoesComRegistro++;
      pts += PONTUACAO_REGRAS.refeicaoRegistrada; // 5 pts per meal with food
      
      for (const c of ref.consumos) {
        pts += PONTUACAO_REGRAS.alimentoRegistrado; // 2 pts per food
        
        for (const cuidadoId of c.cuidados) {
          const item = cuidadosLista.find(ci => ci.id === cuidadoId);
          if (item) {
            pts += item.pontos;
          }
        }
      }
    }
  }

  const todasOrganizadas = diaRegistro.refeicoes.every(r => r.status !== "pendente");
  if (todasOrganizadas && diaRegistro.refeicoes.length > 0) {
    pts += PONTUACAO_REGRAS.diaCompleto; // 15 pts bonus for full organized day
  }

  return pts;
}

export function salvarRefeicaoStatus(dia: string, tipo: string, status: "pendente" | "registrada" | "nao-faco"): RegistroDia {
  const todos = carregarTodosDias();
  const reg = obterDia(dia);
  const ref = reg.refeicoes.find(r => r.tipo === tipo);
  if (ref) {
    ref.status = status;
  }
  reg.pontos = calcularPontosDoDia(reg, CUIDADOS_PADRAO);
  todos[dia] = reg;
  salvarTodosDias(todos);
  return reg;
}

export function adicionarAlimentoNaRefeicao(dia: string, tipo: string, alimentoId: string): RegistroDia {
  const todos = carregarTodosDias();
  const reg = obterDia(dia);
  const ref = reg.refeicoes.find(r => r.tipo === tipo);
  const alimento = ALIMENTOS.find(a => a.id === alimentoId);

  if (ref && alimento) {
    ref.status = "registrada";
    const consumoId = `cons_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`;
    ref.consumos.push({
      id: consumoId,
      alimentoId,
      alimento,
      cuidados: []
    });
  }

  reg.pontos = calcularPontosDoDia(reg, CUIDADOS_PADRAO);
  todos[dia] = reg;
  salvarTodosDias(todos);
  return reg;
}

export function removerAlimentoDaRefeicao(dia: string, consumoId: string): RegistroDia {
  const todos = carregarTodosDias();
  const reg = obterDia(dia);

  for (const ref of reg.refeicoes) {
    const idx = ref.consumos.findIndex(c => c.id === consumoId);
    if (idx !== -1) {
      ref.consumos.splice(idx, 1);
      if (ref.consumos.length === 0 && ref.status === "registrada") {
        ref.status = "pendente";
      }
      break;
    }
  }

  reg.pontos = calcularPontosDoDia(reg, CUIDADOS_PADRAO);
  todos[dia] = reg;
  salvarTodosDias(todos);
  return reg;
}

export function salvarCuidadosConsumo(dia: string, consumoId: string, cuidadosIds: string[]): RegistroDia {
  const todos = carregarTodosDias();
  const reg = obterDia(dia);

  for (const ref of reg.refeicoes) {
    const consumo = ref.consumos.find(c => c.id === consumoId);
    if (consumo) {
      consumo.cuidados = cuidadosIds;
      break;
    }
  }

  reg.pontos = calcularPontosDoDia(reg, CUIDADOS_PADRAO);
  todos[dia] = reg;
  salvarTodosDias(todos);
  return reg;
}

export interface EstatisticasGerais {
  pontosTotais: number;
  sequencia: number;
  diasRegistrados: string[];
  refeicoesRegistradas: number;
  cuidadosRealizados: number;
  indiceMedio: number | null;
}

export function calcularEstatisticasGerais(): EstatisticasGerais {
  const todos = carregarTodosDias();
  const diasLista = Object.keys(todos).sort();

  let pontosTotais = 0;
  let refeicoesRegistradas = 0;
  let cuidadosRealizados = 0;
  let totalAlimentos = 0;
  const diasComRegistros: string[] = [];

  for (const dia of diasLista) {
    const reg = todos[dia];
    let temAlgo = false;
    for (const ref of reg.refeicoes) {
      if (ref.status === "registrada") {
        refeicoesRegistradas++;
        temAlgo = true;
      }
      totalAlimentos += ref.consumos.length;
      for (const c of ref.consumos) {
        cuidadosRealizados += c.cuidados.length;
      }
    }
    const pts = calcularPontosDoDia(reg, CUIDADOS_PADRAO);
    pontosTotais += pts;
    if (temAlgo || pts > 0) {
      diasComRegistros.push(dia);
    }
  }

  // Sequencia
  let sequencia = 0;
  const hoje = new Date();
  for (let i = 0; ; i++) {
    const d = new Date(hoje);
    d.setDate(hoje.getDate() - i);
    const iso = d.toLocaleDateString("en-CA");
    if (diasComRegistros.includes(iso)) {
      sequencia++;
    } else {
      if (i > 0) break;
      if (!diasComRegistros.includes(iso)) break;
    }
  }

  const cuidadosTotalPossiveis = totalAlimentos * CUIDADOS_PADRAO.length;
  const indiceMedio = cuidadosTotalPossiveis > 0 
    ? Math.min(100, Math.round((cuidadosRealizados / cuidadosTotalPossiveis) * 100))
    : null;

  return {
    pontosTotais,
    sequencia,
    diasRegistrados: diasComRegistros,
    refeicoesRegistradas,
    cuidadosRealizados,
    indiceMedio
  };
}
