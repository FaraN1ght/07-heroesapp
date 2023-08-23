import { heroes } from '../data/heroes';

export const getHeroesByPublisher = ( publisher ) => {
    
    //VALIDAR SI EL PUBLISHER EXISTE Y SI NO LANZAR ERROR
    const validPublisher = ['DC Comics','Marvel Comics'];
    if ( !validPublisher.includes( publisher ) ) {
        throw new Error(`${publisher} is not a valid publisher`);
    }else {
        //RETORNA LOS HEROES QUE TIENEN ESE PUBLICADOR (LOS FILTRA)
        return heroes.filter( heroe => heroe.publisher === publisher );
    }

}