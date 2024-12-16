/** @format */

import React from "react";
import Button from "../components/ButtonMedia";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Productos from "../components/ProductosComponent";
import MyCarousel from "../components/Carousel";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex bg-primary items-start justify-center h-screen pt-20">
        <div className="flex flex-col gap-14 items-center justify-center pl-20 w-1/2 text-white">
        <div className="flex flex-col gap-5 ">
        <h1 className="flex flex-col text-home1 font-bold">
            <span>Alquila todo lo</span>
            <span>que se te ocurra!</span>
        </h1>
          <h2 className="text-home2 font-semibold">¿A qué esperas?</h2>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center w-full">
          <h2 className="text-subtitle font-bold">Busca y disfruta de productos ahora mismo</h2>
          <div className="flex w-[60%] items-center justify-between bg-black p-4 rounded-full h-20 ">
                <div className="flex items-center justify-between lg:w-full p-1">
                    <div>
                        <p className="text-white font-bold">Buscar...</p>
                    </div>
                    <div className="w-14 h-14 p-1 flex justify-center items-center bg-gray-300 border-4 border-secondary border-900 rounded-full transform -scale-x-100">
                    <img src="public/buscar.png" alt="" />
                    </div>
                </div>
            
                
                
            </div>

            <div className="flex w-[40%] items-center justify-between bg-secondary px-2 rounded-full h-14 ">

            <div className="flex items-center justify-between w-full p-10 ">
                    <p className="text-[#6B6B6B] font-bold pl-2">Desde...</p>
                    <img className="w-16" src="flechabi.png" alt="" />
                    <p className="text-[#6B6B6B] font-bold pr-2">Hasta...</p>
                </div>
            </div>
            </div>
            
            </div>

        <div className="flex flex-col items-center justify-center w-1/2">
          <img src="/home.png" alt="productos" />
        </div>
      </div>

      <MyCarousel />
      <Productos />
      <Footer />
    </div>
  );
};

export default Home;
