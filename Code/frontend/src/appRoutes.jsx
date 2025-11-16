//aqui vai conter as rotas de cada pagina do nosso sistema e dps nos so importamos elas no main.jsx
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Register from "./pages/register";
import Login from "./pages/login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import DashboardPage from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import ResetPasswordPage from "./components/ResetPassword";
import Settings from "./components/Settings";
import NotFound from "./components/NotFound";

export default function AppRoutes({userName, setUserName}) {
  const location = useLocation();
  const hideHeaderOn = ["/login", "/cadastro", "/telaInicial"];
  const hideFooterOn = ["/login", "/cadastro", "/telaInicial"];
  const isNotFoundPage = location.pathname !== "/" &&
        !["/login", "/cadastro", "/telaInicial", "/sobre", "/contato", "/settings", "/reset-password"]
          .includes(location.pathname);
  return (
    <>
      {!hideHeaderOn.includes(location.pathname) && !isNotFoundPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/telaInicial" element={
          <PrivateRoute>
            <DashboardPage/>
          </PrivateRoute>

        } />
        <Route path="*" element={<NotFound />} /> {/* 👈 */}
      </Routes>
      {!hideFooterOn.includes(location.pathname) && !isNotFoundPage && <Footer />}
    </>
  );
}
/*
        <Route path="/telaInicial" element={<DashboardPage />} />
*/
//aqui vai conter as rotas de cada pagina do nosso sistema e dps nos so importamos elas no main.jsx
