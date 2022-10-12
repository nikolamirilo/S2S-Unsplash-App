import React, { useState, useEffect, useContext, createContext } from "react";
import data from "../data.json";

const ImagesContext = createContext();

export const useImagesContext = () => {
  return useContext(ImagesContext);
};

export const ImagesContextProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(data.images);
  }, []);

  return <ImagesContext.Provider value={{ images }}>{children}</ImagesContext.Provider>;
};
