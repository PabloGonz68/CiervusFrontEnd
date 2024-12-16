/** @format */

import React from "react";
import { Modal, TextInput, PasswordInput } from "@mantine/core";
import RegisterForm from "./RegisterForm"; // Importamos el componente de registro
import { Link } from "react-router-dom";
import ButtonMedia from "./ButtonMedia";
import { useState } from "react";
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import { useNavigate } from "react-router-dom";
// Asegúrate de tener react-router-dom instalado

const Header = () => {
    const navigate = useNavigate();
    const [opened, setOpened] = React.useState(false); // Modal de inicio de sesión
    const [registerOpened, setRegisterOpened] = React.useState(false); // Modal de registro

    // Función para abrir el pop-up de registro
    const openRegisterModal = () => {
        setOpened(false); // Cerramos el modal de inicio de sesión
        setRegisterOpened(true); // Abrimos el modal de registro
    };

    // Función para abrir el modal de inicio de sesión
    const openLoginModal = () => {
        setRegisterOpened(false); // Cerramos el modal de registro
        setOpened(true); // Abrimos el modal de inicio de sesión
    };

    // Función para cerrar el pop-up de registro al hacer clic en el fondo oscuro
    const closeRegisterPopup = (e) => {
        if (e.target.id === "popup-background") {
            setRegisterOpened(false); // Cierra el modal de registro al hacer clic fuera
        }
    };

    return (
        <header className="bg-primary p-5 w-full flex items-center justify-between flex-between">
            <aside className="text-white flex justify-center items-center gap-4 w-full lg:w-1/4 lg:flex-row flex-col">
                <Link to="/" className="flex items-center gap-5">
                    <img
                        className="w-11 object-contain"
                        src="/ciervologo.png"
                        alt="logo ciervus"
                    />
                    <p className="font-bold text-content lg:text-title">
                        CIERVUS
                    </p>
                </Link>
            </aside>
            <nav className="text-white flex justify-center gap-7 w-2/4 flex-col lg:flex-row text-center mt-3 lg:mt-0">
                <Link
                    className="font-bold text-content2 lg:text-content"
                    to="/sobrenosotros"
                >
                    SOBRE NOSOTROS
                </Link>
                <Link
                    className="font-bold text-content2 lg:text-content"
                    to="/productos"
                >
                    PRODUCTOS
                </Link>
                <Link
                    className="font-bold text-content2 lg:text-content"
                    to="/terminos"
                >
                    TERMINOS
                </Link>
                <Link
                    className="font-bold text-content2 lg:text-content"
                    to="/contacto"
                >
                    CONTACTO
                </Link>
            </nav>
            <aside className="text-white flex items-center gap-5 w-full lg:w-1/4 lg:flex-row flex-col mt-3 lg:mt-0">
                <Link
                    className="flex items-center font-bold text-content2 lg:text-content bg-secondary py-2 px-5 rounded"
                    to="/"
                >
                    <div className="w-7 h-7 p-1 flex justify-center items-center bg-gray-300 border-4 border-primary border-900 rounded-full transform -scale-x-100">
                        <img src="/+.png" alt="" />
                    </div>
                    <p className="text-primary ml-2">ALQUILAR</p>
                </Link>
                <button
                    className="font-bold text-content2 lg:text-content bg-black py-2 px-5 rounded"
                    onClick={() => setOpened(true)}
                >
                    INICIAR SESIÓN
                </button>
            </aside>

            {/* Modal de iniciar sesión */}
            <Modal
                opened={opened}
                onClose={() => setOpened(false)} // Cierra el modal de inicio de sesión
                centered
                overlayProps={{
                    opacity: 0.55,
                    blur: 6,
                }}
            >
                <form className="h-[500px] pr-10 pl-10">
                    <h2 className="text-h1Login font-bold">
                        Inicia sesión en Cervalia
                    </h2>
                    <p className="text-pLogin mb-5 text-[#545454]">
                        Elige una de las opciones para continuar
                    </p>
                    <TextInput
                        placeholder="Dirección e-mail"
                        required
                        type="email"
                    />
                    <PasswordInput placeholder="Contraseña" required mt="sm" />
                    <div className="my-5 flex items-center">
                        <p className="mx-3 text-pLogin text-[#545454]">
                            O continúa con
                        </p>
                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>

                    <div className="flex items-center justify-center mb-10">
                        <button
                            className="bg-[#3C5336] text-white font-bold py-2 px-20 rounded-lg text-pLogin"
                            type="submit"
                            onClick={() => {
                                setOpened(false);
                                navigate("/perfil");
                            }} // Cierra el modal de inicio de sesión
                        >
                            Iniciar sesión
                        </button>
                    </div>
                    <div className="flex items-center justify-center gap-7 mb-10">
                        <ButtonMedia
                            img="/fo/google.png"
                            url="https://www.google.com"
                        ></ButtonMedia>
                        <ButtonMedia
                            img="/fo/meta.png"
                            url="https://www.meta.com"
                        ></ButtonMedia>
                        <ButtonMedia
                            img="/fo/apple.png"
                            url="https://www.apple.com"
                        ></ButtonMedia>
                    </div>

                    <div className="flex items-center justify-center mt-5 shadow-sm p-5 rounded-lg">
                        <p className="text-pLogin text-[#545454]">
                            ¿No tienes una cuenta?{" "}
                            <span
                                onClick={openRegisterModal} // Abre el modal de registro
                                className="text-primary font-bold cursor-pointer"
                            >
                                Registrate
                            </span>
                        </p>
                    </div>
                </form>
            </Modal>

            {/* Pop-up de registro */}
            {registerOpened && (
                <div
                    id="popup-background"
                    className="fixed top-0 left-0 w-full h-full  bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
                    onClick={closeRegisterPopup} // Cierra el modal de registro si se hace clic fuera
                >
                    <div className="w-full h-full max-w-[70%] max-h-[90%]  flex justify-center items-center overflow-auto bg-white rounded-3xl p-10 relative">
                        <button
                            onClick={() => setRegisterOpened(false)} // Cierra el modal de registro al hacer clic en "X"
                            className="absolute top-5 right-5 text-2xl font-bold text-black"
                        >
                            X
                        </button>
                        <div className="flex flex-raw w-full h-full">
                            <div className="w-1/3 bg-secondary flex items-end justify-center rounded-l-3xl border-r-4 border-[#545454] h-full p-0">
                                <img
                                    className="w-200 object-contain"
                                    src="/register.png"
                                    alt="logo ciervus"
                                />
                            </div>

                            <form className="w-2/3 h-full max-w-[80%] pr-10 pl-10 bg-white p-10 rounded-lg">
                                <h2 className="text-h1Login font-bold text-primary">
                                    Regístrate en CIERVUS
                                </h2>
                                <p className="text-pLogin mb-5 text-[#545454]">
                                    Añade tus datos para poder configurar tu
                                    perfil
                                </p>
                                <div className="flex flex-col gap-5">
                                    <TextInput
                                        placeholder="Nombre completo"
                                        required
                                        type="text"
                                    />
                                    <TextInput
                                        placeholder="Nombre de Usuario"
                                        required
                                        type="text"
                                    />
                                    <TextInput
                                        placeholder="Dirección e-mail"
                                        required
                                        type="email"
                                    />
                                    <TextInput
                                        placeholder="CIF"
                                        required
                                        type="number"
                                    />
                                    <TextInput
                                        placeholder="Número de teléfono"
                                        required
                                        type="tel"
                                    />
                                    <PasswordInput
                                        placeholder="Contraseña"
                                        required
                                        mt="sm"
                                    />
                                    <PasswordInput
                                        placeholder="Comfirmar contraseña"
                                        required
                                        mt="sm"
                                    />
                                </div>

                                <div className="flex flex-col justify-center items-start gap-10 mt-10 mb-8">
                                    <div className="flex flex-row items-center gap-2">
                                        <input
                                            type="checkbox"
                                            name="remember"
                                            id=""
                                        />
                                        <label
                                            htmlFor="remember"
                                            className="text-pLogin text-[#545454]"
                                        >
                                            Acepto los{" "}
                                            <span className="text-primary font-bold">
                                                Terminos y Condiciones
                                            </span>{" "}
                                            en CIERVUS
                                        </label>
                                    </div>

                                    <button
                                        className="bg-[#3C5336] text-white font-bold py-2 px-20 rounded-lg text-pLogin"
                                        type="submit"
                                    >
                                        CONTINUAR
                                    </button>
                                </div>
                                <div className="w-full h-[1px] bg-[#545454]"></div>
                                <div className="flex items-center justify-start mt-5 shadow-sm p-5 rounded-lg">
                                    <p className="text-pLogin text-[#545454]">
                                        ¿Ya tienes cuenta?{" "}
                                        <span
                                            onClick={openLoginModal} // Abre el modal de inicio de sesión
                                            className="text-primary font-bold cursor-pointer"
                                        >
                                            Iniciar sesión
                                        </span>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
