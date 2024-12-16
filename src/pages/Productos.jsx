import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductosComponent from "../components/ProductosComponent";

const Productos = () => {
    return (
        <>
        <Header />
        <ProductosComponent />
        <Footer />
        </>
    );
};

export default Productos;
