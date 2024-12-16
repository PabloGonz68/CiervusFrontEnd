import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductosComponent = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProductos(data);
            } catch (error) {
                console.error("Error al cargar los productos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, []);

    if (loading) {
        return <div className="bg-secondary min-h-screen py-10 px-5 text-center font-bold ">Cargando productos...</div>;
    }

    return (

        <div className="bg-primary border-t-2 border-black">
            <div className="p-5 flex items-center justify-center pt-20">
            <div className="flex w-[50%] items-center justify-between bg-secondary px-2 rounded-full h-16 ">
                <div className="flex items-center justify-between lg:w-3/5 p-1">
                    <div>
                        <p className="text-black font-bold">Buscar...</p>
                    </div>
                    <div className="w-14 h-14 p-1 flex justify-center items-center bg-gray-300 border-4 border-secondary border-900 rounded-full transform -scale-x-100">
                    <img src="public/buscar.png" alt="" />
                    </div>
                </div>
                <div className="h-full border-l border-black mx-2"></div>
                <div className="flex items-center justify-between w-2/5 gap-20 p-1 ">
                    <p className="text-[#6B6B6B] font-bold pl-2">Desde...</p>
                    <img className="w-16" src="flechabi.png" alt="" />
                    <p className="text-[#6B6B6B] font-bold pr-2">Hasta...</p>
                </div>
                
            </div>
            </div>
            <div className="w-[50%] mx-auto">
            <div className="flex items-center justify-start gap-5 p-5">
                
                {/* combobox */}
                    <select name="combobox" id="combobox" className="flex text-white text-800 bg-[#2C2C2C] rounded-full px-3 py-1 font-bold">
                    <option className="text-white bg-[#2C2C2C]" value="">Categoria</option>
                    <option className="text-white bg-[#2C2C2C]" value="opcion1">men's clothing</option>
                    <option className="text-white bg-[#2C2C2C]" value="opcion2">jewelery</option>
                    <option className="text-white bg-[#2C2C2C]" value="opcion3">electronics</option>
                    <option className="text-white bg-[#2C2C2C]" value="opcion4">women's clothing</option>
                    </select>

                    <select name="" id="" className="flex text-white text-800 bg-[#2C2C2C] rounded-full px-3 py-1 font-bold">
                    <option className="text-white bg-[#2C2C2C]" value="">Precio</option>
                    <option className="text-white bg-[#2C2C2C]" value="opcion1">Muy bajo</option>
                    <option className="text-white bg-[#2C2C2C]" value="opcion2">Bajo</option>
                    <option className="text-white bg-[#2C2C2C]" value="opcion3">Medio</option>
                    <option className="text-white bg-[#2C2C2C]" value="opcion4">Alto</option>
                    <option className="text-white bg-[#2C2C2C]" value="opcion5">Muy alto</option>
                    </select>
                </div>
                </div>

               <div className="flex items-center justify-center rounded-xl p-4">
  <div className="flex flex-col items-center justify-center w-[60%] h-20 mb-10">
    {/* Fila 1: Cabecera con texto Leyenda */}
    <div className="bg-primary flex items-center justify-center h-10 w-1/2 border-x-2 border-t-2 border-black rounded-t-xl">
      <p className="text-white font-bold">Leyenda</p>
    </div>

    {/* Fila 2*/}
    <div className="bg-secondary flex items-center justify-center gap-3 h-20 w-1/2 border-x-2 border-b-2 border-black rounded-b-xl">
      
      <div className="flex items-center justify-center gap-2 p-2">
        <img src="public/red.png" alt="Red" className="w-6 h-6" />
        <img src="public/flecha.png" alt="Flecha" className="w-6 h-6" />
        <p className="text-black font-bold">Día</p>
      </div>

      <div className="flex items-center justify-center gap-2 p-2">
        <img src="public/orange.png" alt="Red" className="w-6 h-6" />
        <img src="public/flecha.png" alt="Flecha" className="w-6 h-6" />
        <p className="text-black font-bold">Semana</p>
      </div>

      <div className="flex items-center justify-center gap-2 p-2">
        <img src="public/yellow.png" alt="Red" className="w-6 h-6" />
        <img src="public/flecha.png" alt="Flecha" className="w-6 h-6" />
        <p className="text-black font-bold">Mes</p>
      </div>

      <div className="flex items-center justify-center gap-2 p-2">
        <img src="public/green.png" alt="Red" className="w-6 h-6" />
        <img src="public/flecha.png" alt="Flecha" className="w-6 h-6" />
        <p className="text-black font-bold">Año</p>
      </div>
    </div>
  </div>
</div>
        <div className="min-h-screen "
        style={{
            boxShadow: "0px -8px 15px rgba(0, 0, 0, 0.2)", // Sombra superior
            borderRadius: "0 0 20px 20px", // Opcional, redondear las esquinas inferiores
        }}>

        <div className="bg-primary min-h-screen py-10 px-5">
            <div className="max-w-screen-2xl mx-auto bg-[#D1E7D1] p-5 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {productos.map((producto) => (
                        <div key={producto.id} className="bg-primary p-5 rounded-lg shadow-lg" style={{ width: 'calc(100% - 10px)' }}>
                            <img
                                src={producto.image}
                                alt={producto.title}
                                className="w-full h-56 object-cover mb-4 rounded-md"
                            />
                            <div className="flex flex-col space-y-2">
                                <div className="flex gap-1">
                                <p className="flex text-white text-800 bg-[#762B2B] rounded-full px-3 py-1 font-bold">{producto.price}€</p>
                                <p className="flex text-white text-800px-3 py-1 font-bold">/</p>
                                <p className="flex text-white text-800 bg-[#76592B] rounded-full px-3 py-1 font-bold">{producto.price}€</p>
                                <p className="flex text-white text-800px-3 py-1 font-bold">/</p>
                                <p className="flex text-white text-800 bg-[#72762B] rounded-full px-3 py-1 font-bold">{producto.price}€</p>
                                <p className="flex text-white text-800px-3 py-1 font-bold">/</p>
                                <p className="flex text-white text-800 bg-[#36762B] rounded-full px-3 py-1 font-bold">{producto.price}€</p>
                                </div>
                            
                                <h3 className="text-white text-xl font-bold">{producto.title}</h3>
                                <p className="text-sub text-500 text-sm">
                                    Categoría: {producto.category}
                                </p>
                                <p className="text-sub font-bold text-500 text-sm">
                                    11370 Los Barrios
                                </p>
                                
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                <Link className="flex items-center font-bold text-content2 lg:text-content bg-primary py-2 px-5 rounded" to="/">
                    <div className="w-7 h-7 p-1 flex justify-center items-center bg-gray-300 border-4 border-secondary border-900 rounded-full transform -scale-x-100">
                        <img src="public/+.png" alt="" />
                    </div>
                    <p className="text-secondary ml-2">MOSTRAR MAS</p>
                </Link>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default ProductosComponent;
