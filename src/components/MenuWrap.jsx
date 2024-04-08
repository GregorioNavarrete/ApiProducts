import logoPrisma from '../assets/img/logo-prisma.svg'
import { Link } from 'react-router-dom'

export default function MenuWrap() {

    return( 
        <header className="menu-wrap">
        <figure className="user">
            <div className="user-avatar">
            
                {/* <img src={logoPrisma} alt="Logo Prisma	"/> */}
                <a href="http://localhost:3000/"><img src={logoPrisma} alt="Logo Prisma	"/></a>
                {/*
                tube que levanta otro servidor como API*/}
                   
            </div>
          
            
        </figure>
        <nav>
            <section className="dicover">
                <h3>Opciones</h3>
                <ul>
                <li>
                    <Link to="/">
                        <i class="fa-solid fa-house"  style={{fontSize: "1.2rem", color: "#FAFCFE"}}></i>  - Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/Libros">
                        <i class="fa-solid fa-book" style={{fontSize: "1.2rem", color: "#FAFCFE"}}></i>  - Libros
                        </Link>
                    </li>
                    <li>
                        <a href="/genres">
                        <i class="fa-solid fa-tag" style={{fontSize: "1.2rem", color: "#FAFCFE"}}></i>  - Generos
                        </a>
                    </li>
                    <li>
                        <Link to="/genres">
                        <i class="fa-solid fa-feather" style={{fontSize: "1.2rem", color: "#FAFCFE"}}></i>  - Autores
                        </Link>
                    </li>
                    <li>
                        <Link to="/Novedades">
                        <i class="fa-solid fa-star" style={{fontSize: "1.2rem", color: "#FAFCFE"}}></i> - Novedades
                        </Link>
                    </li>
                    <li>
                    <Link to="/Usuarios">
                    <i class="fa-solid fa-user" style={{fontSize: "1.2rem", color: "#FAFCFE"}}></i>  - Usuarios
                        </Link>
                    </li>
                    <li>
                        <Link to="/statistics">
                        <i class="fa-solid fa-chart-line" style={{fontSize: "1.2rem", color: "#FAFCFE"}}></i>  - Estadísticas
                        </Link>
                    </li>
                </ul>
            </section>
        </nav>
    </header>
    )
    
}