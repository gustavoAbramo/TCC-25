"use client"

import { useState, useEffect } from "react"
import api from "../services/api.service.js"

export default function Storages() {
  const [showPermissionModal, setShowPermissionModal] = useState(false)
  const [email, setEmail] = useState("")
  const [permissionType, setPermissionType] = useState("guest")
  const [showForm, setShowForm] = useState(false)
  const [storages, setStorages] = useState([])
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [activeStorageId, setActiveStorageId] = useState(null)
  const [currentStorageForPermission, setCurrentStorageForPermission] = useState(null)
  const [itemData, setItemData] = useState({
    name: "",
    description: "",
    expiration: "",
    category: "",
    quantity: "",
    unit: "",
  })
  const [addingItem, setAddingItem] = useState(false)
  const [showItemsFor, setShowItemsFor] = useState(null)
  const [itemsLoading, setItemsLoading] = useState(false)

  const fetchStorages = async () => {
    try {
      setLoading(true)
      setError("") // Limpar erro anterior
      const res = await api.get("/storages/seeStorage", {
        withCredentials: true,
      })
      console.log("[v0] Storages fetched:", res.data) // Debug log
      const data = Array.isArray(res.data.storages) ? res.data.storages : []
      const normalizedData = data.map((storage) => ({
        ...storage,
        items: Array.isArray(storage.items) ? storage.items : [],
      }))
      setStorages(normalizedData)
    } catch (err) {
      console.error("[v0] Error fetching storages:", err) // Debug log
      setError("Erro ao carregar os estoques.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStorages()
  }, [])

  const handleCreateStorage = async (e) => {
    e.preventDefault()
    try {
      const res = await api.post("/storages/createStorage", { name, location }, { withCredentials: true })
      console.log("[v0] Storage created:", res.data) // Debug log

      await fetchStorages()

      setName("")
      setLocation("")
      setShowForm(false)
      alert("✅ Estoque criado com sucesso!")
    } catch (err) {
      console.error("[v0] Error creating storage:", err) // Debug log
      alert(err.response?.data?.message || "Erro ao criar estoque.")
    }
  }

  const handleAddItem = async (storageId) => {
    const { name, description, expiration, category, quantity, unit } = itemData
    if (!name || !description || !expiration || !category || !quantity || !unit) {
      alert("Por favor, preencha todos os campos.")
      return
    }

    try {
      setAddingItem(true)
      const payload = {
        name,
        description,
        expiration,
        category,
        quantity: Number(quantity),
        unit,
        storageId,
      }
      const res = await api.post("/storages/Items", payload, {
        withCredentials: true,
      })
      console.log("[v0] Item added:", res.data) // Debug log
      const newItem = res.data.item

      setStorages((prev) =>
        prev.map((s) => {
          if (s.id === storageId) {
            const currentItems = Array.isArray(s.items) ? s.items : []
            return { ...s, items: [...currentItems, newItem] }
          }
          return s
        }),
      )

      setItemData({
        name: "",
        description: "",
        expiration: "",
        category: "",
        quantity: "",
        unit: "",
      })
      setActiveStorageId(null)
      alert("✅ Item adicionado com sucesso!")
    } catch (err) {
      console.error("[v0] Error adding item:", err) // Debug log
      alert(err.response?.data?.message || "Erro ao adicionar item.")
    } finally {
      setAddingItem(false)
    }
  }

  const handleAddPermissions = async () => {
    if (!currentStorageForPermission) return

    try {
      const res = permissionType === "coOwner" ? "/permissions/beCoOwner" : "/permissions/beGuest"
      await api.post(res, { storageId: currentStorageForPermission }, { withCredentials: true })
      alert(`✅ Permissão de ${permissionType === "coOwner" ? "Co-Owner" : "Guest"} adicionada com sucesso!`)
      setShowPermissionModal(false)
      setEmail("")
      setPermissionType("guest")
      setCurrentStorageForPermission(null)
    } catch (err) {
      console.error("[v0] Error adding permissions:", err) // Debug log
      alert(err.response?.data?.message || "Erro ao adicionar permissão.")
    }
  }

  const fetchItems = async (storageId) => {
    try {
      setItemsLoading(true)
      const res = await api.get(`/storages/items/${storageId}`, {
        withCredentials: true,
      })
      console.log("[v0] Items fetched:", res.data) // Debug log

      const items = Array.isArray(res.data.items) ? res.data.items : []

      setStorages((prev) => prev.map((s) => (s.id === storageId ? { ...s, items } : s)))
      setShowItemsFor(storageId)
    } catch (err) {
      console.error("[v0] Error fetching items:", err) // Debug log
      alert("Erro ao buscar itens do estoque.")
    } finally {
      setItemsLoading(false)
    }
  }

  const getAccessLevelColor = (level) => {
    switch (level) {
      case "Owner":
        return "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
      case "Co-Owner":
        return "bg-blue-500/10 text-blue-400 border border-blue-500/20"
      default:
        return "bg-gray-500/10 text-gray-400 border border-gray-500/20"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Gerenciar Estoques</h1>
            <p className="text-slate-400 mt-1">Organize e controle seus estoques de forma eficiente</p>
          </div>
          <button
            onClick={() => setShowForm((prev) => !prev)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            {showForm ? "Fechar" : "Novo Estoque"}
          </button>
        </div>

        {/* Modal de criação */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between p-6 border-b border-slate-800">
                <h2 className="text-xl font-semibold text-white">Criar Novo Estoque</h2>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-slate-800 rounded-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleCreateStorage} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Nome do Estoque</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Estoque Principal"
                    className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Localização</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ex: Armazém A - Setor 1"
                    className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-500/25"
                >
                  Criar Estoque
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Modal de Permissões */}
        {showPermissionModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between p-6 border-b border-slate-800">
                <h2 className="text-xl font-semibold text-white">Gerenciar Permissões</h2>
                <button
                  type="button"
                  onClick={() => {
                    setShowPermissionModal(false)
                    setCurrentStorageForPermission(null)
                  }}
                  className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-slate-800 rounded-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">E-mail do Usuário</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="usuario@exemplo.com"
                    className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Nível de Permissão</label>
                  <select
                    value={permissionType}
                    onChange={(e) => setPermissionType(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="guest">Visitante</option>
                    <option value="coOwner">Coproprietário</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => {
                      setShowPermissionModal(false)
                      setCurrentStorageForPermission(null)
                    }}
                    className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 rounded-xl transition-all"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleAddPermissions}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-blue-500/25"
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Conteúdo principal */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-slate-700 border-t-blue-500 rounded-full animate-spin"></div>
              <div
                className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-blue-400 rounded-full animate-spin"
                style={{ animationDuration: "1.5s" }}
              ></div>
            </div>
            <p className="text-slate-400 mt-4 font-medium">Carregando estoques...</p>
          </div>
        ) : error ? (
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 text-center">
            <svg className="w-12 h-12 text-red-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-red-400 font-medium">{error}</p>
          </div>
        ) : storages.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center">
            <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 00-.707.293h-3.172a1 1 0 00-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Nenhum estoque encontrado</h3>
            <p className="text-slate-400 mb-6">Comece criando seu primeiro estoque para organizar seus itens</p>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Criar Primeiro Estoque
            </button>
          </div>
        ) : (
          <div className="grid gap-6">
            {storages.map((s) => (
              <div
                key={s.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-slate-700 transition-all duration-300"
              >
                {/* Header do Card */}
                <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-6 border-b border-slate-800">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{s.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <svg
                              className="w-4 h-4 text-slate-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            <span className="text-slate-400 text-sm">{s.location}</span>
                          </div>
                        </div>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold ${getAccessLevelColor(s.accessLevel)}`}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                        {s.accessLevel}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => fetchItems(s.id)}
                        disabled={itemsLoading && showItemsFor === s.id}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-600/50 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        {itemsLoading && showItemsFor === s.id ? "Carregando..." : "Ver Itens"}
                      </button>

                      <button
                        onClick={() => {
                          setShowPermissionModal(true)
                          setCurrentStorageForPermission(s.id)
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-xl transition-all"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        Permissões
                      </button>

                      <button
                        onClick={() => setActiveStorageId(activeStorageId === s.id ? null : s.id)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        {activeStorageId === s.id ? "Cancelar" : "Adicionar Item"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Formulário de Adicionar Item */}
                {activeStorageId === s.id && (
                  <div className="p-6 bg-slate-800/30 border-b border-slate-800">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      Adicionar Novo Item
                    </h4>

                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Nome do Item</label>
                          <input
                            type="text"
                            placeholder="Ex: Arroz Integral"
                            value={itemData.name}
                            onChange={(e) => setItemData({ ...itemData, name: e.target.value })}
                            className="w-full bg-slate-900 border border-slate-700 text-white placeholder-slate-500 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Descrição</label>
                          <input
                            type="text"
                            placeholder="Ex: Pacote de 1kg"
                            value={itemData.description}
                            onChange={(e) =>
                              setItemData({
                                ...itemData,
                                description: e.target.value,
                              })
                            }
                            className="w-full bg-slate-900 border border-slate-700 text-white placeholder-slate-500 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Data de Validade</label>
                          <input
                            type="date"
                            value={itemData.expiration}
                            onChange={(e) => setItemData({ ...itemData, expiration: e.target.value })}
                            className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Categoria</label>
                          <select
                            value={itemData.category}
                            onChange={(e) => setItemData({ ...itemData, category: e.target.value })}
                            className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                          >
                            <option value="">Selecione...</option>
                            <option value="comida">Comida</option>
                            <option value="bebida">Bebida</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Quantidade</label>
                          <input
                            type="number"
                            placeholder="0"
                            value={itemData.quantity}
                            onChange={(e) => setItemData({ ...itemData, quantity: e.target.value })}
                            className="w-full bg-slate-900 border border-slate-700 text-white placeholder-slate-500 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Unidade de Medida</label>
                        <select
                          value={itemData.unit}
                          onChange={(e) => setItemData({ ...itemData, unit: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        >
                          <option value="">Selecione a unidade...</option>
                          <option value="gramas">Gramas (g)</option>
                          <option value="quilogramas">Quilogramas (kg)</option>
                          <option value="mililitros">Mililitros (ml)</option>
                          <option value="litros">Litros (L)</option>
                          <option value="unidades">Unidade</option>
                        </select>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button
                          onClick={() => handleAddItem(s.id)}
                          disabled={addingItem}
                          className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-600/50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
                        >
                          {addingItem ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Adicionando...
                            </>
                          ) : (
                            <>
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Adicionar Item
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => setActiveStorageId(null)}
                          className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 rounded-xl transition-all"
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Lista de Itens */}
                {showItemsFor === s.id && (
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                      Itens do Estoque
                      <span className="ml-auto text-sm font-normal text-slate-400">
                        {Array.isArray(s.items) ? s.items.length : 0}{" "}
                        {Array.isArray(s.items) && s.items.length === 1 ? "item" : "itens"}
                      </span>
                    </h4>

                    {!Array.isArray(s.items) || s.items.length === 0 ? (
                      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center">
                        <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                            />
                          </svg>
                        </div>
                        <p className="text-slate-400">Nenhum item cadastrado neste estoque</p>
                        <button
                          onClick={() => setActiveStorageId(s.id)}
                          className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-all"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                          Adicionar Primeiro Item
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {s.items.map((item) => (
                          <div
                            key={item.id}
                            className="bg-slate-800/50 border border-slate-700 hover:border-slate-600 rounded-xl p-4 transition-all hover:shadow-lg"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                              <div className="flex-1">
                                <h5 className="font-semibold text-white text-lg mb-1">{item.name}</h5>
                                <p className="text-slate-400 text-sm mb-2">{item.description}</p>
                                <div className="flex flex-wrap gap-2">
                                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg text-xs font-medium">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                      />
                                    </svg>
                                    {item.category}
                                  </span>
                                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg text-xs font-medium">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20 7l-8-4-8 4m16 0l-8 4m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                      />
                                    </svg>
                                    {item.quantity} {item.unit}
                                  </span>
                                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-lg text-xs font-medium">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                      />
                                    </svg>
                                    Validade: {new Date(item.expiration).toLocaleDateString("pt-BR")}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
