import React, { useState, useEffect } from "react";
import api from "../services/api.service";

export default function Sidebar({ setActivePage }) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await api.get("/user/me", { withCredentials: true });
        setUserName(res.data.user.name);
      } catch (error) {
        console.error("Erro ao buscar o usuário:", error);
      }
    }
    fetchUser();
  }, []);

  const sidebarButtonStyle =
    "w-full px-4 py-3 text-center rounded border border-blue-900 hover:bg-blue-900 transition-colors";

  async function handleLogout() {
    try {
      await fetch("http://localhost:3000/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      window.location.href = "/login";
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  }

  return (
    <aside className="w-64 bg-background-secondary text-white flex flex-col min-h-screen">
      {/* Header */}
      <header className="p-6 border-b border-blue-900 text-center">
        <h1 className="text-2xl font-semibold">Smart Storage</h1>
      </header>

      {/* Navigation */}
      <nav className="flex-1 p-6">
        <ul className="space-y-4">
          {[
            { label: "Estoques", page: "estoques" },
            { label: "Histórico", page: "Histórico" },
            { label: "Alexa", page: "Alexa" },
            { label: "Chat", page: "Chat" },
            { label: "Configurações", page: "Configurações" },
          ].map(({ label, page }) => (
            <li key={page}>
              <button
                onClick={() => setActivePage(page)}
                className={sidebarButtonStyle}
                type="button"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <footer className="p-6 border-t border-blue-900">
        <div className="flex items-center gap-3 mb-4">
          <img
            src="src/assets/user-icon.svg"
            alt="Usuário"
            className="w-12 h-12 p-2 rounded-full bg-blue-900"
          />
          <span className="text-lg font-medium truncate">{userName || "Carregando..."}</span>
        </div>

        <button
          onClick={handleLogout}
          className="w-full py-3 rounded-lg bg-red-700 hover:bg-red-800 transition-colors font-semibold"
          type="button"
        >
          Sair
        </button>

        <p className="mt-6 text-center text-sm text-gray-400 select-none">
          © 2025 Smart Storage. Todos os direitos reservados.
        </p>
      </footer>
    </aside>
  );
}
