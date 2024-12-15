/** @format */

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Productos from "./pages/Productos";


function App() {
    const [count, setCount] = useState(0);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/Productos" element={<Productos />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
