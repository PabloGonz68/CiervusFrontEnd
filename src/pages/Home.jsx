/** @format */

import React from "react";
import Button from "../components/ButtonMedia";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Productos from "../components/ProductosComponent";

const Home = () => {
    return (
        <div>
            <Header />
            <body>
                <div className="flex bg-primary items-center justify-center h-screen">
                    <div className="flex flex-col items-start justify-center pl-20 w-1/2 text-white">
                    <h1 className="text-home1 font-bold">Alquila todo lo que se te ocurra!</h1>
                    <h2 className="text-title font-semibold">¿A qué esperas?</h2>
                    </div>

                    <div className="flex flex-col border-red-500 items-center justify-center w-1/2">
                        <img src="public/ciervologo.png" alt="" />
                    </div>
                    
                   
                </div>


                <Productos />
            </body>
            <Footer/>
        </div>
    );
};

export default Home;
