/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Group, TextInput, PasswordInput } from "@mantine/core";
import ButtonMedia from "./ButtonMedia";

const Footer = () => {
    const [opened, SetOpened] = React.useState(false);
    return (
        <footer className="bg-primary p-5 w-full shadow-[inset_0_4px_6px_rgba(0,0,0,0.3)] flex items-center justify-between flex-between">
            <aside className="text-white flex justify-center items-center  gap-4 w-full lg:w-1/4 lg:flex-row flex-col h-full">
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
            <nav className="text-white flex justify-center gap-7 w-2/4 flex-col text-center mt-3 lg:mt-0  h-full">
                <Link
                    className="font-bold text-content2 lg:text-content"
                    to="/"
                >
                    SOBRE NOSOTROS
                </Link>
                <Link
                    className="font-bold text-content2 lg:text-content"
                    to="/"
                >
                    PRODUCTOS
                </Link>
                <Link
                    className="font-bold text-content2 lg:text-content"
                    to="/"
                >
                    TERMINOS
                </Link>
                <Link
                    className="font-bold text-content2 lg:text-content"
                    to="/"
                >
                    CONTACTO
                </Link>
            </nav>
            <aside className="text-white flex items-center gap-5 w-full lg:w-1/4 lg:flex-row flex-col mt-3 lg:mt-0 h-full">
                <div className="flex items-center gap-5 flex-col">
                    <a href="https://www.facebook.com" target="_blank">
                        <img src="/flogo.png" alt="" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank">
                        <img src="/ilogo.png" alt="" />
                    </a>
                    <a href="https://www.youtube.com" target="_blank">
                        <img src="/ylogo.png" alt="" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank">
                        <img src="/tlogo.png" alt="" />
                    </a>
                </div>
            </aside>
        </footer>
    );
};

export default Footer;
