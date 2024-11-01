import { createBrowserRouter, Link } from "react-router-dom";
import App from "./App";

export const route = createBrowserRouter(
    [
        {path : '/',element : <App/>},
        {path: '/about',element : <><Link to={'/'}>Link</Link></>}
    ]
);