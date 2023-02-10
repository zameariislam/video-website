
import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home";
import Video from "../pages/Video";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />


            },

            {
                path: '/video/:videoId',
                element: <Video />


            },
        ],



    }
])
export default router