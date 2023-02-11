import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Chemistry from "../../Pages/Home/Subjects/Chemistry";
import Math from "../../Pages/Home/Subjects/Math";
import Physics from "../../Pages/Home/Subjects/Physics";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
               path:"/",
               element:<Home></Home>
            },
            {
                path:"/all",
                element:<Physics></Physics>
            },
            {
                path:"/physics",
                element:<Physics></Physics>
            },
            {
                path:"/chemistry",
                element: <Chemistry></Chemistry>
            },
            {
                path:"/math",
                element:<Math></Math>
            }
        ]
    }
])