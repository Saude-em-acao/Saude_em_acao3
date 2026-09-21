export interface QuizQuestion {
  nome: string;
  emoji: string;
  img: string;
  contaminado: boolean;
  fato: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    nome: "Morango",
    emoji: "🍓",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/PerfectStrawberry.jpg?width=800",
    contaminado: true,
    fato: "Campeão de contaminação no PARA/Anvisa — até 4 defensores agrícolas diferentes em uma única amostra."
  },
  {
    nome: "Pimentão",
    emoji: "🫑",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Red_Capsicum_and_cross_section.jpg?width=800",
    contaminado: true,
    fato: "Aparece no topo da lista da Anvisa com substâncias proibidas em outros países, como acefato."
  },
  {
    nome: "Abacate",
    emoji: "🥑",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Persea_americana_fruit_2.JPG?width=800",
    contaminado: false,
    fato: "A casca grossa protege a polpa — está entre os mais seguros da lista."
  },
  {
    nome: "Laranja",
    emoji: "🍊",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Orange-Whole-%26-Split.jpg?width=800",
    contaminado: true,
    fato: "Top da Anvisa 2024: resíduos passam direto para o suco coado em casa."
  },
  {
    nome: "Cebola",
    emoji: "🧅",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Onion_on_White.JPG?width=800",
    contaminado: false,
    fato: "Por ter camadas externas que descartamos, a cebola é uma das mais limpas."
  },
  {
    nome: "Uva",
    emoji: "🍇",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Table_grapes_on_white.jpg?width=800",
    contaminado: true,
    fato: "Recebe muitas aplicações de fungicidas; resíduos ficam na casca fina."
  },
  {
    nome: "Abacaxi",
    emoji: "🍍",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Pineapple_and_cross_section.jpg?width=800",
    contaminado: false,
    fato: "Apesar do uso de defensivos no campo, a casca espessa reduz a exposição na polpa."
  },
  {
    nome: "Pepino",
    emoji: "🥒",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Cucumber_BNC.jpg?width=800",
    contaminado: true,
    fato: "Líder no monitoramento Anvisa 2024 — acefato e carbendazim acima do limite."
  },
  {
    nome: "Banana",
    emoji: "🍌",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Banana-Single.jpg?width=800",
    contaminado: false,
    fato: "A casca não comestível atua como barreira — está entre as frutas mais seguras."
  },
  {
    nome: "Goiaba",
    emoji: "🍈",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Guava_ID.jpg?width=800",
    contaminado: true,
    fato: "Reportagem da Agência Pública: campeã em resíduos acima do limite."
  },
  {
    nome: "Melancia",
    emoji: "🍉",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Watermelon_cross_BNC.jpg?width=800",
    contaminado: false,
    fato: "Casca grossa protege a polpa; aparece entre as frutas mais limpas da Anvisa."
  },
  {
    nome: "Tomate",
    emoji: "🍅",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Tomato_je.jpg?width=800",
    contaminado: true,
    fato: "Consumo diário + casca fina = alta exposição cumulativa a fungicidas."
  }
];
