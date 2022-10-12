import { useState, createContext, useContext, useEffect, useRef } from "react";

const GlobalState = createContext();

export const useGlobalState = () => {
  return useContext(GlobalState);
};

export const GlobalStateProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const setDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);
    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [width]);

  const itemsSection = useRef();
  const contactSection = useRef();

  return (
    <GlobalState.Provider
      value={{
        width,
        itemsSection,
        contactSection,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};
