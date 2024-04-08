    import React, { useState, useEffect } from 'react';
    import { Link } from 'react-router-dom';

function Statistics(listado){
    
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

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const obtenerUsuarios = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/users');
                if (response.ok) {
                    const data = await response.json();
                    setUsuarios(data.users);
                } else {
                    throw new Error('Error al obtener los usuarios');
                }
            } catch (error) {
                console.error(error);
            }
        };
    
        obtenerUsuarios();
    }, []);

    return (
        <main className="content-wrap">

            <h2>Estadisticas</h2>
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
          
                <div className="info-box">
                    <div className="box-content">
                        <span className="big">{usuarios.length}</span>
                        Cantidad de Usuarios
                    </div>
                </div>

                <div className="info-box">
                    <div className="box-content">
                        <span className="big">{cat.length}</span>
                        Cantidad de Generos
                    </div>
                </div>
            </div>
            
        </main>
    );
}


    
    


export default Statistics;