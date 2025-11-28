import { Routes, Route } from "react-router-dom";
import Privacy from "./privacy.jsx";
import App from "./App.jsx";
import Category from "../pages/Category.jsx";
import Layout from "./Layout.jsx";
import Payment from "./payment.jsx";
import About from "./about.jsx";
import Hits from "./hits.jsx";
import Roses from "./products/roses.jsx";
import Lilies from "./products/lilies.jsx";
import Orchids from "./products/orchids.jsx";
import Tulips from "./products/tulips.jsx";









function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="payment" element={<Payment />} />
        <Route path="about" element={<About />} />
        <Route path="category/:name" element={<Category />} />
        <Route path="roses/:id" element={<Roses />} />
        <Route path="lilies/:id" element={<Lilies />} />
        <Route path="orchids/:id" element={<Orchids />} />
        <Route path="tulips/:id" element={<Tulips />} />
        <Route path="hits" element={<Hits />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes