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
        return <Storages />; // Default to Storages if no active page matches
    }
  };

  return (
    <div className="min-h-screen bg-background text-white flex">
      <Sidebar setActivePage={setActivePage} />
      <main className="flex-1 p-6">{renderPage()}</main>
    </div>
  );
}

//   <div className="absolute inset-0 overflow-hidden">
//     <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
//     <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-600/20 rounded-full blur-3xl"></div>
//     <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl"></div>
//   </div>

//   <div className="relative z-10 w-full max-w-md">
//     <h1 className="text-3xl font-light mb-2 text-center">Dashboard</h1>
//     <p className="text-gray-400 text-center mb-8">
//       Gerencie seu estoque de forma eficiente
//     </p>
//   </div>
