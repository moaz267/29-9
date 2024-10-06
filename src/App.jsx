import React from "react";
import Layout from "./components/layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ContactUs from "./pages/Contact/ContactUs";
import Service from "./pages/service/Service";
import AboutUs from "./pages/about/AboutUs";
import ContactUsForm from "./components/contactUsForm/ContactUsForm";
import Emails from "./components/Emails/Emails";
import Phone from "./components/Phone/Phone";
import Location from "./components/Location/Location";
import NotFound from "./pages/notFound/NotFound";
export default function App() {
    const Routes = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "/", element: <HomePage /> },
                { path: "/about", element: <AboutUs /> },
                { path: "/service", element: <Service /> },
                { path: "/contacts", element: <ContactUs />,
                    children: [
                    {path: "", element: <ContactUsForm /> },
                    {path: "contacts/Emails", element: <Emails />},
                    {path: "contacts/Phone", element: <Phone />},
                    {path: "contacts/Location", element: <Location />},
                ]
             },
             {path:"*",element:<NotFound/>}
    ]}

    ]);
    return <RouterProvider router={Routes} />;
}
