import React, { useState, useEffect } from "react";
import { LogOut, Settings, Database, Book, Clock, Mic, MessageSquare } from "lucide-react";
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

  const navItems = [
    { label: "Estoques", page: "estoques", icon: <Database size={18} /> },
    { label: "Receitas", page: "Receitas", icon: <Book size={18} /> },
    { label: "Histórico", page: "Histórico", icon: <Clock size={18} /> },
    { label: "Alexa", page: "Alexa", icon: <Mic size={18} /> },
    { label: "Chat", page: "Chat", icon: <MessageSquare size={18} /> },
    { label: "Configurações", page: "Configurações", icon: <Settings size={18} /> },
  ];

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
    <aside className="w-64 bg-gradient-to-b from-bg-background  text-white flex flex-col min-h-screen shadow-xl">
      {/* Header */}
      <header className="p-6 border-b border-blue-800 text-center">
        <h1 className="text-2xl font-bold tracking-wide">Smart Storage</h1>
      </header>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 mt-4">
        {navItems.map(({ label, page, icon }) => (
          <button
            key={page}
            onClick={() => setActivePage(page)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left hover:bg-blue-800/40 hover:translate-x-1 transition-all duration-200 group"
          >
            <span className="text-blue-300 group-hover:text-blue-100">{icon}</span>
            <span className="font-medium tracking-wide">{label}</span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <footer className="p-5 border-t border-blue-800 mt-auto">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center font-semibold text-lg">
            {userName ? userName[0].toUpperCase() : "?"}
          </div>
          <div className="flex-1 min-w-0">
            <span className="block font-medium truncate">{userName || "Carregando..."}</span>
            <span className="text-sm text-blue-300">Usuário</span>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full py-3 flex items-center justify-center gap-2 rounded-lg bg-red-700 hover:bg-red-800 transition-colors font-semibold"
        >
          <LogOut size={18} /> Sair
        </button>

        <p className="mt-5 text-center text-sm text-blue-300/70 select-none">
          © 2025 Smart Storage
        </p>
      </footer>
    </aside>
  );
}
