import React from "react";
import { Sprout } from "lucide-react";

interface FooterProps {
  navigate: (route: string) => void;
}

const NAV_LINKS = [
  { to: "/", label: "Saúde em Ação" },
  { to: "/alimentos", label: "Alimentos" },
  { to: "/meu-dia", label: "Meu Dia" },
  { to: "/jogo", label: "Quiz + Mito ou Verdade?" },
  { to: "/informe-se", label: "Informe-se!" },
  { to: "/criancas", label: "Área Kids" }
];

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="border-t border-border mt-16 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid sm:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-primary text-xl">
            <Sprout className="w-5 h-5 text-[var(--leaf)]" />
            <span>Saúde em Ação</span>
          </div>
          <p className="mt-2.5 text-muted-foreground leading-relaxed">
            Projeto educativo alinhado à ODS 3 — Saúde e Bem-Estar — sobre os riscos dos defensores agrícolas nos alimentos e como promover uma nutrição consciente.
          </p>
        </div>

        <div>
          <div className="font-semibold text-foreground mb-3 text-base">Navegue</div>
          <ul className="space-y-2 text-muted-foreground">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <button
                  onClick={() => {
                    navigate(link.to);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-primary transition cursor-pointer text-left font-medium"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-semibold text-foreground mb-3 text-base">Inspirado em</div>
          <p className="text-muted-foreground leading-relaxed">
            Dados públicos de Anvisa (Programa PARA), INCA, IDEC, Ministério da Saúde, Fiocruz e UFMG. Todo o conteúdo tem finalidade estritamente pedagógica e de conscientização cidadã.
          </p>
        </div>
      </div>

      <div className="border-t border-border/60 py-6 text-center">
        <p className="text-sm font-semibold text-primary">
          Feito por Alessandra Paixão e Lara Breda
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          © {new Date().getFullYear()} Saúde em Ação · Projeto educativo ODS 3
        </p>
      </div>
    </footer>
  );
};
