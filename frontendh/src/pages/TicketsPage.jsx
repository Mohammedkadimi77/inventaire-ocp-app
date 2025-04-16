// src/pages/TicketsPage.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { FiPlus, FiSearch } from "react-icons/fi";

const TicketsPage = () => {
  const [tickets, setTickets] = useState([
    {
      "id": 1,
      "equipment_id": 12,
      "description": "L'ordinateur ne démarre plus après une mise à jour.",
      "status": "ouvert",
      "created_at": "2024-12-01T10:30:00Z",
      "user_id": 4
    },
    {
      "id": 2,
      "equipment_id": 8,
      "description": "Problème d'impression : les feuilles sortent vides.",
      "status": "en_cours",
      "created_at": "2024-11-28T09:15:00Z",
      "user_id": 7
    },
    {
      "id": 3,
      "equipment_id": 5,
      "description": "L’écran clignote et affiche des bandes colorées.",
      "status": "résolu",
      "created_at": "2024-11-26T14:50:00Z",
      "user_id": 5
    },
    {
      "id": 4,
      "equipment_id": 10,
      "description": "Le clavier ne répond plus après 10 minutes d’utilisation.",
      "status": "ouvert",
      "created_at": "2024-12-03T08:20:00Z",
      "user_id": 6
    }
  ]
  );
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newTicket, setNewTicket] = useState({
    equipment_id: "",
    description: "",
    status: "ouvert"
  });

  useEffect(() => {
    axios.get("http://localhost:8000/api/tickets")
      .then(res => setTickets(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleAdd = () => {
    axios.post("http://localhost:8000/api/tickets", newTicket)
      .then(res => {
        setTickets(prev => [...prev, res.data]);
        setNewTicket({ equipment_id: "", description: "", status: "ouvert" });
        setShowForm(false);
      });
  };

  const filtered = tickets.filter(tk =>
    tk.description.toLowerCase().includes(search.toLowerCase()) ||
    tk.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-semibold text-ocp-dark">{`Tickets d'incident`}</h1>
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
          <button onClick={() => setShowForm(!showForm)} className="bg-ocp-green hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <FiPlus /> Ajouter
          </button>
        </div>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow mb-6 w-full max-w-2xl mx-auto">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Nouveau ticket</h2>
          <div className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="ID Équipement" className="border p-2 rounded" value={newTicket.equipment_id} onChange={e => setNewTicket({ ...newTicket, equipment_id: e.target.value })} />
            <textarea placeholder="Description du problème" className="border p-2 rounded" value={newTicket.description} onChange={e => setNewTicket({ ...newTicket, description: e.target.value })}></textarea>
          </div>
          <button onClick={handleAdd} className="mt-4 bg-ocp-green hover:bg-green-700 text-white px-4 py-2 rounded">Soumettre</button>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow text-sm">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700">
              <th className="p-3">Équipement ID</th>
              <th className="p-3">Description</th>
              <th className="p-3">Statut</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? filtered.map((tk, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                <td className="p-3 font-medium text-ocp-dark">{tk.equipment_id}</td>
                <td className="p-3">{tk.description}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    tk.status === "ouvert" ? "bg-yellow-100 text-yellow-600" :
                    tk.status === "en_cours" ? "bg-blue-100 text-blue-600" :
                    tk.status === "résolu" ? "bg-green-100 text-green-600" :
                    "bg-gray-100 text-gray-600"
                  }`}>
                    {tk.status}
                  </span>
                </td>
                <td className="p-3">{new Date(tk.created_at).toLocaleDateString()}</td>
              </tr>
            )) : (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-400">Aucun ticket trouvé</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketsPage;
