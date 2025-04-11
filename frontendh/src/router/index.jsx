import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../page/Dashboard";
import Layout from "../layouts/layout";
import Administration from "../page/Administration/Administration";
import Login from "../page/connexion/Login";
import Register from "../page/connexion/Register";
import Demande_equipement from "../page/DemandesEquipement/Demande_equipement";
import Gestion_equipements from "../page/Gestion_des_equipement/Gestion_equipements";
import Ticket_incident from "../page/Tichets/Ticket_incident";

export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Dashboard/>,
            },
            {
                path: "/Admin",
                element: <Administration/>,
            },
            {
                path: "/login",
                element: <Login/>,
            },
            {
                path: "/register",
                element: <Register/>,
            },
            {
                path: "/Demande_equipement",
                element: <Demande_equipement/>,
            },
            {
                path: "/Gestion_equipements",
                element: <Gestion_equipements/>,
            },
            {
                path: "/Ticket_incident",
                element: <Ticket_incident/>,
            },
            {
                path: "*",
                element: <h1>Page not found</h1>,
            },
        ],
    },
    
]);
