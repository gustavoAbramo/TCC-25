//aqui vai conter as rotas de cada pagina do nosso sistema e dps nos so importamos elas no main.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>

    );
    }

//aqui vai conter as rotas de cada pagina do nosso sistema e dps nos so importamos elas no main.jsx
