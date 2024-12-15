import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductosComponent from "../components/ProductosComponent";

const productos = [
    { precio1: "4,80€", precio2: "18,00€", precio3: "96,00€", precio4: "360,00€", title: "Impresora 3D Bresser T-Rex 2", categoria: "Tecnología", ubicacion: "11370 - Los Barrios" },
    { precio1: "4,80€", precio2: "18,00€", precio3: "96,00€", title: "Impresora 3D Bresser T-Rex 2", categoria: "Tecnología", ubicacion: "11370 - Los Barrios" },
    { precio1: "4,80€", precio2: "18,00€", title: "Impresora 3D Bresser T-Rex 2", categoria: "Tecnología", ubicacion: "11370 - Los Barrios" },
    { precio1: "18,00€", precio2: "96,00€", precio3: "360,00€", title: "Impresora 3D Bresser T-Rex 2", categoria: "Tecnología", ubicacion: "11370 - Los Barrios" },
    { precio1: "96,00€", precio2: "360,00€", title: "Impresora 3D Bresser T-Rex 2", categoria: "Tecnología", ubicacion: "11370 - Los Barrios" },
    { precio1: "360,00€", title: "Impresora 3D Bresser T-Rex 2", categoria: "Tecnología", ubicacion: "11370 - Los Barrios" },
    { precio1: "4,80€", precio2: "360,00€", title: "Impresora 3D Bresser T-Rex 2", categoria: "Tecnología", ubicacion: "11370 - Los Barrios" },
    { precio1: "4,80€", precio2: "18,00€", precio3: "360,00€", title: "Impresora 3D Bresser T-Rex 2", categoria: "Tecnología", ubicacion: "11370 - Los Barrios" },
];

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
