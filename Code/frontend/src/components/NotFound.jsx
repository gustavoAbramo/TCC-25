import React from "react";
import NotFoundImg from "../assets/404.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0a1128] via-[#0f2040] to-[#13294b] text-gray-100 relative overflow-hidden">
      {/* Elementos de fundo decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-cyan-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 px-6 max-w-6xl mx-auto">
        {/* Conteúdo de texto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left flex-1"
        >
          <motion.h1
            className="text-[10rem] lg:text-[12rem] font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            404
          </motion.h1>

          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Oops! Página não encontrada
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 max-w-lg mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A página que você está tentando acessar não existe, foi removida ou está temporariamente indisponível.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              to="/"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar à página inicial
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="px-6 py-4 border border-gray-600 text-gray-300 font-medium rounded-xl hover:bg-gray-800/50 hover:border-gray-500 transition-all duration-300"
            >
              Voltar à página anterior
            </button>
          </motion.div>
        </motion.div>

        {/* Ilustração SVG */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex-1 max-w-md lg:max-w-lg"
        >
          <div className="relative">
            <motion.img 
              src={NotFoundImg} 
              alt="Página não encontrada" 
              className="w-full h-auto drop-shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            
            {/* Efeito de brilho na imagem */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-xl -z-10"></div>
          </div>
        </motion.div>
      </div>

      {/* Rodapé decorativo */}
      <motion.div 
        className="absolute bottom-6 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Se precisar de ajuda, entre em contato com o suporte
      </motion.div>
    </div>
  );
}