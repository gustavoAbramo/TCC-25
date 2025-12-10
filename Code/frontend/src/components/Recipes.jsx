import { useState, useEffect } from "react";
import api from "../services/api.service.js";

export default function Recipes() {
  const [showForm, setShowForm] = useState(false);
  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [preparing, setPreparing] = useState(null);
  const [expandedRecipes, setExpandedRecipes] = useState(new Set());
  const [deleting, setDeleting] = useState(null);


  const searchItems = async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    try {
      setSearching(true);
      setError("");
      // GET com query params é mais semântico para operações de busca
      const res = await api.get("/storages/searchItems", {
        params: { query },
        withCredentials: true,
      });

      if (res.data.success && res.data.items) {
        setSearchResults(res.data.items);
      } else {
        setSearchResults([]);
      }
    } catch (err) {
      console.error("Erro ao buscar itens:", err);
      setError(err.response?.data?.message || "Erro ao buscar itens.");
      setSearchResults([]);
    } finally {
      setSearching(false);
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    // Debounce: busca após 500ms sem digitação
    clearTimeout(window.searchTimeout);
    window.searchTimeout = setTimeout(() => {
      searchItems(query);
    }, 500);
  };

  const addIngredient = (item) => {
    // Verifica se o item já foi adicionado
    if (ingredients.some((ing) => ing.itemId === item.id)) {
      setError("Este item já foi adicionado à receita.");
      return;
    }

    // Adiciona com quantidade padrão de 1
    setIngredients([...ingredients, { itemId: item.id, quantity: 1, item }]);
    setSearchQuery("");
    setSearchResults([]);
  };

  const removeIngredient = (itemId) => {
    setIngredients(ingredients.filter((ing) => ing.itemId !== itemId));
  };

  const updateIngredientQuantity = (itemId, quantity) => {
    setIngredients(
      ingredients.map((ing) =>
        ing.itemId === itemId
          ? { ...ing, quantity: Number(quantity) || 1 }
          : ing
      )
    );
  };

  const handleCreateRecipe = async (e) => {
    e.preventDefault();

    if (!recipeName.trim()) {
      setError("O nome da receita é obrigatório.");
      return;
    }

    if (ingredients.length === 0) {
      setError("Adicione pelo menos um ingrediente à receita.");
      return;
    }

    try {
      setCreating(true);
      setError("");
      setSuccess("");

      const payload = {
        name: recipeName,
        description: description || "",
        ingredients: ingredients.map((ing) => ({
          itemId: ing.itemId,
          quantity: ing.quantity,
        })),
      };

      const res = await api.post("/recipes/createRecipe", payload, {
        withCredentials: true,
      });

      if (res.data.success) {
        setSuccess("Receita criada com sucesso!");
        // Reset form
        setRecipeName("");
        setDescription("");
        setIngredients([]);
        setSearchQuery("");
        setSearchResults([]);

        // Recarrega a lista de receitas
        await fetchRecipes();

        // Fechar modal após 2 segundos
        setTimeout(() => {
          setShowForm(false);
          setSuccess("");
        }, 2000);
      }
    } catch (err) {
      console.error("Erro ao criar receita:", err);
      setError(err.response?.data?.message || "Erro ao criar receita.");
    } finally {
      setCreating(false);
    }
  };

  const resetForm = () => {
    setRecipeName("");
    setDescription("");
    setIngredients([]);
    setSearchQuery("");
    setSearchResults([]);
    setError("");
    setSuccess("");
  };

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const res = await api.get("/recipes/myRecipes", {
        withCredentials: true,
      });

      if (res.data.success && res.data.recipe) {
        setRecipes(res.data.recipe);
      } else {
        setRecipes([]);
      }
    } catch (err) {
      console.error("Erro ao buscar receitas:", err);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteRecipe = async (recipeId) => {
    try {
      setDeleting(recipeId);
      setError("");
      setSuccess("");

      const res = await api.delete(`/recipes/deleteRecipe/${recipeId}`, {
        withCredentials: true,
      });

      if (res.data.success) {
        setSuccess("Receita deletada com sucesso!");
        await fetchRecipes();

        setTimeout(() => {
          setSuccess("");
        }, 3000);
      }
    } catch (err) {
      console.error("Erro ao deletar receita:", err);
      setError(err.response?.data?.message || "Erro ao deletar receita.");
      setTimeout(() => {
        setError("");
      }, 3000);
    } finally {
      setDeleting(null);
    }
  };

  const handlePrepareRecipe = async (recipeId) => {
    try {
      setPreparing(recipeId);
      setError("");
      setSuccess("");

      const res = await api.post(
        `/recipes/prepareRecipe/${recipeId}`,
        {},
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        setSuccess(
          "Receita preparada com sucesso! Os ingredientes foram consumidos dos estoques."
        );
        // Recarrega a lista de receitas
        await fetchRecipes();

        setTimeout(() => {
          setSuccess("");
        }, 3000);
      }
    } catch (err) {
      console.error("Erro ao preparar receita:", err);
      setError(err.response?.data?.message || "Erro ao preparar receita.");
      setTimeout(() => {
        setError("");
      }, 3000);
    } finally {
      setPreparing(null);
    }
  };

  const toggleRecipe = (recipeId) => {
    setExpandedRecipes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(recipeId)) {
        newSet.delete(recipeId);
      } else {
        newSet.add(recipeId);
      }
      return newSet;
    });
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  // Recarrega receitas após criar uma nova
  useEffect(() => {
    if (success && success.includes("criada")) {
      fetchRecipes();
    }
  }, [success]);

  return (
    <div className="w-full  bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Gerenciar Receitas
            </h1>
            <p className="text-slate-400 mt-1">
              Crie e gerencie suas receitas favoritas
            </p>
          </div>
          <button
            onClick={() => {
              setShowForm(true);
              resetForm();
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Nova Receita
          </button>
        </div>

        {/* Modal de Criação de Receita */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl shadow-2xl animate-in zoom-in-95 duration-200 my-8">
              <div className="flex items-center justify-between p-6 border-b border-slate-800">
                <h2 className="text-xl font-semibold text-white">
                  Criar Nova Receita
                </h2>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    resetForm();
                  }}
                  className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-slate-800 rounded-lg"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleCreateRecipe} className="p-6 space-y-6">
                {/* Mensagens de erro/sucesso */}
                {error && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                {success && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <p className="text-emerald-400 text-sm">{success}</p>
                  </div>
                )}

                {/* Nome da Receita */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Nome da Receita *
                  </label>
                  <input
                    type="text"
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                    placeholder="Ex: Bolo de Chocolate"
                    className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                {/* Descrição */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Descrição
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Descreva a receita..."
                    rows={3}
                    className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Busca de Ingredientes */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Adicionar Ingredientes
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      placeholder="Busque itens para adicionar..."
                      className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-10"
                    />
                    {searching && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <div className="w-5 h-5 border-2 border-slate-400 border-t-blue-500 rounded-full animate-spin"></div>
                      </div>
                    )}
                  </div>

                  {/* Resultados da Busca */}
                  {searchResults.length > 0 && (
                    <div className="mt-2 max-h-60 overflow-y-auto bg-slate-800 border border-slate-700 rounded-xl">
                      {searchResults.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => addIngredient(item)}
                          className="w-full text-left p-3 hover:bg-slate-700 transition-colors border-b border-slate-700 last:border-b-0"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-white font-medium">
                                {item.name}
                              </p>
                              <p className="text-slate-400 text-sm">
                                {item.storage?.name || "Sem estoque"}
                              </p>
                            </div>
                            <svg
                              className="w-5 h-5 text-blue-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                              />
                            </svg>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Lista de Ingredientes Adicionados */}
                {ingredients.length > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Ingredientes Adicionados ({ingredients.length})
                    </label>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {ingredients.map((ing) => {
                        const item =
                          ing.item ||
                          searchResults.find((i) => i.id === ing.itemId);
                        return (
                          <div
                            key={ing.itemId}
                            className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex items-center justify-between gap-4"
                          >
                            <div className="flex-1">
                              <p className="text-white font-medium">
                                {item?.name || "Item"}
                              </p>
                              <p className="text-slate-400 text-sm">
                                {item?.storage?.name || ""}
                              </p>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-2">
                                <label className="text-sm text-slate-300">
                                  Qtd:
                                </label>
                                <input
                                  type="number"
                                  min="1"
                                  value={ing.quantity}
                                  onChange={(e) =>
                                    updateIngredientQuantity(
                                      ing.itemId,
                                      e.target.value
                                    )
                                  }
                                  className="w-20 bg-slate-900 border border-slate-700 text-white px-3 py-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                              </div>
                              <button
                                type="button"
                                onClick={() => removeIngredient(ing.itemId)}
                                className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Botões */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      resetForm();
                    }}
                    className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 rounded-xl transition-all"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={creating || ingredients.length === 0}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:from-blue-600/50 disabled:to-blue-700/50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-500/25"
                  >
                    {creating ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Criando...
                      </span>
                    ) : (
                      "Criar Receita"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Mensagens globais de erro/sucesso */}
        {error && !showForm && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {success && !showForm && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <p className="text-emerald-400 text-sm">{success}</p>
          </div>
        )}

        {/* Lista de Receitas */}
        {!showForm && (
          <>
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-slate-700 border-t-blue-500 rounded-full animate-spin"></div>
                  <div
                    className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-blue-400 rounded-full animate-spin"
                    style={{ animationDuration: "1.5s" }}
                  ></div>
                </div>
                <p className="text-slate-400 mt-4 font-medium">
                  Carregando receitas...
                </p>
              </div>
            ) : recipes.length === 0 ? (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center">
                <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-slate-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Nenhuma receita criada ainda
                </h3>
                <p className="text-slate-400 mb-6">
                  Comece criando sua primeira receita para organizar seus pratos
                  favoritos
                </p>
                <button
                  onClick={() => {
                    setShowForm(true);
                    resetForm();
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Criar Primeira Receita
                </button>
              </div>
            ) : (
              <div className="grid gap-6">
                {recipes.map((recipe) => (
                  <div
                    key={recipe.id_Recipe}
                    className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-slate-700 transition-all duration-300"
                  >
                    {/* Header da Receita */}
                    <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-6 border-b border-slate-800">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <button
                              onClick={() => toggleRecipe(recipe.id_Recipe)}
                              className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-slate-700 rounded-lg"
                              title={
                                expandedRecipes.has(recipe.id_Recipe)
                                  ? "Recolher receita"
                                  : "Expandir receita"
                              }
                            >
                              <svg
                                className={`w-5 h-5 transition-transform ${
                                  expandedRecipes.has(recipe.id_Recipe)
                                    ? "rotate-180"
                                    : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>
                            <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                              <svg
                                className="w-6 h-6 text-blue-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-white">
                                {recipe.name}
                              </h3>
                              {recipe.description && (
                                <p className="text-slate-400 text-sm mt-1">
                                  {recipe.description}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
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
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <span className="text-slate-400 text-xs">
                              Criada em{" "}
                              {new Date(recipe.created_at).toLocaleDateString(
                                "pt-BR"
                              )}
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-3 sm:gap-8">
                          <button 
                            onClick={() =>
                              handlePrepareRecipe(recipe.id_Recipe)
                            }
                            disabled={preparing === recipe.id_Recipe}
                            className="inline-flex items-center gap-2 px-4 py-1 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 disabled:from-emerald-600/50 disabled:to-emerald-700/50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
                          >
                            {preparing === recipe.id_Recipe ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Preparando...
                              </>
                            ) : (
                              <>
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                  />
                                </svg>
                                Preparar Receita
                              </>
                            )}
                          </button>

                          <button
                            onClick={() =>
                              handleDeleteRecipe(recipe.id_Recipe)
                            }
                            disabled={deleting === recipe.id_Recipe}
                            className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 disabled:from-red-600/50 disabled:to-red-700/50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all shadow-lg shadow-red-500/25 hover:shadow-red-500/40"
                          >
                            {deleting === recipe.id_Recipe ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Deletando...
                              </>
                            ) : (
                              <>
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                  />
                                </svg>
                                deletar Receita
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                    </div>

                    

                    {/* Lista de Ingredientes - Mostra apenas se expandida */}
                    {expandedRecipes.has(recipe.id_Recipe) && (
                      <div className="p-6 border-t border-slate-800">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <svg
                            className="w-5 h-5 text-purple-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                          </svg>
                          Ingredientes
                          <span className="ml-auto text-sm font-normal text-slate-400">
                            {recipe.ingredients?.length || 0}{" "}
                            {recipe.ingredients?.length === 1
                              ? "ingrediente"
                              : "ingredientes"}
                          </span>
                        </h4>

                        {!recipe.ingredients ||
                        recipe.ingredients.length === 0 ? (
                          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center">
                            <p className="text-slate-400">
                              Nenhum ingrediente cadastrado nesta receita
                            </p>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            {recipe.ingredients.map((ingredient) => (
                              <div
                                key={ingredient.id}
                                className="bg-slate-800/50 border border-slate-700 hover:border-slate-600 rounded-xl p-4 transition-all hover:shadow-lg"
                              >
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                  <div className="flex-1">
                                    <h5 className="font-semibold text-white text-lg mb-1">
                                      {ingredient.Item?.name ||
                                        "Item desconhecido"}
                                    </h5>
                                    <p className="text-slate-400 text-sm mb-2">
                                      {ingredient.Item?.description || ""}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg text-xs font-medium">
                                        <svg
                                          className="w-3.5 h-3.5"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                          />
                                        </svg>
                                        Quantidade: {ingredient.quantity}{" "}
                                        {ingredient.Item?.unit || ""}
                                      </span>
                                      {ingredient.Item?.category && (
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg text-xs font-medium">
                                          <svg
                                            className="w-3.5 h-3.5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={2}
                                              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                            />
                                          </svg>
                                          {ingredient.Item.category}
                                        </span>
                                      )}
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
          </>
        )}
      </div>
    </div>
  );
}
