'use client';

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, isSignedIn, isLoaded } = useUser();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} />

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-x-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex items-center justify-between lg:justify-end">
          {/* Burger Menu for mobile */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden"
          >
            <Menu size={24} />
          </button>

          {/* User Info or Login */}
          <div className="flex items-center space-x-4">
            {isLoaded ? (
              isSignedIn ? (
                <>
                  <span className="text-sm">Bienvenue, {user?.fullName}</span>
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <UserButton />
                  </div>
                </>
              ) : (
                <Link href="/sign-in" className="text-sm text-blue-600 hover:underline">
                  Connexion
                </Link>
              )
            ) : null}
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;






// 'use client';

// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import { Sidebar } from './Sidebar'; // On extrait la sidebar dans un composant séparé (voir plus bas)
// import { UserButton, useUser } from "@clerk/nextjs";

// type DashboardLayoutProps = {
//   children: React.ReactNode;
// };

// const DashboardLayout = ({ children }: DashboardLayoutProps) => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const { user, isSignedIn, isLoaded } = useUser();

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       <Sidebar isOpen={sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} />

//       {sidebarOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden" 
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       <div className="flex-1 overflow-x-hidden">
//         <header className="bg-white shadow-sm p-4 flex items-center justify-between lg:justify-end">
//   <button 
//     onClick={() => setSidebarOpen(true)}
//     className="lg:hidden"
//   >
//     <Menu size={24} />
//   </button>

//   <div className="flex items-center space-x-4">
//     {isLoaded && isSignedIn ? (
//       <>
//         <span className="text-sm">Bienvenue, {user?.fullName}</span>
//         <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
//           <UserButton />
//         </div>
//       </>
//     ) : (
//       <a href="/sign-in" className="text-sm text-blue-600 hover:underline">
//         Connexion
//       </a>
//     )}
//   </div>
// </header>

//         <main className="p-4 md:p-6">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
