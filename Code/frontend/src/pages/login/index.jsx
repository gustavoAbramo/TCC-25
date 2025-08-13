import logo from '../../assets/logo-safeplay.png';
import './styles.css';
import "tailwindcss";



export default function Login() {
    return (
<div className="flex h-screen">
  <div className=" w-1/2 h-64 md:h-screen relative bg-contain bg-no-repeat bg-fotologo bg-black "></div>

  {/* Metade direita com o login */}
  <div className="w-1/2 flex items-center justify-center bg-gray-100 p-4">
    <form className="max-w-sm w-full p-6">
      <h1 className="mb-6 text-4xl font-bold text-center text-gray-900">
        Bem-vindo
      </h1>

      <div className="mb-5">
        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
          Nome do usuário
        </label>
        <input
          type="text"
          id="username"
          className="bg-gray-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
          Senha
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Entrar
        </button>
      </div>
    </form>
  </div>
</div>

  );
}
