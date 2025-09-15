import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../services/api.service";

export default function ResetPasswordPage() {
  const [params] = useSearchParams();
  const token = params.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("As senhas não coincidem.");
      return;
    }

    try {
      await api.post("/users/reset-password", {
        token,
        newPassword,
      });
      setMessage("Senha redefinida com sucesso!");
    } catch (err) {
      setMessage("Erro ao redefinir senha. O link pode ter expirado.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg space-y-4 max-w-md w-full">
        <h2 className="text-xl font-semibold">Redefinir senha</h2>
        <input
          type="password"
          placeholder="Nova senha"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          className="w-full p-3 rounded bg-gray-700 text-white"
        />
        <input
          type="password"
          placeholder="Confirme a nova senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="w-full p-3 rounded bg-gray-700 text-white"
        />
        <button type="submit" className="w-full bg-blue-600 py-3 rounded hover:bg-blue-500">
          Redefinir Senha
        </button>
        {message && <p className="text-center mt-4 text-sm">{message}</p>}
      </form>
    </div>
  );
}
