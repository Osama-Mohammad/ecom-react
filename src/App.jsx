import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      {/* for shortCut for the "/" we can use "index" */}
      <Route index element={<HomePage />} />
      <Route path="checkout" element={}/>
    </Routes>
  );
}

export default App;
