import React, { useState, useEffect } from 'react';
import api from '../services/api.service';

export default function Storages() {
  const [storages, setStorages] = useState([]);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Para adicionar item
  const [activeStorageId, setActiveStorageId] = useState(null);
  const [itemData, setItemData] = useState({
    name: '',
    description: '',
    expiration: '',
    category: '',
    quantity: ''
  });
  const [addingItem, setAddingItem] = useState(false);

  // Para mostrar itens de cada storage
  const [showItemsFor, setShowItemsFor] = useState(null);
  const [itemsLoading, setItemsLoading] = useState(false);

  // Buscar todos os storages
  const fetchStorages = async () => {
    try {
      setLoading(true);
      const res = await api.get('/storages/seeStorage', { withCredentials: true });
      const data = Array.isArray(res.data.storages) ? res.data.storages : [];
      setStorages(data);
    } catch (err) {
      console.error(err);
      setError('Erro ao carregar os estoques.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStorages();
  }, []);

  const handleCreateStorage = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/storages/createStorage', { name, location }, { withCredentials: true });
      const created = res.data.storage;
      const newStorage = {
        id: created.id_Storage,
        name: created.name,
        location: created.location,
        accessLevel: created.permissions[0]?.Access_Level || 'Owner',
        items: []
      };
      setStorages(prev => [...prev, newStorage]);
      setName('');
      setLocation('');
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Erro ao criar estoque.');
    }
  };

  const handleAddItem = async (storageId) => {
    const { name, description, expiration, category, quantity } = itemData;
    if (!name || !description || !expiration || !category || !quantity) return;

    try {
      setAddingItem(true);
      const payload = { name, description, expiration, category, quantity: Number(quantity), storageId };
      const res = await api.post('/storages/Items', payload, { withCredentials: true });
      const newItem = res.data;

      setStorages(prev =>
        prev.map(s => (s.id === storageId ? { ...s, items: [...s.items, newItem] } : s))
      );

      setItemData({ name: '', description: '', expiration: '', category: '', quantity: '' });
      setActiveStorageId(null);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Erro ao adicionar item.');
    } finally {
      setAddingItem(false);
    }
  };

  // Buscar itens de um storage específico
  const fetchItems = async (storageId) => {
    try {
      setItemsLoading(true);
      const res = await api.get(`/storages/items/${storageId}`, { withCredentials: true });
      const items = Array.isArray(res.data.items) ? res.data.items : [];

      setStorages(prev =>
        prev.map(s => (s.id === storageId ? { ...s, items } : s))
      );

      setShowItemsFor(storageId); // marca que deve mostrar os items
    } catch (err) {
      console.error(err);
      alert('Erro ao buscar itens do estoque.');
    } finally {
      setItemsLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Gerenciar Estoques</h1>

      {/* Formulário de criar estoque */}
      <form onSubmit={handleCreateStorage} className="mb-6 flex flex-col gap-2">
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome do estoque"
          className="border p-2 rounded"
        />
        <input
          type="text"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Localização"
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Criar Estoque
        </button>
      </form>

      {loading ? (
        <p>Carregando estoques...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : storages.length === 0 ? (
        <p>Nenhum estoque encontrado.</p>
      ) : (
        <div className="space-y-4">
          {storages.map((s) => (
            <div key={s.id} className="border p-4 rounded">
              <h4>
                <strong>{s.name}</strong> — {s.location} ({s.accessLevel})
              </h4>

              {/* Botões */}
              <div className="flex gap-2 mt-2">
                <button
                  className="bg-purple-500 text-white p-2 rounded hover:bg-purple-600"
                  onClick={() => fetchItems(s.id)}
                  disabled={itemsLoading}
                >
                  {itemsLoading && showItemsFor === s.id ? 'Carregando...' : 'Ver Itens'}
                </button>

                <button
                  className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
                  onClick={() => setActiveStorageId(s.id)}
                >
                  Adicionar Item
                </button>
              </div>

              {/* Lista de itens */}
              {showItemsFor === s.id && (
                <ul className="pl-4 mt-2">
                  {s.items.length === 0 ? (
                    <li>Nenhum item.</li>
                  ) : (
                    s.items.map((item) => (
                      <li key={item.id}>
                        {item.name} — {item.quantity} ({item.category}) — Validade: {item.expiration}
                      </li>
                    ))
                  )}
                </ul>
              )}

              {/* Formulário inline para adicionar item */}
              {activeStorageId === s.id && (
                <div className="mt-2 flex flex-col gap-2 border p-2 rounded">
                  <input
                    type="text"
                    placeholder="Nome"
                    value={itemData.name}
                    onChange={(e) => setItemData({ ...itemData, name: e.target.value })}
                    required
                    className="border p-1 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Descrição"
                    value={itemData.description}
                    onChange={(e) => setItemData({ ...itemData, description: e.target.value })}
                    required
                    className="border p-1 rounded"
                  />
                  <input
                    type="date"
                    value={itemData.expiration}
                    onChange={(e) => setItemData({ ...itemData, expiration: e.target.value })}
                    required
                    className="border p-1 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Categoria"
                    value={itemData.category}
                    onChange={(e) => setItemData({ ...itemData, category: e.target.value })}
                    required
                    className="border p-1 rounded"
                  />
                  <input
                    type="number"
                    placeholder="Quantidade"
                    value={itemData.quantity}
                    onChange={(e) => setItemData({ ...itemData, quantity: e.target.value })}
                    required
                    className="border p-1 rounded"
                  />

                  <div className="flex gap-2">
                    <button
                      className="bg-green-500 text-white p-1 rounded flex-1"
                      onClick={() => handleAddItem(s.id)}
                      disabled={addingItem}
                    >
                      {addingItem ? 'Adicionando...' : 'Adicionar'}
                    </button>
                    <button
                      className="bg-gray-400 text-white p-1 rounded flex-1"
                      onClick={() => setActiveStorageId(null)}
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
