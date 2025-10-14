//aqui vai conter as rotas de cada pagina do nosso sistema e dps nos so importamos elas no main.jsx
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/register";
import Login from "./pages/login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import DashboardPage from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import ResetPasswordPage from "./components/ResetPassword";
import Settings from "./components/Settings";

export default function AppRoutes({userName, setUserName}) {
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
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/settings" element={<Settings userName={userName} setUserName={setUserName} />} />
        <Route path="/telaInicial" element={
          <PrivateRoute>
            <DashboardPage userName={userName} setUserName={setUserName} />
          </PrivateRoute>

        } />
</Routes>
      {!hideFooterOn.includes(location.pathname) && <Footer />}
    </>
  );
}
/*
        <Route path="/telaInicial" element={<DashboardPage />} />
*/
//aqui vai conter as rotas de cada pagina do nosso sistema e dps nos so importamos elas no main.jsx
