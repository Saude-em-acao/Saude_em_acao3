export interface ArtigoSecao {
  subtitulo: string;
  conteudo: string;
  destaque?: string;
  dadosChave?: { label: string; valor: string }[];
}

export interface InformeItem {
  id: string;
  titulo: string;
  subtitulo?: string;
  categoria: "Reportagens" | "Artigos" | "Vídeos" | "Cartilhas";
  veiculo: string;
  fonteTipo?: "IDEC" | "Anvisa" | "Universidades" | "Midia";
  fonteOriginal?: string;
  data: string;
  url: string;
  imagem: string;
  conteudoCompleto?: {
    temaPrincipal: string;
    introducao: string;
    secoes: ArtigoSecao[];
    cuidadosRecomendados: string[];
    conclusaoEducativa: string;
    referencias: string[];
  };
}

export const INFORME_ITEMS: InformeItem[] = [
  {
    "id": "cartilha-idec-vol1",
    "titulo": "Tem Veneno Nesse Pacote (Vol. 1): O Que Revelam as Análises em Alimentos Ultraprocessados",
    "subtitulo": "Estudo pioneiro do IDEC avaliou 27 produtos embalados consumidos no Brasil e identificou que o processamento industrial não elimina resíduos de defensivos agrícolas.",
    "categoria": "Cartilhas",
    "veiculo": "IDEC — Cartilha Vol. 1",
    "fonteTipo": "IDEC",
    "fonteOriginal": "IDEC (Instituto Brasileiro de Defesa do Consumidor, 2021) — Relatório de Pesquisa Vol. 1",
    "data": "Edição Oficial 2021",
    "url": "https://idec.org.br/veneno-no-pacote",
    "imagem": "/assets/artigo-idec-vol1.jpg",
    "conteudoCompleto": {
      "temaPrincipal": "Presença de resíduos de defensivos agrícolas em alimentos ultraprocessados à base de grãos e açúcar.",
      "introducao": "Historicamente, o monitoramento de resíduos de agrotóxicos no Brasil sempre focou em alimentos frescos in natura, como frutas, legumes e verduras. O Instituto Brasileiro de Defesa do Consumidor (IDEC) realizou em 2021 uma investigação inédita para responder a uma pergunta essencial: será que o processamento industrial elimina os defensivos agrícolas presentes nas lavouras? Para isso, 27 amostras de alimentos ultraprocessados populares foram analisadas em laboratório credenciado pelo MAPA e acreditado pela Cgcre/Inmetro.",
      "secoes": [
        {
          "subtitulo": "Resultados em Destaque da Pesquisa",
          "conteudo": "As análises químicas laboratoriais identificaram que mais da metade dos produtos embalados analisados continham resíduos de agrotóxicos. Das 8 categorias testadas (refrigerantes, néctares, bebidas de soja, cereais matinais, salgadinhos de pacote, biscoitos de água e sal, biscoitos recheados e pães de trigo/bisnaguinhas), 6 apresentaram pelo menos um resíduo detectável.",
          "destaque": "59,3% dos produtos avaliados continham resíduos de pelo menos um defensivo agrícola, e 51,8% apresentavam glifosato ou glufosinato.",
          "dadosChave": [
            { "label": "Produtos analisados", "valor": "27 amostras" },
            { "label": "Amostras com defensivos", "valor": "59,3% (16 produtos)" },
            { "label": "Com glifosato/glufosinato", "valor": "51,8% (14 produtos)" },
            { "label": "Produtos com trigo", "valor": "100% com resíduos" }
          ]
        },
        {
          "subtitulo": "Mito ou Verdade: O Processamento Industrial Acaba com os Agrotóxicos?",
          "conteudo": "Muitos acreditavam que os processos da indústria limpavam os ingredientes agrícolas. A revisão científica apresentada pelo IDEC demonstra que isso não procede: embora etapas como lavagem e cozimento possam diminuir determinados compostos solúveis em água, outros processos (como a moagem de grãos, a desidratação e a separação de frações lipídicas) podem inclusive concentrar substâncias químicas. No caso do trigo, por exemplo, determinados agrotóxicos chegam a se concentrar 2,5 vezes mais no farelo do que no grão integral.",
          "destaque": "Nem o cozimento em altas temperaturas nem a prensagem industrial eliminam os defensivos químicos das matérias-primas."
        },
        {
          "subtitulo": "A Conexão da Sindemia Global",
          "conteudo": "A pesquisa contextualiza as descobertas dentro do conceito de 'Sindemia Global' (termo cunhado pela Comissão do periódico científico The Lancet em 2019). Esse conceito explica como três grandes crises do planeta — obesidade, desnutrição e mudanças climáticas — compartilham a mesma raiz: sistemas alimentares baseados em grandes monoculturas intensivas de commodities (soja, milho, trigo, cana-de-açúcar) dependentes de químicos sintéticos.",
          "destaque": "O consumo de ultraprocessados envolve duplo risco: a baixa qualidade nutricional (excesso de açúcar, sal e gordura) somada à ingestão inadvertida de defensivos agrícolas."
        }
      ],
      "cuidadosRecomendados": [
        "Priorize alimentos in natura e minimamente processados, conforme as diretrizes do Guia Alimentar para a População Brasileira.",
        "Não substitua frutas, verduras e legumes frescos por pacotes industriais com a ilusão de que são mais limpos.",
        "Explore feiras livres de produtores locais e feiras orgânicas certificadas para adquirir comida de verdade com menor pegada ecológica.",
        "Adote o hábito de preparar refeições e lanches simples em casa (como bolos caseiros, pães artesanais e frutas frescas)."
      ],
      "conclusaoEducativa": "A pesquisa do IDEC mostra a urgência de políticas públicas que incluam os alimentos industrializados nas rotinas oficiais de monitoramento sanitário, garantindo transparência nos rótulos e o direito fundamental à informação e à saúde de todos os cidadãos.",
      "referencias": [
        "IDEC. Tem Veneno Nesse Pacote: O perigo duplo dos ultraprocessados (Vol. 1, 2021).",
        "Ministério da Saúde. Guia Alimentar para a População Brasileira, 2ª ed., 2014.",
        "The Lancet Commission. The Global Syndemic of Obesity, Undernutrition, and Climate Change (2019).",
        "Anvisa. Monografias de Agrotóxicos e Dados Abertos."
      ]
    }
  },
  {
    "id": "cartilha-idec-vol2",
    "titulo": "Tem Veneno Nesse Pacote (Vol. 2): Defensivos Agrícolas em Ultraprocessados de Origem Animal",
    "subtitulo": "Segunda fase do estudo analisou carnes processadas e lácteos, explicando como os agrotóxicos da soja e do milho de rações se acumulam na gordura dos animais.",
    "categoria": "Cartilhas",
    "veiculo": "IDEC — Cartilha Vol. 2",
    "fonteTipo": "IDEC",
    "fonteOriginal": "IDEC (Instituto Brasileiro de Defesa do Consumidor, 2022) — Relatório de Pesquisa Vol. 2",
    "data": "Edição Oficial 2022",
    "url": "https://idec.org.br/veneno-no-pacote",
    "imagem": "/assets/artigo-idec-vol2.jpg",
    "conteudoCompleto": {
      "temaPrincipal": "Presença de resíduos de agrotóxicos e compostos lipofílicos em produtos ultraprocessados de origem animal e impactos climáticos.",
      "introducao": "No segundo volume da série investigativa, publicado em 2022, o IDEC direcionou o foco para uma área até então pouco explorada na ciência de alimentos brasileira: a presença de defensivos em produtos ultraprocessados derivados de carnes e leite. A pesquisa analisou 24 produtos em 8 categorias essenciais de consumo popular: linguiça calabresa, salsicha, mortadela, hambúrguer bovino, empanado de frango (nuggets), iogurte, bebida láctea e requeijão.",
      "secoes": [
        {
          "subtitulo": "Como os Defensivos Chegam aos Produtos de Origem Animal?",
          "conteudo": "A cadeia agroindustrial de carnes e leites depende intensamente da agricultura em larga escala. No Brasil, cerca de 63% dos defensivos agrícolas são destinados à cultura da soja, e quase 77% da produção global de soja é transformada em ração para a criação intensiva de animais para consumo humano. Por serem compostos lipofílicos (com alta afinidade e solubilidade em gorduras), esses resíduos são absorvidos pelos animais, metabolizados e fixam-se nos tecidos adiposos corporais e no leite.",
          "destaque": "Muitos defensivos agrícolas são compostos lipofílicos: acumulam-se naturalmente na gordura dos animais e nos óleos das matérias-primas.",
          "dadosChave": [
            { "label": "Amostras analisadas", "valor": "24 produtos" },
            { "label": "Produtos com resíduos", "valor": "58,3% (14 amostras)" },
            { "label": "Carnes processadas", "valor": "100% das categorias afetadas" },
            { "label": "Glifosato e metabólito AMPA", "valor": "Detectados em 9 amostras" }
          ]
        },
        {
          "subtitulo": "Descobertas Laboratoriais nas Amostras",
          "conteudo": "Das 24 amostras testadas, 58,3% apresentaram resíduos químicos. Todas as categorias de derivados de carne avaliadas (empanados, hambúrgueres bovinos, salsichas, mortadelas e linguiças) tiveram amostras com detecção positiva. Em amostras de requeijão foi detectada a presença de inseticidas e de fluazurona (medicamento veterinário antiparasitário utilizado no rebanho). Em contrapartida, as amostras testadas de iogurte e bebida láctea desse lote específico de 2022 não apresentaram resíduos detectáveis.",
          "destaque": "O glifosato e seu metabólito AMPA foram os compostos mais frequentes na pesquisa, reforçando a ligação direta com a soja e milho das rações."
        },
        {
          "subtitulo": "Pegada Ambiental: Comparativo entre Carnes e Leguminosas",
          "conteudo": "Além da saúde humana, o relatório reúne dados sobre sustentabilidade ecológica do sistema alimentar: a pecuária extensiva é responsável por cerca de 80% do desmatamento na Amazônia e 77% das terras agricultáveis mundiais. Para produzir 1 kg de carne bovina, são emitidos cerca de 99,5 kg de gases de efeito estufa e consumidos milhares de litros de água, enquanto 1 kg de leguminosas (como feijões e lentilhas) emite apenas 1,79 kg de gases e utiliza uma fração mínima de terra e água.",
          "destaque": "Substituir ultraprocessados cárneos por feijões, lentilhas e grãos in natura protege a saúde e reduz drasticamente a pegada ecológica no planeta."
        }
      ],
      "cuidadosRecomendados": [
        "Diminua o consumo de embutidos e carnes ultraprocessadas (salsichas, nuggets industriais, mortadelas).",
        "Adote o clássico prato brasileiro: arroz com feijões variados (carioca, preto, fradinho), grão-de-bico ou lentilhas como principais fontes de proteínas limpas.",
        "Ao consumir lácteos, dê preferência a laticínios simples e pasteurizados de cooperativas e produtores locais em vez de fórmulas ultraprocessadas.",
        "Prepare em casa nuggets e hambúrgueres artesanais usando ingredientes frescos e vegetais da feira."
      ],
      "conclusaoEducativa": "O relatório convida a sociedade e os órgãos reguladores a criarem diretrizes de monitoramento específicas para produtos de origem animal e ultraprocessados, avançando em direção a sistemas alimentares justos, agroecológicos e sustentáveis.",
      "referencias": [
        "IDEC. Tem Veneno Nesse Pacote: Ultraprocessados de origem animal (Vol. 2, 2022).",
        "Pignati WA et al. Spatial distribution of pesticide use in Brazil. Cien Saude Colet (2017).",
        "Our World in Data. Environmental Impacts of Food & Land Use (2022).",
        "IPCC / ONU. Relatórios do Painel Intergovernamental Sobre Mudanças Climáticas (2022)."
      ]
    }
  },
  {
    "id": "cartilha-idec-vol3",
    "titulo": "Tem Veneno Nesse Pacote (Vol. 3): Plant-Based e Novos Produtos sob a Perspectiva Científica",
    "subtitulo": "Terceira edição do estudo analisou produtos análogos a carnes à base de plantas, biscoitos, macarrão instantâneo e bebidas lácteas, destacando o debate sobre o inseticida fipronil e polinizadores.",
    "categoria": "Cartilhas",
    "veiculo": "IDEC — Cartilha Vol. 3",
    "fonteTipo": "IDEC",
    "fonteOriginal": "IDEC (Instituto Brasileiro de Defesa do Consumidor, 2024) — Relatório de Pesquisa Vol. 3",
    "data": "Edição Oficial 2024",
    "url": "https://idec.org.br/veneno-no-pacote",
    "imagem": "/assets/artigo-idec-vol3.jpg",
    "conteudoCompleto": {
      "temaPrincipal": "Avaliação científica de alimentos plant-based ultraprocessados, derivados de trigo, bebidas infantis e impactos na biodiversidade.",
      "introducao": "Lançado em 2024, o terceiro volume do relatório 'Tem Veneno Nesse Pacote' investigou 24 amostras de produtos industriais, incorporando pela primeira vez duas categorias inovadoras do mercado: hambúrgueres e empanados análogos a carne à base de plantas (conhecidos comercialmente como 'plant-based'). Além deles, foram avaliados macarrão instantâneo, biscoito maisena, presunto cozido, bolo de chocolate pronto, petit suisse e bebidas lácteas.",
      "secoes": [
        {
          "subtitulo": "Ultraprocessados Plant-Based: Alimentos 'Modernos' com Velhos Desafios",
          "conteudo": "A indústria de alimentos tem promovido produtos plant-based com forte apelo ecológico e de saúde. Contudo, as análises revelaram que, das 6 amostras vegetais industriais analisadas (hambúrgueres e empanados à base de plantas), 5 apresentaram resíduos de defensivos agrícolas (de 1 a 3 substâncias diferentes por produto, incluindo glifosato, glufosinato e pirimifós-metílico). O estudo ressalta que esses itens continuam sendo formulações ultraprocessadas obtidas de monoculturas intensivas de grãos, adicionadas de aromatizantes, espessantes e óleos refinados.",
          "destaque": "Nem todo alimento vegetal embalado é in natura: a rotulagem plant-based industrial não isenta o produto de aditivos e resíduos químicos de monoculturas.",
          "dadosChave": [
            { "label": "Produtos analisados", "valor": "24 amostras" },
            { "label": "Amostras com resíduos", "valor": "50% (12 produtos)" },
            { "label": "Categorias com resíduos", "valor": "7 de 8 categorias" },
            { "label": "Plant-based com resíduos", "valor": "5 de 6 amostras" }
          ]
        },
        {
          "subtitulo": "Derivados de Trigo e a Repetição de Lotes Industriais",
          "conteudo": "A pesquisa comprovou que a farinha de trigo continua sendo um ingrediente de alta vulnerabilidade: biscoitos de maisena e pacotes de macarrão instantâneo apresentaram até 4 defensivos diferentes mais o sinergista butóxido de piperonila. Além disso, ao reavaliar a bebida láctea sabor chocolate (que havia testado negativo em 2022), uma amostra de 2024 acusou resíduo de fipronilsulfona, provando que resultados podem variar entre diferentes lotes industriais.",
          "destaque": "O resultado negativo em um lote específico não garante que outros lotes do mesmo produto estejam isentos de resíduos."
        },
        {
          "subtitulo": "O Alerta sobre o Inseticida Fipronil e a Proteção das Abelhas",
          "conteudo": "A detecção de fipronil acendeu um alerta ecológico prioritário. Trata-se de um inseticida utilizado contra pragas em rebanhos e lavouras, conhecido pela alta toxicidade para insetos polinizadores. No Brasil, centenas de milhares de abelhas morreram nos últimos anos comprovadamente envenenadas por fipronil em estados como São Paulo, Rio Grande do Sul e Bahia. A substância foi banida na União Europeia e em países vizinhos, e motivou medida cautelar do Ibama suspendendo sua pulverização aérea e em área total de lavouras no país.",
          "destaque": "As abelhas e polinizadores são essenciais para a produção de alimentos e a biodiversidade de todo o planeta."
        }
      ],
      "cuidadosRecomendados": [
        "Para dietas vegetarianas e transição saudável, priorize leguminosas in natura preparadas na cozinha: feijão preto, feijão fradinho, grão-de-bico, ervilhas e lentilhas.",
        "Não confunda alimentos ultraprocessados plant-based com a alimentação baseada em vegetais frescos recomendada pelo Guia Alimentar.",
        "Evite oferecer biscoitos industriais, bolinhos prontos e achocolatados a crianças pequenas, substituindo por frutas amassadas e mingaus caseiros.",
        "Apoie a agricultura sustentável e a agroecologia que protegem as abelhas e polinizadores naturais."
      ],
      "conclusaoEducativa": "O terceiro relatório reforça o reconhecimento internacional do Guia Alimentar para a População Brasileira pela FAO em 2024, evidenciando que comer bem passa pela valorização de preparações culinárias caseiras, ingredientes locais e defesa do meio ambiente.",
      "referencias": [
        "IDEC. Tem Veneno Nesse Pacote: Novos produtos, velhos problemas (Vol. 3, 2024).",
        "FAO. Food systems-based dietary guidelines: an overview (2024).",
        "Ibama. Nota Técnica sobre suspensão cautelar de agrotóxicos à base de fipronil.",
        "Frontiers in Public Health. Multiscale analysis of pesticide residues in food in Brazil (2023)."
      ]
    }
  },
  {
    "id": "cartilha-idec-comparativo",
    "titulo": "Panorama Histórico das Três Cartilhas do IDEC: O Que Aprendemos em Três Anos de Monitoramento",
    "subtitulo": "Comparativo detalhado dos relatórios publicados em 2021, 2022 e 2024, tendências observadas em 75 produtos e caminhos para o consumo consciente da juventude.",
    "categoria": "Cartilhas",
    "veiculo": "IDEC — Síntese Histórica",
    "fonteTipo": "IDEC",
    "fonteOriginal": "IDEC (Série histórica consolidada dos Volumes 1, 2 e 3: 2021–2024)",
    "data": "Série Histórica 2021–2024",
    "url": "https://idec.org.br/veneno-no-pacote",
    "imagem": "/assets/artigo-idec-sistemas.jpg",
    "conteudoCompleto": {
      "temaPrincipal": "Análise comparativa das 3 edições da pesquisa pioneira do IDEC sobre ultraprocessados e a consolidação de escolhas sustentáveis.",
      "introducao": "Ao longo de três investigações independentes realizadas entre 2020 e 2024, o Instituto Brasileiro de Defesa do Consumidor (IDEC) analisou um total de 75 produtos ultraprocessados comercializados no território nacional. Os dados consolidados demonstram padrões consistentes na cadeia agroalimentar industrial e fortalecem o debate público sobre saúde, regulação sanitária e preservação ecológica.",
      "secoes": [
        {
          "subtitulo": "Quadro Comparativo das Três Edições",
          "conteudo": "Cada volume da pesquisa abordou um grupo específico da alimentação brasileira. No Volume 1 (2021), analisaram-se 27 produtos com foco em carboidratos refinados (trigo, milho, soja e açúcar). No Volume 2 (2022), foram 24 produtos com foco em carne e lácteos. No Volume 3 (2024), 24 produtos com foco em inovações de mercado (plant-based) e alimentos de consumo infantil frequente.",
          "destaque": "Em todas as edições, ao menos metade das amostras avaliadas apresentou resíduos de defensivos agrícolas.",
          "dadosChave": [
            { "label": "Total de produtos analisados", "valor": "75 amostras" },
            { "label": "Vol. 1 (2021) com resíduos", "valor": "59,3% (16 de 27)" },
            { "label": "Vol. 2 (2022) com resíduos", "valor": "58,3% (14 de 24)" },
            { "label": "Vol. 3 (2024) com resíduos", "valor": "50,0% (12 de 24)" }
          ]
        },
        {
          "subtitulo": "Padrões Químicos Recorrentes nas Pesquisas",
          "conteudo": "Dois padrões principais destacam-se nos dados agregados: primeiro, o herbicida glifosato e seu metabólito AMPA, seguidos pelo glufosinato, figuram como os defensivos mais amplamente encontrados em todos os três relatórios. Segundo, ingredientes obtidos do trigo (massas, pães, biscoitos e crostas de empanados) apresentam contaminação multirresíduos com alta frequência, acompanhados frequentemente pelo sinergista butóxido de piperonila.",
          "destaque": "Os dados revelam que o modelo de monoculturas em larga escala imprime sua marca química diretamente nas prateleiras dos supermercados."
        },
        {
          "subtitulo": "Consumo Consciente sem Culpa: O Papel das Políticas Públicas",
          "conteudo": "Um princípio fundamental defendido pelo IDEC e pelo Saúde em Ação é que a responsabilidade não deve recair exclusivamente sobre as costas do consumidor ou das famílias trabalhadoras. Não se trata de criar pânico alimentar ou estigmatizar quem consome produtos embalados por falta de tempo ou de recursos financeiros, mas sim de cobrar transparência da indústria, fortalecimento do PARA da Anvisa e incentivos fiscais para a produção de alimentos saudáveis da agricultura familiar.",
          "destaque": "Alimentação saudável e livre de venenos é um direito coletivo e cidadão, que demanda regulação pública efetiva."
        }
      ],
      "cuidadosRecomendados": [
        "Construa uma rotina com mais 'descascar' e menos 'desembrulhar', valorizando ingredientes frescos.",
        "Pratique escolhas conscientes nas compras coletivas, preferindo pequenos produtores e feiras agroecológicas quando possível.",
        "Exija dos representantes e órgãos públicos a ampliação de programas de alimentação escolar saudável e sem defensivos.",
        "Compartilhe conhecimento científico com amigos e familiares sem julgamentos morais, promovendo saúde com empatia."
      ],
      "conclusaoEducativa": "O caminho para o futuro da alimentação passa pelo respeito à biodiversidade, valorização do Guia Alimentar brasileiro e empoderamento da juventude como guardiã da saúde coletiva e do equilíbrio ambiental.",
      "referencias": [
        "IDEC. Coleção Tem Veneno Nesse Pacote: Volumes 1 (2021), 2 (2022) e 3 (2024).",
        "Ministério da Saúde. Guia Alimentar para a População Brasileira (2014).",
        "FAO/ONU. Sustainable Food Systems and Food-based Dietary Guidelines (2024)."
      ]
    }
  },
  {
    "id": "1",
    "titulo": "Defensores Agrícolas: o veneno que chega à mesa",
    "subtitulo": "Reportagem em vídeo sobre o uso de defensores agrícolas no Brasil e seus efeitos sobre a saúde.",
    "categoria": "Vídeos",
    "veiculo": "YouTube",
    "data": "Estudo / Notícia Oficial",
    "url": "https://youtu.be/6-Qwqm5ozPs",
    "imagem": "/assets/news-video-Df_-8HTU.jpg"
  },
  {
    "id": "2",
    "titulo": "Defensores Agrícolas no Brasil: impactos na saúde humana e ambiental",
    "subtitulo": "Panorama do IDEC sobre como os defensores agrícolas afetam a saúde da população e o meio ambiente.",
    "categoria": "Artigos",
    "veiculo": "IDEC",
    "data": "Estudo / Notícia Oficial",
    "url": "https://idec.org.br/dicas-e-direitos/agrotoxicos-no-brasil-seus-impactos-na-saude-humana-e-ambiental",
    "imagem": "/assets/news-idec-DaF_1zyl.jpg"
  },
  {
    "id": "3",
    "titulo": "Anvisa divulga lista de alimentos com maior contaminação",
    "subtitulo": "Resumo do Programa de Análise de Resíduos de Defensores Agrícolas em Alimentos (PARA) da Anvisa.",
    "categoria": "Reportagens",
    "veiculo": "Tommasi Laboratório",
    "data": "Estudo / Notícia Oficial",
    "url": "https://tommasi.com.br/blog/anvisa-divulga-lista-de-alimentos-com-maior-nivel-de-contaminacao-por-agrotoxicos/",
    "imagem": "/assets/news-anvisa-Cq79c7hC.jpg"
  },
  {
    "id": "4",
    "titulo": "Defensores Agrícolas causam problemas que só serão percebidos no futuro",
    "subtitulo": "Pesquisadores da UFMG alertam sobre os efeitos crônicos e cumulativos dos defensores agrícolas.",
    "categoria": "Artigos",
    "veiculo": "Faculdade de Medicina UFMG",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.medicina.ufmg.br/agrotoxicos-causam-problemas-que-so-serao-percebidos-no-futuro/",
    "imagem": "/assets/news-ufmg-DDHiVpk9.jpg"
  },
  {
    "id": "5",
    "titulo": "Intoxicação Aguda por Defensores Agrícolas",
    "subtitulo": "Página oficial do governo do PR sobre sinais, sintomas e protocolos de intoxicação aguda.",
    "categoria": "Artigos",
    "veiculo": "Secretaria de Saúde do Paraná",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.saude.pr.gov.br/Pagina/Intoxicacao-Aguda-por-Agrotoxicos",
    "imagem": "/assets/news-pr-BSuidD_k.jpg"
  },
  {
    "id": "6",
    "titulo": "Defensores Agrícolas e saúde — análise crítica",
    "subtitulo": "Artigo científico revisado por pares sobre saúde pública e defensores agrícolas no Brasil.",
    "categoria": "Artigos",
    "veiculo": "SciELO · Saúde em Debate",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.scielo.br/j/sdeb/a/bGBYRZvVVKMrV4yzqfwwKtP/?lang=pt",
    "imagem": "/assets/news-scielo-o9NngfWb.jpg"
  },
  {
    "id": "7",
    "titulo": "Um alerta sobre os impactos dos defensores agrícolas na saúde",
    "subtitulo": "Documento técnico do INCA com evidências científicas sobre câncer e defensores agrícolas.",
    "categoria": "Artigos",
    "veiculo": "INCA — Instituto Nacional de Câncer",
    "data": "Estudo / Notícia Oficial",
    "url": "https://ninho.inca.gov.br/jspui/bitstream/123456789/12520/1/Um%20alerta%20sobre%20os%20impactos%20dos%20agrot%C3%B3xicos%20na%20sa%C3%BAde..pdf",
    "imagem": "/assets/news-inca-DAdwQbPp.jpg"
  },
  {
    "id": "8",
    "titulo": "Quais são os alimentos mais contaminados por defensores agrícolas no Brasil",
    "subtitulo": "Lista dos alimentos com mais e menos resíduos detectados pela Anvisa.",
    "categoria": "Reportagens",
    "veiculo": "Saúde Abril",
    "data": "Estudo / Notícia Oficial",
    "url": "https://saude.abril.com.br/alimentacao/quais-sao-os-alimentos-mais-contaminados-por-agrotoxicos-e-os-mais-seguros-no-brasil/",
    "imagem": "/assets/informe-market-contamination-CN4YDJkh.jpg"
  },
  {
    "id": "9",
    "titulo": "Alimentos com mais defensores agrícolas — riscos à saúde",
    "subtitulo": "Especialistas explicam os riscos por trás do consumo frequente de alimentos contaminados.",
    "categoria": "Reportagens",
    "veiculo": "Metrópoles",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.metropoles.com/saude/alimentos-mais-agrotoxicos-riscos",
    "imagem": "/assets/informe-health-risk-food-JEdVORHe.jpg"
  },
  {
    "id": "10",
    "titulo": "Laranja, pimentão e goiaba: campeões de defensores agrícolas acima do limite",
    "subtitulo": "Investigação independente sobre os alimentos com mais resíduos irregulares.",
    "categoria": "Reportagens",
    "veiculo": "Agência Pública",
    "data": "Estudo / Notícia Oficial",
    "url": "https://apublica.org/2020/10/laranja-pimentao-e-goiaba-alimentos-campeoes-de-agrotoxicos-acima-do-limite/",
    "imagem": "/assets/informe-orange-pepper-guava-CS8_gWD-.jpg"
  },
  {
    "id": "11",
    "titulo": "Anvisa alerta: 2 frutas populares no Brasil têm defensores agrícolas em excesso",
    "subtitulo": "Alerta da Anvisa sobre frutas amplamente consumidas e com níveis irregulares.",
    "categoria": "Reportagens",
    "veiculo": "UOL VivaBem",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.uol.com.br/vivabem/noticias/redacao/2025/01/07/anvisa-alerta-2-frutas-populares-no-brasil-tem-agrotoxicos-em-excesso.htm",
    "imagem": "/assets/informe-fruit-warning-Cdade0VJ.jpg"
  },
  {
    "id": "12",
    "titulo": "Anvisa divulga lista com os 10 alimentos mais afetados por defensores agrícolas",
    "subtitulo": "Ranking oficial dos alimentos mais contaminados segundo o PARA da Anvisa.",
    "categoria": "Reportagens",
    "veiculo": "O Tempo",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.otempo.com.br/brasil/anvisa-divulga-lista-com-os-dez-alimentos-mais-afetados-por-agrotoxicos-1.436431",
    "imagem": "/assets/informe-market-contamination-CN4YDJkh.jpg"
  },
  {
    "id": "13",
    "titulo": "Pepino e laranja: alimentos campeões de defensores agrícolas (Anvisa 2024)",
    "subtitulo": "Análise dos dados mais recentes do Programa de Análise de Resíduos da Anvisa.",
    "categoria": "Reportagens",
    "veiculo": "Repórter Brasil",
    "data": "Estudo / Notícia Oficial",
    "url": "https://reporterbrasil.org.br/2025/12/pepino-laranja-alimentos-campeoes-agrotoxicos-anvisa/",
    "imagem": "/assets/informe-cucumber-orange-testing-BycWPA5g.jpg"
  },
  {
    "id": "14",
    "titulo": "Anvisa divulga resultados do monitoramento de defensores agrícolas — Ciclo 2024",
    "subtitulo": "Cobertura do G1 sobre os números oficiais do monitoramento de defensores agrícolas.",
    "categoria": "Reportagens",
    "veiculo": "G1 Saúde",
    "data": "Estudo / Notícia Oficial",
    "url": "https://g1.globo.com/saude/noticia/2025/12/17/anvisa-divulga-resultados-do-monitoramento-de-agrotoxicos-em-alimentos-ciclo-2024.ghtml",
    "imagem": "/assets/informe-lab-monitoring-food-CUQvvid1.jpg"
  },
  {
    "id": "15",
    "titulo": "A fruta brasileira com maior teor de defensores agrícolas, segundo a Anvisa",
    "subtitulo": "Matéria sobre a fruta líder em resíduos de defensores agrícolas no monitoramento da Anvisa.",
    "categoria": "Reportagens",
    "veiculo": "TudoGostoso",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.tudogostoso.com.br/noticias/a-fruta-brasileira-com-maior-teor-de-agrotoxicos-segundo-a-anvisa-a24169.htm",
    "imagem": "/assets/informe-brazilian-fruit-residue-CdSwk35H.jpg"
  },
  {
    "id": "16",
    "titulo": "Veneno no prato dos outros é refresco",
    "subtitulo": "Análise crítica do Greenpeace sobre a flexibilização das regras de defensores agrícolas no Brasil.",
    "categoria": "Artigos",
    "veiculo": "Greenpeace Brasil",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.greenpeace.org/brasil/blog/veneno-no-prato-dos-outros-e-refresco/",
    "imagem": "/assets/informe-crop-spraying-BwlOtkfP.jpg"
  },
  {
    "id": "17",
    "titulo": "Núcleo de Estudos NUQUALI — Defensores Agrícolas em alimentos",
    "subtitulo": "Estudo acadêmico da Universidade Federal de Lavras sobre qualidade dos alimentos.",
    "categoria": "Artigos",
    "veiculo": "UFLA",
    "data": "Estudo / Notícia Oficial",
    "url": "http://www.nucleoestudo.ufla.br/nuquali/?p=357",
    "imagem": "/assets/informe-university-research-Sko62YLI.jpg"
  },
  {
    "id": "18",
    "titulo": "Laranja e abacaxi no topo da contaminação por defensores agrícolas",
    "subtitulo": "Reportagem do O Globo sobre as frutas com maior detecção de resíduos.",
    "categoria": "Reportagens",
    "veiculo": "O Globo",
    "data": "Estudo / Notícia Oficial",
    "url": "https://oglobo.globo.com/brasil/sustentabilidade/laranja-abacaxi-estao-no-topo-da-contaminacao-por-agrotoxicos-20542450",
    "imagem": "/assets/informe-orange-pineapple-0U_bLJVY.jpg"
  },
  {
    "id": "19",
    "titulo": "As frutas mais venenosas que os brasileiros adoram",
    "subtitulo": "Frutas amplamente consumidas no país com altos níveis de pesticidas.",
    "categoria": "Reportagens",
    "veiculo": "TudoGostoso",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.tudogostoso.com.br/noticias/poucos-sabem-mas-essas-sao-as-frutas-mais-venenosas-elas-estao-cheia-de-pesticidas-mas-os-brasileiros-as-adoram-a18752.htm",
    "imagem": "/assets/informe-strawberry-grape-DcgbF8TN.jpg"
  },
  {
    "id": "20",
    "titulo": "Termina prazo de descontinuação do uso de carbofurano",
    "subtitulo": "Anvisa anuncia o fim do prazo para uso do carbofurano, banido no Brasil por riscos à saúde.",
    "categoria": "Reportagens",
    "veiculo": "Anvisa · Gov.br",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2018/termina-prazo-de-descontinuacao-do-uso-de-carbofurano",
    "imagem": "/assets/informe-carbofurano-ban-CsJ_7jSy.jpg"
  },
  {
    "id": "21",
    "titulo": "Defensores agrícolas em legumes e hortaliças: estudo da Unicamp",
    "subtitulo": "Pesquisa da Faculdade de Ciências Farmacêuticas da Unicamp sobre resíduos de defensores agrícolas em legumes e hortaliças.",
    "categoria": "Artigos",
    "veiculo": "FCF · Unicamp",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.fcf.unicamp.br/2022/12/15/agrotoxicos-legumes-hortalicas/",
    "imagem": "/assets/informe-unicamp-hortalicas-D4y4XR31.jpg"
  },
  {
    "id": "22",
    "titulo": "O que tem de errado com o alimento que comemos?",
    "subtitulo": "Vídeo do Greenpeace Brasil que questiona os problemas dos alimentos que consumimos e os impactos dos defensores agrícolas.",
    "categoria": "Vídeos",
    "veiculo": "Greenpeace Brasil",
    "data": "Estudo / Notícia Oficial",
    "url": "https://youtu.be/olwr1aK6e4w",
    "imagem": "/assets/informe-greenpeace-food-kUhuN9jt.jpg"
  },
  {
    "id": "23",
    "titulo": "Reportagem especial sobre defensores agrícolas (Globoplay)",
    "subtitulo": "Reportagem em vídeo sobre o cenário dos defensores agrícolas no Brasil.",
    "categoria": "Vídeos",
    "veiculo": "Globoplay",
    "data": "Estudo / Notícia Oficial",
    "url": "https://globoplay.globo.com/v/6737676/",
    "imagem": "/assets/informe-tv-report-Brjv3CKp.jpg"
  },
  {
    "id": "24",
    "titulo": "Defensores Agrícolas no Brasil — documentário",
    "subtitulo": "Conteúdo audiovisual com depoimentos e dados sobre contaminação alimentar.",
    "categoria": "Vídeos",
    "veiculo": "YouTube",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.youtube.com/watch?v=dPwDVAqZdG4",
    "imagem": "/assets/informe-documentary-field-BcqVAc-t.jpg"
  },
  {
    "id": "25",
    "titulo": "Reportagem Globoplay — defensores agrícolas no campo",
    "subtitulo": "Cobertura televisiva sobre o uso de defensores agrícolas no agronegócio brasileiro.",
    "categoria": "Vídeos",
    "veiculo": "Globoplay",
    "data": "Estudo / Notícia Oficial",
    "url": "https://globoplay.globo.com/v/5564567/",
    "imagem": "/assets/informe-field-spraying-report-Oc4vjTEX.jpg"
  },
  {
    "id": "26",
    "titulo": "Defensores Agrícolas e câncer — debate",
    "subtitulo": "Debate com especialistas sobre a relação entre defensores agrícolas e câncer.",
    "categoria": "Vídeos",
    "veiculo": "YouTube",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.youtube.com/watch?v=UYJwEK-XwRk",
    "imagem": "/assets/informe-cancer-debate-Bs6KJcnm.jpg"
  },
  {
    "id": "27",
    "titulo": "Reportagem Globoplay — alimentos contaminados",
    "subtitulo": "Reportagem investigativa sobre alimentos com resíduos de defensores agrícolas.",
    "categoria": "Vídeos",
    "veiculo": "Globoplay",
    "data": "Estudo / Notícia Oficial",
    "url": "https://globoplay.globo.com/v/2921523/",
    "imagem": "/assets/informe-contaminated-plate-Bu1-QiNj.jpg"
  },
  {
    "id": "28",
    "titulo": "Como os defensores agrícolas chegam ao seu prato",
    "subtitulo": "Vídeo que explica o caminho dos defensores agrícolas da lavoura até a mesa do consumidor.",
    "categoria": "Vídeos",
    "veiculo": "YouTube",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.youtube.com/watch?v=R5-2t6VJDAg",
    "imagem": "/assets/informe-farm-to-plate-BZkxKMaY.jpg"
  }
];
