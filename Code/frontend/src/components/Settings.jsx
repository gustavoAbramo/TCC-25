import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import axios from '../services/api.service';

export default function Settings() {
  const [otpauthUrl, setOtpauthUrl] = useState('');
  const [token2FA, setToken2FA] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Gera o QR Code apenas quando o botão for clicado
  async function handleGenerate2FA() {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('/auth/2fa/generate');
      setOtpauthUrl(response.data.otpauth_url);
      setError('');
    } catch (err) {
      setError('Erro ao gerar QR code 2FA');
    }
    setLoading(false);
  }

  async function handleVerify2FA(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMsg('');
    try {
      const response = await axios.post('/auth/2fa/verify', { token: token2FA });
      if (response.data.success) {
        setSuccessMsg('2FA ativado com sucesso!');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao ativar 2FA');
    }
    setLoading(false);
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-semibold mb-4">Configurações</h1>
      <p className="text-gray-400 mb-4">Ative a autenticação de dois fatores (2FA):</p>

      {error && <p className="text-red-500">{error}</p>}
      {successMsg && <p className="text-green-500">{successMsg}</p>}

      {/* Botão para gerar o QR Code */}
      {!otpauthUrl && (
        <button
          onClick={handleGenerate2FA}
          disabled={loading}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          {loading ? 'Gerando...' : 'Ativar 2FA'}
        </button>
      )}

      {/* Exibe QR Code quando disponível */}
      {otpauthUrl && (
        <div className="mb-4">
          <p>Escaneie este QR code no seu app autenticador:</p>
          <QRCode value={otpauthUrl} size={200} />
        </div>
      )}

      {/* Formulário de verificação do token */}
      {otpauthUrl && (
        <form onSubmit={handleVerify2FA}>
          <label>
            Código 2FA:
            <input
              type="text"
              value={token2FA}
              onChange={(e) => setToken2FA(e.target.value)}
              maxLength={6}
              required
              className="border p-2 ml-2"
            />
          </label>
          <button
            type="submit"
            className="ml-4 px-4 py-2 bg-green-600 text-white rounded"
            disabled={loading}
          >
            {loading ? 'Verificando...' : 'Confirmar 2FA'}
          </button>
        </form>
      )}
    </div>
  );
}
