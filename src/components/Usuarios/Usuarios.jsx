import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Usuarios() {
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
            <h2>Usuarios Prisma</h2>
            <div className="info-boxes">
                <div className="info-box">
                    <div className="box-content">
                        <span className="big">{usuarios.length}</span>
                        Cantidad de Usuarios
                    </div>
                </div>
            </div>
        

             <section className="content">
                <h2 className="mt-3">Lista de Usuarios</h2>
                <div className="products-list"> <div className="info-boxes">
                
                    {usuarios.map((usuario, i) => (

                         <div className="info-box"> <div key={i} className="product-item">
                             <div key={i} className="user-item">
                            <h3>{usuario.name}</h3>
                            <p>Email: {usuario.email}</p>
                        </div>
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

export default Usuarios;
