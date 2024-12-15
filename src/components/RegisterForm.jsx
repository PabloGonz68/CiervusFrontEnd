import React from "react";
import { TextInput, PasswordInput } from "@mantine/core";

const RegisterForm = () => {
  return (
    <form className="w-full h-full max-w-[500px] pr-10 pl-10 bg-white p-10 rounded-lg">
      <h2 className="text-h1Login font-bold">Regístrate en Cervalia</h2>
      <p className="text-pLogin mb-5 text-[#545454]">Crea una cuenta para comenzar a alquilar</p>
      <TextInput placeholder="Nombre completo" required />
      <TextInput placeholder="Dirección e-mail" required type="email" />
      <PasswordInput placeholder="Contraseña" required mt="sm" />
      <div className="flex items-center justify-center mb-10">
        <button
          className="bg-[#3C5336] text-white font-bold py-2 px-20 rounded-lg text-pLogin"
          type="submit"
        >
          Registrarse
        </button>
      </div>

    </form>
  );
};

export default RegisterForm;
