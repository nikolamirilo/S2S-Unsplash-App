import { useState, createContext, useContext } from "react";
import data from "../data.json";

const SinglePhotoContext = createContext();

export const useSinglePhotoContext = () => {
  return useContext(SinglePhotoContext);
};

export const SinglePhotoContextProvider = ({ children }) => {
  const [singlePhoto, setSinglePhoto] = useState({});
  const getSinglePhoto = (id) => {
    data.map((photo) => photo.id === id && setSinglePhoto(photo));
  };
  return (
    <SinglePhotoContext.Provider value={{ singlePhoto, setSinglePhoto, getSinglePhoto }}>
      {children}
    </SinglePhotoContext.Provider>
  );
};
