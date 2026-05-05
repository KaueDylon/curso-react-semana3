import { useState } from "react";
import MainMenu from "./pages/mainManuPage/MainMenu";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import ItemPage from "./pages/itemPage/ItemPage";
import InlineCardItem from "./components/inlineCardItem/inlineCardItem";
import ShopCartPage from "./pages/shopCartPage/ShopCartPage";

import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
