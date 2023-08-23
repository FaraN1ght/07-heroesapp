import { heroes } from "../data/heroes";


export const getHeroByName = ( name = '' ) => {

    //INICIALIZAR EL HEROE SI ESPACIOS Y EN MINUSCULA
    name = name.toLocaleLowerCase().trim();

    //SI NO ENCUENTRA NADA ENTONCES DEVUELVE VACIO
    if ( name.length === 0 ) return [];

    //SI ENCUENTRA ALGO DEVUELVE EL HEROE QUE INCLUYA LO ESCRITO/BUSCADO
    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes( name )
    );

}



