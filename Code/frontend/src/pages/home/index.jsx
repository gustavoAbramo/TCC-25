export default function Home() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-red-400 to-purple-600 text-white p-6">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Bem-vindo à Página Home
        </h1>
        <p className="text-lg max-w-xl text-center mb-8 drop-shadow-md">
          Esta é a tela principal do site, feita com React e estilizada usando Tailwind CSS.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-100 transition">
          Começar
        </button>
      </div>
    );
}


