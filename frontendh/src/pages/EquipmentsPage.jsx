// // src/pages/EquipmentsPage.jsx
// import { useEffect, useState } from "react";
// import { FiPlus, FiSearch } from "react-icons/fi";
// import axios from "axios";

// const EquipmentsPage = () => {
//     const eq =[
//         {
//           "id": 1,
//           "name": "PC Dell Latitude 5420",
//           "type": "Ordinateur portable",
//           "serial_number": "DL-5420-789",
//           "status": "disponible",
//           "assigned_to": null
//         },
//         {
//           "id": 2,
//           "name": "Écran Samsung 24\"",
//           "type": "Écran",
//           "serial_number": "SM-24-987654",
//           "status": "affecté",
//           "assigned_to": "Ahmed Benali"
//         },
//         {
//           "id": 3,
//           "name": "Imprimante HP LaserJet Pro",
//           "type": "Imprimante",
//           "serial_number": "HP-LJ-3321",
//           "status": "en_maintenance",
//           "assigned_to": "Service Achat"
//         },
//         {
//           "id": 4,
//           "name": "Switch Cisco 48 Ports",
//           "type": "Réseau",
//           "serial_number": "CS-48-2023",
//           "status": "hors_service",
//           "assigned_to": null
//         },
//         {
//           "id": 5,
//           "name": "PC HP ProDesk 400",
//           "type": "Ordinateur fixe",
//           "serial_number": "HP-PD400-8899",
//           "status": "disponible",
//           "assigned_to": null
//         }
//       ]
//     const [equipments, setEquipments] = useState(eq);
//     const [search, setSearch] = useState("");






//     useEffect(() => {
//         axios.get("http://localhost:8000/api/equipments")
//             .then(res => setEquipments(res.data))
//             .catch(err => console.error(err));
//     }, []);

//     const filtered = equipments.filter(eq =>
//         eq.name.toLowerCase().includes(search.toLowerCase()) ||
//         eq.type.toLowerCase().includes(search.toLowerCase())
//     );

//     return (
//         <div className="p-6">
//             <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
//                 <h1 className="text-2xl font-semibold text-dark">Gestion des équipements</h1>
//                 <div className="flex items-center gap-2">
//                     <div className="relative">
//                         <FiSearch className="absolute left-2 top-2.5 text-gray-400" />
//                         <input
//                             type="text"
//                             placeholder="Rechercher..."
//                             value={search}
//                             onChange={(e) => setSearch(e.target.value)}
//                             className="pl-8 pr-4 py-2 border rounded-lg text-sm"
//                         />
//                     </div>
//                     <button className="bg-green hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
//                         <FiPlus /> Ajouter
//                     </button>
//                 </div>
//             </div>

//             <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white rounded-lg shadow">
//                     <thead>
//                         <tr className="bg-gray-100 text-left text-sm text-gray-700">
//                             <th className="p-3">Nom</th>
//                             <th className="p-3">Type</th>
//                             <th className="p-3">Numéro de série</th>
//                             <th className="p-3">État</th>
//                             <th className="p-3">Affecté à</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filtered.length > 0 ? filtered.map((eq, idx) => (
//                             <tr key={idx} className="border-t text-sm hover:bg-gray-50">
//                                 <td className="p-3 font-medium text-dark">{eq.name}</td>
//                                 <td className="p-3">{eq.type}</td>
//                                 <td className="p-3">{eq.serial_number}</td>
//                                 <td className="p-3">
//                                     <span className={`px-2 py-1 rounded-full text-xs font-medium ${eq.status === "disponible" ? "bg-green-100 text-green-600" :
//                                             eq.status === "affecté" ? "bg-blue-100 text-blue-600" :
//                                                 eq.status === "en_maintenance" ? "bg-yellow-100 text-yellow-600" :
//                                                     "bg-red-100 text-red-600"
//                                         }`}>
//                                         {eq.status}
//                                     </span>
//                                 </td>
//                                 <td className="p-3">{eq.assigned_to || "-"}</td>
//                             </tr>
//                         )) : (
//                             <tr>
//                                 <td colSpan="5" className="p-4 text-center text-gray-400">Aucun équipement trouvé</td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default EquipmentsPage;




// src/pages/EquipmentsPage.jsx
// import { useEffect, useState } from "react";
// import { FiPlus,FiMenu, FiSearch, FiEdit, FiTrash2 } from "react-icons/fi";
// import axios from "axios";
// import Sidebar from "../components/Sidebar";


