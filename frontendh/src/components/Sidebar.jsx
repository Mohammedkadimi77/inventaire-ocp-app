// src/components/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiBox,
  FiClipboard,
  FiFileText,
  FiUsers,
  FiSettings,
} from "react-icons/fi";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { to: "/", icon: <FiHome />, label: "Dashboard" },
    { to: "/equipments", icon: <FiBox />, label: "Équipements" },
    { to: "/requests", icon: <FiFileText />, label: "Demandes" },
    { to: "/tickets", icon: <FiClipboard />, label: "Tickets" },
    { to: "/admin/users", icon: <FiUsers />, label: "Utilisateurs" },
    { to: "/settings", icon: <FiSettings />, label: "Paramètres" },
  ];

  return (
    <aside className="fixed top-0 left-0 w-64 h-full bg-dark text-black shadow-lg z-50">
      <div className="p-6 text-xl font-bold text-center border-b border-white/10">
        OCP Inventaire
      </div>
      <nav className="mt-6 flex flex-col gap-2 px-4">
        {links.map(({ to, icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition duration-200 text-sm font-medium
              ${location.pathname === to ? "bg-green text-black" : "hover:bg-white/10"}`}
          >
            <span className="text-lg">{icon}</span>
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

// Ajoute dans tailwind.config.js :
// colors: {
//   'dark': '#2e3d49',
//   'green': '#1a8e5f',
//   'blue': '#007c9c'
// }
