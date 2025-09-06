//aqui vai conter as rotas de cada pagina do nosso sistema e dps nos so importamos elas no main.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import DashboardPage from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

export default function AppRoutes() {
  const location = useLocation();
  const hideHeaderOn = ["/login", "/cadastro", "/telaInicial"];
  const hideFooterOn = ["/login", "/cadastro", "/telaInicial"];
  return (
    <>
      {!hideHeaderOn.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/login" element={<Login />} />
         <Route
          path="/telaInicial"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        
      </Routes>
      {!hideFooterOn.includes(location.pathname) && <Footer />}
    </>
  );
}
/*
        <Route path="/telaInicial" element={<DashboardPage />} />
*/
//aqui vai conter as rotas de cada pagina do nosso sistema e dps nos so importamos elas no main.jsx
