/** @format */

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Error404 from "./pages/Error404";


function App() {
    const [count, setCount] = useState(0);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/Productos" element={<Productos />} />
                    <Route exact path="*" element={<Error404 />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
