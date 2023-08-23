import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  //SIRVE PARA OBTENER LOS PARAMETROS DE LA URL
  //SE RECOMIENDA CREAR LAS FUNCIONES ENCIMA DE TODOS LOS
  //RETURNS QUE HAYA EN OTRAS FUNCIONES.
  const { heroId } = useParams();

  const navigate = useNavigate();

  /* USAMOS useMemo para memorizar VALORES y useCallback para funciones
      SE PONE DENTRO DEL USEMEMO UN CALLBACK DONDE IRA LA FUNCION
      Y ESE SERA EL VALOR QUE SE GUARDARA, LUEGO LOS PARAMETROS
      Y EN ESTE CASO LE PASAMOS EL ID, YA QUE CADA VEZ QUE EL ID
      CAMBIE SE VOLVERA A EJECUTAR ESA FUNCION.
  */
  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  const heroImageUrl = `../src/assets/heroes/${heroId}.jpg`;
  //COMPROBAR HEROE PARA BOTON DE REGRESO
  const onNavigateBack = () => {
    navigate(-1);
    /* if( hero.publisher === "DC Comics" ) {
      navigate("/dc"); 
    }else {
      navigate("/marvel");
    } */
  };

  //SI NO EXISTE, VOLVER A MARVEL.
  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4 animate__animated animate__fadeInLeft">
        <img
          src={heroImageUrl}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>

      <div className="col-8 animate__animated animate__fadeInRight">
        <h3> {hero.superhero} </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <b> Alter Ego: </b> {hero.alter_ego}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            <b> Publisher: </b> {hero.publisher}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            <b> First Appereance: </b> {hero.first_appearance}{" "}
          </li>
        </ul>

        <h5 className="mt-3"> Characters</h5>
        <p> {hero.characters} </p>

        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
