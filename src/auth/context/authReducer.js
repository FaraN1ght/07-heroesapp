import { types } from "../types/types";


//ESTADO INICIAL DEL CONTEXTO COMO NO LOGUEADO
const initialState = {
    logged: false,
}

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
                user: action.payload,
            };
        
        case types.logout:
            return {
                logged: false,
            };

        default:
            return state;
    }
}

