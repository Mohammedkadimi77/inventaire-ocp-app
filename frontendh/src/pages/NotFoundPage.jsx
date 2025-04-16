import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-xl text-gray-700 mb-2">Page non trouvée</p>
            <p className="text-gray-500 mb-6">
                {`La page que vous cherchez n'existe pas ou a été déplacée.`}
            </p>
            <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 bg-green-500 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
            >
                <FiArrowLeft />
                {`Retour à l'accueil`}
            </button>
        </div>
    );
};

export default NotFoundPage;
