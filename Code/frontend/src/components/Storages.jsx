import React, { useState, useEffect } from 'react';
import api from '../services/api.service';


export default function Storages() {

    const [storages, setStorages] = useState([]);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");

    useEffect(() => {
  api.get('/storages/seeStorage', { withCredentials: true }).then(res => setStorages(res.data));
}, []);



        // fazer post login

        const handleCreate = async (e) => {
            e.preventDefault();
            try{
                const token = localStorage.getItem('token');
                await api.post('/storages/createStorage', { name, location }, {
                    headers: {Authorization: `Bearer ${token}` },
                    withCredentials: true
                });
                setName('');
                setLocation('');
                alert("estoque criado");
            }
            catch(error) {
                alert(error.response?.data?.message || error.message);
                console.log(error.response);
            }
    };

    return (
        <div>
            <div className="p-6 text-align-center">
                <h1 className="text-2xl font-semibold mb-4">Gerenciar Estoques</h1>
            </div>

            <form onSubmit={handleCreate}>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome do estoque" />
                <p></p>
                <input type="text" required value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Localizacao" />

                <button type="submit">Criar Estoque</button>
            </form>
            <ul>
                {storages.map(s => (
                    <li key={s.id}>
                        <strong>{s.name}</strong> — {s.location}
                    </li>
                ))}
            </ul>
        </div>
    );
}