import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>


            {/* Header */}
            <header className="border-b-2 text-green-700 bg-white py-4 px-8 flex justify-between items-center shadow">
                <img src='img.png' width={100} alt='OCP' />
                <nav className="space-x-6">
                    <a href="/" className="hover:underline">Accueil</a>
                    <a href="/ajouterproduit" className="hover:underline">Ajouter</a>
                    <a href="/History" className="hover:underline">Historique</a>
                    <a href="/management" className="hover:underline">Gestion des utilisateurs</a>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            {/* Footer */}
            <footer className="bg-green-800 text-white text-center py-4">
                © 2025 OCP Inventory - created by Mohammed Kadimi
            </footer>
        </>
    )
}
