import React, { useState } from "react";
import { X, User, Check, Sparkles } from "lucide-react";
import { UserProfile, salvarUsuario } from "../utils/storage";

interface AuthModalProps {
  user: UserProfile;
  onSalvar: (user: UserProfile) => void;
  onFechar: () => void;
}

const AVATARES_SUGERIDOS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
];

export const AuthModal: React.FC<AuthModalProps> = ({ user, onSalvar, onFechar }) => {
  const [nome, setNome] = useState(user.nome === "Visitante Consciente" ? "" : user.nome);
  const [email, setEmail] = useState(user.email === "visitante@saudeemacao.org" ? "" : user.email);
  const [avatar, setAvatar] = useState(user.avatar_url || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const novoUsuario: UserProfile = {
      id: user.id,
      nome: nome.trim() || "Consumidor Consciente",
      email: email.trim() || "usuario@saudeemacao.org",
      avatar_url: avatar || undefined,
      logado: true
    };
    salvarUsuario(novoUsuario);
    onSalvar(novoUsuario);
    onFechar();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-2xl space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-border">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌱</span>
            <h3 className="font-display text-xl font-bold text-primary">
              Identificação no Saúde em Ação
            </h3>
          </div>
          <button
            onClick={onFechar}
            className="p-1.5 rounded-xl hover:bg-secondary text-muted-foreground cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">
          Seu progresso e pontos ficam salvos diretamente no seu dispositivo com total privacidade. Preencha seus dados para personalizar sua jornada.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-bold text-foreground mb-1">
              Seu nome ou apelido
            </label>
            <input
              type="text"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Ex: Alessandra, Lara, Pedro..."
              className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-foreground mb-1">
              E-mail de contato
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@exemplo.com"
              className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-foreground mb-1.5">
              Escolha um avatar
            </label>
            <div className="flex items-center gap-3">
              {AVATARES_SUGERIDOS.map((url, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setAvatar(avatar === url ? "" : url)}
                  className={`w-12 h-12 rounded-full overflow-hidden border-2 transition cursor-pointer relative ${
                    avatar === url ? "border-primary scale-105 shadow-md" : "border-border opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={url} alt="Avatar" className="w-full h-full object-cover" />
                  {avatar === url && (
                    <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white font-bold" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="w-full rounded-full bg-primary text-primary-foreground font-bold py-3 text-sm hover:opacity-90 transition cursor-pointer shadow-md"
            >
              Salvar Perfil
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
