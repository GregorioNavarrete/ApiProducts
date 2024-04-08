import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Libros() {
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

            <h2>Libros Prisma</h2>
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
        
           
            <section className="content">
                <h2 className="mt-3">Lista de Productos</h2>
               <div className="products-list"> <div className="info-boxes">
                
                    {productos.map((producto, i) => (
                       <div className="info-box"> <div key={i} className="product-item">
                            <h3>{producto.title}</h3>
                            <p>Precio: {producto.price}</p>
                            {/* Otros detalles del producto */}
                        </div></div>
                    ))}
                </div></div>
                <button className='btn'>
                    <Link className='btn-home' to="/"><i class="fa-solid fa-house"></i></Link>
                </button>
            </section>
        </main>
    );
}

export default Libros;
