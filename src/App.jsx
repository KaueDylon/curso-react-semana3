import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { AuthProvider } from "./contexts/AuthProvider";
import CarrinhoProvider from "./contexts/CarrinhoProvider";

function App() {
  return (
    <AuthProvider>
      <CarrinhoProvider>
        <RouterProvider router={router} />;
      </CarrinhoProvider>
    </AuthProvider>
  );
}

export default App;