// const EquipmentsPage = () => {
//     const eq = [
//         {
//             "id": 1,
//             "name": "PC Dell Latitude 5420",
//             "type": "Ordinateur portable",
//             "serial_number": "DL-5420-789",
//             "status": "disponible",
//             "assigned_to": null
//         },
//         {
//             "id": 2,
//             "name": "Écran Samsung 24\"",
//             "type": "Écran",
//             "serial_number": "SM-24-987654",
//             "status": "affecté",
//             "assigned_to": "Ahmed Benali"
//         },
//         {
//             "id": 3,
//             "name": "Imprimante HP LaserJet Pro",
//             "type": "Imprimante",
//             "serial_number": "HP-LJ-3321",
//             "status": "en_maintenance",
//             "assigned_to": "Service Achat"
//         },
//         {
//             "id": 4,
//             "name": "Switch Cisco 48 Ports",
//             "type": "Réseau",
//             "serial_number": "CS-48-2023",
//             "status": "hors_service",
//             "assigned_to": null
//         },
//         {
//             "id": 2,
//             "name": "Écran Samsung 24\"",
//             "type": "Écran",
//             "serial_number": "SM-24-987654",
//             "status": "affecté",
//             "assigned_to": "Ahmed Benali"
//         },
//         {
//             "id": 3,
//             "name": "Imprimante HP LaserJet Pro",
//             "type": "Imprimante",
//             "serial_number": "HP-LJ-3321",
//             "status": "en_maintenance",
//             "assigned_to": "Service Achat"
//         },
//         {
//             "id": 4,
//             "name": "Switch Cisco 48 Ports",
//             "type": "Réseau",
//             "serial_number": "CS-48-2023",
//             "status": "hors_service",
//             "assigned_to": null
//         },
//         {
//             "id": 2,
//             "name": "Écran Samsung 24\"",
//             "type": "Écran",
//             "serial_number": "SM-24-987654",
//             "status": "affecté",
//             "assigned_to": "Ahmed Benali"
//         },
//         {
//             "id": 3,
//             "name": "Imprimante HP LaserJet Pro",
//             "type": "Imprimante",
//             "serial_number": "HP-LJ-3321",
//             "status": "en_maintenance",
//             "assigned_to": "Service Achat"
//         },
//         {
//             "id": 4,
//             "name": "Switch Cisco 48 Ports",
//             "type": "Réseau",
//             "serial_number": "CS-48-2023",
//             "status": "hors_service",
//             "assigned_to": null
//         },
//         {
//             "id": 2,
//             "name": "Écran Samsung 24\"",
//             "type": "Écran",
//             "serial_number": "SM-24-987654",
//             "status": "affecté",
//             "assigned_to": "Ahmed Benali"
//         },
//         {
//             "id": 3,
//             "name": "Imprimante HP LaserJet Pro",
//             "type": "Imprimante",
//             "serial_number": "HP-LJ-3321",
//             "status": "en_maintenance",
//             "assigned_to": "Service Achat"
//         },
//         {
//             "id": 4,
//             "name": "Switch Cisco 48 Ports",
//             "type": "Réseau",
//             "serial_number": "CS-48-2023",
//             "status": "hors_service",
//             "assigned_to": null
//         },
//         {
//             "id": 5,
//             "name": "PC HP ProDesk 400",
//             "type": "Ordinateur fixe",
//             "serial_number": "HP-PD400-8899",
//             "status": "disponible",
//             "assigned_to": null
//         }
//     ]
//     const [equipments, setEquipments] = useState(eq);
//     const [search, setSearch] = useState("");
//     const [showForm, setShowForm] = useState(false);
//     const [newEquipment, setNewEquipment] = useState({
//         name: "",
//         type: "",
//         serial_number: "",
//         status: "disponible",
//         assigned_to: ""
//     });

//     const [sidebarOpen, setSidebarOpen] = useState(true);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//     useEffect(() => {
//         axios.get("http://localhost:8000/api/equipments")
//             .then(res => setEquipments(res.data))
//             .catch(err => console.error(err));
//     }, []);

//     const handleAdd = () => {
//         axios.post("http://localhost:8000/api/equipments", newEquipment)
//             .then(res => {
//                 setEquipments(prev => [...prev, res.data]);
//                 setShowForm(false);
//                 setNewEquipment({ name: "", type: "", serial_number: "", status: "disponible", assigned_to: "" });
//             });
//     };

