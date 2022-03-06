import { createContext, useContext, useState } from "react";

export const AppContext = createContext({
    selectedMenu: null,
    setSelectedMenu: null,
  });

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState('HOME');

  const value = {
    selectedMenu,
    setSelectedMenu,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
