import { useReducer } from "react";
import { useLocation } from "react-router-dom";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer";


/* UTILIZA EL AUTHCONTEXT PARA PROVEER LA INFORMACION
QUE SE REQUIERA GUARDAR COMO CONTEXTO EN CHILDREN*/
export const AuthProvider = ({ children }) => {

    /*EL INITIAL STATE PUEDE OBTENER SU VALOR 
    DE UN LOCALSTORAGE U OTRO LUGAR*/
    /* const initialState = {
        logged: false,
    } */

    //ESTADO INICIAL DEL LOCALSTORAGE PARA OBTENER LA SESION DEL USUARIO
    //ESTO SIRVE PARA OBTENER EL USUARIO ACTIVO DESDE EL LOCALSTORAGE
    const init = () => {
        const user = JSON.parse( localStorage.getItem('user') );

        return {
            logged: !!user, //SI EL USER EXISTE, ENTONCES DEJA CREARSE AL USER
            user: user
        }
    }

    /* useReducer( ElReducerQueCreamos, ElEstadoInicial); 
    EL CONST ES UNA DESESTRUCTURACION DEL REDUCER PARA USAR
    EL STATE Y DISPATCH*/
    //const [ authState, dispatch ] = useReducer( authReducer, initialState, init );
    const [ authState, dispatch ] = useReducer( authReducer, {}, init );
    
    /*HOOK QUE GUARDA LA UBICACION DEL USUARIO EN
    LA PAGINA WEB Y CON ESTO PODEMOS RECUPERAR SU ULTIMA
    NAVEGACION Y REACTIVARLA CUANDO SE VUELVA A CONECTAR
    */
    /* GUARDA LA UBICACION DEL USUARIO EN LA 
    PAGINA (SEARCH) Y SU INTERACCION (PATHNAME) */
    const { pathname, search } = useLocation();

    /*LOGIN SE PASA A UN DISPATCH DE UNA ACCION DEFINIDA
    SE DEFINE LA ACCION, SE DECLARA UN TYPE EN ESTE
    CASO SERIA UN LOGIN DEFINIDO EN LA CARPETA TYPES
    Y EL PAYLOAD ES LA INFO QUE SE GUARDA EN LA ACCION
    DE LOGIN */
    const login = ( name = '' ) => {

        const user = { id: 'ABC', name }

        /* COMO YA USE EL LASTHPATH EN LOGINPAGE PUEDO
        BORRARLO AL LOGUEARME PARA QUE NO SE ACUMULE
        Y SE VUELVE A CREAR EN EL LOGOUT */
        localStorage.removeItem('lastPath');

        const action = {
            type: types.login,
            payload: user
            /* payload: {
                id: 'ABC',
                name: name
            } */
        }

        //SETEAR LA SESION DEL USUARIO EN EL LOCALSTORAGE
        //EN LOCAL STORAGE SOLO SE PUEDEN GUARDAR STRINGS
        localStorage.setItem( 'user', JSON.stringify(user) );
        dispatch(action)
    }

    const logout = () => {
        localStorage.removeItem('user');

        /*GUARDA EL PATH(QUERY) DEL USUARIO EN LA PAGINA
        Y EL SEARCH O URL DE LA PAGINA*/
        const lastPath = pathname + search;
        localStorage.setItem('lastPath', lastPath);

        const action = {
            type: types.logout
        }

        dispatch(action);
    }

  return (
    /*ESTADO DE AUTHCONTEXT COMO PROVIDER Y EN EL VALUE
    SE PONEN LOS DATOS QUE SE VAN A EXPONER AL USUARIO
    */
    <AuthContext.Provider value={{
        /* SI DECONSTRUIMOS EL AUTHSATE CON ...
        TENER EN CUENTA DE QUE SI ALGUNA PROPIEDAD SE
        LLAMA LOGIN PUEDE SOBREESCRIBIR NUESTRA NUEVA
        DECLARACION DE UN LOGIN AQUI O LOGOUT
        ADEMAS AQUI VAN MIS ACCIONES*/
        ...authState, //ATRIBUTOS
        login, //FUNCIONES
        logout
        //OTRA FORMA DE ENVIAR LAS FUNCIONES
        /* login: login,
        logout: logout */
    }}>
        { children }
    </AuthContext.Provider>
  );
}

