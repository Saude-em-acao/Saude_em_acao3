/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeView } from "./components/HomeView";
import { AlimentosView } from "./components/AlimentosView";
import { MeuDiaView } from "./components/MeuDiaView";
import { QuizView } from "./components/QuizView";
import { InformeView } from "./components/InformeView";
import { CriancasView } from "./components/CriancasView";
import { MeuPerfilView } from "./components/MeuPerfilView";
import { AuthModal } from "./components/AuthModal";
import { carregarUsuario, UserProfile } from "./utils/storage";

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    const path = window.location.pathname;
    if (path === "/" || path === "/alimentos" || path === "/meu-dia" || path === "/jogo" || path === "/informe-se" || path === "/criancas" || path === "/meu-perfil") {
      return path;
    }
    return "/";
  });

  const [user, setUser] = useState<UserProfile>(() => carregarUsuario());
  const [authModalOpen, setAuthModalOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentRoute(path || "/");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (to: string) => {
    if (to !== currentRoute) {
      window.history.pushState({}, "", to);
      setCurrentRoute(to);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderCurrentView = () => {
    switch (currentRoute) {
      case "/alimentos":
        return <AlimentosView />;
      case "/meu-dia":
        return <MeuDiaView navigate={navigate} />;
      case "/jogo":
        return <QuizView navigate={navigate} />;
      case "/informe-se":
        return <InformeView />;
      case "/criancas":
        return <CriancasView />;
      case "/meu-perfil":
        return (
          <MeuPerfilView
            navigate={navigate}
            user={user}
            onOpenAuth={() => setAuthModalOpen(true)}
          />
        );
      case "/":
      default:
        return <HomeView navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Header
        currentRoute={currentRoute}
        navigate={navigate}
        user={user}
        onOpenAuth={() => setAuthModalOpen(true)}
      />

      <main className="flex-1">
        {renderCurrentView()}
      </main>

      <Footer navigate={navigate} />

      {authModalOpen && (
        <AuthModal
          user={user}
          onSalvar={(updated) => setUser(updated)}
          onFechar={() => setAuthModalOpen(false)}
        />
      )}
    </div>
  );
}