//     const handleDelete = (id) => {
//         axios.delete(`http://localhost:8000/api/equipments/${id}`)
//             .then(() => {
//                 setEquipments(prev => prev.filter(e => e.id !== id));
//             });
//     };

//     const filtered = equipments.filter(eq =>
//         eq.name.toLowerCase().includes(search.toLowerCase()) ||
//         eq.type.toLowerCase().includes(search.toLowerCase())
//     );

//     return (
//         <div className="p-4 md:p-6">
//               {sidebarOpen && <Sidebar />}

// <div className={`flex-1 flex flex-col bg-gray-50 transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : ''}`}>

//             <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
//                 <button onClick={toggleSidebar} className="text-2xl text-gray-700">
//                               <FiMenu />
//                             </button>
//                 <h1 className="text-2xl font-semibold text-dark">Gestion des équipements</h1>
//                 <div className="flex items-center gap-2 w-full md:w-auto">
//                     <div className="relative w-full md:w-auto">
//                         <FiSearch className="absolute left-2 top-2.5 text-gray-400" />
//                         <input
//                             type="text"
//                             placeholder="Rechercher..."
//                             value={search}
//                             onChange={(e) => setSearch(e.target.value)}
//                             className="pl-8 pr-4 py-2 border rounded-lg text-sm w-full"
//                         />
//                     </div>
//                     <button onClick={() => setShowForm(!showForm)} className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
//                         <FiPlus /> Ajouter
//                     </button>
//                 </div>
//             </div>

//             {showForm && (
//                 <div className="bg-white p-6 rounded-lg shadow mb-6 w-full max-w-2xl mx-auto">
//                     <h2 className="text-lg font-semibold text-gray-800 mb-4">Ajouter un équipement</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <input type="text" placeholder="Nom" className="border p-2 rounded" value={newEquipment.name} onChange={e => setNewEquipment({ ...newEquipment, name: e.target.value })} />
//                         <input type="text" placeholder="Type" className="border p-2 rounded" value={newEquipment.type} onChange={e => setNewEquipment({ ...newEquipment, type: e.target.value })} />
//                         <input type="text" placeholder="Numéro de série" className="border p-2 rounded" value={newEquipment.serial_number} onChange={e => setNewEquipment({ ...newEquipment, serial_number: e.target.value })} />
//                         <input type="text" placeholder="Affecté à (optionnel)" className="border p-2 rounded" value={newEquipment.assigned_to} onChange={e => setNewEquipment({ ...newEquipment, assigned_to: e.target.value })} />
//                     </div>
//                     <button onClick={handleAdd} className="mt-4 bg-gray-500 hover:bg-green-700 text-white px-4 py-2 rounded">Valider</button>
//                 </div>
//             )}

//             <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white rounded-lg shadow text-sm">
//                     <thead>
//                         <tr className="bg-gray-100 text-left text-gray-700">
//                             <th className="p-3">Nom</th>
//                             <th className="p-3">Type</th>
//                             <th className="p-3">Numéro de série</th>
//                             <th className="p-3">État</th>
//                             <th className="p-3">Affecté à</th>
//                             <th className="p-3">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filtered.length > 0 ? filtered.map((eq, idx) => (
//                             <tr key={idx} className="border-t hover:bg-gray-50">
//                                 <td className="p-3 font-medium text-dark">{eq.name}</td>
//                                 <td className="p-3">{eq.type}</td>
//                                 <td className="p-3">{eq.serial_number}</td>
//                                 <td className="p-3">
//                                     <span className={`px-2 py-1 rounded-full text-xs font-medium ${eq.status === "disponible" ? "bg-green-100 text-green-600" :
//                                             eq.status === "affecté" ? "bg-blue-100 text-blue-600" :
//                                                 eq.status === "en_maintenance" ? "bg-yellow-100 text-yellow-600" :
//                                                     "bg-red-100 text-red-600"
//                                         }`}>
//                                         {eq.status}
//                                     </span>
//                                 </td>
//                                 <td className="p-3">{eq.assigned_to || "-"}</td>
//                                 <td className="p-3 flex gap-2">
//                                     <button className="text-blue-600 hover:text-blue-800" title="Modifier"><FiEdit /></button>
//                                     <button onClick={() => handleDelete(eq.id)} className="text-red-600 hover:text-red-800" title="Supprimer"><FiTrash2 /></button>
//                                 </td>
//                             </tr>
//                         )) : (
//                             <tr>
//                                 <td colSpan="6" className="p-4 text-center text-gray-400">Aucun équipement trouvé</td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//         </div>
//     );
// };

