import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";

export const HeroesApp = () => {
  return (
    /* SE DEFINE AQUI EL PROVIDER PARA COMPARTIR LA INFO
    QUE SE ENCUENTRA EN MI PROVIDER EN TODA LA APP
    COMO PANTALLAS AUTENTICADAS O NO AUTENTICADAS DONDE
    NAVEGUE EL USUARIO*/
    <AuthProvider>
        <AppRouter></AppRouter>
    </AuthProvider>
  )
}
