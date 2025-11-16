// src/components/PrivateRoute.jsx
import api from "../services/api.service";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await api.get("/auth/me", { withCredentials: true });
        if (res.data.user) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      } catch {
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);

  if (loading) {
    return <div>Carregando...</div>; // pode trocar por spinner
  }

  return authenticated ? children : <Navigate to="/login" replace />;
}
