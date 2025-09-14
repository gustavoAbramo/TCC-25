import React, { useState, useEffect } from 'react';
import api from '../services/api.service';

export default function Storages() {
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
        quantity: ''
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
        } catch (err) {
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
            alert("estoque criado com sucesso")
        } catch (err) {
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
            alert(err.response?.data?.message || 'Erro ao adicionar item.');
        } finally {
            setAddingItem(false);
        }
    };

    const fetchItems = async (storageId) => {
        try {
            setItemsLoading(true);
            const res = await api.get(`/storages/items/${storageId}`, { withCredentials: true });
            const items = Array.isArray(res.data.items) ? res.data.items : [];

            setStorages(prev =>
                prev.map(s => (s.id === storageId ? { ...s, items } : s))
            );

            setShowItemsFor(storageId);
        } catch (err) {
            alert('Erro ao buscar itens do estoque.');
        } finally {
            setItemsLoading(false);
        }
    };

    return (
        <div className="p-8 bg-background min-h-screen">
            <div className="p-6 flex items-center justify-between">
                <h1 className="text-2xl font-semibold mb-4">Gerenciar Estoques</h1>
                <button
                    className="mb-6 ml-16 px-6 py-2 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700 transition"
                    onClick={() => setShowForm((prev) => !prev)}
                >
                    {showForm ? 'Fechar formulário' : 'Novo Estoque'}
                </button>
            </div>

            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="relative w-full max-w-lg mx-auto">
                        <form
                            onSubmit={handleCreateStorage}
                            className="mb-8 bg-background bg-opacity-90 shadow-2xl rounded-xl p-8 flex flex-col gap-4 border-3 border-gray-500 backdrop-blur-md"
                        >
                            <button
                                type="button"
                                className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl font-bold"
                                onClick={() => setShowForm(false)}
                                aria-label="Fechar"
                            >
                                ×
                            </button>
                            <div className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Nome do estoque"
                                    className="border border-gray-500 p-3 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                            </div>
                            <div className='block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-0 border-gray-100 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'>
                                <input
                                    type="text"
                                    required
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="Localização"
                                    className="border border-gray-500 p-3 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                            </div>

                            <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Criar Estoque
                            </button>
                        </form>
                    </div>
                </div>
            )}

                {loading ? (
                    <div className="flex justify-center items-center py-10">
                        <span className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mr-2"></span>
                        <span className="text-blue-700 font-medium">Carregando estoques...</span>
                    </div>
                ) : error ? (
                    <p className="text-red-500 text-center">{error}</p>
                ) : storages.length === 0 ? (
                    <p className="text-gray-500 text-center">Nenhum estoque encontrado.</p>
                ) : (
                    <div className="space-y-6">
                        {storages.map((s) => (
                            <div
                                key={s.id}
                                className="bg-white border border-blue-100 shadow-md rounded-xl p-6 transition hover:shadow-xl"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                    <h4 className="text-xl font-semibold text-blue-800 flex items-center gap-2">
                                        <span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span>
                                        {s.name}
                                        <span className="text-sm text-gray-500 font-normal ml-2">
                                            {s.location}
                                        </span>
                                        <span className="ml-2 px-2 py-0.5 rounded bg-blue-100 text-blue-600 text-xs font-medium">
                                            {s.accessLevel}
                                        </span>
                                    </h4>
                                    <div className="flex gap-2 mt-2 md:mt-0">
                                        <button
                                            className={`bg-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-600 transition ${itemsLoading && showItemsFor === s.id ? 'opacity-60 cursor-not-allowed' : ''}`}
                                            onClick={() => fetchItems(s.id)}
                                            disabled={itemsLoading}
                                        >
                                            {itemsLoading && showItemsFor === s.id ? 'Carregando...' : 'Ver Itens'}
                                        </button>
                                        <button
                                            className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition"
                                            onClick={() => setActiveStorageId(s.id)}
                                        >
                                            Adicionar Item
                                        </button>
                                    </div>
                                </div>

                                {/* Lista de itens */}
                                {showItemsFor === s.id && (
                                    <ul className="pl-4 mt-4 space-y-2">
                                        {s.items.length === 0 ? (
                                            <li className="text-gray-500">Nenhum item.</li>
                                        ) : (
                                            s.items.map((item) => (
                                                <li
                                                    key={item.id}
                                                    className="bg-blue-50 border border-blue-100 rounded-lg p-3 flex flex-col md:flex-row md:items-center md:justify-between"
                                                >
                                                    <span className="font-medium text-blue-700">{item.name}</span>
                                                    <span className="text-gray-600 text-sm">{item.quantity} ({item.category})</span>
                                                    <span className="text-xs text-gray-400">Validade: {item.expiration}</span>
                                                </li>
                                            ))
                                        )}
                                    </ul>
                                )}

                                {/* Formulário inline para adicionar item */}
                                {activeStorageId === s.id && (
                                    <div className="mt-4 bg-background rounded-lg p-4 flex flex-col gap-3">
                                        <div className="flex flex-col md:flex-row gap-3">
                                            <input
                                                type="text"
                                                placeholder="Nome"
                                                value={itemData.name}
                                                onChange={(e) => setItemData({ ...itemData, name: e.target.value })}
                                                required
                                                className="border border-blue-200 p-2 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                            />
                                            <input
                                                type="text"
                                                placeholder="Descrição"
                                                value={itemData.description}
                                                onChange={(e) => setItemData({ ...itemData, description: e.target.value })}
                                                required
                                                className="border border-blue-200 p-2 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                            />
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-3">
                                            <input
                                                type="date"
                                                value={itemData.expiration}
                                                onChange={(e) => setItemData({ ...itemData, expiration: e.target.value })}
                                                required
                                                className="border border-blue-200 p-2 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                            />
                                            <input
                                                type="text"
                                                placeholder="Categoria"
                                                value={itemData.category}
                                                onChange={(e) => setItemData({ ...itemData, category: e.target.value })}
                                                required
                                                className="border border-blue-200 p-2 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                            />
                                            <input
                                                type="number"
                                                placeholder="Quantidade"
                                                value={itemData.quantity}
                                                onChange={(e) => setItemData({ ...itemData, quantity: e.target.value })}
                                                required
                                                className="border border-blue-200 p-2 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                            />
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                className="bg-green-500 text-white p-2 rounded-lg flex-1 font-medium hover:bg-green-600 transition"
                                                onClick={() => handleAddItem(s.id)}
                                                disabled={addingItem}
                                                type="button"
                                            >
                                                {addingItem ? 'Adicionando...' : 'Adicionar'}
                                            </button>
                                            <button
                                                className="bg-gray-400 text-white p-2 rounded-lg flex-1 font-medium hover:bg-gray-500 transition"
                                                onClick={() => setActiveStorageId(null)}
                                                type="button"
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
