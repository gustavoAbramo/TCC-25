export default function Sidebar({ setActivePage }) {
  const sidebarButtonStyle =
    "w-full px-4 py-3 text-center rounded border border-blue-900 hover:bg-blue-900 transition-colors";

  async function handleLogout() {
    try {
      // Chama o backend para apagar o cookie do token
      await fetch("http://localhost:3000/auth/logout", {
        method: "POST",
        credentials: "include", // necessário para enviar cookies
      });

      // Redireciona para login
      window.location.href = "/login";
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  }

  return (
    <div className="w-64 bg-background-secondary text-white h-full flex flex-col min-h-screen">
      <div className="p-4 text-center text-2xl font-semibold border-b">
        Smart Storage
      </div>
      <nav className="flex-1 p-4 columns-1 ">
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setActivePage("estoques")}
              className={sidebarButtonStyle}
            >
              Estoques
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage("Histórico")}
              className={sidebarButtonStyle}
            >
              Histórico
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage("Alexa")}
              className={sidebarButtonStyle}
            >
              Alexa
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage("Chat")}
              className={sidebarButtonStyle}
            >
              Chat
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage("Configurações")}
              className={sidebarButtonStyle}
            >
              Configurações
            </button>
          </li>
        </ul>
      </nav>

      <footer className="p-4">
        <div>
          <button
            onClick={handleLogout}
            className="w-full px-4 border-1 border-red-900 py-3 hover:bg-red-800 rounded-lg font-medium transition-colors"
          >
            Sair
          </button>
        </div>

        <div className="p-4 text-center text-sm text-gray-400">
          © 2025 Smart Storage. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
