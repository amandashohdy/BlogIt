import React from "react" ; 
import { createBrowserRouter, 
         createRoutesFromElements, 
         Route, 
         Link, 
         Outlet, 
         RouterProvider,
         Navigate } from "react-router-dom" ;
import { AuthContext } from "./context/authContext" ;
import { useContext } from "react" ;  
import "./App.css" ; 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query" ;

import LoginForm from "./pages/LoginForm/LoginForm" ;
import Profile from "./pages/Profile/Profile" ; 
import Register from "./pages/Register/Register" ;
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword" ; 

export default function App() {

  const { currentUser } = useContext(AuthContext) ; 

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/"/> ; 
    }

    return children ; 
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<LoginForm/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forgot_password" element={<ForgotPassword/>} />
      </Route>
    )
  )

  const queryClient = new QueryClient() 

  return (
    
      <div>
        <RouterProvider router={router}/>
      </div>
  ) ;
}

const Root = () => {
  return (
    <> 
      <div>
        <Outlet/>
      </div>
    </>
  )
}