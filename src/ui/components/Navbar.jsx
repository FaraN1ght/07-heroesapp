import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    //CUSTOM HOOK PARA ACTIVAR LAS FUNC DE NAVEGACION
    const navigate = useNavigate(); 
    
    //FUNCION PARA LOGOUT, AQUI ESTAMOS MANEJANDO EL LOGOUT Y DICIENDOLE QUE VAYA AL LOGIN
    const handleLogout = () => { 
        console.log("logout");
        navigate('/login', { //NAVEGA AL SITIO
            replace: true //EVITA QUE REGRESES A LA PAGINA ANTERIOR
        }); 
    }
    
    //AQUI PODEMOS MANIPULAR EL NAVBAR DESDE SUS OPCIONES A SUS ESTILOS
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                HEROES
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    
                    <NavLink  
                        className={({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`} 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`} 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        Josue
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}