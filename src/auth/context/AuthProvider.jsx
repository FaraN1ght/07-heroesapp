import { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer";


/* UTILIZA EL AUTHCONTEXT PARA PROVEER LA INFORMACION
QUE SE REQUIERA GUARDAR COMO CONTEXTO EN CHILDREN*/
export const AuthProvider = ({ children }) => {

    /*EL INITIAL STATE PUEDE OBTENER SU VALOR 
    DE UN LOCALSTORAGE U OTRO LUGAR*/
    const initialState = {
        logged: false,
    }

    /* useReducer( ElReducerQueCreamos, ElEstadoInicial); 
    EL CONST ES UNA DESESTRUCTURACION DEL REDUCER PARA USAR
    EL STATE Y DISPATCH*/
    const [ authState, dispatch ] = useReducer( authReducer, initialState );
    
    /*LOGIN SE PASA A UN DISPATCH DE UNA ACCION DEFINIDA
    SE DEFINE LA ACCION, SE DECLARA UN TYPE EN ESTE
    CASO SERIA UN LOGIN DEFINIDO EN LA CARPETA TYPES
    Y EL PAYLOAD ES LA INFO QUE SE GUARDA EN LA ACCION
    DE LOGIN */
    const login = ( name = '' ) => {
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: name,
            }
        }

        dispatch(action)
    }

  return (
    /*ESTADO DE AUTHCONTEXT COMO PROVIDER Y EN EL VALUE
    SE PONEN LOS DATOS QUE SE VAN A EXPONER AL USUARIO
    */
    <AuthContext.Provider value={{
        authState,
        login: login
    }}>
        { children }
    </AuthContext.Provider>
  );
}

