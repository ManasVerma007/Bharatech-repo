import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./components/Landing/LandingPage";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { AuthProvider } from "./context/AuthContext";
/* import Dashboard from "./pages/Dashboard/Dashboard";
import AddContact from "./components/AddContact/AddContact";
import Avatar from "./components/Avatar"; */
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/signup", element: <Signup /> },
    { path: "/login", element: <Login /> },
    { path: "/dashboard", element: <Dashboard /> },
  ]);
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
