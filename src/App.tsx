import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { BasicLayout } from "./layout/BasicLayout";
import { Home } from "./pages/Home";
import { Pages } from "./pages/Pages";
import { PricePlans } from "./pages/PricePlans";
import { Products } from "./pages/Products";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="pages" element={<Pages />} />
          <Route path="price-plans" element={<PricePlans />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
