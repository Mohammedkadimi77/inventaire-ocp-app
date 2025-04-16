
// src/pages/RequestsPage.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { FiPlus, FiSearch } from "react-icons/fi";

const RequestsPage = () => {
  const [requests, setRequests] = useState([
    {
      "id": 1,
      "equipment_type": "Ordinateur portable",
      "justification": "Besoin pour un nouveau projet de développement",
      "status": "en_attente",
      "created_at": "2024-12-01T10:00:00Z",
      "user_id": 7
    },
    {
      "id": 2,
      "equipment_type": "Imprimante",
      "justification": "Remplacement de l'équipement défectueux",
      "status": "approuvée",
      "created_at": "2024-11-27T14:30:00Z",
      "user_id": 5
    },
    {
      "id": 3,
      "equipment_type": "Écran 27 pouces",
      "justification": "Confort visuel pour le travail de design graphique",
      "status": "refusée",
      "created_at": "2024-11-20T09:15:00Z",
      "user_id": 9
    },
    {
      "id": 4,
      "equipment_type": "Clavier ergonomique",
      "justification": "Prévention des TMS (troubles musculosquelettiques)",
      "status": "en_attente",
      "created_at": "2024-12-03T08:45:00Z",
      "user_id": 12
    }
  ]
  );
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newRequest, setNewRequest] = useState({
    equipment_type: "",
    justification: "",
    status: "en_attente"
  });

  useEffect(() => {
    axios.get("http://localhost:8000/api/requests")
      .then(res => setRequests(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleAdd = () => {
    axios.post("http://localhost:8000/api/requests", newRequest)
      .then(res => {
        setRequests(prev => [...prev, res.data]);
        setNewRequest({ equipment_type: "", justification: "", status: "en_attente" });
        setShowForm(false);
      });
  };

  const filtered = requests.filter(rq =>
    rq.equipment_type.toLowerCase().includes(search.toLowerCase()) ||
    rq.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-semibold text-dark">Demandes de Matériel</h1>
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
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Nouvelle demande</h2>
          <div className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="Type de matériel" className="border p-2 rounded" value={newRequest.equipment_type} onChange={e => setNewRequest({ ...newRequest, equipment_type: e.target.value })} />
            <textarea placeholder="Justification" className="border p-2 rounded" value={newRequest.justification} onChange={e => setNewRequest({ ...newRequest, justification: e.target.value })}></textarea>
          </div>
          <button onClick={handleAdd} className="mt-4 bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded">Soumettre</button>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow text-sm">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700">
              <th className="p-3">Type de Matériel</th>
              <th className="p-3">Justification</th>
              <th className="p-3">Statut</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? filtered.map((rq, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                <td className="p-3 font-medium text-dark">{rq.equipment_type}</td>
                <td className="p-3">{rq.justification}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    rq.status === "en_attente" ? "bg-yellow-100 text-yellow-600" :
                    rq.status === "approuvée" ? "bg-green-100 text-green-600" :
                    rq.status === "refusée" ? "bg-red-100 text-red-600" :
                    "bg-gray-100 text-gray-600"
                  }`}>
                    {rq.status}
                  </span>
                </td>
                <td className="p-3">{new Date(rq.created_at).toLocaleDateString()}</td>
              </tr>
            )) : (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-400">Aucune demande trouvée</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestsPage;
