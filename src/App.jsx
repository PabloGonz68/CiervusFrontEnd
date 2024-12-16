/** @format */

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Error404 from "./pages/Error404";
import Contacto from "./pages/Contacto";
import Perfil from "./pages/Perfil";
import Product from "./pages/Product";

function App() {
    const [count, setCount] = useState(0);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/productos" element={<Productos />} />
                    <Route exact path="*" element={<Error404 />} />
                    <Route exact path="/contacto" element={<Contacto />} />
                    <Route exact path="/perfil" element={<Perfil />} />
                    <Route exact path="/product/:id" element={<Product />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
