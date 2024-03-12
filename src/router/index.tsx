import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Login } from "../pages/Login/Login";
import { Chat } from "../pages/Chat/Chat";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <div>Error...</div>,
        children: [
            {
                index: true,
                path: "/",
                element: <Login />,
            },
            { path: "/chat", element: <Chat /> },
        ],
    },
]);
