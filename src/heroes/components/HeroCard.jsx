import { Link } from 'react-router-dom';
import './HeroCard.css';
import 'animate.css';

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
    
    const heroImageUrl = `/assets/heroes/${ id }.jpg`;
    const characterByHero = (<p>{ characters }</p>);

  return (
    <div className="my-card animate__animated animate__fadeIn">
        <img src={ heroImageUrl } alt={ superhero } className="img img-responsive"/>

        <div className="profile-name"> { superhero } </div>
        
        <div className="profile-position"> { alter_ego } </div>
        
        <div className="profile-overview">
            <div className="row">
                <div className="col-ms-4">
                    <h3> { publisher } </h3>
                    <p>Primera aparición: <br /> { first_appearance } </p>
                    {
                        (alter_ego !== characters) && (characterByHero)
                    }
                    <p>
                        <Link to={`/hero/${ id }`}>
                            Mas...
                        </Link>
                    </p>
                </div>
            </div>
        </div>

    </div>
  );
};

