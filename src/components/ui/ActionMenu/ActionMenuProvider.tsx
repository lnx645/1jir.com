"use client";
import React from "react";
import { ReactNode, useContext, useState } from "react";

const actionMenuProvider = React.createContext<{
  activeMenuID: string | null;
  setActiveMenuID: (opt: any) => void;
}>({
  activeMenuID: null,
  setActiveMenuID() {},
});

export const useActionMenu = () => {
  return useContext(actionMenuProvider);
};

export const ActionMenuProvider = ({ children }: { children: ReactNode }) => {
  const [activeMenuID, setActiveMenuID] = useState<string | null>(null);
  return (
    <actionMenuProvider.Provider value={{ activeMenuID, setActiveMenuID }}>
      {children}
    </actionMenuProvider.Provider>
  );
};