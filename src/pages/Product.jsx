/** @format */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Product = () => {
    const { id } = useParams(); // Obtén el parámetro "id" de la URL
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const response = await fetch(
                    `https://fakestoreapi.com/products/${id}`
                );
                const data = await response.json();
                setProducto(data);
            } catch (error) {
                console.error("Error al cargar el producto:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducto();
    }, [id]);

    if (loading) {
        return <div className="text-center py-10">Cargando producto...</div>;
    }

    return (
        <>
            <Header />
            <div className="bg-primary flex justify-center items-center h-[120vh]">
                <div className="max-w-3xl mx-auto bg-primary-50 rounded-2xl bg-secondary shadow-lg p-6 border border-primary">
                    <div className="bg-primary text-white rounded-t-lg p-4 flex justify-between items-center">
                        <h1 className="text-2xl font-bold">{producto.title}</h1>
                    </div>

                    <div className="flex items-center gap-3 my-4">
                        <div className="bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center font-bold text-gray-800">
                            I
                        </div>
                        <div>
                            <h2 className="text-gray-800 font-bold">
                                Ignacio D.
                            </h2>
                            <p className="text-yellow-500 flex">
                                ★★★★☆{" "}
                                <span className="ml-2 text-primary underline">
                                    Ver valoraciones
                                </span>
                            </p>
                        </div>
                        <button className="ml-auto bg-primary text-white px-4 py-1 rounded-full hover:bg-primary">
                            CHAT
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src={producto.image}
                            alt={producto.title}
                            className="w-64 h-64 object-cover mx-auto my-4"
                        />
                    </div>

                    <div className="my-4 text-center">
                        <span className="bg-[#762B2B] text-white px-3 py-1 rounded-full mr-2">
                            {producto.price} € por hora
                        </span>
                        <span className="bg-[#76592B] text-white px-3 py-1 rounded-full mr-2">
                            {producto.price} € por día
                        </span>
                        <span className="bg-[#72762B] text-white px-3 py-1 rounded-full mr-2">
                            {producto.price} € por semana
                        </span>
                        <span className="bg-[#36762B] text-white px-3 py-1 rounded-full">
                            {producto.price} € por mes
                        </span>
                    </div>

                    <div className="text-gray-700 mb-4">
                        <h3 className="font-bold text-lg">Descripción</h3>
                        <p className="text-gray-700">{producto.description}</p>
                    </div>

                    <p className="font-bold text-gray-800 mb-4">
                        📍 11370 - Los Barrios
                    </p>

                    <div className="bg-primary rounded-lg p-4 text-center">
                        <h3 className="font-bold text-white text-lg mb-3">
                            ¿Cuándo lo necesitas?
                        </h3>
                        <div className="flex justify-center gap-3 items-center mb-4">
                            <input
                                type="date"
                                className="p-2 border rounded w-1/3 text-gray-700"
                                placeholder="Desde"
                            />
                            <span>⇆</span>
                            <input
                                type="date"
                                className="p-2 border rounded w-1/3 text-gray-700"
                                placeholder="Hasta"
                            />
                        </div>
                        <button className="bg-secondary text-primary px-6 py-2 rounded-full hover:bg-primary">
                            SOLICITAR
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Product;
