import React from "react";
import { Home, SingleItem } from "./pages";
import { Layout } from "./components";
import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components";

const App = () => {
  return (
    <Layout>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos/:id" element={<SingleItem />} />
        </Routes>
      </ScrollToTop>
    </Layout>
  );
};

export default App;
