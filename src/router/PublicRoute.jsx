import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth";


export const PublicRoute = ({ children }) => {
  
    const { logged } = useContext( AuthContext );

    /*RETORNAR EL ESTADO Y SI NO EXISTE, REDIRIGE
    AL USUARIO A LA PANTALLA PRINCIPAL DE MARVEL*/
    return (!logged)
        ? children
        : <Navigate to="/marvel" />
}
