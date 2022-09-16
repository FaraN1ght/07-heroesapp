import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth";


export const PrivateRoute = ({ children }) => {

    //OBTENER EL ESTADO DEL USUARIO ACTUAL
    const { logged } = useContext( AuthContext );

    /*USE EFFECT PARA LEER SIEMPRE QUE HAYA UN CAMBIO
    EN EL PATH, SI NO HAY UN CAMBIO PUES NO SE
    VUELVE A RENDERIZAR
    */
        /* useEffect(() => {
            const lastPath = pathname + search;
            localStorage.setItem('lastPath', lastPath);
        }, [pathname, search]); */

    /*RETORNAR EL ESTADO Y SI EXISTE, RETORNA EL JSX
    DEL USUARIO ACTIVO, SI NO LO REDIRIGE A LOGIN
    NUEVAMENTE*/
  return (logged)
    ? children
    : <Navigate to="/login" />
}
