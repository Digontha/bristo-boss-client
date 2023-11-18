import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import OurMenu from "../Pages/OurMenu";
import Order from "../Pages/Order";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../Pages/Dashboard";
import AdminHome from "../Pages/AdminHome";
import ManageItem from "../Pages/ManageItem";
import AddItem from "../Pages/AddItem";
import AllUsers from "../Pages/AllUsers";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/menu",
            element:<OurMenu></OurMenu>
        }
        ,
        {
            path:"/order/:category",
            element:<PrivateRoute><Order></Order></PrivateRoute>
        }
        ,
        {
            path:"/login",
            element:<Login></Login>
        }
        ,
        {
            path:"/register",
            element:<Register></Register>
        }
      ]
    },
    {
        path:"/dashboard",
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:"/dashboard",
                element:<AdminHome></AdminHome>
            },
            {
                path:"/dashboard/manageItem",
                element:<ManageItem></ManageItem>
            }
            ,
            {
                path:"/dashboard/AddItem",
                element:<AddItem></AddItem>
            }
            ,
            {
                path:"/dashboard/users",
                element:<AllUsers></AllUsers>
            }
        ]
        
    }
  ]);
  export default router;