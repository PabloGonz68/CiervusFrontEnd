/** @format */
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
const Perfil = () => {
    return (
        <>
            <Header />
            <div className="bg-primary flex flex-col gap-10er h-[120vh] p-20">
                <div className="flex flex-col justify-center gap-10 items-center">
                    <div className="w-[80%]">
                        <h1 className="text-title text-white font-bold">
                            Tu perfil en CIERVUS
                        </h1>
                        <span className="text-gray-400">
                            Aquí podrás ver y editar los datos de tu perfil
                        </span>
                    </div>

                    <div className="bg-secondary w-[80%] h-[85%] flex justify-between items-center rounded-2xl shadow-xl">
                        <div className="flex w-[100%]">
                            {/* Sección izquierda */}
                            <div className="flex justify-center items-center flex-col p-20 w-3/6 gap-10">
                                <div className="flex flex-col gap-8 w-[90%]">
                                    <input
                                        type="text"
                                        placeholder="Nombre Completo"
                                        className="border-2 border-gray-300 p-2 rounded-md w-full"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Nombre de usuario"
                                        className="border-2 border-gray-300 p-2 rounded-md w-full"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Numero de telefono"
                                        className="border-2 border-gray-300 p-2 rounded-md w-full"
                                    />
                                    <input
                                        type="number"
                                        placeholder="CIF"
                                        className="border-2 border-gray-300 p-2 rounded-md w-full"
                                    />
                                    <img src="/ubicacion.png" alt="" />
                                </div>
                            </div>
                            {/* Línea divisoria */}{" "}
                            <div className="w-[8px] bg-primary shadow-inner mx-10"></div>
                            {/* Sección derecha */}
                            <div className="flex flex-col p-20 w-3/6 gap-10 justify-center items-center">
                                <div className="flex justify-center items-center bg-white rounded-full border-2 border-primary w-72 h-72">
                                    <img src="/user.png" alt="" />
                                </div>
                                <div className="flex gap-5">
                                    <select className="p-2 w-32" name="" id="">
                                        <option value="">Sexo</option>
                                        <option value="">Mujer</option>
                                        <option value="">Hombre</option>
                                        <option value="">Otro</option>
                                    </select>
                                    <select className="p-2 w-32" name="" id="">
                                        <option value="">Edad</option>
                                        <option value="">18</option>
                                        <option value="">19</option>
                                        <option value="">20</option>
                                        <option value="">21</option>
                                        <option value="">22</option>
                                        <option value="">23</option>
                                        <option value="">24</option>
                                        <option value="">25</option>
                                        <option value="">26</option>
                                        <option value="">27</option>
                                        <option value="">28</option>
                                        <option value="">29</option>
                                        <option value="">30</option>
                                        <option value="">31</option>
                                        <option value="">32</option>
                                        <option value="">33</option>
                                        <option value="">34</option>
                                        <option value="">35</option>
                                        <option value="">36</option>
                                        <option value="">37</option>
                                    </select>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Direccion e-mailo"
                                    className="border-2 border-gray-300 p-2 rounded-md w-full"
                                />

                                <div className="flex flex-col gap-5 items-center justify-center">
                                    <button className="bg-primary w-[100%] text-white font-bold py-2 px-20 justify-center items-center text-center rounded-lg text-content">
                                        CAMBIAR CONTRASEÑA
                                    </button>
                                    <button className="bg-primary w-[60%] text-white font-bold py-2 px-20 justify-center items-center text-center rounded-lg text-content">
                                        GUARDAR
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
export default Perfil;
