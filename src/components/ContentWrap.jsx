import { Route, Routes } from "react-router-dom";

import Generos from "./Generos/genres";
import Error404 from "./Error404";
import Novedades from "./Novedades/Novedades";
import Statistics from "./Statistics/Statistics";
import Home from "./PrismaHome/Home";
import Libros from "./Libros/Libros";
import Usuarios from "./Usuarios/Usuarios";

export default function ContentWrap() {
  return (
    <>
      <main className="content-wrap">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/genres" exact element={<Generos />} />
          <Route path="/novedades" element={<Novedades />} />
          <Route
            path="/statistics"
            element={
              <Statistics
                props={[
                  {
                    titulo: "Cantidad de estrenos",
                    cifra: 15,
                    icono: "bi bi-film",
                    colorIcono: "cornflowerblue",
                  },
                  {
                    titulo: "Categorias",
                    cifra: 12,
                    icono: "bi bi-tags-fill",
                    colorIcono: "orange",
                  },
                  {
                    titulo: "Total ventas",
                    cifra: 489.567,
                    icono: "bi bi-currency-dollar",
                    colorIcono: "green",
                  },
                ]}
              />
            }
          />
          <Route path="/Libros" element={<Libros />} />
          <Route path="/Usuarios" element={<Usuarios />} />
          <Route component={Error404} />
        </Routes>

      </main>
    </>
  );
}