// export default EquipmentsPage;


// src/pages/EquipmentsPage.jsx
import { useEffect, useState } from "react";
import { FiPlus, FiSearch, FiEdit, FiTrash2 } from "react-icons/fi";
import axios from "axios";

const EquipmentsPage = () => {
        const eq = [
        {
            "id": 1,
            "name": "PC Dell Latitude 5420",
            "type": "Ordinateur portable",
            "serial_number": "DL-5420-789",
            "status": "disponible",
            "assigned_to": null
        },
        {
            "id": 2,
            "name": "Écran Samsung 24\"",
            "type": "Écran",
            "serial_number": "SM-24-987654",
            "status": "affecté",
            "assigned_to": "Ahmed Benali"
        },
        {
            "id": 3,
            "name": "Imprimante HP LaserJet Pro",
            "type": "Imprimante",
            "serial_number": "HP-LJ-3321",
            "status": "en_maintenance",
            "assigned_to": "Service Achat"
        },
        {
            "id": 4,
            "name": "Switch Cisco 48 Ports",
            "type": "Réseau",
            "serial_number": "CS-48-2023",
            "status": "hors_service",
            "assigned_to": null
        },
        {
            "id": 2,
            "name": "Écran Samsung 24\"",
            "type": "Écran",
            "serial_number": "SM-24-987654",
            "status": "affecté",
            "assigned_to": "Ahmed Benali"
        },
        {
            "id": 3,
            "name": "Imprimante HP LaserJet Pro",
            "type": "Imprimante",
            "serial_number": "HP-LJ-3321",
            "status": "en_maintenance",
            "assigned_to": "Service Achat"
        },
        {
            "id": 4,
            "name": "Switch Cisco 48 Ports",
            "type": "Réseau",
            "serial_number": "CS-48-2023",
            "status": "hors_service",
            "assigned_to": null
        },
        {
            "id": 2,
            "name": "Écran Samsung 24\"",
            "type": "Écran",
            "serial_number": "SM-24-987654",
            "status": "affecté",
            "assigned_to": "Ahmed Benali"
        },
        {
            "id": 3,
            "name": "Imprimante HP LaserJet Pro",
            "type": "Imprimante",
            "serial_number": "HP-LJ-3321",
            "status": "en_maintenance",
            "assigned_to": "Service Achat"
        },
        {
            "id": 4,
            "name": "Switch Cisco 48 Ports",
            "type": "Réseau",
            "serial_number": "CS-48-2023",
            "status": "hors_service",
            "assigned_to": null
        },
        {
            "id": 2,
            "name": "Écran Samsung 24\"",
            "type": "Écran",
            "serial_number": "SM-24-987654",
            "status": "affecté",
            "assigned_to": "Ahmed Benali"
        },
        {
            "id": 3,
            "name": "Imprimante HP LaserJet Pro",
            "type": "Imprimante",
            "serial_number": "HP-LJ-3321",
            "status": "en_maintenance",
            "assigned_to": "Service Achat"
        },
        {
            "id": 4,
            "name": "Switch Cisco 48 Ports",
            "type": "Réseau",
            "serial_number": "CS-48-2023",
            "status": "hors_service",
            "assigned_to": null
        },
        {
            "id": 5,
            "name": "PC HP ProDesk 400",
            "type": "Ordinateur fixe",
            "serial_number": "HP-PD400-8899",
            "status": "disponible",
            "assigned_to": null
        }
    ]
  const [equipments, setEquipments] = useState(eq);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editEquipment, setEditEquipment] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);

  const [newEquipment, setNewEquipment] = useState({
    name: "",
    type: "",
    serial_number: "",
    status: "disponible",
    assigned_to: ""
  });

  useEffect(() => {
    axios.get("http://localhost:8000/api/equipments")
      .then(res => setEquipments(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleAdd = () => {
    axios.post("http://localhost:8000/api/equipments", newEquipment)
      .then(res => {
        setEquipments(prev => [...prev, res.data]);
        setShowForm(false);
        setNewEquipment({ name: "", type: "", serial_number: "", status: "disponible", assigned_to: "" });
      });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:8000/api/equipments/${editEquipment.id}`, editEquipment)
      .then(() => {
        setEquipments(prev => prev.map(eq => eq.id === editEquipment.id ? editEquipment : eq));
        setEditEquipment(null);
      });
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/equipments/${confirmDelete.id}`)
      .then(() => {
        setEquipments(prev => prev.filter(e => e.id !== confirmDelete.id));
        setConfirmDelete(null);
      });
  };

  const filtered = equipments.filter(eq =>
    eq.name.toLowerCase().includes(search.toLowerCase()) ||
    eq.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-semibold text-dark">Gestion des équipements</h1>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-auto">
            <FiSearch className="absolute left-2 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 pr-4 py-2 border rounded-lg text-sm w-full"
            />
          </div>
          <button onClick={() => setShowForm(!showForm)} className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <FiPlus /> Ajouter
          </button>
        </div>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow mb-6 w-full max-w-2xl mx-auto">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Ajouter un équipement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Nom" className="border p-2 rounded" value={newEquipment.name} onChange={e => setNewEquipment({ ...newEquipment, name: e.target.value })} />
            <input type="text" placeholder="Type" className="border p-2 rounded" value={newEquipment.type} onChange={e => setNewEquipment({ ...newEquipment, type: e.target.value })} />
            <input type="text" placeholder="Numéro de série" className="border p-2 rounded" value={newEquipment.serial_number} onChange={e => setNewEquipment({ ...newEquipment, serial_number: e.target.value })} />
            <input type="text" placeholder="Affecté à (optionnel)" className="border p-2 rounded" value={newEquipment.assigned_to} onChange={e => setNewEquipment({ ...newEquipment, assigned_to: e.target.value })} />
          </div>
          <button onClick={handleAdd} className="mt-4 bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded">Valider</button>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow text-sm">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700">
              <th className="p-3">Nom</th>
              <th className="p-3">Type</th>
              <th className="p-3">Numéro de série</th>
              <th className="p-3">État</th>
              <th className="p-3">Affecté à</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? filtered.map((eq, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                <td className="p-3 font-medium text-dark">{eq.name}</td>
                <td className="p-3">{eq.type}</td>
                <td className="p-3">{eq.serial_number}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    eq.status === "disponible" ? "bg-green-100 text-green-600" :
                    eq.status === "affecté" ? "bg-blue-100 text-blue-600" :
                    eq.status === "en_maintenance" ? "bg-yellow-100 text-yellow-600" :
                    "bg-red-100 text-red-600"
                  }`}>
                    {eq.status}
                  </span>
                </td>
                <td className="p-3">{eq.assigned_to || "-"}</td>
                <td className="p-3 flex gap-2">
                  <button onClick={() => setEditEquipment(eq)} className="text-blue-600 hover:text-blue-800" title="Modifier"><FiEdit /></button>
                  <button onClick={() => setConfirmDelete(eq)} className="text-red-600 hover:text-red-800" title="Supprimer"><FiTrash2 /></button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-400">Aucun équipement trouvé</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal modification */}
      {editEquipment && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">{`Modifier l'équipement`}</h2>
            <div className="grid grid-cols-1 gap-3">
              <input type="text" value={editEquipment.name} onChange={(e) => setEditEquipment({ ...editEquipment, name: e.target.value })} className="border p-2 rounded" />
              <input type="text" value={editEquipment.type} onChange={(e) => setEditEquipment({ ...editEquipment, type: e.target.value })} className="border p-2 rounded" />
              <input type="text" value={editEquipment.serial_number} onChange={(e) => setEditEquipment({ ...editEquipment, serial_number: e.target.value })} className="border p-2 rounded" />
              <input type="text" value={editEquipment.assigned_to} onChange={(e) => setEditEquipment({ ...editEquipment, assigned_to: e.target.value })} className="border p-2 rounded" />
            </div>
            <div className="mt-4 flex justify-end gap-3">
              <button onClick={() => setEditEquipment(null)} className="px-4 py-2 bg-gray-200 rounded">Annuler</button>
              <button onClick={handleUpdate} className="px-4 py-2 bg-green-500 text-white rounded">Enregistrer</button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation suppression */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-sm">
            <h2 className="text-lg font-semibold mb-4">Confirmer la suppression</h2>
            <p className="mb-6">Voulez-vous vraiment supprimer l’équipement <strong>{confirmDelete.name}</strong> ?</p>
            <div className="flex justify-center gap-4">
              <button onClick={() => setConfirmDelete(null)} className="px-4 py-2 bg-gray-200 rounded">Annuler</button>
              <button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded">Supprimer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EquipmentsPage;
