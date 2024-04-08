import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Generos() {
    const [productos, setProductos] = useState([]);
    const [cat, setCat] = useState([]);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/products');
                if (response.ok) {
                    const data = await response.json();
                    setCat(data.countByCategory);
                    setProductos(data.products);
                } else {
                    throw new Error('Error al obtener los productos');
                }
            } catch (error) {
                console.error(error);
            }
        };

        obtenerProductos();
    }, []);

    return (
        <main className="content-wrap">

            <h2>Generos Prisma</h2>
            <div className="info-boxes">

                <div className="info-box">
                    <div className="box-icon">
                        {/* Aquí puedes agregar un icono si lo necesitas */}
                    </div>
                    <div className="box-content">
                        <span className="big">{productos.length}</span>
                        Cantidad de libros
                    </div>
                </div>
            </div>
            <div className="info-boxes">
                {cat.map((elemento, i) => {
                    return (
                        <div key={i} className="info-box">
                            {elemento && (
                                <div className="product-item">
                                    <p>Coleccion: {elemento.name}</p>
                                    <p>Cantidad: {elemento.count}</p>
                                    {/* Otros detalles del elemento */}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>


          
                <button className='btn'>
                    <Link className='btn-home' to="/"><i class="fa-solid fa-house"></i></Link>
                </button>
 
        </main>
    );
}

export default Generos;
