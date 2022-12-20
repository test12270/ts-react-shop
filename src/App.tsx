import "./App.css";
import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import { store, useAppDispatch } from "./store";
import { fetchAPI } from "./store/store";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import Cart from "./pages/Cart";
import Fashion from "./pages/Fashion";
import Accessory from "./pages/Accessory";
import Digital from "./pages/Digital";

interface Theme {
  theme: string;
  setTheme: (theme: string) => void;
}

export const themeChange = createContext<Theme>({
  theme: "light",
  setTheme: (theme) => {},
});

function App() {
  const [theme, setTheme] = useState("light");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAPI());
  }, []);

  return (
    <themeChange.Provider value={{ theme, setTheme }}>
      <div data-theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<DetailPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/accessory" element={<Accessory />} />
          <Route path="/digital" element={<Digital />} />
        </Routes>
        <Footer />
      </div>
    </themeChange.Provider>
  );
}

export default App;
