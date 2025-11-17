import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import Storages from "../../components/Storages";
import History from "../../components/History";
import Alexa from "../../components/Alexa";
import Chat from "../../components/Chat";
import Recipes from "../../components/Recipes";
import Settings from "../../components/Settings";
import { Menu } from 'lucide-react';

export default function DashboardPage({ userName }) {
  const [activePage, setActivePage] = useState("storages");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case "Estoques":
        return <Storages />;
      case "Histórico":
        return <History />;
      case "Alexa":
        return <Alexa />;
      case "Chat":
        return <Chat />;
      case "Receitas":
        return <Recipes />;
      case "Configurações":
        return <Settings />;
      default:
        return <Storages />;
    }
  };

  return (
    <div className="h-screen bg-background text-white flex">
      <Sidebar 
        setActivePage={setActivePage} 
        userName={userName}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      <main className="flex-1 p-6 overflow-auto flex flex-col">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="md:hidden mb-4 p-2 rounded-lg hover:bg-blue-800/40 transition-colors w-fit"
        >
          <Menu size={24} className="text-white" />
        </button>
        {renderPage()}
      </main>
    </div>
  );
}
