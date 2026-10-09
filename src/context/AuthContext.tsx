"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "@/lib/types/auth";
import { authApi } from "@/lib/authApi";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  saveAuthSession: (user: User) => void;
  logout: () => Promise<void>;
  updateUser: (user: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Restore only server-managed session data. No token or user data is persisted in browser storage.
  useEffect(() => {
    fetch("/api/auth/session", { cache: "no-store" })
      .then((response) => response.json())
      .then((session: { authenticated?: boolean; user?: User | null }) => {
        setIsAuthenticated(Boolean(session.authenticated));
        setUser(session.user || null);
      })
      .catch(() => {
        setIsAuthenticated(false);
        setUser(null);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const saveAuthSession = (newUser: User) => {
    setUser(newUser);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    try {
      await authApi.logout();
    } catch (err) {
      console.warn("Backend logout notification warning:", err);
    }
    setUser(null);
    setIsAuthenticated(false);
  };

  const updateUser = (updated: Partial<User>) => {
    if (!user) return;
    const nextUser = { ...user, ...updated };
    setUser(nextUser);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        saveAuthSession,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
