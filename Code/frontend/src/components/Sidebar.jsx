export default function Sidebar({ setActivePage }) {
    const sidebarButtonStyle =
        "w-full px-4 py-3 text-center rounded border border-blue-900 hover:bg-blue-900 transition-colors";

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
                        onClick={() => setActivityPage("Login")}
                        className="w-full px-4 border-1 border-red-900 py-3  hover:bg-red-800 rounded-lg font-medium transition-colors"
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
{
    /* <ul className="space-y-2">
      <li className="block px-4 border-1 border-blue-900 hover:bg-blue-900 py-2  rounded">
          <a href="/" className="block px-4 border-1 border-blue-900 hover:bg-blue-900 py-2  rounded">
          Dashboard
          </a>
      </li>
      <li className="block px-4 border-1 border-blue-900 hover:bg-blue-900 py-2  rounded">
          <a href="/" className="block px-4 border-1 border-blue-900 hover:bg-blue-900 py-2  rounded">
          About
          </a>
      </li>
      
      </ul> */
}
