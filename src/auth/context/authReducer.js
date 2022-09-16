import { types } from "../types/types";


/*OJO, LOS REDUCERS SON FUNCIONES QUE ESTAN DESTINADAS
A SER FUNCIONES PURAS QUE NO LLAMAN A RECURSOS EXTERNOS
COMO LO SON CUALQUIER FUNCION QUE NO DEBA ESTAR AQUI,
ESAS FUNCIONES SE PONEN DENTRO DEL PROVIDER U OTROS
COMO LAS FUNCIONES DEL LOGIN Y LOGOUT O GUARDAR
INFORMACION DE SESION ETC,

TODO DENTRO DEL REDUCER SE RESUELVE CON EL STATE RECIBIDO
Y LA ACCION
*/
export const authReducer = ( state = {}, action ) => {
    
    //SWITCHEAR OPCION ENTRE LAS ACCIONES Y DEVOLVER ESTADO
    switch ( action.type ) {
        case types.login:
            return {
                /*DESESTRUCTURACOIN DEL STATE ANTERIOR
                QUIERE DECIR QUE CONSERVA LAS CARACTERISTICAS
                ANTERIORES Y SOLO CAMBIA LO DEFINIDO AQUI*/
                ...state,
                logged: true,
                //PAYLOAD ES LA DATA QUE EL REDUCER USARA
                user: action.payload
            };
        
        case types.logout:
            return {
                logged: false,
            };

        default:
            return state;
    }
}

