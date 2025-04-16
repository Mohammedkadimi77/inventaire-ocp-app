import { Link, Outlet } from 'react-router-dom'

export default function GuestLayout() {
    return (
        <>


            {/* Header */}
            <header className="border-b-2 text-green-700 bg-white py-4 px-8 flex justify-between items-center shadow">
                <img src='img.png' width={100} alt='OCP' />
                <nav className="space-x-6">
                    <Link to="/" className="hover:underline">Accueil</Link>
                    <Link to="/login" className="hover:underline">Login</Link>
                    <Link to="/register" className="hover:underline">Register</Link>
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
