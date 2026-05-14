import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrdersPage } from "./pages/OrdersPage";

function App() {
  return (
    <Routes>
      {/* for shortCut for the "/" we can use "index" */}
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orderspage" element={<OrdersPage />} />
    </Routes>
  );
}

export default App;
