import { useCallback, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { api } from "../api/api";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    return token ? { token } : null;
  });

  const [loading, setLoading] = useState(false);

  const register = useCallback(async (nome, email, password) => {
    setLoading(true);
    try {
      const data = await api.post("/register", { nome, email, password });

      localStorage.setItem("token", data.accessToken);

      setUser(data.user);

      return data;
    } finally {
      setLoading(false);
    }
  }, []);

  const login = useCallback(async (email, password) => {
    setLoading(true);
    try {
      const data = await api.post("/login", { email, password });

      localStorage.setItem("token", data.accessToken);

      setUser(data.user);

      return data;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("token");
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logout,
        register,
        login,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  }
  return context;
}
