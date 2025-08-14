//aqui vai conter as rotas de cada pagina do nosso sistema e dps nos so importamos elas no main.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function AppRoutes() {
  const location = useLocation();
  const hideHeaderOn = ["/login"];
  const hideFooterOn = ["/login"]
  return (
    <>
      {!hideHeaderOn.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {!hideFooterOn.includes(location.pathname) && <Footer />}
    </>
  );
}

//aqui vai conter as rotas de cada pagina do nosso sistema e dps nos so importamos elas no main.jsx
