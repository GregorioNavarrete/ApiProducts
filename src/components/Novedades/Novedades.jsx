    import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Novedades(){
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
           
         <h2 className="mt-3">Ultimo Usuario</h2>
            
               
                    <div className="products-list"><div className="info-boxes">
                         {usuarios.length > 0 && (
                             <div className="info-box"><div className="product-item">
                                <div className="box-content">
                                <p>Nombre: {usuarios[usuarios.length-1]?.name}</p>
                                <p>Email: {usuarios[usuarios.length-1]?.email}</p>
                                </div>
                               </div>
                            </div>
                        )}
                     
                </div>
            </div>

            <h2 className="mt-3">Ultimo Producto</h2>
           
               
                    <div className="products-list"> <div className="info-boxes">
                         {productos.length > 0 && (
                        <div className="info-box"> <div className="product-item">
                            <div className="box-content">
                            <p>Titulo:{productos[productos.length-1]?.title}</p>
                            <p>Precio: {productos[productos.length-1]?.price}</p>
                            <p>Id: {productos[productos.length-1]?.id}</p>
                          
                 </div> </div> 
                        </div>
                    )}
                   
                </div>
            </div>




           


             

                <button className='btn'>
                    <Link className='btn-home' to="/"><i class="fa-solid fa-house"></i></Link>
                </button>
          
        </main>
    );
       
     

             

       
}



export default Novedades