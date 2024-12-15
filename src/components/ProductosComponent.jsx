import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const ProductosComponent = () => {
    return (
        <>
        <div className="bg-primary min-h-screen py-10 px-5">
            <div className="max-w-screen-lg mx-auto bg-[#D1E7D1] p-5 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {productos.map((producto, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                            <img
                                src="public/printer.png"
                                alt="Producto"
                                className="w-full h-40 object-cover mb-4 rounded-md"
                            />
                            <div className="space-y-2">
                                <div className="flex flex-wrap gap-2 text-sm font-bold">
                                    {producto.precio1 && (
                                        <span className="text-[#FF4A4A]">{producto.precio1}</span>
                                    )}
                                    {producto.precio2 && (
                                        <span className="text-[#18B67A]">{producto.precio2}</span>
                                    )}
                                    {producto.precio3 && (
                                        <span className="text-[#1D8C96]">{producto.precio3}</span>
                                    )}
                                    {producto.precio4 && (
                                        <span className="text-[#85C72E]">{producto.precio4}</span>
                                    )}
                                </div>
                                <h3 className="font-semibold text-lg">{producto.title}</h3>
                                <p className="text-gray-500 text-sm">
                                    Categoría: {producto.categoria}
                                </p>
                                <p className="text-gray-500 text-sm">{producto.ubicacion}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <button className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-[#1E2B1E] transition duration-200">
                        Mostrar Más
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProductosComponent;
