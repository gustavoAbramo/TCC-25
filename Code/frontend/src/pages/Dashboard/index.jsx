import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import Storages from "../../components/storages";
import History from "../../components/History";
import Alexa from "../../components/Alexa";
import Chat from "../../components/Chat";
import Settings from "../../components/Settings";

export default function DashboardPage() {
  const [activePage, setActivePage] = useState("storages");

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
      case "Configurações":
        return <Settings />;
      default:
        return <Storages />;
    }
  };

  return (
    // h-screen garante que a tela inteira seja ocupada e evita que o body role
    <div className="h-screen bg-background text-white flex">
      <Sidebar setActivePage={setActivePage} />
      {/* main é o único que rola */}
      <main className="flex-1 p-6 overflow-auto">
        {renderPage()}
      </main>
    </div>
  );
}
