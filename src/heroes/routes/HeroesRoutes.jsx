import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, MarvelPage, SearchPage, HeroPage } from "../pages"

//RUTAS PERSONALIZADAS PARA CADA PAGINA DE HEROES
export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />

                <Route path="search" element={<SearchPage />} />
                {/* RUTA DE CADA HEROE CON UN ID QUE SE 
                REEMPLAZA EN HEROCARD CON EL ID DEL HEROE
                SELECCIONADO*/}
                <Route path="hero/:heroId" element={<HeroPage />} />
                
                <Route path="/" element={<Navigate to="/marvel" />} />
            </Routes>
        </div>
    </>
  )
}
