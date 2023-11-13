import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import OurMenu from "../Pages/OurMenu";
import Order from "../Pages/Order";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

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
            element:<Order></Order>
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
  ]);
  export default router;