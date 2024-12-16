import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Error404 = () => {
    return (
        <>
            <Header />
                <div className='bg-primary flex justify-center items-center h-screen'>
               <div className='bg-secondary w-[50%] h-[60%] flex justify-center items-center shadow-xl p-10'>
                <div className='flex flex-col w-3/6 gap-10'>
                <div className='flex flex-col'>
                <h1 className='text-title2 font-bold'>Ooops...</h1>
                <div>
                    <span className='text-title2 font-regular'>Página no </span>
                    <span className='text-title2 font-regular'>encontrada</span>
                </div>
                <p className='font-semibold text-p404'>Lo sentimos, el contenido que estás buscando no existe.
                Se eliminó o bien escribiste mal el enlace.</p>
                </div>
                <button onClick={() => window.history.back()} className='bg-primary flex justify-center rounded-md w-[45%] text-white text-content font-bold p-2'>
                    VOLVER
                    </button>
                </div>
                <div className=''>
                    <img src="public/enchufe.png" alt="" />
                </div>
                <div className=''>
                    <img src="public/404.png" alt="" />
                </div>
               </div>
               </div>
            <Footer />
        </>
    )
}
export default Error404;