import React, { useState, useEffect } from "react";
import { Loader } from "../components";

export const useLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      setLoading((loading) => !loading);
    };
    loadData();
  }, []);
  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
};
