import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/Navbar";
import HomePage from "./views/HomePage";
import Header from "./components/Header";
import CheckoutPage from "./views/CheckoutPage";
import "./data/i18n";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
