"use client";

import {
	LayoutDashboard,
	Shirt,
	Users,
	Calendar,
	Euro,
	Settings,
	X,
	User,
	ListOrdered,
	HardDriveDownload
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = ({
	isOpen,
	toggle
}: {
	isOpen: boolean;
	toggle: () => void;
}) => {
	const pathname = usePathname();

	const navItems = [
    // {
		// 	href: "/",
		// 	label: "Tableau de bord",
		// 	icon: <LayoutDashboard size={18} />
		// },
		{
			href: "/",
			label: "Tableau de bord",
			icon: <LayoutDashboard size={18} />
		},
		{
			href: "/lots",
			label: "Enregistrement",
			icon: <HardDriveDownload size={18} />
		},
		{
			href: "/commandes",
			label: "Commandes",
			icon: <ListOrdered size={18} />
		},
		{ href: "/users", label: "User", icon: <User size={18} /> },
		{ href: "/customer", label: "Clients", icon: <Users size={18} /> },
		{ href: "/depenses", label: "Depenses", icon: <Euro size={18} /> },
		{
			href: "/parametre",
			label: "Paramètres",
			icon: <Settings size={18} />,
			divider: true
		}
	];

	return (
		<div
			className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transition-transform duration-200 ease-in-out
				${isOpen ? "translate-x-0" : "-translate-x-full"} 
				lg:translate-x-0 lg:transform-none`}
		>
			<div className="p-4 border-b flex justify-between items-center">
				<div className="w-44 h-16 relative">
					<Image
						src="/logo_bigwash.jpg"
						alt="Logo"
						fill
						className="cursor-pointer object-contain"
					/>
				</div>
				<button onClick={toggle} className="lg:hidden">
					<X size={20} />
				</button>
			</div>

			<nav className="p-4">
				<ul className="space-y-2">
					{navItems.map(({ href, label, icon, divider }) =>
						<li
							key={href}
							className={divider ? "pt-4 mt-4 border-t" : ""}
						>
							<Link
								href={href}
								className={`flex items-center p-2 rounded-lg transition-colors ${pathname ===
								href
									? "bg-blue-50 text-blue-600"
									: "hover:bg-gray-100"}`}
							>
								<span className="mr-3">
									{icon}
								</span>
								{label}
							</Link>
						</li>
					)}

					{/* Optionnel : Calendrier (sans href fixe) */}
					{/* <li>
						<a
							href="#"
							className="flex items-center p-2 rounded-lg hover:bg-gray-100"
						>
							<Calendar size={18} className="mr-3" />
							Calendrier
						</a>
					</li> */}
				</ul>
			</nav>
		</div>
	);
};
