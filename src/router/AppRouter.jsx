import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages";
import { HeroesRoutes } from "../heroes";

//AQUI SE TRABAJAN LAS RUTAS GENERALES DE LA PAGINA
export const AppRouter = () => {
  return (
    <>
      <div>
        <Routes>
              {/* RUTA PARA LOGIN */}
              <Route path="login" element={<LoginPage />} />
              {/* RUTA PARA CUALQUIER COSA QUE NO SEA UNA URL VALIDA /* */}
              <Route path="/*" element={<HeroesRoutes />} />
        </Routes>
      </div>
    </>
  )
}
