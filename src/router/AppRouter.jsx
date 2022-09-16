import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

//AQUI SE TRABAJAN LAS RUTAS GENERALES DE LA PAGINA
export const AppRouter = () => {
  return (
    <>
      <div>
        <Routes>
              {/* RUTA PARA EVITAR QUE VUELVA AL LOGIN
              SI YA ESTA AUTENTICADO */}
              <Route path="login" element={
                <PublicRoute>
                  <LoginPage/>
                </PublicRoute>
              } 
              />
              
              {/* RUTA PARA CUALQUIER URL QUE 
              NO SEA UNA URL VALIDA Y ESTE AUTENTICADA */}
              <Route path="/*" element={
                <PrivateRoute> {/* RUTA PRIVADA */}
                  <HeroesRoutes/> {/* RUTA HEROES */}
                </PrivateRoute>
              }/>

              {/* RUTA PARA LOGIN */}
              {/* <Route path="login" element={<LoginPage />} /> */}
              {/* RUTA PARA CUALQUIER COSA QUE NO SEA UNA URL VALIDA /* */}
              {/* <Route path="/*" element={<HeroesRoutes />} /> */}
        </Routes>
      </div>
    </>
  )
}
