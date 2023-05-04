import AboutUs from "./pages/AboutUs"
import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Main from "./pages/Main"
import MoviePage from "./pages/MoviePage"
import PersonalAccaunt from "./pages/PersonalAccount"
import { ABOUT_ROUTER, ACCAUNT_ROUTER, ADMIN_ROUTER, LOGIN_ROUTER, MAIN_ROUTER, MOVIE_ROUTER, REGISTRATION_ROUTER } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTER,
        Component: Admin
    },
    {
        path: ACCAUNT_ROUTER,
        Component: PersonalAccaunt
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTER,
        Component: Main
    },
    {
        path: LOGIN_ROUTER,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTER,
        Component: Auth
    },
    {
        path: MOVIE_ROUTER + '/:name',
        Component: MoviePage
    },
    {
        path: ABOUT_ROUTER,
        Component: AboutUs
    },
]