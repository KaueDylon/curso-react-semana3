import { createBrowserRouter, Navigate } from "react-router-dom";
import MainMenu from "../pages/mainManuPage/MainMenu";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import ShopCartPage from "../pages/shopCartPage/ShopCartPage";
import ItemPage from "../pages/itemPage/ItemPage";
import RotaProtegida from "../components/RotaProtegida";

export const router = createBrowserRouter([
  { path: "/", element: <MainMenu /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/cadastro", element: <RegisterPage /> },
  { path: "/carrinho", element: <ShopCartPage /> },
  {
    path: "/produto/:id",
    element: (
      <RotaProtegida>
        <ItemPage />
      </RotaProtegida>
    ),
  },
  { path: "*", element: <Navigate to="/" replace /> },
]);
