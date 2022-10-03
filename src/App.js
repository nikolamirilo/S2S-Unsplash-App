import React from "react";
import { Home, SingleItem } from "./pages";
import { Layout } from "./components";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos/:id" element={<SingleItem />} />
      </Routes>
    </Layout>
  );
};

export default App;
