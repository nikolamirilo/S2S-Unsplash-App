import { useState, createContext, useContext } from "react";

const LanguageContext = createContext();

export const useLanguageContext = () => {
  return useContext(LanguageContext);
};

export const LanguageContextProvider = ({ children }) => {
  return <LanguageContext.Provider value={{}}>{children}</LanguageContext.Provider>;
};
