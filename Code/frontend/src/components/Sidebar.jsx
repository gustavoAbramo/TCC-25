import React, { useState, useEffect } from "react";
import { LogOut, Settings, Database, Book, Clock, Mic, MessageSquare, X } from 'lucide-react';
import api from "../services/api.service";
import { Navigate } from "react-router-dom";

export default function Sidebar({ setActivePage, isMobileOpen, setIsMobileOpen }) {
  const [userName, setUserName] = useState("");
  const [loggedOut, setLoggedOut] = useState(false);

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
    {
      label: "Configurações",
      page: "Configurações",
      icon: <Settings size={18} />,
    },
  ];

  async function handleLogout() {
    try {
      await api.post("/auth/logout", {}, { withCredentials: true });
      setLoggedOut(true);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  }

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsMobileOpen(false);
  };

  if (loggedOut) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed md:static w-64 bg-background text-white flex flex-col min-h-screen shadow-xl z-50 transition-transform duration-300 ease-in-out ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Header */}
        <header className="p-6 border-b border-blue-900 text-center flex items-center justify-center relative">
          <h1 className="text-2xl font-bold tracking-wide">Smart Storage</h1>
        </header>

        <nav className="flex-1 p-4 space-y-2 mt-4">
          {navItems.map(({ label, page, icon }) => (
            <button
              key={page}
              onClick={() => handleNavClick(page)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left hover:bg-blue-800/40 hover:translate-x-1 transition-all duration-200 group"
            >
              <span className="text-blue-300 group-hover:text-blue-100">
                {icon}
              </span>
              <span className="font-medium tracking-wide">{label}</span>
            </button>
          ))}
        </nav>

        <footer className="p-5 border-t border-blue-900 mt-auto">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center font-semibold text-lg">
              {userName ? userName[0].toUpperCase() : "?"}
            </div>
            <div className="flex-1 min-w-0">
              <span className="block font-medium truncate">
                {userName || "Carregando..."}
              </span>
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
    </>
  );
}
