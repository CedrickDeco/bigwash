"use client";

import { useState } from "react";
import { Menu, X, LayoutDashboard, Users, Settings, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	const { isLoaded, isSignedIn, user } = useUser();
	const pathname = usePathname();

	const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

	return (
		<div className="flex h-screen">
			{/* Sidebar */}
			<aside
				className={`
        fixed z-40 inset-y-0 left-0 w-64 bg-white shadow-lg transform
        transition-transform duration-200 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:shadow-none
      `}
			>
				<div className="p-4 border-b flex justify-between items-center">
					<div className="w-40 h-12 relative">
						<Image
							src="/logo_bigwash.jpg"
							alt="Logo"
							fill
							className="object-contain"
						/>
					</div>
					<button onClick={toggleSidebar} className="lg:hidden">
						<X size={20} />
					</button>
				</div>
				<nav className="p-4 space-y-2">
					<Link
						href="/dashboard"
						className="flex items-center p-2 rounded hover:bg-gray-100"
					>
						<LayoutDashboard className="mr-3" size={18} />
						Dashboard
					</Link>
					<Link
						href="/customer"
						className="flex items-center p-2 rounded hover:bg-gray-100"
					>
						<Users className="mr-3" size={18} />
						Clients
					</Link>
					<Link
						href="/users"
						className="flex items-center p-2 rounded hover:bg-gray-100"
					>
						<User className="mr-3" size={18} />
						Utilisateurs
					</Link>
					<Link
						href="/parametre"
						className="flex items-center p-2 rounded hover:bg-gray-100"
					>
						<Settings className="mr-3" size={18} />
						Paramètres
					</Link>
				</nav>
			</aside>

			{/* Main content area */}
			<div className="flex-1 flex flex-col overflow-hidden">
				{/* Navbar */}
				<header className="bg-white shadow px-4 py-2 flex items-center justify-between lg:justify-end">
					<button onClick={toggleSidebar} className="lg:hidden">
						<Menu size={24} />
					</button>
					<div className="flex items-center space-x-4">
						{isLoaded && isSignedIn && <UserButton />}
						{!isSignedIn &&
							<Link
								href="/sign-in"
								className="text-blue-600 hover:underline"
							>
								Connexion
							</Link>}
					</div>
				</header>

				{/* Page content */}
				<main className="p-4 overflow-auto">
					{children}
				</main>
			</div>
		</div>
	);
}
