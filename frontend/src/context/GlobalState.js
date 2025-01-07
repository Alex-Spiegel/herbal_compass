"use client";

import { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext();
const GlobalStateProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false); // Admin-Status verwalten
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Beispiel für weiteren globalen Zustand

  return (
    <GlobalStateContext.Provider
      value={{ isAdmin, setIsAdmin, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom Hook für Zugriff
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};

export default GlobalStateProvider;
