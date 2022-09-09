import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { HeroesApp } from './HeroesApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  //EL STRICTMODE RENDERIZA DOBLE EN ETAPA DE DESARROLLO
  //POR LO QUE ALGUNOS CONSOLE.LOG SALDRAN 2 VECES
  <React.StrictMode>
    {/* BR ROUTER ES PARA PODER IMPLEMENTAR RUTAS URL */}
    <BrowserRouter>
      {/* TU APP.JSX */}
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>
);
