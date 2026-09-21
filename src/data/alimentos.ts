export interface LimpezaMetodo {
  metodo: string;
  passos: string[];
  observacao: string;
  fonte: string;
}

export interface Alimento {
  id: string;
  slug: string;
  nome: string;
  emoji: string;
  categoria: string;
  rank?: string;
  cor?: string;
  nivel_atencao: "baixo" | "moderado" | "atencao" | "maior";
  defensivos: string[];
  riscos: string[];
  imagem_url?: string;
  saiba_mais?: string;
  cuidados_texto?: string;
  fontes: string[];
  limpeza?: LimpezaMetodo;
}

export const ALIMENTOS: Alimento[] = [
  {
    "id": "morango",
    "slug": "morango",
    "nome": "Morango",
    "emoji": "🍓",
    "categoria": "Frutas",
    "rank": "Campeão de contaminação",
    "cor": "tomato",
    "nivel_atencao": "maior",
    "defensivos": [
      "Carbendazim",
      "Clorpirifós",
      "Captana",
      "Procimidona"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Morango faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "uva",
    "slug": "uva",
    "nome": "Uva",
    "emoji": "🍇",
    "categoria": "Frutas",
    "rank": "Múltiplas aplicações",
    "cor": "berry",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Tiametoxam",
      "Procimidona",
      "Captana"
    ],
    "riscos": [],
    "imagem_url": "/assets/uva.jpg",
    "saiba_mais": "Uva faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "laranja",
    "slug": "laranja",
    "nome": "Laranja",
    "emoji": "🍊",
    "categoria": "Frutas",
    "rank": "Topo da lista Anvisa 2024",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Imidacloprido",
      "Tiametoxam",
      "Acefato",
      "Carbendazim"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Laranja faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "abacaxi",
    "slug": "abacaxi",
    "nome": "Abacaxi",
    "emoji": "🍍",
    "categoria": "Frutas",
    "rank": "Topo da contaminação (O Globo)",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Diuron",
      "Bromacila",
      "Etoprofós"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Abacaxi faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "maca",
    "slug": "maca",
    "nome": "Maçã",
    "emoji": "🍎",
    "categoria": "Frutas",
    "rank": "Aplicações repetidas",
    "cor": "tomato",
    "nivel_atencao": "maior",
    "defensivos": [
      "Captana",
      "Tiabendazol",
      "Carbendazim"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Maçã faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "banana",
    "slug": "banana",
    "nome": "Banana",
    "emoji": "🍌",
    "categoria": "Frutas",
    "rank": "Pulverização aérea",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Clorotalonil",
      "Tiabendazol",
      "Imazalil"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Banana faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "manga",
    "slug": "manga",
    "nome": "Manga",
    "emoji": "🥭",
    "categoria": "Frutas",
    "rank": "Resíduos acima do limite",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Carbendazim",
      "Tebuconazol",
      "Imidacloprido"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Manga faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "abacate",
    "slug": "abacate",
    "nome": "Abacate",
    "emoji": "🥑",
    "categoria": "Frutas",
    "rank": "Acumula resíduos na polpa",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Difenoconazol",
      "Abamectina",
      "Clorpirifós"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Abacate faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "melao",
    "slug": "melao",
    "nome": "Melão",
    "emoji": "🍈",
    "categoria": "Frutas",
    "rank": "Cultivo intensivo no NE",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Acefato",
      "Metomil",
      "Imidacloprido"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Melão faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "melancia",
    "slug": "melancia",
    "nome": "Melancia",
    "emoji": "🍉",
    "categoria": "Frutas",
    "rank": "Alta carga de água",
    "cor": "tomato",
    "nivel_atencao": "maior",
    "defensivos": [
      "Mancozebe",
      "Clorpirifós",
      "Lambda-cialotrina"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Melancia faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "pera",
    "slug": "pera",
    "nome": "Pera",
    "emoji": "🍐",
    "categoria": "Frutas",
    "rank": "Alta detecção (PARA)",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Carbendazim",
      "Tebuconazol",
      "Imidacloprido"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Pera faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "pessego",
    "slug": "pessego",
    "nome": "Pêssego",
    "emoji": "🍑",
    "categoria": "Frutas",
    "rank": "Pulverização frequente",
    "cor": "tomato",
    "nivel_atencao": "maior",
    "defensivos": [
      "Iprodiona",
      "Carbendazim",
      "Diazinona"
    ],
    "riscos": [],
    "imagem_url": "https://commons.wikimedia.org/wiki/Special:FilePath/Autumn_Red_peaches.jpg?width=800",
    "saiba_mais": "Pêssego faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "goiaba",
    "slug": "goiaba",
    "nome": "Goiaba",
    "emoji": "🍈",
    "categoria": "Frutas",
    "rank": "Campeã (A Pública)",
    "cor": "tomato",
    "nivel_atencao": "maior",
    "defensivos": [
      "Abamectina",
      "Carbendazim",
      "Clorpirifós"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Goiaba faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "limao",
    "slug": "limao",
    "nome": "Limão",
    "emoji": "🍋",
    "categoria": "Frutas",
    "rank": "Pulverização pesada",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Imidacloprido",
      "Acefato",
      "Tiametoxam"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/P1030323.JPG/960px-P1030323.JPG",
    "saiba_mais": "Limão faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "mexerica-tangerina",
    "slug": "mexerica-tangerina",
    "nome": "Mexerica / Tangerina",
    "emoji": "🍊",
    "categoria": "Frutas",
    "rank": "Citros com resíduos",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Carbendazim",
      "Imazalil",
      "Clorpirifós"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/2/2a/TangerineFruit.jpg",
    "saiba_mais": "Mexerica / Tangerina faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "mamao",
    "slug": "mamao",
    "nome": "Mamão",
    "emoji": "🥭",
    "categoria": "Frutas",
    "rank": "Resíduos detectados",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Mancozebe",
      "Tebuconazol",
      "Cipermetrina"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1617112848923-cc2234396a8d?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Mamão faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "maracuja",
    "slug": "maracuja",
    "nome": "Maracujá",
    "emoji": "🍈",
    "categoria": "Frutas",
    "rank": "Aplicação contínua",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Mancozebe",
      "Difenoconazol",
      "Abamectina"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1604495772376-9657f0035eb5?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Maracujá faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "kiwi",
    "slug": "kiwi",
    "nome": "Kiwi",
    "emoji": "🥝",
    "categoria": "Frutas",
    "rank": "Importação com resíduos",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Iprodiona",
      "Boscalida",
      "Fludioxonil"
    ],
    "riscos": [],
    "imagem_url": "https://commons.wikimedia.org/wiki/Special:FilePath/Kiwi_aka.jpg?width=800",
    "saiba_mais": "Kiwi faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "ameixa",
    "slug": "ameixa",
    "nome": "Ameixa",
    "emoji": "🟣",
    "categoria": "Frutas",
    "rank": "Resíduos persistentes",
    "cor": "berry",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Carbendazim",
      "Tebuconazol",
      "Iprodiona"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Plums_African_Rose_-_whole%2C_halved_and_slice.jpg/960px-Plums_African_Rose_-_whole%2C_halved_and_slice.jpg",
    "saiba_mais": "Ameixa faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "caju",
    "slug": "caju",
    "nome": "Caju",
    "emoji": "🌰",
    "categoria": "Frutas",
    "rank": "Cultivo no Nordeste",
    "cor": "tomato",
    "nivel_atencao": "maior",
    "defensivos": [
      "Mancozebe",
      "Endosulfan",
      "Cipermetrina"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cashew_apples.jpg/960px-Cashew_apples.jpg",
    "saiba_mais": "Caju faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "acerola",
    "slug": "acerola",
    "nome": "Acerola",
    "emoji": "🍒",
    "categoria": "Frutas",
    "rank": "Pulverização intensa",
    "cor": "tomato",
    "nivel_atencao": "maior",
    "defensivos": [
      "Abamectina",
      "Imidacloprido",
      "Tiametoxam"
    ],
    "riscos": [],
    "imagem_url": "https://loremflickr.com/800/600/acerola,cherry?lock=15",
    "saiba_mais": "Acerola faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "mirtilo-amora",
    "slug": "mirtilo-amora",
    "nome": "Mirtilo / Amora",
    "emoji": "🫐",
    "categoria": "Frutas",
    "rank": "Cultivo intensivo",
    "cor": "berry",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Boscalida",
      "Iprodiona",
      "Fenhexamida"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Mirtilo / Amora faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "alface",
    "slug": "alface",
    "nome": "Alface",
    "emoji": "🥬",
    "categoria": "Verduras",
    "rank": "Folhas retêm resíduos",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Carbofurano",
      "Permetrina",
      "Deltametrina"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Alface faz parte do grupo de verduras avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Separe folha por folha e retire partes machucadas. Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos. Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante.",
    "fontes": [
      "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Folhas e ervas",
      "passos": [
        "Separe folha por folha e retire partes machucadas.",
        "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
        "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
      ],
      "observacao": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
      "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
    }
  },
  {
    "id": "couve",
    "slug": "couve",
    "nome": "Couve",
    "emoji": "🥬",
    "categoria": "Verduras",
    "rank": "Aplicações frequentes",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Cipermetrina",
      "Lambda-cialotrina",
      "Acefato"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Couve faz parte do grupo de verduras avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Separe folha por folha e retire partes machucadas. Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos. Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante.",
    "fontes": [
      "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Folhas e ervas",
      "passos": [
        "Separe folha por folha e retire partes machucadas.",
        "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
        "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
      ],
      "observacao": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
      "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
    }
  },
  {
    "id": "espinafre",
    "slug": "espinafre",
    "nome": "Espinafre",
    "emoji": "🌿",
    "categoria": "Verduras",
    "rank": "Resíduos retidos nas folhas",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Clorpirifós",
      "Permetrina",
      "Imidacloprido"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Espinafre faz parte do grupo de verduras avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Separe folha por folha e retire partes machucadas. Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos. Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante.",
    "fontes": [
      "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Folhas e ervas",
      "passos": [
        "Separe folha por folha e retire partes machucadas.",
        "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
        "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
      ],
      "observacao": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
      "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
    }
  },
  {
    "id": "rucula",
    "slug": "rucula",
    "nome": "Rúcula",
    "emoji": "🌱",
    "categoria": "Verduras",
    "rank": "Folhas finas, alta retenção",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Permetrina",
      "Deltametrina",
      "Acefato"
    ],
    "riscos": [],
    "imagem_url": "/assets/rucula.jpg",
    "saiba_mais": "Rúcula faz parte do grupo de verduras avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Separe folha por folha e retire partes machucadas. Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos. Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante.",
    "fontes": [
      "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Folhas e ervas",
      "passos": [
        "Separe folha por folha e retire partes machucadas.",
        "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
        "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
      ],
      "observacao": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
      "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
    }
  },
  {
    "id": "agriao",
    "slug": "agriao",
    "nome": "Agrião",
    "emoji": "🌿",
    "categoria": "Verduras",
    "rank": "Cultivo úmido, alta absorção",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Clorpirifós",
      "Permetrina",
      "Carbofurano"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Watercress_%282%29.JPG/960px-Watercress_%282%29.JPG",
    "saiba_mais": "Agrião faz parte do grupo de verduras avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Separe folha por folha e retire partes machucadas. Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos. Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante.",
    "fontes": [
      "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Folhas e ervas",
      "passos": [
        "Separe folha por folha e retire partes machucadas.",
        "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
        "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
      ],
      "observacao": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
      "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
    }
  },
  {
    "id": "repolho",
    "slug": "repolho",
    "nome": "Repolho",
    "emoji": "🥬",
    "categoria": "Verduras",
    "rank": "Múltiplas pulverizações",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Cipermetrina",
      "Acefato",
      "Deltametrina"
    ],
    "riscos": [],
    "imagem_url": "https://commons.wikimedia.org/wiki/Special:FilePath/Cabbage_and_cross_section_on_white.jpg?width=800",
    "saiba_mais": "Repolho faz parte do grupo de verduras avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Separe folha por folha e retire partes machucadas. Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos. Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante.",
    "fontes": [
      "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Folhas e ervas",
      "passos": [
        "Separe folha por folha e retire partes machucadas.",
        "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
        "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
      ],
      "observacao": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
      "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
    }
  },
  {
    "id": "brocolis",
    "slug": "brocolis",
    "nome": "Brócolis",
    "emoji": "🥦",
    "categoria": "Verduras",
    "rank": "Resíduos nos floretes",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Clorpirifós",
      "Cipermetrina",
      "Lambda-cialotrina"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1583663848850-46af132dc08e?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Brócolis faz parte do grupo de verduras avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Separe folha por folha e retire partes machucadas. Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos. Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante.",
    "fontes": [
      "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Folhas e ervas",
      "passos": [
        "Separe folha por folha e retire partes machucadas.",
        "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
        "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
      ],
      "observacao": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
      "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
    }
  },
  {
    "id": "couve-flor",
    "slug": "couve-flor",
    "nome": "Couve-flor",
    "emoji": "🥦",
    "categoria": "Verduras",
    "rank": "Aplicações repetidas",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Cipermetrina",
      "Acefato",
      "Deltametrina"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Chou-fleur_02.jpg/960px-Chou-fleur_02.jpg",
    "saiba_mais": "Couve-flor faz parte do grupo de verduras avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Separe folha por folha e retire partes machucadas. Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos. Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante.",
    "fontes": [
      "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Folhas e ervas",
      "passos": [
        "Separe folha por folha e retire partes machucadas.",
        "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
        "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
      ],
      "observacao": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
      "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
    }
  },
  {
    "id": "chicoria-almeirao",
    "slug": "chicoria-almeirao",
    "nome": "Chicória / Almeirão",
    "emoji": "🌿",
    "categoria": "Verduras",
    "rank": "Retém resíduos nas folhas",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Permetrina",
      "Deltametrina",
      "Acefato"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Cichorium_endivia_-_Botanischer_Garten_Mainz_IMG_5453.JPG/960px-Cichorium_endivia_-_Botanischer_Garten_Mainz_IMG_5453.JPG",
    "saiba_mais": "Chicória / Almeirão faz parte do grupo de verduras avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Separe folha por folha e retire partes machucadas. Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos. Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante.",
    "fontes": [
      "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Folhas e ervas",
      "passos": [
        "Separe folha por folha e retire partes machucadas.",
        "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
        "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
      ],
      "observacao": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
      "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
    }
  },
  {
    "id": "mostarda-folha",
    "slug": "mostarda-folha",
    "nome": "Mostarda (folha)",
    "emoji": "🌿",
    "categoria": "Verduras",
    "rank": "Cultivo com pesticidas",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Clorpirifós",
      "Cipermetrina",
      "Acefato"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/4/42/Brassica_juncea_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-168.jpg",
    "saiba_mais": "Mostarda (folha) faz parte do grupo de verduras avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Separe folha por folha e retire partes machucadas. Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos. Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante.",
    "fontes": [
      "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Folhas e ervas",
      "passos": [
        "Separe folha por folha e retire partes machucadas.",
        "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
        "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
      ],
      "observacao": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
      "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
    }
  },
  {
    "id": "salsa-coentro",
    "slug": "salsa-coentro",
    "nome": "Salsa / Coentro",
    "emoji": "🌿",
    "categoria": "Verduras",
    "rank": "Folhas finas com alta retenção",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Clorpirifós",
      "Permetrina",
      "Deltametrina"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Petroselinum.jpg/960px-Petroselinum.jpg",
    "saiba_mais": "Salsa / Coentro faz parte do grupo de verduras avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Separe folha por folha e retire partes machucadas. Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos. Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante.",
    "fontes": [
      "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Folhas e ervas",
      "passos": [
        "Separe folha por folha e retire partes machucadas.",
        "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
        "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
      ],
      "observacao": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
      "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
    }
  },
  {
    "id": "pimentao",
    "slug": "pimentao",
    "nome": "Pimentão",
    "emoji": "🫑",
    "categoria": "Legumes",
    "rank": "Top 3 da Anvisa",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Acefato",
      "Cipermetrina",
      "Endosulfan",
      "Metamidofós"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Pimentão faz parte do grupo de legumes avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e esfregue com as mãos ou escova limpa. Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos. Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo.",
    "fontes": [
      "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Legumes de casca exposta",
      "passos": [
        "Lave em água corrente e esfregue com as mãos ou escova limpa.",
        "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
      ],
      "observacao": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
      "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
    }
  },
  {
    "id": "tomate",
    "slug": "tomate",
    "nome": "Tomate",
    "emoji": "🍅",
    "categoria": "Legumes",
    "rank": "Alta exposição diária",
    "cor": "tomato",
    "nivel_atencao": "maior",
    "defensivos": [
      "Clorotalonil",
      "Mancozebe",
      "Tebuconazol"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Tomate faz parte do grupo de legumes avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e esfregue com as mãos ou escova limpa. Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos. Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo.",
    "fontes": [
      "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Legumes de casca exposta",
      "passos": [
        "Lave em água corrente e esfregue com as mãos ou escova limpa.",
        "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
      ],
      "observacao": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
      "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
    }
  },
  {
    "id": "pepino",
    "slug": "pepino",
    "nome": "Pepino",
    "emoji": "🥒",
    "categoria": "Legumes",
    "rank": "Campeão Anvisa 2024",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Acefato",
      "Carbendazim",
      "Clorotalonil"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Pepino faz parte do grupo de legumes avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e esfregue com as mãos ou escova limpa. Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos. Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo.",
    "fontes": [
      "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Legumes de casca exposta",
      "passos": [
        "Lave em água corrente e esfregue com as mãos ou escova limpa.",
        "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
      ],
      "observacao": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
      "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
    }
  },
  {
    "id": "abobrinha",
    "slug": "abobrinha",
    "nome": "Abobrinha",
    "emoji": "🥒",
    "categoria": "Legumes",
    "rank": "Resíduos detectados",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Mancozebe",
      "Clorpirifós",
      "Lambda-cialotrina"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/CSA-Striped-Zucchini.jpg/960px-CSA-Striped-Zucchini.jpg",
    "saiba_mais": "Abobrinha faz parte do grupo de legumes avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e esfregue com as mãos ou escova limpa. Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos. Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo.",
    "fontes": [
      "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Legumes de casca exposta",
      "passos": [
        "Lave em água corrente e esfregue com as mãos ou escova limpa.",
        "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
      ],
      "observacao": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
      "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
    }
  },
  {
    "id": "berinjela",
    "slug": "berinjela",
    "nome": "Berinjela",
    "emoji": "🍆",
    "categoria": "Legumes",
    "rank": "Pulverização frequente",
    "cor": "berry",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Acefato",
      "Cipermetrina",
      "Endosulfan"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Solanum_melongena_24_08_2012_%281%29.JPG/960px-Solanum_melongena_24_08_2012_%281%29.JPG",
    "saiba_mais": "Berinjela faz parte do grupo de legumes avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e esfregue com as mãos ou escova limpa. Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos. Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo.",
    "fontes": [
      "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Legumes de casca exposta",
      "passos": [
        "Lave em água corrente e esfregue com as mãos ou escova limpa.",
        "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
      ],
      "observacao": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
      "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
    }
  },
  {
    "id": "chuchu",
    "slug": "chuchu",
    "nome": "Chuchu",
    "emoji": "🥒",
    "categoria": "Legumes",
    "rank": "Resíduos detectados (PARA)",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Acefato",
      "Clorpirifós",
      "Carbendazim"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Chayote_BNC.jpg/960px-Chayote_BNC.jpg",
    "saiba_mais": "Chuchu faz parte do grupo de legumes avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e esfregue com as mãos ou escova limpa. Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos. Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo.",
    "fontes": [
      "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Legumes de casca exposta",
      "passos": [
        "Lave em água corrente e esfregue com as mãos ou escova limpa.",
        "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
      ],
      "observacao": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
      "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
    }
  },
  {
    "id": "quiabo",
    "slug": "quiabo",
    "nome": "Quiabo",
    "emoji": "🥒",
    "categoria": "Legumes",
    "rank": "Pulverização constante",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Cipermetrina",
      "Acefato",
      "Lambda-cialotrina"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Hong_Kong_Okra_Aug_25_2012.JPG/960px-Hong_Kong_Okra_Aug_25_2012.JPG",
    "saiba_mais": "Quiabo faz parte do grupo de legumes avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e esfregue com as mãos ou escova limpa. Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos. Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo.",
    "fontes": [
      "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Legumes de casca exposta",
      "passos": [
        "Lave em água corrente e esfregue com as mãos ou escova limpa.",
        "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
      ],
      "observacao": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
      "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
    }
  },
  {
    "id": "abobora",
    "slug": "abobora",
    "nome": "Abóbora",
    "emoji": "🎃",
    "categoria": "Legumes",
    "rank": "Resíduos persistentes",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Mancozebe",
      "Clorpirifós",
      "Imidacloprido"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1570586437263-ab629fccc818?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Abóbora faz parte do grupo de legumes avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e esfregue com as mãos ou escova limpa. Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos. Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo.",
    "fontes": [
      "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Legumes de casca exposta",
      "passos": [
        "Lave em água corrente e esfregue com as mãos ou escova limpa.",
        "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
      ],
      "observacao": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
      "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
    }
  },
  {
    "id": "vagem",
    "slug": "vagem",
    "nome": "Vagem",
    "emoji": "🫛",
    "categoria": "Legumes",
    "rank": "Resíduos detectados",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Cipermetrina",
      "Lambda-cialotrina",
      "Acefato"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Vagem faz parte do grupo de legumes avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e esfregue com as mãos ou escova limpa. Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos. Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo.",
    "fontes": [
      "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Legumes de casca exposta",
      "passos": [
        "Lave em água corrente e esfregue com as mãos ou escova limpa.",
        "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
      ],
      "observacao": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
      "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
    }
  },
  {
    "id": "ervilha",
    "slug": "ervilha",
    "nome": "Ervilha",
    "emoji": "🫛",
    "categoria": "Legumes",
    "rank": "Cultivo intensivo",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Clorpirifós",
      "Lambda-cialotrina",
      "Imidacloprido"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Peas_in_pods_-_Studio.jpg/960px-Peas_in_pods_-_Studio.jpg",
    "saiba_mais": "Ervilha faz parte do grupo de legumes avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e esfregue com as mãos ou escova limpa. Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos. Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo.",
    "fontes": [
      "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Legumes de casca exposta",
      "passos": [
        "Lave em água corrente e esfregue com as mãos ou escova limpa.",
        "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
      ],
      "observacao": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
      "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
    }
  },
  {
    "id": "cenoura",
    "slug": "cenoura",
    "nome": "Cenoura",
    "emoji": "🥕",
    "categoria": "Tubérculos",
    "rank": "Absorção pelas raízes",
    "cor": "accent",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Difenoconazol",
      "Linuron",
      "Aldicarbe"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Cenoura faz parte do grupo de tubérculos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Escove bem a casca em água corrente para remover terra e resíduos externos. Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida. Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco.",
    "fontes": [
      "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Raízes e tubérculos",
      "passos": [
        "Escove bem a casca em água corrente para remover terra e resíduos externos.",
        "Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida.",
        "Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco."
      ],
      "observacao": "A limpeza externa ajuda, mas resíduos internos podem permanecer.",
      "fonte": "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície."
    }
  },
  {
    "id": "batata",
    "slug": "batata",
    "nome": "Batata",
    "emoji": "🥔",
    "categoria": "Tubérculos",
    "rank": "Consumo massivo",
    "cor": "accent",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Glufosinato",
      "Imidacloprido",
      "Clorpirifós"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Batata faz parte do grupo de tubérculos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Escove bem a casca em água corrente para remover terra e resíduos externos. Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida. Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco.",
    "fontes": [
      "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Raízes e tubérculos",
      "passos": [
        "Escove bem a casca em água corrente para remover terra e resíduos externos.",
        "Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida.",
        "Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco."
      ],
      "observacao": "A limpeza externa ajuda, mas resíduos internos podem permanecer.",
      "fonte": "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície."
    }
  },
  {
    "id": "batata-doce",
    "slug": "batata-doce",
    "nome": "Batata-doce",
    "emoji": "🍠",
    "categoria": "Tubérculos",
    "rank": "Absorção no solo",
    "cor": "accent",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Clorpirifós",
      "Carbofurano",
      "Imidacloprido"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1596097635121-14b63b7a0c23?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Batata-doce faz parte do grupo de tubérculos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Escove bem a casca em água corrente para remover terra e resíduos externos. Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida. Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco.",
    "fontes": [
      "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Raízes e tubérculos",
      "passos": [
        "Escove bem a casca em água corrente para remover terra e resíduos externos.",
        "Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida.",
        "Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco."
      ],
      "observacao": "A limpeza externa ajuda, mas resíduos internos podem permanecer.",
      "fonte": "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície."
    }
  },
  {
    "id": "beterraba",
    "slug": "beterraba",
    "nome": "Beterraba",
    "emoji": "🍠",
    "categoria": "Tubérculos",
    "rank": "Raiz com retenção",
    "cor": "berry",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Clorpirifós",
      "Lambda-cialotrina",
      "Carbendazim"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Beterraba faz parte do grupo de tubérculos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Escove bem a casca em água corrente para remover terra e resíduos externos. Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida. Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco.",
    "fontes": [
      "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Raízes e tubérculos",
      "passos": [
        "Escove bem a casca em água corrente para remover terra e resíduos externos.",
        "Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida.",
        "Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco."
      ],
      "observacao": "A limpeza externa ajuda, mas resíduos internos podem permanecer.",
      "fonte": "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície."
    }
  },
  {
    "id": "mandioca",
    "slug": "mandioca",
    "nome": "Mandioca",
    "emoji": "🌱",
    "categoria": "Tubérculos",
    "rank": "Cultivo amplo",
    "cor": "accent",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Glifosato",
      "2,4-D",
      "Atrazina"
    ],
    "riscos": [],
    "imagem_url": "https://commons.wikimedia.org/wiki/Special:FilePath/Cassava.jpg?width=800",
    "saiba_mais": "Mandioca faz parte do grupo de tubérculos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Escove bem a casca em água corrente para remover terra e resíduos externos. Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida. Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco.",
    "fontes": [
      "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Raízes e tubérculos",
      "passos": [
        "Escove bem a casca em água corrente para remover terra e resíduos externos.",
        "Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida.",
        "Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco."
      ],
      "observacao": "A limpeza externa ajuda, mas resíduos internos podem permanecer.",
      "fonte": "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície."
    }
  },
  {
    "id": "inhame",
    "slug": "inhame",
    "nome": "Inhame",
    "emoji": "🍠",
    "categoria": "Tubérculos",
    "rank": "Resíduos no solo",
    "cor": "accent",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Glifosato",
      "Carbofurano",
      "Clorpirifós"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Yam_at_monday_market_kaduna_state_01.jpg/960px-Yam_at_monday_market_kaduna_state_01.jpg",
    "saiba_mais": "Inhame faz parte do grupo de tubérculos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Escove bem a casca em água corrente para remover terra e resíduos externos. Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida. Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco.",
    "fontes": [
      "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Raízes e tubérculos",
      "passos": [
        "Escove bem a casca em água corrente para remover terra e resíduos externos.",
        "Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida.",
        "Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco."
      ],
      "observacao": "A limpeza externa ajuda, mas resíduos internos podem permanecer.",
      "fonte": "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície."
    }
  },
  {
    "id": "rabanete",
    "slug": "rabanete",
    "nome": "Rabanete",
    "emoji": "🟥",
    "categoria": "Tubérculos",
    "rank": "Raiz rápida e contaminada",
    "cor": "tomato",
    "nivel_atencao": "maior",
    "defensivos": [
      "Clorpirifós",
      "Permetrina",
      "Acefato"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Radish_3371103037_4ab07db0bf_o.jpg/960px-Radish_3371103037_4ab07db0bf_o.jpg",
    "saiba_mais": "Rabanete faz parte do grupo de tubérculos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Escove bem a casca em água corrente para remover terra e resíduos externos. Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida. Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco.",
    "fontes": [
      "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Raízes e tubérculos",
      "passos": [
        "Escove bem a casca em água corrente para remover terra e resíduos externos.",
        "Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida.",
        "Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco."
      ],
      "observacao": "A limpeza externa ajuda, mas resíduos internos podem permanecer.",
      "fonte": "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície."
    }
  },
  {
    "id": "arroz",
    "slug": "arroz",
    "nome": "Arroz",
    "emoji": "🌾",
    "categoria": "Grãos",
    "rank": "Base da alimentação",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Glifosato",
      "Carbofurano",
      "Tebuconazol"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Arroz faz parte do grupo de grãos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Selecione e descarte impurezas visíveis antes do preparo. Lave em água corrente até a água sair mais limpa. Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento.",
    "fontes": [
      "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Grãos e cereais",
      "passos": [
        "Selecione e descarte impurezas visíveis antes do preparo.",
        "Lave em água corrente até a água sair mais limpa.",
        "Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento."
      ],
      "observacao": "A lavagem remove poeira e parte do resíduo externo, mas não o que foi absorvido no cultivo.",
      "fonte": "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição."
    }
  },
  {
    "id": "feijao",
    "slug": "feijao",
    "nome": "Feijão",
    "emoji": "🫘",
    "categoria": "Grãos",
    "rank": "Resíduos detectados (PARA)",
    "cor": "accent",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Glifosato",
      "Clorpirifós",
      "Carbendazim"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/French_beans_J1.JPG/960px-French_beans_J1.JPG",
    "saiba_mais": "Feijão faz parte do grupo de grãos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Selecione e descarte impurezas visíveis antes do preparo. Lave em água corrente até a água sair mais limpa. Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento.",
    "fontes": [
      "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Grãos e cereais",
      "passos": [
        "Selecione e descarte impurezas visíveis antes do preparo.",
        "Lave em água corrente até a água sair mais limpa.",
        "Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento."
      ],
      "observacao": "A lavagem remove poeira e parte do resíduo externo, mas não o que foi absorvido no cultivo.",
      "fonte": "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição."
    }
  },
  {
    "id": "trigo",
    "slug": "trigo",
    "nome": "Trigo",
    "emoji": "🌾",
    "categoria": "Grãos",
    "rank": "Aplicação pré-colheita",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Glifosato",
      "Tebuconazol",
      "Clorpirifós"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Vehn%C3%A4pelto_6.jpg/960px-Vehn%C3%A4pelto_6.jpg",
    "saiba_mais": "Trigo faz parte do grupo de grãos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Selecione e descarte impurezas visíveis antes do preparo. Lave em água corrente até a água sair mais limpa. Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento.",
    "fontes": [
      "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Grãos e cereais",
      "passos": [
        "Selecione e descarte impurezas visíveis antes do preparo.",
        "Lave em água corrente até a água sair mais limpa.",
        "Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento."
      ],
      "observacao": "A lavagem remove poeira e parte do resíduo externo, mas não o que foi absorvido no cultivo.",
      "fonte": "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição."
    }
  },
  {
    "id": "soja",
    "slug": "soja",
    "nome": "Soja",
    "emoji": "🌱",
    "categoria": "Grãos",
    "rank": "Cultivo com mais defensores agrícolas no Brasil",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Glifosato",
      "2,4-D",
      "Imidacloprido"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/8/82/Soybean.USDA.jpg",
    "saiba_mais": "Soja faz parte do grupo de grãos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Selecione e descarte impurezas visíveis antes do preparo. Lave em água corrente até a água sair mais limpa. Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento.",
    "fontes": [
      "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Grãos e cereais",
      "passos": [
        "Selecione e descarte impurezas visíveis antes do preparo.",
        "Lave em água corrente até a água sair mais limpa.",
        "Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento."
      ],
      "observacao": "A lavagem remove poeira e parte do resíduo externo, mas não o que foi absorvido no cultivo.",
      "fonte": "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição."
    }
  },
  {
    "id": "aveia",
    "slug": "aveia",
    "nome": "Aveia",
    "emoji": "🌾",
    "categoria": "Grãos",
    "rank": "Resíduos pré-colheita",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Glifosato",
      "Clorpirifós",
      "Tebuconazol"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1614961233913-a5113a4a34ed?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Aveia faz parte do grupo de grãos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Selecione e descarte impurezas visíveis antes do preparo. Lave em água corrente até a água sair mais limpa. Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento.",
    "fontes": [
      "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Grãos e cereais",
      "passos": [
        "Selecione e descarte impurezas visíveis antes do preparo.",
        "Lave em água corrente até a água sair mais limpa.",
        "Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento."
      ],
      "observacao": "A lavagem remove poeira e parte do resíduo externo, mas não o que foi absorvido no cultivo.",
      "fonte": "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição."
    }
  },
  {
    "id": "milho",
    "slug": "milho",
    "nome": "Milho",
    "emoji": "🌽",
    "categoria": "Grãos",
    "rank": "Transgênico majoritário",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Glifosato",
      "Atrazina",
      "Clorpirifós"
    ],
    "riscos": [],
    "imagem_url": "/assets/milho.jpg",
    "saiba_mais": "Milho faz parte do grupo de grãos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Selecione e descarte impurezas visíveis antes do preparo. Lave em água corrente até a água sair mais limpa. Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento.",
    "fontes": [
      "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Grãos e cereais",
      "passos": [
        "Selecione e descarte impurezas visíveis antes do preparo.",
        "Lave em água corrente até a água sair mais limpa.",
        "Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento."
      ],
      "observacao": "A lavagem remove poeira e parte do resíduo externo, mas não o que foi absorvido no cultivo.",
      "fonte": "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição."
    }
  },
  {
    "id": "cebola",
    "slug": "cebola",
    "nome": "Cebola",
    "emoji": "🧅",
    "categoria": "Outros",
    "rank": "Cultivo com resíduos",
    "cor": "berry",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Iprodiona",
      "Mancozebe",
      "Clorpirifós"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Cebola faz parte do grupo de outros avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave a parte externa em água corrente antes de descascar ou cortar. Retire as camadas externas mais expostas quando houver casca seca ou película. Depois do corte, evite reaproveitar cascas e partes superficiais no preparo.",
    "fontes": [
      "Aplicação do princípio de lavagem externa e descarte da parte mais exposta citado nas fontes.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Bulbos e condimentos",
      "passos": [
        "Lave a parte externa em água corrente antes de descascar ou cortar.",
        "Retire as camadas externas mais expostas quando houver casca seca ou película.",
        "Depois do corte, evite reaproveitar cascas e partes superficiais no preparo."
      ],
      "observacao": "Descartar as camadas externas tende a ser a etapa mais útil nesses itens.",
      "fonte": "Aplicação do princípio de lavagem externa e descarte da parte mais exposta citado nas fontes."
    }
  },
  {
    "id": "alho",
    "slug": "alho",
    "nome": "Alho",
    "emoji": "🧄",
    "categoria": "Outros",
    "rank": "Aplicações em campo",
    "cor": "accent",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Mancozebe",
      "Tebuconazol",
      "Clorpirifós"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1615477550927-6ec8445fcfe6?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Alho faz parte do grupo de outros avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave a parte externa em água corrente antes de descascar ou cortar. Retire as camadas externas mais expostas quando houver casca seca ou película. Depois do corte, evite reaproveitar cascas e partes superficiais no preparo.",
    "fontes": [
      "Aplicação do princípio de lavagem externa e descarte da parte mais exposta citado nas fontes.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Bulbos e condimentos",
      "passos": [
        "Lave a parte externa em água corrente antes de descascar ou cortar.",
        "Retire as camadas externas mais expostas quando houver casca seca ou película.",
        "Depois do corte, evite reaproveitar cascas e partes superficiais no preparo."
      ],
      "observacao": "Descartar as camadas externas tende a ser a etapa mais útil nesses itens.",
      "fonte": "Aplicação do princípio de lavagem externa e descarte da parte mais exposta citado nas fontes."
    }
  },
{
    "id": "biscoito-agua-sal",
    "slug": "biscoito-agua-sal",
    "nome": "Biscoito de Água e Sal",
    "emoji": "🍘",
    "categoria": "Ultraprocessados",
    "nivel_atencao": "maior",
    "defensivos": [
      "Glifosato",
      "Glufosinato",
      "Cipermetrina",
      "Deltametrina",
      "Fenitrotiona",
      "Pirimifós-metílico",
      "Butóxido de piperonila"
    ],
    "riscos": [
      "Exposição combinada a múltiplos resíduos de agrotóxicos em um único alimento (efeito coquetel)",
      "Glifosato é classificado como provável carcinógeno humano pela IARC/OMS",
      "Potenciais efeitos cumulativos no trato gastrointestinal e na saúde metabólica"
    ],
    "imagem_url": "/assets/biscoito-de-agua-e-sal.jpg",
    "saiba_mais": "Na análise laboratorial apresentada na cartilha (Vol. 1), foram encontrados resíduos de defensivos agrícolas em amostras dessa categoria, com até 7 ingredientes ativos diferentes e o sinergista butóxido de piperonila detectados em uma mesma amostra.",
    "cuidados_texto": "O processamento industrial e o forno não eliminam os resíduos químicos incorporados ao trigo. A recomendação do Guia Alimentar é reduzir o consumo de ultraprocessados e preferir pães ou biscoitos artesanais feitos com farinhas integrais de base agroecológica.",
    "fontes": [
      "Idec - Tem Veneno Nesse Pacote (Volume 1, 2021)",
      "IARC / Organização Mundial da Saúde (OMS)",
      "Guia Alimentar para a População Brasileira"
    ],
    "limpeza": {
      "metodo": "Prevenção & Recomendações de Consumo",
      "passos": [
        "Produtos ultraprocessados não podem ser higienizados para remoção de defensivos químicos.",
        "Reduza a frequência e a quantidade de consumo de biscoitos industrializados empacotados.",
        "Substitua por alternativas caseiras ou artesanais feitas com ingredientes in natura ou minimamente processados.",
        "Sempre que viável, procure por produtos elaborados com farinha de trigo de cultivo orgânico ou agroecológico."
      ],
      "observacao": "O calor do cozimento e a moagem dos grãos não são suficientes para degradar resíduos agrícolas sistêmicos como o glifosato.",
      "fonte": "Idec - Tem Veneno Nesse Pacote (Vol. 1) e Guia Alimentar para a População Brasileira."
    }
  },
  {
    "id": "biscoito-recheado",
    "slug": "biscoito-recheado",
    "nome": "Biscoito Recheado",
    "emoji": "🍪",
    "categoria": "Ultraprocessados",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Glifosato",
      "Cipermetrina",
      "Clorpirifós",
      "Deltametrina",
      "Butóxido de piperonila"
    ],
    "riscos": [
      "Associação de altas cargas de açúcares simples e gorduras com resíduos químicos",
      "Clorpirifós apresenta toxicidade neurológica amplamente documentada na literatura científica",
      "Forte apelo comercial e consumo habitual na infância aumentam a vulnerabilidade biológica"
    ],
    "imagem_url": "/assets/biscoito-recheado.jpg",
    "saiba_mais": "Na análise apresentada pela cartilha (Vol. 1), foram encontrados resíduos de defensivos agrícolas em amostras dessa categoria, com variação de 2 a 7 compostos químicos detectados nos lotes avaliados.",
    "cuidados_texto": "Alimentos ultraprocessados não permitem higienização doméstica. A principal diretriz protetiva é desestimular o consumo rotineiro, especialmente entre crianças, oferecendo lanches naturais como frutas frescas e castanhas.",
    "fontes": [
      "Idec - Tem Veneno Nesse Pacote (Volume 1, 2021)",
      "Guia Alimentar para a População Brasileira"
    ],
    "limpeza": {
      "metodo": "Prevenção & Recomendações de Consumo",
      "passos": [
        "Não é possível lavar ou remover defensivos químicos presentes na massa ou no recheio industrial.",
        "Limite o consumo de biscoitos recheados ao máximo no dia a dia alimentar da família.",
        "Substitua nos lanches infantis por frutas frescas da estação, bolos caseiros simples e iogurtes naturais com mel ou geleia de fruta.",
        "Priorize lanches elaborados em casa onde você controla a procedência de cada ingrediente."
      ],
      "observacao": "A combinação de múltiplos resíduos químicos com aditivos alimentares (emulsificantes, corantes) é característica comum a ultraprocessados.",
      "fonte": "Idec - Tem Veneno Nesse Pacote (Vol. 1) e Guia Alimentar."
    }
  },
  {
    "id": "bisnaguinha-pao-trigo",
    "slug": "bisnaguinha-pao-trigo",
    "nome": "Pães de Trigo e Bisnaguinha",
    "emoji": "🍞",
    "categoria": "Ultraprocessados",
    "nivel_atencao": "maior",
    "defensivos": [
      "Glifosato",
      "Glufosinato",
      "Pirimifós-metílico",
      "Cipermetrina",
      "Deltametrina",
      "Butóxido de piperonila"
    ],
    "riscos": [
      "Farinha de trigo figurou como a matéria-prima com maior diversidade de defensivos nas análises",
      "Presença simultânea de inseticidas neurotóxicos e herbicidas sistêmicos",
      "Exposição cumulativa em itens tradicionalmente consumidos de forma diária"
    ],
    "imagem_url": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Na análise apresentada pela cartilha (Vol. 1), todos os produtos que utilizavam trigo como ingrediente apresentaram defensivos agrícolas, com amostras de bisnaguinhas registrando até 8 tipos de resíduos e sinergistas.",
    "cuidados_texto": "Como o defensivo fica entranhado no grão e na farinha durante a moagem, o cozimento no forno não o retira. Recomenda-se dar preferência a pães de fermentação natural de padarias locais ou pães feitos com trigo de cultivo agroecológico.",
    "fontes": [
      "Idec - Tem Veneno Nesse Pacote (Volume 1, 2021)",
      "Guia Alimentar para a População Brasileira"
    ],
    "limpeza": {
      "metodo": "Prevenção & Recomendações de Consumo",
      "passos": [
        "A higienização superficial não se aplica a pães e panificados.",
        "Prefira pães artesanais de fermentação natural (levain) e padarias que trabalhem com farinhas de fornecedores certificados.",
        "Evite bisnaguinhas ultraprocessadas de longa vida útil, que contêm aditivos químicos conservantes.",
        "Varie as fontes de carboidratos da refeição com raízes e tubérculos cozidos (mandioca, batata-doce, cará, inhame)."
      ],
      "observacao": "A diversificação dos carboidratos do café da manhã reduz a dependência de derivados de trigo industrializado.",
      "fonte": "Idec - Tem Veneno Nesse Pacote (Vol. 1) e Guia Alimentar."
    }
  },
  {
    "id": "cereais-matinais",
    "slug": "cereais-matinais",
    "nome": "Cereais Matinais",
    "emoji": "🥣",
    "categoria": "Ultraprocessados",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Glifosato",
      "Pirimifós-metílico"
    ],
    "riscos": [
      "Rotulagem com apelo fitness ou enriquecido com vitaminas que mascara a presença de defensivos",
      "Consumo rotineiro e continuado na primeira refeição do dia",
      "Presença de defensivos agrícolas utilizados na fase de dessecação ou armazenamento dos grãos"
    ],
    "imagem_url": "https://images.unsplash.com/photo-1521483451569-e33803c0330c?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Na análise apresentada pela cartilha (Vol. 1), foram encontrados resíduos de defensivos agrícolas em amostras dessa categoria, inclusive em versões comercializadas com apelo à saúde e fibras.",
    "cuidados_texto": "Opte por grãos integrais in natura ou minimamente processados, como aveia em flocos laminada, farelos e sementes não ultraprocessadas, combinadas com frutas frescas picadas.",
    "fontes": [
      "Idec - Tem Veneno Nesse Pacote (Volume 1, 2021)",
      "Guia Alimentar para a População Brasileira"
    ],
    "limpeza": {
      "metodo": "Prevenção & Recomendações de Consumo",
      "passos": [
        "Não lave cereais matinais prontos de caixa.",
        "Substitua cereais de pacote por flocos de aveia integral pura ou granola caseira assada sem conservantes.",
        "Acrescente frutas frescas e sementes (linhaça, chia, girassol) para enriquecer o prato com fibras naturais.",
        "Caso compre cereais embalados, opte por marcas com selo de produto orgânico do Brasil."
      ],
      "observacao": "Alimentos ultraprocessados com enriquecimento de vitaminas não substituem a densidade nutricional de cereais integrais in natura.",
      "fonte": "Idec - Tem Veneno Nesse Pacote (Vol. 1) e Guia Alimentar."
    }
  },
  {
    "id": "salgadinhos-pacote",
    "slug": "salgadinhos-pacote",
    "nome": "Salgadinhos de Pacote",
    "emoji": "🥨",
    "categoria": "Ultraprocessados",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Glifosato",
      "Glufosinato",
      "Pirimifós-metílico",
      "Butóxido de piperonila"
    ],
    "riscos": [
      "Glufosinato e glifosato associados ao cultivo intensivo de milho e trigo transgênicos",
      "Alta concentração de sódio, gorduras saturadas e realçadores artificiais de sabor",
      "Facilidade de consumo compulsivo devido à hipersaborização industrial"
    ],
    "imagem_url": "/assets/salgadinhos-pacote.jpg",
    "saiba_mais": "Na análise apresentada pela cartilha (Vol. 1), amostras de salgadinhos à base de milho e trigo apresentaram resíduos de herbicidas e inseticidas, demonstrando a transferência de substâncias das lavouras para o snack empacotado.",
    "cuidados_texto": "Evite manter salgadinhos de pacote em casa. Dê preferência a aperitivos caseiros, como pipoca tradicional de milho feita na panela com pouco óleo, sementes de abóbora tostadas ou chips caseiros de batata ou mandioca assados.",
    "fontes": [
      "Idec - Tem Veneno Nesse Pacote (Volume 1, 2021)",
      "Guia Alimentar para a População Brasileira"
    ],
    "limpeza": {
      "metodo": "Prevenção & Recomendações de Consumo",
      "passos": [
        "Salgadinhos empacotados não podem ser higienizados domesticamente.",
        "Reduza significativamente a compra e a oferta deste tipo de aperitivo.",
        "Prepare petiscos em casa utilizando milho de pipoca simples, temperado com ervas secas e pouco sal.",
        "Explore snacks de vegetais frescos (palitinhos de cenoura, pepino) acompanhados de pastas naturais."
      ],
      "observacao": "O alto teor de aditivos realçadores estimula o consumo excessivo de calorias e resíduos de forma passiva.",
      "fonte": "Idec - Tem Veneno Nesse Pacote (Vol. 1) e Guia Alimentar."
    }
  },
  {
    "id": "bebidas-soja",
    "slug": "bebidas-soja",
    "nome": "Bebidas de Soja",
    "emoji": "🧃",
    "categoria": "Ultraprocessados",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Glifosato",
      "Metabólito AMPA"
    ],
    "riscos": [
      "Glifosato é amplamente empregado na dessecação e manejo da soja transgênica em grande escala",
      "Classificado pela Agência Internacional de Pesquisa em Câncer (IARC/OMS) como provável carcinógeno",
      "Persistência de metabólitos no processamento do extrato vegetal"
    ],
    "imagem_url": "https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Na análise apresentada pela cartilha (Vol. 1), foi detectado resíduo do herbicida glifosato em amostra de bebida à base de soja tradicional, refletindo a dependência desse insumo nas cadeias agroindustriais de grãos.",
    "cuidados_texto": "Para quem consome extratos vegetais, recomenda-se verificar o rótulo em busca de certificação orgânica ou preparar bebidas caseiras com grãos e castanhas de procedência conhecida.",
    "fontes": [
      "Idec - Tem Veneno Nesse Pacote (Volume 1, 2021)",
      "IARC / Organização Mundial da Saúde (OMS)"
    ],
    "limpeza": {
      "metodo": "Prevenção & Recomendações de Consumo",
      "passos": [
        "A higienização de bebidas industrializadas não é possível após o envase.",
        "Dê preferência a bebidas vegetais que especifiquem o uso de soja orgânica certificada (sem agrotóxicos sintéticos).",
        "Experimente produzir leites vegetais caseiros (como leite de aveia, de gergelim ou de castanhas).",
        "Leia a lista de ingredientes para evitar marcas com açúcares refinados e aromatizantes artificiais adicionados."
      ],
      "observacao": "O selo de certificação orgânica assegura que a matéria-prima foi cultivada sem uso de herbicidas sintéticos como o glifosato.",
      "fonte": "Idec - Tem Veneno Nesse Pacote (Vol. 1)."
    }
  },
  {
    "id": "refrigerantes",
    "slug": "refrigerantes",
    "nome": "Refrigerantes",
    "emoji": "🥤",
    "categoria": "Ultraprocessados",
    "nivel_atencao": "baixo",
    "defensivos": [],
    "riscos": [
      "Elevada carga de açúcares livres, corantes artificiais (como caramelo IV) e ácido fosfórico",
      "Forte correlação com obesidade, diabetes mellitus tipo 2, esteatose hepática e cárie dentária",
      "Ausência de nutrientes essenciais e estímulo ao paladar excessivamente doce"
    ],
    "imagem_url": "/assets/refrigerantes.jpg",
    "saiba_mais": "Nas análises laboratoriais da cartilha (Vol. 1), não foram detectados resíduos de defensivos agrícolas nas amostras avaliadas. O Idec e o Guia Alimentar ressaltam que, apesar do resultado analítico negativo para agrotóxicos no lote, o produto possui perfil nutricional crítico e deve ser evitado.",
    "cuidados_texto": "A melhor medida preventiva para a saúde é eliminar ou limitar severamente o consumo de refrigerantes, substituindo-os por água potável, água com gás e limão ou chás naturais gelados.",
    "fontes": [
      "Idec - Tem Veneno Nesse Pacote (Volume 1, 2021)",
      "Guia Alimentar para a População Brasileira"
    ],
    "limpeza": {
      "metodo": "Prevenção & Recomendações de Consumo",
      "passos": [
        "A ausência de resíduos no lote testado não transforma o refrigerante em bebida saudável.",
        "Substitua o consumo diário por água potável fresca e abundante.",
        "Crie versões refrescantes caseiras usando água mineral com gás, rodelas de limão ou folhas de hortelã fresca bem higienizadas.",
        "Evite o consumo de refrigerantes durante as refeições principais."
      ],
      "observacao": "O Guia Alimentar categoriza refrigerantes como alimentos ultraprocessados a serem evitados na totalidade.",
      "fonte": "Idec - Tem Veneno Nesse Pacote (Vol. 1) e Ministério da Saúde."
    }
  },
  {
    "id": "nectares-frutas",
    "slug": "nectares-frutas",
    "nome": "Néctares de Frutas",
    "emoji": "🧃",
    "categoria": "Ultraprocessados",
    "nivel_atencao": "baixo",
    "defensivos": [],
    "riscos": [
      "Composto predominantemente por água e açúcar adicionado, com apenas pequena fração de suco ou polpa",
      "Ilusão de consumo de frutas que induz escolhas alimentares menos saudáveis",
      "Pico glicêmico rápido devido à ausência das fibras naturais da fruta fresca"
    ],
    "imagem_url": "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Nas amostras avaliadas na cartilha (Vol. 1), não foram identificados resíduos de defensivos agrícolas no lote analisado. O Idec destaca que néctares não se equiparam a sucos integrais nem a frutas frescas, contendo elevados teores de açúcar e aditivos.",
    "cuidados_texto": "Prefira comer a fruta inteira e fresca. Quando optar por sucos, prefira os 100% integrais espremidos na hora, sem adição de açúcares, ou polpas de frutas puras.",
    "fontes": [
      "Idec - Tem Veneno Nesse Pacote (Volume 1, 2021)",
      "Guia Alimentar para a População Brasileira"
    ],
    "limpeza": {
      "metodo": "Prevenção & Recomendações de Consumo",
      "passos": [
        "Néctares de caixinha são bebidas ultraprocessadas adoçadas.",
        "Priorize a ingestão de água e de frutas inteiras in natura, que fornecem fibras e saciedade.",
        "Ao comprar sucos prontos, busque a denominação 'Suco Integral 100%' sem adição de açúcar ou conservantes.",
        "Lave bem as frutas frescas sob água corrente caso vá preparar suco natural em casa."
      ],
      "observacao": "A legislação brasileira permite que néctares tenham apenas entre 20% e 40% de polpa de fruta, sendo o restante água e açúcar.",
      "fonte": "Idec - Tem Veneno Nesse Pacote (Vol. 1) e Guia Alimentar."
    }
  },
  {
    "id": "empanado-frango-nugget",
    "slug": "empanado-frango-nugget",
    "nome": "Empanado de Frango (Nugget)",
    "emoji": "🍗",
    "categoria": "Ultraprocessados",
    "nivel_atencao": "maior",
    "defensivos": [
      "Bifentrina",
      "Cialotrina-lambda",
      "Glufosinato",
      "Pirimifós-metílico",
      "Glifosato",
      "Metabólito AMPA",
      "Butóxido de piperonila"
    ],
    "riscos": [
      "Foi a categoria com maior diversidade de agrotóxicos detectados entre os derivados de carne",
      "Contaminação dupla: proveniente da ração animal (milho/soja) e da farinha utilizada na crosta empanada",
      "Forte apelo comercial direcionado ao público infantil e alta ingestão de gorduras e sódio"
    ],
    "imagem_url": "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Na análise apresentada pela cartilha (Vol. 2), foram identificados até 5 defensivos diferentes em uma única amostra de empanado de frango, além do sinergista butóxido de piperonila, revelando a complexidade da cadeia produtiva industrial.",
    "cuidados_texto": "Evite o consumo de empanados industriais congelados. Uma alternativa saudável e saborosa é preparar tiras de peito de frango fresco em casa, empanadas em aveia ou farinha de milho artesanal e assadas no forno.",
    "fontes": [
      "Idec - Tem Veneno Nesse Pacote (Volume 2, 2022)",
      "Guia Alimentar para a População Brasileira"
    ],
    "limpeza": {
      "metodo": "Prevenção & Recomendações de Consumo",
      "passos": [
        "Produtos cárneos empanados ultraprocessados não admitem lavagem ou higienização doméstica.",
        "Evite oferecer empanados congelados comerciais a crianças e bebês.",
        "Prepare tiras de frango caseiras com peito de frango fresco temperado com alho, limão e ervas naturais.",
        "Empane em flocos finos de aveia ou farinha integral caseira e asse no forno em vez de fritar em imersão."
      ],
      "observacao": "A presença de defensivos em derivados de frango evidencia que os agrotóxicos da lavoura passam para a ração e chegam aos alimentos de origem animal.",
      "fonte": "Idec - Tem Veneno Nesse Pacote (Vol. 2) e Guia Alimentar."
    }
  },
  {
    "id": "salsicha",
    "slug": "salsicha",
    "nome": "Salsicha",
    "emoji": "🌭",
    "categoria": "Ultraprocessados",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Glifosato",
      "Metabólito AMPA",
      "Glufosinato"
    ],
    "riscos": [
      "100% das marcas de salsicha analisadas na cartilha apresentaram resíduos de glifosato ou glufosinato",
      "Carnes ultraprocessadas são classificadas no Grupo 1 (carcinogênicas para humanos) pela OMS/IARC",
      "Adição de nitritos e nitratos sintéticos precursores de nitrosaminas potencialmente tóxicas"
    ],
    "imagem_url": "/assets/salsicha.webp",
    "saiba_mais": "Na análise apresentada pela cartilha (Vol. 2), todas as amostras de salsicha testadas continham resíduos de agrotóxicos, carreados principalmente pela alimentação fornecida aos animais de criação intensiva.",
    "cuidados_texto": "O Guia Alimentar recomenda abster-se do consumo de carnes processadas como salsichas. Substitua por proteínas frescas in natura: ovos mexidos, peito de frango cozido desfiado, tofu ou leguminosas (feijões, lentilha, grão-de-bico).",
    "fontes": [
      "Idec - Tem Veneno Nesse Pacote (Volume 2, 2022)",
      "IARC / Organização Mundial da Saúde (OMS)",
      "Guia Alimentar para a População Brasileira"
    ],
    "limpeza": {
      "metodo": "Prevenção & Recomendações de Consumo",
      "passos": [
        "Ferver a salsicha em água não elimina os resíduos de agrotóxicos entranhados na emulsão cárnea.",
        "Elimine ou reduza drasticamente o consumo de salsichas no cardápio familiar.",
        "Para rechear lanches rápidos, utilize ovos caipiras, queijos frescos ou pastas de grão-de-bico (homus).",
        "Promova o hábito de consumir alimentos preparados na hora a partir de ingredientes frescos."
      ],
      "observacao": "A fervura de salsichas apenas aquece o produto e não atua na degradação térmica dos herbicidas presentes na formulação.",
      "fonte": "Idec - Tem Veneno Nesse Pacote (Vol. 2) e IARC/OMS."
    }
  },
  {
    "id": "hamburguer-bovino",
    "slug": "hamburguer-bovino",
    "nome": "Hambúrguer Bovino",
    "emoji": "🍔",
    "categoria": "Ultraprocessados",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Glifosato",
      "Metabólito AMPA"
    ],
    "riscos": [
      "Todas as amostras testadas na cartilha apresentaram resíduos do herbicida glifosato e seu metabólito AMPA",
      "Bioacumulação do defensivo através de rações industriais à base de grãos transgênicos",
      "Presença de gorduras saturadas, sódio e aditivos estabilizantes em discos de carne industriais"
    ],
    "imagem_url": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Na análise apresentada pela cartilha (Vol. 2), foram detectados resíduos de glifosato e AMPA em 100% das amostras de hambúrguer bovino analisadas, evidenciando o transporte de defensivos ao longo da cadeia pecuária.",
    "cuidados_texto": "Opte por hambúrgueres caseiros preparados com carne moída fresca comprada em açougues confiáveis, temperada em casa com alho, cebola e pimenta, ou por hambúrgueres artesanais de leguminosas (lentilha, feijão preto ou cogumelos).",
    "fontes": [
      "Idec - Tem Veneno Nesse Pacote (Volume 2, 2022)",
      "Guia Alimentar para a População Brasileira"
    ],
    "limpeza": {
      "metodo": "Prevenção & Recomendações de Consumo",
      "passos": [
        "Hambúrgueres ultraprocessados pré-moldados e congelados contêm aditivos e não podem ser higienizados.",
        "Prepare hambúrgueres caseiros: compre cortes de carne fresca, peça para moer na hora e tempere com ervas naturais.",
        "Experimente receitas vegetais à base de feijão preto, grão-de-bico ou cogumelos frescos bem higienizados.",
        "Evite produtos ultraprocessados de carne pré-prontos com listas extensas de aditivos industriais."
      ],
      "observacao": "O preparo caseiro a partir de cortes frescos in natura elimina o uso de emulsificantes, espessantes e conservantes industriais.",
      "fonte": "Idec - Tem Veneno Nesse Pacote (Vol. 2) e Guia Alimentar."
    }
  },
  {
    "id": "linguica-suina",
    "slug": "linguica-suina",
    "nome": "Linguiça Suína Calabresa",
    "emoji": "🌭",
    "categoria": "Ultraprocessados",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Glifosato",
      "Metabólito AMPA"
    ],
    "riscos": [
      "Compostos químicos carreados pela alimentação de grãos do rebanho suíno",
      "Alto teor de gorduras e agentes de cura (nitrito e nitrato de sódio)",
      "Consumo rotineiro associado a riscos cardiovasculares e inflamatórios"
    ],
    "imagem_url": "/assets/linguica-suina.jpg",
    "saiba_mais": "Na análise apresentada pela cartilha (Vol. 2), foram detectados resíduos de glifosato e do metabólito AMPA em amostra de linguiça calabresa, confirmando a persistência de defensivos agrícolas em carnes suínas curadas.",
    "cuidados_texto": "Diminua o uso de embutidos curados em preparações culinárias. Para enriquecer caldos e pratos, utilize temperos naturais frescos como alho, cebola, louro, páprica defumada e cheiro-verde.",
    "fontes": [
      "Idec - Tem Veneno Nesse Pacote (Volume 2, 2022)",
      "Guia Alimentar para a População Brasileira"
    ],
    "limpeza": {
      "metodo": "Prevenção & Recomendações de Consumo",
      "passos": [
        "A cura e a defumação industrial não neutralizam substâncias químicas agrícolas.",
        "Reduza a frequência com que consome linguiças calabresas e embutidos afins.",
        "Para dar sabor a feijoadas ou sopas, substitua embutidos por legumes defumados, cogumelos ou páprica pura.",
        "Ao consumir carnes suínas, prefira cortes frescos (lombo, pernil) preparados com temperos naturais."
      ],
      "observacao": "Substituir embutidos por cortes frescos preparados em casa reduz substancialmente a ingestão de nitritos e conservantes.",
      "fonte": "Idec - Tem Veneno Nesse Pacote (Vol. 2) e Guia Alimentar."
    }
  },
  {
    "id": "mortadela",
    "slug": "mortadela",
    "nome": "Mortadela",
    "emoji": "🥪",
    "categoria": "Ultraprocessados",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Glifosato",
      "Metabólito AMPA"
    ],
    "riscos": [
      "Herbicida presente na cadeia de alimentação e engorda dos animais",
      "Alta proporção de gorduras animais saturadas associadas a sais conservantes industriais",
      "Alimento cárneo ultraprocessado classificado com potencial prejudicial quando ingerido cronicamente"
    ],
    "imagem_url": "/assets/mortadela.webp",
    "saiba_mais": "Na análise apresentada pela cartilha (Vol. 2), amostras de mortadela apresentaram resíduos de glifosato e AMPA, indicando que os defensivos utilizados na agricultura chegam até os embutidos populares.",
    "cuidados_texto": "Substitua fatias de mortadela por recheios nutritivos e frescos em sanduíches: queijo minas frescal, ovos mexidos, frango cozido com ricota ou pastas de vegetais e sementes.",
    "fontes": [
      "Idec - Tem Veneno Nesse Pacote (Volume 2, 2022)",
      "Guia Alimentar para a População Brasileira"
    ],
    "limpeza": {
      "metodo": "Prevenção & Recomendações de Consumo",
      "passos": [
        "Fatias de embutidos não comportam lavagem ou higienização.",
        "Evite o hábito de comprar embutidos fatiados para lanches diários.",
        "Opte por sanduíches montados com queijo branco fresco de pequenos produtores, legumes fatiados e folhas limpas.",
        "Experimente pastas caseiras de grão-de-bico com azeite ou guacamole fresco."
      ],
      "observacao": "O Guia Alimentar aconselha a exclusão de embutidos gordurosos da rotina de refeições saudáveis.",
      "fonte": "Idec - Tem Veneno Nesse Pacote (Vol. 2)."
    }
  },
  {
    "id": "requeijao-cremoso",
    "slug": "requeijao-cremoso",
    "nome": "Requeijão Cremoso",
    "emoji": "🧀",
    "categoria": "Ultraprocessados",
    "nivel_atencao": "maior",
    "defensivos": [
      "Cipermetrina",
      "Clorpirifós",
      "Fipronil",
      "Fipronil Sulfona",
      "Fluazurona (medicamento veterinário)"
    ],
    "riscos": [
      "A concentração de gordura láctea no processamento retém compostos lipofílicos",
      "Fluazurona é um medicamento veterinário (carrapaticida) que excederia referências para leite fluido",
      "Presença simultânea de inseticidas com ação neurotóxica e pesticidas de uso em pastagens"
    ],
    "imagem_url": "/assets/requeijao-cremoso.jpg",
    "saiba_mais": "Na análise apresentada pela cartilha (Vol. 2), amostras de requeijão apresentaram resíduos de múltiplos defensivos e do carrapaticida fluazurona em 2 das 3 marcas testadas, demonstrando a necessidade de rigor sanitário na cadeia leiteira.",
    "cuidados_texto": "Dê preferência a laticínios orgânicos certificados ou a alternativas artesanais simples como queijo cottage ou ricota fresca de produtores locais, ou pastas vegetais caseiras feitas com castanhas.",
    "fontes": [
      "Idec - Tem Veneno Nesse Pacote (Volume 2, 2022)",
      "Anvisa (IN 51/2019)",
      "Guia Alimentar para a População Brasileira"
    ],
    "limpeza": {
      "metodo": "Prevenção & Recomendações de Consumo",
      "passos": [
        "Produtos lácteos cremosos não podem ser lavados ou higienizados.",
        "Selecione queijos frescos de menor teor de processamento (ricota, queijo minas artesanal).",
        "Opte por produtos com certificação orgânica sempre que disponível, garantindo rebanhos sem uso de defensivos e com controle rigoroso de insumos veterinários.",
        "Varie com patês caseiros feitos de ricota com ervas frescas bem higienizadas."
      ],
      "observacao": "Resíduos lipofílicos têm afinidade química com a gordura do leite, concentrando-se em produtos cremosos.",
      "fonte": "Idec - Tem Veneno Nesse Pacote (Vol. 2) e Anvisa."
    }
  },
  {
    "id": "iogurte-ultraprocessado",
    "slug": "iogurte-ultraprocessado",
    "nome": "Iogurte Ultraprocessado",
    "emoji": "🥛",
    "categoria": "Ultraprocessados",
    "nivel_atencao": "baixo",
    "defensivos": [],
    "riscos": [
      "Adição de corantes sintéticos, espessantes químicos, aromatizantes e açúcares livres",
      "Diferencia-se nutricionalmente do iogurte natural fermentado de dois ingredientes"
    ],
    "imagem_url": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Nas amostras analisadas na cartilha (Vol. 2), não foram encontrados resíduos de defensivos agrícolas no lote avaliado. Recomenda-se atenção à leitura dos rótulos para privilegiar iogurtes naturais sem aditivos cosméticos.",
    "cuidados_texto": "Priorize o iogurte natural integral com apenas dois ingredientes: leite e fermento lácteo. Caso deseje adoçar, adicione frutas frescas picadas (banana, morango limpo) ou um fio de mel puro.",
    "fontes": [
      "Idec - Tem Veneno Nesse Pacote (Volume 2, 2022)",
      "Guia Alimentar para a População Brasileira"
    ],
    "limpeza": {
      "metodo": "Prevenção & Recomendações de Consumo",
      "passos": [
        "Verifique sempre a lista de ingredientes no rótulo antes de comprar.",
        "Escolha iogurtes com lista de ingredientes curta (apenas leite e fermento lácteo).",
        "Evite iogurtes com corantes, aromas artificiais e xaropes de glicose.",
        "Incorpore frutas frescas higienizadas sob água corrente para saborizar naturalmente."
      ],
      "observacao": "Iogurtes naturais sem aditivos químicos mantêm probióticos ativos sem sobrecarregar o organismo com conservantes.",
      "fonte": "Idec - Tem Veneno Nesse Pacote (Vol. 2) e Guia Alimentar."
    }
  },
  {
    "id": "macarrao-instantaneo",
    "slug": "macarrao-instantaneo",
    "nome": "Macarrão Instantâneo",
    "emoji": "🍜",
    "categoria": "Ultraprocessados",
    "nivel_atencao": "maior",
    "defensivos": [
      "Glifosato",
      "Glufosinato",
      "Pirimifós-metílico",
      "Butóxido de piperonila"
    ],
    "riscos": [
      "Massa pré-frita de trigo com elevada taxa de absorção e retenção de resíduos agrícolas",
      "Altíssima concentração de sódio e gorduras saturadas, além de glutamato monossódico no tempero",
      "Substituição inadequada de refeições saudáveis e completas"
    ],
    "imagem_url": "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Na análise apresentada pela cartilha (Vol. 3), amostras de macarrão instantâneo apresentaram resíduos de três agrotóxicos simultâneos além do sinergista butóxido de piperonila, reforçando o trigo como ingrediente de alta vulnerabilidade.",
    "cuidados_texto": "Substitua o macarrão instantâneo por massas secas tradicionais (espaguete, penne) preparadas com molho caseiro de tomates frescos, azeite e ervas naturais, cozidas em poucos minutos.",
    "fontes": [
      "Idec - Tem Veneno Nesse Pacote (Volume 3, 2024)",
      "Guia Alimentar para a População Brasileira"
    ],
    "limpeza": {
      "metodo": "Prevenção & Recomendações de Consumo",
      "passos": [
        "Ferver a massa instantânea e descartar a água não remove os defensivos químicos retidos no interior da massa frita.",
        "Evite o consumo de macarrão instantâneo como refeição regular.",
        "Utilize massas convencionais feitas com sêmola ou grãos integrais, cozinhando com molhos naturais caseiros.",
        "Enriqueça o prato com legumes frescos fatiados (abobrinha, cenoura, brócolis) bem lavados."
      ],
      "observacao": "O sachê de tempero em pó industrial concentra aditivos e sódio que sobrecarregam a função renal e cardiovascular.",
      "fonte": "Idec - Tem Veneno Nesse Pacote (Vol. 3) e Guia Alimentar."
    }
  },
  {
    "id": "biscoito-maisena",
    "slug": "biscoito-maisena",
    "nome": "Biscoito Maisena",
    "emoji": "🧇",
    "categoria": "Ultraprocessados",
    "nivel_atencao": "maior",
    "defensivos": [
      "Cialotrina-lambda",
      "Glifosato",
      "Glufosinato",
      "Pirimifós-metílico",
      "Bifentrina",
      "Metabólito AMPA",
      "Butóxido de piperonila"
    ],
    "riscos": [
      "Categoria com maior variedade de resíduos identificados no Volume 3 (até 4 agrotóxicos simultâneos + AMPA e sinergista)",
      "Falsa reputação de ser um alimento inofensivo e leve, amplamente ofertado para bebês e crianças",
      "Presença combinada de inseticidas piretróides, organofosforados e herbicidas"
    ],
    "imagem_url": "/assets/biscoito-maisena.jpg",
    "saiba_mais": "Na análise apresentada pela cartilha (Vol. 3), amostras de biscoito maisena apresentaram o maior número de resíduos da edição, incluindo inseticidas piretróides, organofosforados e herbicidas em uma mesma amostra de produto.",
    "cuidados_texto": "Evite introduzir biscoitos industriais na alimentação de crianças pequenas. Dê preferência a frutas in natura amassadas, mingau de aveia caseiro preparado com leite ou água, ou bolinhos caseiros sem açúcar adicionado.",
    "fontes": [
      "Idec - Tem Veneno Nesse Pacote (Volume 3, 2024)",
      "Guia Alimentar para a População Brasileira"
    ],
    "limpeza": {
      "metodo": "Prevenção & Recomendações de Consumo",
      "passos": [
        "Biscoitos de pacote não podem ser higienizados para retirada de resíduos químicos.",
        "Não utilize biscoitos de maisena como base para a introdução alimentar de bebês.",
        "Ofereça frutas frescas ricas em nutrientes e fibras (banana, maçã raspada, mamão).",
        "Prepare receitas caseiras assadas usando farinha de aveia ou farinhas orgânicas certificadas."
      ],
      "observacao": "A infância inicial é um período de extrema vulnerabilidade aos efeitos hormonais e neurológicos de agrotóxicos.",
      "fonte": "Idec - Tem Veneno Nesse Pacote (Vol. 3) e Ministério da Saúde."
    }
  },
  {
    "id": "presunto-cozido",
    "slug": "presunto-cozido",
    "nome": "Presunto Cozido",
    "emoji": "🥓",
    "categoria": "Ultraprocessados",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Glifosato",
      "Metabólito AMPA"
    ],
    "riscos": [
      "Herbicida presente na cadeia de alimentação dos suínos transferido para a carne",
      "Combinação de resíduos agrícolas com sais de cura (nitrito e nitrato de sódio)",
      "Carnes processadas estão associadas a riscos aumentados de doenças crônicas pelo IARC/OMS"
    ],
    "imagem_url": "https://images.unsplash.com/photo-1524438418049-ab2acb7aa48f?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Na análise apresentada pela cartilha (Vol. 3), foi detectado resíduo de glifosato e seu metabólito AMPA em amostra de presunto cozido, reforçando dados de transferência do defensivo na cadeia da suinocultura.",
    "cuidados_texto": "Reduza o consumo de frios e embutidos. Substitua por carnes frescas cozidas ou grelhadas desfiadas, queijos brancos frescos ou opções vegetais como tofu e pastas de feijão ou grão-de-bico.",
    "fontes": [
      "Idec - Tem Veneno Nesse Pacote (Volume 3, 2024)",
      "Guia Alimentar para a População Brasileira"
    ],
    "limpeza": {
      "metodo": "Prevenção & Recomendações de Consumo",
      "passos": [
        "O cozimento industrial do presunto não elimina os resíduos de glifosato.",
        "Evite o consumo habitual de frios processados no café da manhã e nos lanches.",
        "Substitua por fatias de queijo branco fresco ou peito de frango cozido caseiro desfiado.",
        "Priorize proteínas frescas de produtores com boas práticas de manejo agropecuário."
      ],
      "observacao": "O consumo reduzido de carnes curadas é uma das principais recomendações da OMS para prevenção de neoplasias.",
      "fonte": "Idec - Tem Veneno Nesse Pacote (Vol. 3) e OMS."
    }
  },
  {
    "id": "bolo-pronto-chocolate",
    "slug": "bolo-pronto-chocolate",
    "nome": "Bolo Pronto Sabor Chocolate",
    "emoji": "🧁",
    "categoria": "Ultraprocessados",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Glifosato",
      "Cipermetrina",
      "Clorpirifós",
      "Malationa",
      "Butóxido de piperonila"
    ],
    "riscos": [
      "Presença de múltiplos inseticidas organofosforados e piretróides em produto voltado ao público infantil",
      "Alta ingestão simultânea de açúcares refinados, gorduras hidrogenadas e aditivos emulsificantes",
      "Efeitos cumulativos na saúde metabólica infantil"
    ],
    "imagem_url": "/assets/bolo-pronto-chocolate.webp",
    "saiba_mais": "Na análise apresentada pela cartilha (Vol. 3), foram encontrados resíduos de até 3 defensivos agrícolas e do sinergista butóxido de piperonila em amostras de bolinhos prontos comercializados para merenda escolar.",
    "cuidados_texto": "Estimule a culinária caseira preparando bolos simples em família, utilizando farinha integral, frutas frescas (banana, maçã) e cacau em pó puro sem necessidade de conservantes químicos e gorduras trans.",
    "fontes": [
      "Idec - Tem Veneno Nesse Pacote (Volume 3, 2024)",
      "Guia Alimentar para a População Brasileira"
    ],
    "limpeza": {
      "metodo": "Prevenção & Recomendações de Consumo",
      "passos": [
        "Bolos prontos embalados não admitem remoção de substâncias químicas.",
        "Evite enviar bolinhos industriais na lancheira escolar das crianças.",
        "Asse bolos caseiros com ingredientes frescos e farinhas integrais orgânicas.",
        "Utilize frutas maduras para adoçar naturalmente a receita, reduzindo o uso de açúcar refinado."
      ],
      "observacao": "Bolos feitos em casa têm validade menor, justamente pela ausência de aditivos conservantes artificiais.",
      "fonte": "Idec - Tem Veneno Nesse Pacote (Vol. 3) e Guia Alimentar."
    }
  },
  {
    "id": "hamburguer-plant-based",
    "slug": "hamburguer-plant-based",
    "nome": "Hambúrguer à Base de Plantas",
    "emoji": "🍔",
    "categoria": "Ultraprocessados",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Pirimifós-metílico",
      "Glufosinato",
      "Glifosato",
      "Metabólito AMPA",
      "o-fenilfenol"
    ],
    "riscos": [
      "Apelo de produto sustentável e saudável que oculta o grau intenso de ultraprocessamento industrial",
      "Matérias-primas procedentes de monoculturas intensivas de grãos com aplicação de defensivos",
      "Presença de aditivos espessantes, estabilizantes e teores consideráveis de sódio"
    ],
    "imagem_url": "/assets/hamburguer-plant-based.webp",
    "saiba_mais": "Na análise apresentada pela cartilha (Vol. 3), produtos inovadores à base de plantas foram avaliados, e amostras de hambúrguer vegetal apresentaram resíduos de até 3 defensivos diferentes, demonstrando que a rotulagem plant-based industrial não é isenta de contaminantes químicos.",
    "cuidados_texto": "Para dietas vegetarianas, o Guia Alimentar preconiza o consumo de leguminosas in natura (feijões variados, lentilhas, grão-de-bico) preparadas na cozinha em vez de análogos cárneos industriais ultraprocessados.",
    "fontes": [
      "Idec - Tem Veneno Nesse Pacote (Volume 3, 2024)",
      "Guia Alimentar para a População Brasileira"
    ],
    "limpeza": {
      "metodo": "Prevenção & Recomendações de Consumo",
      "passos": [
        "Produtos plant-based ultraprocessados não podem ser lavados ou higienizados.",
        "Privilegie alimentos de origem vegetal em seu estado in natura ou minimamente processado.",
        "Crie hambúrgueres vegetais caseiros a partir de grão-de-bico, feijão preto ou lentilha cozidos, misturados com ervas frescas.",
        "Caso compre opções industriais, procure marcas que declarem grãos de cultivo 100% orgânico."
      ],
      "observacao": "A alimentação vegetariana equilibrada é baseada em comida de verdade e grãos inteiros, e não em pós e isolados proteicos ultraprocessados.",
      "fonte": "Idec - Tem Veneno Nesse Pacote (Vol. 3) e Guia Alimentar."
    }
  },
  {
    "id": "empanado-plant-based",
    "slug": "empanado-plant-based",
    "nome": "Empanado à Base de Plantas",
    "emoji": "🧆",
    "categoria": "Ultraprocessados",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Deltametrina",
      "Pirimifós-metílico",
      "Glufosinato",
      "Glifosato",
      "Butóxido de piperonila"
    ],
    "riscos": [
      "Resíduos identificados em todas as marcas avaliadas na cartilha do Idec",
      "Múltiplos compostos químicos presentes na crosta empanada e na matriz vegetal",
      "Processamento intenso que adiciona óleos refinados, aromatizantes e amidos modificados"
    ],
    "imagem_url": "/assets/empanado-plant-based.webp",
    "saiba_mais": "Na análise apresentada pela cartilha (Vol. 3), todas as amostras de empanados plant-based testadas apresentaram resíduos de defensivos agrícolas, evidenciando que o uso de commodities agrícolas industriais transfere agrotóxicos para os produtos finais.",
    "cuidados_texto": "Prepare petiscos vegetais caseiros utilizando ingredientes frescos, como falafel assado de grão-de-bico com salsinha e coentro, ou bolinhos de mandioca e lentilha temperados com especiarias naturais.",
    "fontes": [
      "Idec - Tem Veneno Nesse Pacote (Volume 3, 2024)",
      "Guia Alimentar para a População Brasileira"
    ],
    "limpeza": {
      "metodo": "Prevenção & Recomendações de Consumo",
      "passos": [
        "A higienização doméstica não remove resíduos de empanados vegetais industriais.",
        "Diminua o consumo de petiscos congelados pré-fritos de origem industrial.",
        "Cozinhe em casa opções vegetais artesanais, como falafel de grão-de-bico hidratado ou bolinhos de feijão fradinho assados.",
        "Ao buscar praticidade, compre de cooperativas de pequenos agricultores e cozinhas comunitárias agroecológicas."
      ],
      "observacao": "O cozimento de preparações caseiras com grãos in natura permite garantir a qualidade e a ausência de aditivos industriais.",
      "fonte": "Idec - Tem Veneno Nesse Pacote (Vol. 3) e Guia Alimentar."
    }
  },
  {
    "id": "bebida-lactea-chocolate",
    "slug": "bebida-lactea-chocolate",
    "nome": "Bebida Láctea Sabor Chocolate",
    "emoji": "🧃",
    "categoria": "Ultraprocessados",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Fipronil",
      "Fipronilsulfona"
    ],
    "riscos": [
      "Fipronil é um inseticida de alta persistência e toxicidade ambiental, principal causa da mortandade de abelhas",
      "Exposição através do consumo volumoso por crianças em idade pré-escolar e escolar",
      "Elevada densidade calórica com alto teor de açúcar adicionado e soro de leite reconstituído"
    ],
    "imagem_url": "/assets/bebida-lactea-chocolate.webp",
    "saiba_mais": "Na repetição de testes apresentada na cartilha (Vol. 3), amostra de bebida láctea apresentou resíduo de fipronilsulfona. O defensivo é aplicado na agricultura e no controle de pragas em rebanhos, sendo carreado para o leite utilizado na indústria.",
    "cuidados_texto": "Evite achocolatados e bebidas lácteas açucaradas. Prefira leite fresco ou pasteurizado batido com cacau em pó 100% puro e frutas frescas maduras (banana, morango higienizado).",
    "fontes": [
      "Idec - Tem Veneno Nesse Pacote (Volume 3, 2024)",
      "Ibama",
      "Guia Alimentar para a População Brasileira"
    ],
    "limpeza": {
      "metodo": "Prevenção & Recomendações de Consumo",
      "passos": [
        "Bebidas lácteas industrializadas envasadas não podem ser higienizadas.",
        "Substitua bebidas lácteas prontas por leite integral simples batido com cacau 100% em pó sem açúcar.",
        "Utilize frutas bem maduras (como banana prata) para dar o ponto de doçura natural à bebida.",
        "Busque leites com certificação orgânica para garantir animais criados em pasto sem carrapaticidas sintéticos."
      ],
      "observacao": "Bebidas lácteas contêm soro de leite e espessantes, tendo composição diferente do leite pasteurizado puro.",
      "fonte": "Idec - Tem Veneno Nesse Pacote (Vol. 3) e Ibama."
    }
  },
  {
    "id": "petit-suisse",
    "slug": "petit-suisse",
    "nome": "Petit Suisse Sabor Morango",
    "emoji": "🍓",
    "categoria": "Ultraprocessados",
    "nivel_atencao": "baixo",
    "defensivos": [],
    "riscos": [
      "Sobrecarga de açúcares, corantes sintéticos, espessantes e aromatizantes artificiais",
      "Desaconselhado pelo Ministério da Saúde para crianças menores de dois anos",
      "Substituição de refeições lácteas naturais por sobremesas hiperpalatáveis"
    ],
    "imagem_url": "/assets/petit-suisse.webp",
    "saiba_mais": "Nas amostras testadas pelo Idec (Vol. 3), não foram identificados resíduos de defensivos agrícolas no lote analisado. Apesar do resultado favorável quanto a agrotóxicos na amostra, o produto continua sendo um ultraprocessado com alta concentração de aditivos cosméticos e açúcar.",
    "cuidados_texto": "Para lanches infantis, elabore cremes naturais de frutas caseiros amassando banana madura ou abacate com morangos frescos bem lavados e higienizados sob água corrente.",
    "fontes": [
      "Idec - Tem Veneno Nesse Pacote (Volume 3, 2024)",
      "Guia Alimentar para Crianças Brasileiras Menores de 2 Anos (Ministério da Saúde)"
    ],
    "limpeza": {
      "metodo": "Prevenção & Recomendações de Consumo",
      "passos": [
        "Sobremesas lácteas infantis prontas são produtos ultraprocessados.",
        "Evite oferecer sobremesas açucaradas industrializadas a bebês e crianças pequenas.",
        "Bata no liquidificador ou amasse frutas frescas in natura (abacate com banana ou morangos lavados) para fazer um creme natural.",
        "Incentive o paladar da criança a apreciar o sabor real das frutas frescas sem aditivos."
      ],
      "observacao": "A recomendação do Ministério da Saúde é não oferecer alimentos com adição de açúcares nos primeiros dois anos de vida.",
      "fonte": "Idec - Tem Veneno Nesse Pacote (Vol. 3) e Ministério da Saúde."
    }
  }
];
