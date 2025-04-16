import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FiArrowLeft } from "react-icons/fi";

const EquipmentDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [equipment, setEquipment] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/equipments/${id}`)
      .then(res => setEquipment(res.data))
      .catch(() => navigate("/equipments")); // Redirection si erreur
  }, [id, navigate]);

  if (!equipment) {
    return (
      <div className="p-6 text-center text-gray-500">Chargement des détails...</div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <button onClick={() => navigate(-1)} className="flex items-center text-green-500 hover:underline mb-6">
        <FiArrowLeft className="mr-2" /> Retour
      </button>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-dark mb-4">{equipment.name}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <p className="font-medium">Type :</p>
            <p>{equipment.type}</p>
          </div>
          <div>
            <p className="font-medium">Numéro de série :</p>
            <p>{equipment.serial_number}</p>
          </div>
          <div>
            <p className="font-medium">État :</p>
            <p>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                equipment.status === "disponible" ? "bg-green-100 text-green-600" :
                equipment.status === "affecté" ? "bg-blue-100 text-blue-600" :
                equipment.status === "en_maintenance" ? "bg-yellow-100 text-yellow-600" :
                "bg-red-100 text-red-600"
              }`}>
                {equipment.status}
              </span>
            </p>
          </div>
          <div>
            <p className="font-medium">Affecté à :</p>
            <p>{equipment.assigned_to || "Non affecté"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetailPage;
