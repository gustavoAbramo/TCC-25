import React, { useState, useEffect } from 'react';
import api from '../services/api.service';


export default function Storages() {

    const [storages, setStorages] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
    api.post('/storages/createStorage').then(res => setStorages(res.data));
  }, []);



        // fazer post login

        const handleCreate = async (e) => {
        e.preventDefault();
        const res = await api.post('/storages/createStorage', { name });
        setStorages([...storages, res.data]);
    };

    return (
        <div>
            <div className="p-6 text-align-center">
                <h1 className="text-2xl font-semibold mb-4">Gerenciar Estoques</h1>
            </div>

            <form onSubmit={handleCreate}>
                <input type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="Nome do estoque" />
                <button type="submit">Criar Estoque</button>
            </form>
            <ul>
                {storages.map(s => <li key={s.id}>{s.name}</li>)}
            </ul>


        </div>
    );
}