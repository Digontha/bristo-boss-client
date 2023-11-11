import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import OurMenu from "../Pages/OurMenu";
import Order from "../Pages/Order";

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
            path:"/order",
            element:<Order></Order>
        }
      ]
    },
  ]);
  export default router;