import React, { Suspense } from "react";
import { Home, SingleItem, AddItem } from "./pages";
import { Layout, Loader, ScrollToTop } from "./components";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photos/:id" element={<SingleItem />} />
            <Route path="/add-photo" element={<AddItem />} />
          </Routes>
        </ScrollToTop>
      </Layout>
    </Suspense>
  );
};

export default App;
