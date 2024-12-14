/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Group, TextInput, PasswordInput } from "@mantine/core";
import ButtonMedia from "../components/ButtonMedia";

const Header = () => {
    const [opened, SetOpened] = React.useState(false);
    return (
        <header className="bg-[#3C5336] p-5 w-full flex items-center justify-between flex-between">
            <aside className="text-white border-2  w-1/4 flex items-center justify-center gap-5">
                <img src="public/ciervologo.png" alt="logo ciervus" />
                <p class="font-bold text-title">CIERVUS</p>
            </aside>
            <nav className="text-white border-2 w-2/4 flex items-center justify-center gap-7">
                <Link class="font-bold text-content" to="/">
                    Home
                </Link>
            </nav>
            <aside className="text-white border-2 w-1/4 flex items-center justify-center gap-7">
                <button
                    class="font-bold text-content"
                    onClick={() => SetOpened(true)}
                >
                    Login
                </button>
                <Link class="font-bold text-content" to="/register">
                    Register
                </Link>
            </aside>
            <Modal
                opened={opened}
                onClose={() => SetOpened(false)}
                centered
                overlayProps={{
                    opacity: 0.55,
                    blur: 3,
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
                    <div className="flex items-center justify-center gap-7 mb-10">
                        <ButtonMedia
                            img="public/fo/google.png"
                            url="https://www.google.com"
                        ></ButtonMedia>
                        <ButtonMedia
                            img="public/fo/meta.png"
                            url="https://www.meta.com"
                        ></ButtonMedia>
                        <ButtonMedia
                            img="public/fo/apple.png"
                            url="https://www.apple.com"
                        ></ButtonMedia>
                    </div>

                    <div className="flex items-center justify-center mb-14">
                        <button
                            className="bg-[#3C5336] text-white font-bold py-2 px-20 rounded-lg text-pLogin"
                            type="submit"
                            onClick={() => SetOpened(false)}
                        >
                            Iniciar sesión
                        </button>
                    </div>

                    <div className="flex items-center justify-center mt-5 shadow-sm p-5 rounded-lg">
                        <p className="text-pLogin text-[#545454]">
                            ¿No tienes una cuenta?{" "}
                            <Link
                                to="/register"
                                className="text-[#3C5336] font-bold"
                            >
                                Registrate
                            </Link>
                        </p>
                    </div>
                </form>
            </Modal>
        </header>
    );
};

export default Header;
