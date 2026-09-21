export interface KidsGame {
  id: string;
  titulo: string;
  subtitulo?: string;
  descricao: string;
  logo: string;
  link: string;
  idade: string;
  categoria: string;
  plataforma?: string;
}

export const KIDS_GAMES: KidsGame[] = [
  {
    id: "caca-palavras",
    titulo: "Caça Palavras",
    descricao: "Encontre os nomes dos seus personagens favoritos seguindo as dicas apresentadas!",
    logo: "/assets/logo-caca-palavras.svg",
    link: "https://view.genially.com/6aa44e711580515bc2016dc9",
    idade: "Livre",
    categoria: "Atenção",
    plataforma: "Genially"
  },
  {
    id: "quebra-cabeca",
    titulo: "Quebra Cabeça",
    descricao: "Organize as peças corretamente e descubra qual é o personagem!",
    logo: "/assets/logo-quebra-cabeca.svg",
    link: "https://view.genially.com/6aa44f69437b55843bd7a636",
    idade: "Livre",
    categoria: "Raciocínio",
    plataforma: "Genially"
  },
  {
    id: "adivinhe-personagem",
    titulo: "Adivinhe o Personagem Escondido",
    descricao: "Arraste a lupa pela imagem e descubra o personagem escondido!",
    logo: "/assets/logo-adivinhe-personagem.svg",
    link: "https://view.genially.com/6aa44ee95af22b777fe63db1",
    idade: "Livre",
    categoria: "Desafio",
    plataforma: "Genially"
  },
  {
    id: "forca",
    titulo: "Forca",
    descricao: "Acerte o nome dos personagens da Turma da Contaminação de acordo com o vídeo de apresentação!",
    logo: "/assets/logo-forca.svg",
    link: "https://view.genially.com/6aa44ee95af22b777fe63db1",
    idade: "Livre",
    categoria: "Adivinhação",
    plataforma: "Genially"
  }
];
