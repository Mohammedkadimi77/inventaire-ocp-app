// import { createBrowserRouter } from "react-router-dom";
// import Dashboard from "../page/Dashboard";
import Layout from "../layouts/layout";
// // import Administration from "../page/Administration/Administration";
// import Login from "../page/connexion/Login";
// import Register from "../page/connexion/Register";
// // import Demande_equipement from "../page/DemandesEquipement/Demande_equipement";
// // import Gestion_equipements from "../page/Gestion_des_equipement/Gestion_equipements";
// // import Ticket_incident from "../page/Tichets/Ticket_incident";
// import GuestLayout from "../layouts/GuestLayout";
// import UserLayout from "../layouts/UserLayout";

// export const LOGIN_ROUTE = '/login'
export const DASHBOARD = '/dashboard'
// export const router = createBrowserRouter([
//     {
//         element: <Layout/>,
//         children: [
//             {
//                 path: "/",
//                 element: <Dashboard/>,
//             },
//             {
//                 path: "*",
//                 element: <h1>Page not found</h1>,
//             },
//         ],

//     },
//     {
//         element: <GuestLayout/>,
//         children: [
//             {
//                 path: LOGIN_ROUTE,
//                 element: <Login/>,
//             },
//             {
//                 path: "/register",
//                 element: <Register/>,
//             },
//         ]
//     },
//     {
//         element: <UserLayout/>,
//         children: [
//             {
//                 path: DASHBOARD,
//                 element: <h1>HELLO user </h1>,
//             },
//         ]
//     },

// ]);


import { createBrowserRouter } from "react-router-dom";
// import Layout from "../layout/Layout";
import Dashboard from "../pages/DashboardPage";
import Login from "../pages/connexion/Login";
import Register from "../pages/connexion/Register";
import Equipments from "../pages/EquipmentsPage";
import EquipmentDetail from "../pages/EquipmentDetailPage";
import Requests from "../pages/RequestsPage";
// import NewRequest from "../pages/NewRequestPage";
import Tickets from "../pages/TicketsPage";
import NewTicket from "../pages/NewTicketPage";
import Users from "../pages/admin/UsersPage";
import Roles from "../pages/admin/RolesPage";
import NotFound from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  // Pages publiques (hors layout)
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  // Pages protégées (requièrent Layout)
  {
    path: "/dashboard",
    element: <Dashboard />,
},
{
  path: "/equipments",
  element: <Equipments />,
},
  {
    element: <Layout />,
    children: [
      {
        path: "/equipments/:id",
        element: <EquipmentDetail />,
      },
      {
        path: "/requests",
        element: <Requests />,
      },
    //   {
    //     path: "/requests/new",
    //     element: <NewRequest />,
    //   },
      {
        path: "/tickets",
        element: <Tickets />,
      },
      {
        path: "/tickets/new",
        element: <NewTicket />,
      },
      {
        path: "/admin/users",
        element: <Users />,
      },
      {
        path: "/admin/roles",
        element: <Roles />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
