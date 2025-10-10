import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import axios from '../services/api.service';

export default function Settings({ userName, setUserName }) {
  const [otpauthUrl, setOtpauthUrl] = useState('');
  const [token2FA, setToken2FA] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [nameChangeform, setNameChangeForm] = useState(false);
  const [Newname, setNameNew] = useState('');

  // Gera o QR Code apenas quando o botão for clicado
  async function handleGenerate2FA() {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('/auth/2fa/generate');

      if (response.data.data?.otpauth_url) {
        // pega a URL correta
        setOtpauthUrl(response.data.data.otpauth_url);
      } else if (response.data.message) {
        // caso já esteja ativado
        setSuccessMsg(response.data.message);
      }
    } catch (err) {
      setError('Erro ao gerar QR code 2FA');
    }
    setLoading(false);
  }

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await axios.get('/user/me', { withCredentials: true });
        setUserName(res.data.name);
      } catch (err) {
        // trate o erro se quiser
      }
    }
    fetchUser();
  }, [setUserName]);


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


  const handleChangeName = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/user/changeName', { newName: Newname }, { withCredentials: true });
      setNameNew('');
      alert(res.data.message);
    } catch (err) {
      if (err.response) {
        alert((err.response.data?.message || 'Erro ao atualizar') + ' erro ao atualizar');
      }
    }
  };

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
      {nameChangeform ? 'Fechar formulário' : ''}

      {nameChangeform && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="relative w-full max-w-lg mx-auto">
            <form
              onSubmit={handleChangeName}
              className="mb-8 bg-background bg-opacity-90 shadow-2xl rounded-xl p-8 flex flex-col gap-4 border-3 border-gray-500 backdrop-blur-md"
            >

              <button
                type="button"
                className="absolute top-2 right-2 text-red-500 hover:text-red-600 text-2xl font-bold"
                onClick={() => setNameChangeForm(false)}
                aria-label="Fechar"
              >
                ×
              </button>
              <div className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-0 border-gray-300 appearance-none text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                <input
                  type="text"
                  required
                  value={Newname}
                  onChange={(e) => setNameNew(e.target.value)}
                  placeholder="Novo nome"
                  className="border border-gray-500 p-3 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Mudar nome
              </button>
            </form>
          </div>
        </div>
      )}


      <button
        onClick={() => setNameChangeForm(true)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Mudar o seu nome
      </button>
    </div>
  );
}
