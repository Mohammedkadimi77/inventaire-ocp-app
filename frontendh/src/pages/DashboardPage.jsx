// // src/pages/DashboardPage.jsx
// import { useState } from "react";
// import { FiBell, FiSearch, FiUser, FiMenu } from "react-icons/fi";
// import { Bar, Line } from "react-chartjs-2";
// import Sidebar from "../components/Sidebar";
// import "chart.js/auto";

// const DashboardPage = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   const kpiCards = [
//     { title: "Total Equipements", value: 215, color: "bg-blue-500" },
//     { title: "Demandes en attente", value: 42, color: "bg-yellow-500" },
//     { title: "Tickets ouverts", value: 18, color: "bg-red-500" },
//     { title: "Utilisateurs actifs", value: 56, color: "bg-green-600" },
//   ];

//   const equipmentData = {
//     labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
//     datasets: [
//       {
//         label: "Entrées d'équipements",
//         data: [20, 35, 30, 40, 25, 10, 5],
//         backgroundColor: "#007c9c",
//       },
//     ],
//   };

//   const ticketData = {
//     labels: ["Sem 1", "Sem 2", "Sem 3", "Sem 4"],
//     datasets: [
//       {
//         label: "Tickets ouverts",
//         data: [12, 18, 9, 14],
//         borderColor: "#e53e3e",
//         backgroundColor: "rgba(229,62,62,0.2)",
//         fill: true,
//         tension: 0.4,
//       },
//     ],
//   };

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {sidebarOpen && <Sidebar />}

//       <div className={`flex-1 flex flex-col bg-gray-50 transition-all duration-300 ${sidebarOpen ? 'ml-64' : ''}`}>
//         {/* Topbar */}
//         <div className="flex items-center justify-between p-4 bg-white shadow sticky top-0 z-10">
//           <div className="flex items-center gap-3">
//             <button onClick={toggleSidebar} className="text-2xl text-gray-700">
//               <FiMenu />
//             </button>
//             <h1 className="text-xl font-semibold text-ocp-dark">Dashboard</h1>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="relative">
//               <FiSearch className="absolute top-2.5 left-2 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Rechercher..."
//                 className="pl-8 pr-4 py-2 border rounded-lg text-sm focus:outline-ocp-green"
//               />
//             </div>
//             <FiBell className="text-xl text-gray-600 cursor-pointer" />
//             <FiUser className="text-xl text-gray-600 cursor-pointer" />
//           </div>
//         </div>

//         {/* KPI Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
//           {kpiCards.map((card, index) => (
//             <div key={index} className={`p-6 rounded-lg shadow ${card.color} text-white`}>
//               <h3 className="text-sm uppercase font-medium mb-1">{card.title}</h3>
//               <p className="text-2xl font-bold">{card.value}</p>
//             </div>
//           ))}
//         </div>

//         {/* Charts */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 pb-6">
//           <div className="bg-white p-6 rounded-xl shadow">
//             <h2 className="text-lg font-semibold text-ocp-dark mb-4">Statistiques des équipements</h2>
//             <Bar data={equipmentData} />
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <h2 className="text-lg font-semibold text-ocp-dark mb-4">Tendances des tickets</h2>
//             <Line data={ticketData} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;




// src/pages/DashboardPage.jsx

import { useState } from "react";
import { FiBell, FiSearch, FiUser, FiMenu } from "react-icons/fi";
import { Bar, Line } from "react-chartjs-2";
import Sidebar from "../components/Sidebar";
import "chart.js/auto";

const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const kpiCards = [
    { title: "Total Equipements", value: 215, color: "bg-blue-500" },
    { title: "Demandes en attente", value: 42, color: "bg-yellow-500" },
    { title: "Tickets ouverts", value: 18, color: "bg-red-500" },
    { title: "Utilisateurs actifs", value: 56, color: "bg-green-600" },
  ];

  const equipmentData = {
    labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    datasets: [
      {
        label: "Entrées d'équipements",
        data: [20, 35, 30, 40, 25, 10, 5],
        backgroundColor: "#007c9c",
      },
    ],
  };

  const ticketData = {
    labels: ["Sem 1", "Sem 2", "Sem 3", "Sem 4"],
    datasets: [
      {
        label: "Tickets ouverts",
        data: [12, 18, 9, 14],
        borderColor: "#e53e3e",
        backgroundColor: "rgba(229,62,62,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {sidebarOpen && <Sidebar />}

      <div className={`flex-1 flex flex-col bg-gray-50 transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : ''}`}>
        {/* Topbar */}
        <div className="flex items-center justify-between p-4 bg-white shadow sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button onClick={toggleSidebar} className="text-2xl text-gray-700">
              <FiMenu />
            </button>
            <h1 className="text-xl font-semibold text-ocp-dark">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <FiSearch className="absolute top-2.5 left-2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="pl-8 pr-4 py-2 border rounded-lg text-sm focus:outline-ocp-green"
              />
            </div>
            <FiBell className="text-xl text-gray-600 cursor-pointer" />
            <FiUser className="text-xl text-gray-600 cursor-pointer" />
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {kpiCards.map((card, index) => (
            <div key={index} className={`p-6 rounded-lg shadow ${card.color} text-white`}>
              <h3 className="text-sm uppercase font-medium mb-1">{card.title}</h3>
              <p className="text-2xl font-bold">{card.value}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 px-6 pb-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-ocp-dark mb-4">Statistiques des équipements</h2>
            <Bar data={equipmentData} />
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-ocp-dark mb-4">Tendances des tickets</h2>
            <Line data={ticketData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

