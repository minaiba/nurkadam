import { createBrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import Layout from "./components/Layout/Layout";
import Condition from "./components/Conditions/Condition";
import Connection from "./components/Connections/Connection";
import Review from "./components/Reviews/Review";
import Contact from "./components/Contacts/Contact";

export const myRouter = createBrowserRouter ([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: 'main',
                element: <Home/>
            },
            {
                path: 'conditions',
                element: <Condition/>
            },
            {
                path: 'connection',
                element: <Connection/>
            },
            {
                path: 'reviews',
                element: <Review/>
            },
            {
                path: 'contacts',
                element: <Contact/>
            },
        ]
    }
])