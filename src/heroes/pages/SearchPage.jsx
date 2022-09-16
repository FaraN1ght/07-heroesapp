import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroByName } from '../helpers';

/* '  / ' : es para enlaces o direcciones url.
' ? ' : es para query parameters o parametros 
de un query/busqueda. */
export const SearchPage = () => {

  //CONTROL DE UBIBCACION Y LOCACION DE LA PAGINA ACTUAL
  const navigate = useNavigate();
  const location = useLocation();

  //QUERY QUE SE DEVUELVE VACIO SI NO HAY NADA
  const { q = '' } = queryString.parse( location.search );

  //OBTENER MI HEROE FILTRADO
  const heroes = getHeroByName( q );

  //CASOS DE MUESTRA DE ALERTAS PARA BUSQUEDA
  const showSearch = (q.length === 0); 
  const showError = (q.length > 0) && heroes.length === 0;

  //USAR EL HOOK DE USEFORM PARA FORMULARIO
  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const handleSubmit = (e) => {
    //PREVIENE EL REFRESH DE LA PAGINA EN SUBMIT
    e.preventDefault();
    //SI EL INPUT ESTA VACIO NO PERMITE BUSCAR
    //if ( searchText.trim().length < 1 ) return;
    navigate(`?q=${ searchText.toLowerCase().trim() }`)
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          
          <form onSubmit={ handleSubmit } >
            <input type="text" 
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />

            <button className="btn btn-outline-primary mt-2">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* ALERT BUSCAR HEROE */}
          <div 
            className="alert alert-primary" 
            style={{ display: showSearch ? '' : 'none' }}>
            Search a hero
          </div>

          {/* ALERT HEROE NO EXISTE*/}
          <div 
            className="alert alert-danger " 
            style={{ display: showError ? '' : 'none' }}>
            No hero with <b> { q } </b>
          </div>
        
          {/* CARD DE HEROE ENCONTRADO */}
          <div className='row row-cols-1 row-cols-md-3 g-1'>
            {
              //ARMAR EL CARD DEL HEROE ENCONTRADO
              heroes.map( hero => (
                <HeroCard key={ hero.id } { ...hero } />  
              ))
            }
          </div>
          

        </div>

      </div>
    </>
  )
}
