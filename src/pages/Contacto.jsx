/** @format */

import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

const Contacto = () => {
    return (
        <>
            <Header />
            <div className="bg-primary flex justify-center items-center h-[110vh] p-20">
                <div className="bg-secondary w-[80%] flex justify-between items-center rounded-2xl shadow-xl">
                    {/* Sección izquierda */}
                    <div className="flex w-[100%]">
                        <div className="flex flex-col p-20 w-3/6 gap-10">
                            <h1 className="text-title2 font-bold ">
                                ¡Contáctanos!
                            </h1>
                            <p className="text-p404">
                                ¿Tienes alguna nueva idea o funcionalidad que
                                crees que sería importante de cubrir en nuestra
                                aplicación? No lo dudes, contacta con nosotros y
                                te atenderemos lo antes posible.
                            </p>
                            <div className="flex w-[100%] gap-24">
                                <div className="flex flex-col gap-5">
                                    <h2 className="font-bold text-title">
                                        Email
                                    </h2>
                                    <p className="text-p404">
                                        ciervus@gmail.com
                                    </p>
                                    <h2 className="font-bold text-title">
                                        Redes
                                    </h2>
                                    <div className="flex flex-col w-[100%] gap-5">
                                        <div className="bg-primary w-[100%] flex gap-2 p-2 rounded-2xl">
                                            <div className="rounded-full p-2 border-[1px] border-[rgba(0, 0, 0, 0.92)] flex justify-center items-center">
                                                <GrInstagram className="text-white" />
                                            </div>
                                            <div className="text-white flex justify-center underline items-center">
                                                <span>Instagram</span>
                                            </div>
                                        </div>
                                        <div className="bg-primary w-[100%] flex gap-2 p-2 rounded-2xl">
                                            <div className="rounded-full p-2 border-[1px] border-[rgba(0, 0, 0, 0.92)] flex justify-center items-center">
                                                <FaTwitter className="text-white" />
                                            </div>
                                            <div className="text-white flex justify-center underline items-center">
                                                <span>Twitter</span>
                                            </div>
                                        </div>
                                        <div className="bg-primary w-[100%] flex gap-2 p-2 rounded-2xl">
                                            <div className="rounded-full p-2 border-[1px] border-[rgba(0, 0, 0, 0.92)] flex justify-center items-center">
                                                <FaSquareFacebook className="text-white" />
                                            </div>
                                            <div className="text-white flex justify-center underline items-center">
                                                <span>Facebook</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-start items-end">
                                    <img src="/ciervoejecutivo.png" alt="" />
                                </div>
                            </div>
                        </div>
                        {/* Línea divisoria */}{" "}
                        <div className="w-[8px] bg-primary shadow-inner mx-10"></div>
                        {/* Sección derecha */}
                        <div className="flex flex-col p-20 w-3/6 gap-10">
                            <div className="flex">
                                <h1 className="text-title2 font-bold ">
                                    Rellena el formulario
                                </h1>
                            </div>
                            <div className="flex flex-col gap-8 w-[90%]">
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    className="border-2 border-gray-300 p-2 rounded-md w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="border-2 border-gray-300 p-2 rounded-md w-full"
                                />
                                <textarea
                                    type="text"
                                    placeholder="Mensaje"
                                    className="border-2 border-gray-300 px-5 pt-5 pb-40 rounded-md w-full"
                                />
                                <div className="flex justify-center">
                                    <button className="bg-primary w-[50%] text-white font-bold py-2 px-20 rounded-lg text-pLogin">
                                        ENVIAR
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};
export default Contacto;
