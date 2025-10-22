import React, { useState, useEffect } from 'react';
import api from '../services/api.service';

export default function Storages() {
  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const [email, setEmail] = useState("");
  const [permissionType, setPermissionType] = useState("guest"); // Default: Visitante
  const [showForm, setShowForm] = useState(false);
  const [storages, setStorages] = useState([]);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeStorageId, setActiveStorageId] = useState(null);
  const [itemData, setItemData] = useState({
    name: '',
    description: '',
    expiration: '',
    category: '',
    quantity: '',
    unit: ''
  });
  const [addingItem, setAddingItem] = useState(false);
  const [showItemsFor, setShowItemsFor] = useState(null);
  const [itemsLoading, setItemsLoading] = useState(false);

  const fetchStorages = async () => {
    try {
      setLoading(true);
      const res = await api.get('/storages/seeStorage', { withCredentials: true });
      const data = Array.isArray(res.data.storages) ? res.data.storages : [];
      setStorages(data);
    } catch {
      setError('Erro ao carregar os estoques.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchStorages(); }, []);

  const handleCreateStorage = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/storages/createStorage', { name, location }, { withCredentials: true });
      const created = res.data.storage;
      setStorages(prev => [...prev, {
        id: created.id_Storage,
        name: created.name,
        location: created.location,
        accessLevel: created.permissions[0]?.Access_Level || 'Owner',
        items: []
      }]);
      setName('');
      setLocation('');
      setShowForm(false);
      alert("✅ Estoque criado com sucesso!");
    } catch (err) {
      alert(err.response?.data?.message || 'Erro ao criar estoque.');
    }
  };

  const handleAddItem = async (storageId) => {
    const { name, description, expiration, category, quantity, unit } = itemData;
    if (!name || !description || !expiration || !category || !quantity || !unit) return;

    try {
      setAddingItem(true);
      const payload = { name, description, expiration, category, quantity: Number(quantity), unit, storageId };
      const res = await api.post('/storages/Items', payload, { withCredentials: true });
      const newItem = res.data.item ;
      console.log('handleAddItem response:', res.data);
      setStorages(prev => prev.map(s => (s.id === storageId ? { ...s, items: [...s.items, newItem] } : s)));
      setItemData({ name: '', description: '', expiration: '', category: '', quantity: '', unit: '' });
      setActiveStorageId(null);
    } catch (err) {
      alert(err.response?.data?.message || 'Erro ao adicionar item.');
    } finally {
      setAddingItem(false);
    }
  };

  const handleAddPermissions = async (storageId, permissionType) => {
    try {
      const res = permissionType === 'coOwner' ? '/permissions/beCoOwner' : '/permissions/beGuest';
      await api.post(res, { storageId }, { withCredentials: true });
      alert(`✅ Permissão de ${permissionType === 'coOwner' ? 'Co-Owner' : 'Guest'} adicionada com sucesso!`);
      setShowPermissionModal(false);
      setEmail("");
      setPermissionType("guest");
    } catch (err) {
      alert(err.response?.data?.message || 'Erro ao adicionar permissão.');
    }
  };

  const fetchItems = async (storageId) => {
    try {
      setItemsLoading(true);
      const res = await api.get(`/storages/items/${storageId}`, { withCredentials: true });
      const items = Array.isArray(res.data.items) ? res.data.items : [];
      setStorages(prev => prev.map(s => (s.id === storageId ? { ...s, items } : s)));
      setShowItemsFor(storageId);
    } catch {
      alert('Erro ao buscar itens do estoque.');
    } finally {
      setItemsLoading(false);
    }
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br bg-background">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">📦 Gerenciar Estoques</h1>
        <button
          className="px-6 py-2 rounded-lg font-medium bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg hover:scale-105 transition-transform"
          onClick={() => setShowForm(prev => !prev)}
        >
          {showForm ? 'Fechar formulário' : 'Novo Estoque'}
        </button>
      </div>

      {/* Modal de criação */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <form
            onSubmit={handleCreateStorage}
            className="bg-gray-900 border border-gray-700 p-8 rounded-2xl w-full max-w-lg relative shadow-2xl animate-fadeIn"
          >
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-2xl"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center">Criar novo estoque</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome do estoque"
              className="w-full bg-gray-800 border border-gray-600 p-3 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Localização"
              className="w-full bg-gray-800 border border-gray-600 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 py-2.5 rounded-lg font-medium hover:scale-[1.02] transition-transform"
            >
              Criar Estoque
            </button>
          </form>
        </div>
      )}

      {/* Conteúdo principal */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : storages.length === 0 ? (
        <p className="text-gray-400 text-center italic">Nenhum estoque encontrado.</p>
      ) : (
        <div className="grid gap-6">
          {storages.map((s) => (
            <div
              key={s.id}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-blue-800/30 transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h4 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {s.name}
                  <span className="text-gray-400 text-sm ml-2">{s.location}</span>
                  <span className="ml-2 px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-xs font-medium">
                    {s.accessLevel}
                  </span>
                </h4>
                <div className="flex gap-2 mt-3 md:mt-0">
                  <button
                    onClick={() => fetchItems(s.id)}
                    disabled={itemsLoading}
                    className={`px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition ${itemsLoading && showItemsFor === s.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {itemsLoading && showItemsFor === s.id ? 'Carregando...' : 'Ver Itens'}
                  </button>
                  <button 
                    onClick={() => setShowPermissionModal(true)}
                    className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 transition">


                    Configurações
                  </button>
                  <button
                    onClick={() => setActiveStorageId(s.id)}
                    className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition"
                  >
                    Adicionar Item
                  </button>
                </div>
              </div>

      {showPermissionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-gray-900 border border-gray-700 p-8 rounded-2xl w-full max-w-lg relative shadow-2xl animate-fadeIn">
            <h2 className="text-xl font-bold mb-4">Permissões</h2>

            {/* Input para o e-mail */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite o e-mail"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Dropdown para selecionar a permissão */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Permissão</label>
              <select
                value={permissionType}
                onChange={(e) => setPermissionType(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="guest">Visitante</option>
                <option value="coOwner">Coproprietário</option>
              </select>
            </div>

            {/* Botões de ação */}
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowPermissionModal(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
              >
                Cancelar
              </button>
              <button
                onClick={handleAddPermissions}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Adicionar
              </button>
              </div>
          </div>
        </div>
      )}
              {showItemsFor === s.id && (
                <ul className="mt-4 space-y-2">
                  {s.items.length === 0 ? (
                    <li className="text-gray-500">Nenhum item.</li>
                  ) : (
                    s.items.map((item) => (
                      <li key={item.id} className="bg-gray-800 border border-gray-700 rounded-lg p-3 flex justify-between items-center">
                        <span className="font-medium text-blue-300">{item.name} </span>
                        <span className="text-gray-400 text-sm">{item.quantity} {item.unit}</span>
                        <span className="text-xs text-gray-500">Validade: {item.expiration}</span>
                      </li>
                    ))
                  )}
                </ul>
              )}

              {activeStorageId === s.id && (
                <div className="mt-4 bg-gray-800 border border-gray-700 rounded-lg p-4 space-y-3">
                  <div className="grid md:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Nome"
                      value={itemData.name}
                      onChange={(e) => setItemData({ ...itemData, name: e.target.value })}
                      className="bg-gray-900 border border-gray-700 p-2 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Descrição"
                      value={itemData.description}
                      onChange={(e) => setItemData({ ...itemData, description: e.target.value })}
                      className="bg-gray-900 border border-gray-700 p-2 rounded focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="grid md:grid-cols-3 gap-3">
                    <input
                      type="date"
                      value={itemData.expiration}
                      onChange={(e) => setItemData({ ...itemData, expiration: e.target.value })}
                      className="bg-gray-900 border border-gray-700 p-2 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                      value={itemData.category}
                      onChange={(e) => setItemData({ ...itemData, category: e.target.value })}
                      className="bg-gray-900 border border-gray-700 p-2 rounded focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Categoria</option>
                      <option value="comida">Comida</option>
                      <option value="bebida">Bebida</option>
                    </select>
                    <input
                      type="number"
                      placeholder="Quantidade"
                      value={itemData.quantity}
                      onChange={(e) => setItemData({ ...itemData, quantity: e.target.value })}
                      className="bg-gray-900 border border-gray-700 p-2 rounded focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    <select
                      value={itemData.unit}
                      onChange={(e) => setItemData({ ...itemData, unit: e.target.value })}
                      className="bg-gray-900 border border-gray-700 p-2 rounded focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Unidade</option>
                      <option value="gramas">Gramas (g)</option>
                      <option value="quilogramas">Quilogramas (kg)</option>
                      <option value="mililitros">Mililitros (ml)</option>
                      <option value="litros">Litros (L)</option>
                      <option value="unidades">Unidade</option>
                    </select>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAddItem(s.id)}
                      disabled={addingItem}
                      className="flex-1 bg-green-600 hover:bg-green-700 rounded-lg py-2 transition"
                    >
                      {addingItem ? 'Adicionando...' : 'Adicionar'}
                    </button>
                    <button
                      onClick={() => setActiveStorageId(null)}
                      className="flex-1 bg-gray-600 hover:bg-gray-700 rounded-lg py-2 transition"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
