import { HeroCard } from './';
import { getHeroesByPublisher } from "../../heroes";
import { useMemo } from 'react';

export const HeroList = ({ publisher }) => {

    /* USAMOS useMemo para memorizar VALORES y useCallback para funciones
      SE PONE DENTRO DEL USEMEMO UN CALLBACK DONDE IRA LA FUNCION
      Y ESE SERA EL VALOR QUE SE GUARDARA, LUEGO LOS PARAMETROS
      Y EN ESTE CASO LE PASAMOS EL PUBLISHER, YA QUE CADA VEZ QUE EL PUBLISHER
      CAMBIE SE VOLVERA A EJECUTAR ESA FUNCION.
  */
    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ]);

    //AQUI ESTAMOS LISTANDO LOS HEROES QUE HAY SEGUN EL PUBLICADOR
    return (
        <div className="row row-cols-1 row-cols-md-3 g-3">
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id }
                        { ...hero }
                    />
                ))
            }
        </div>
    )
}
