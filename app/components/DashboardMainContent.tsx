"use client";

import { useState, useEffect, useMemo } from "react";
import { subDays, format } from "date-fns";
import { fr } from "date-fns/locale";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";
import { Shirt, Clock, Euro, Users } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

type MetricCardProps = {
  title: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
};

type OrderData = {
  date: string;
  total: number;
  completed: number;
};

type ServiceDistribution = {
  service: string;
  value: number;
  color: string;
};

const serviceData: ServiceDistribution[] = [
  { service: "Nettoyage simple", value: 45, color: "#3b82f6" },
  { service: "Repassage", value: 25, color: "#10b981" },
  { service: "Nettoyage approfondi", value: 15, color: "#f59e0b" },
  { service: "Teinturerie", value: 10, color: "#ef4444" }
];

const avgCompletionTime = 2.5;

const MetricCard = ({ title, value, change, icon }: MetricCardProps) => {
  const isPositive = change >= 0;

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <div className="p-1 rounded-lg bg-gray-100">{icon}</div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xl font-bold text-gray-900">{value}</p>
          <div className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            <span className="text-xs font-medium">
              {isPositive ? '+' : ''}{change}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardMainContent = () => {
  const [timeRange, setTimeRange] = useState("7j");
  const [orderData, setOrderData] = useState<OrderData[]>([]);

  useEffect(() => {
    const days = timeRange === "7j" ? 7 : timeRange === "30j" ? 30 : 90;
    const data = Array.from({ length: days }, (_, i) => {
      const date = subDays(new Date(), days - i - 1);
      return {
        date: format(date, "dd MMM", { locale: fr }),
        total: Math.floor(Math.random() * 50) + 20,
        completed: Math.floor(Math.random() * 40) + 10
      };
    });
    setOrderData(data);
  }, [timeRange]);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const
      }
    },
    maintainAspectRatio: false
  };

  const ordersBarData = useMemo(() => ({
    labels: orderData.map((data) => data.date),
    datasets: [
      {
        label: "Commandes totales",
        data: orderData.map((data) => data.total),
        backgroundColor: "rgba(59, 130, 246, 0.7)"
      },
      {
        label: "Commandes terminées",
        data: orderData.map((data) => data.completed),
        backgroundColor: "rgba(16, 185, 129, 0.7)"
      }
    ]
  }), [orderData]);

  const servicesPieData = {
    labels: serviceData.map((data) => data.service),
    datasets: [
      {
        data: serviceData.map((data) => data.value),
        backgroundColor: serviceData.map((data) => data.color),
        borderWidth: 1
      }
    ]
  };

  return (
    <main className="p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-600">Aperçu des performances du pressing</p>
      </div>

      <div className="mb-6 flex space-x-2 overflow-x-auto pb-2">
        {["7j", "30j", "90j"].map((range) => (
          <button
            key={range}
            onClick={() => setTimeRange(range)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
              timeRange === range
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {range === "7j"
              ? "7 jours"
              : range === "30j"
              ? "30 jours"
              : "90 jours"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard
          title="Commandes aujourd'hui"
          value={orderData.at(-1)?.total ?? "--"}
          change={5.2}
          icon={<Shirt size={18} className="text-blue-500" />}
        />
        <MetricCard
          title="Temps moyen"
          value={`${avgCompletionTime}h`}
          change={-1.8}
          icon={<Clock size={18} className="text-orange-500" />}
        />
        <MetricCard
          title="Chiffre d'affaires"
          value="2 845 €"
          change={12.4}
          icon={<Euro size={18} className="text-green-500" />}
        />
        <MetricCard
          title="Nouveaux clients"
          value="18"
          change={8.3}
          icon={<Users size={18} className="text-purple-500" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">
            Activité des commandes
          </h2>
          <div className="h-80">
            <Bar options={chartOptions} data={ordersBarData} />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">
            Répartition des services
          </h2>
          <div className="h-80">
            <Pie options={chartOptions} data={servicesPieData} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Dernières commandes</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">N°</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3].map((i) => (
                <tr key={i}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#PR-124{i}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Client {i}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      i === 1 ? "bg-green-100 text-green-800" :
                      i === 2 ? "bg-yellow-100 text-yellow-800" :
                      "bg-red-100 text-red-800"}`}>
                      {i === 1 ? "Terminé" : i === 2 ? "En cours" : "En attente"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{45 + i * 15} €</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;




// "use client";

// import { useState, useMemo, useEffect } from "react";
// import { subDays, format } from "date-fns";
// import { fr } from "date-fns/locale";
// import { Bar, Pie } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement
// } from "chart.js";
// import { Shirt, Clock, Euro, Users } from "lucide-react";

// // ✅ Enregistrement des composants nécessaires
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement
// );

// type MetricCardProps = {
//   title: string;
//   value: string | number;
//   change: number;
//   icon: React.ReactNode;
// };

// type OrderData = {
//   date: string;
//   total: number;
//   completed: number;
// };

// type ServiceDistribution = {
//   service: string;
//   value: number;
//   color: string;
// };

// // ✅ Données simulées
// const generateOrderData = (days: number): OrderData[] =>
//   Array.from({ length: days }, (_, i) => {
//     const date = subDays(new Date(), days - i - 1);
//     return {
//       date: format(date, "dd MMM", { locale: fr }),
//       total: Math.floor(Math.random() * 50) + 20,
//       completed: Math.floor(Math.random() * 40) + 10
//     };
//   });

// const serviceData: ServiceDistribution[] = [
//   { service: "Nettoyage simple", value: 45, color: "#3b82f6" },
//   { service: "Repassage", value: 25, color: "#10b981" },
//   { service: "Nettoyage approfondi", value: 15, color: "#f59e0b" },
//   { service: "Teinturerie", value: 10, color: "#ef4444" }
// ];

// const avgCompletionTime = 2.5;

// const MetricCard = ({ title, value, change, icon }: MetricCardProps) => {
//   const isPositive = change >= 0;

//   return (
//     <div className="bg-white rounded-lg shadow p-4 flex flex-col">
//       <div className="flex justify-between items-center mb-2">
//         <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
//         <div className="p-1 rounded-lg bg-gray-100">{icon}</div>
//       </div>
//       <div className="flex items-end justify-between">
//         <div>
//           <p className="text-xl font-bold text-gray-900">{value}</p>
//           <div className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
//             <span className="text-xs font-medium">
//               {isPositive ? '+' : ''}{change}%
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const DashboardMainContent = () => {
//   const [timeRange, setTimeRange] = useState("7j");

//   const orderData = useMemo(() => {
//     const days = timeRange === "7j" ? 7 : timeRange === "30j" ? 30 : 90;
//     return generateOrderData(days);
//   }, [timeRange]);

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top" as const
//       }
//     },
//     maintainAspectRatio: false
//   };

//   const ordersBarData = {
//     labels: orderData.map((data) => data.date),
//     datasets: [
//       {
//         label: "Commandes totales",
//         data: orderData.map((data) => data.total),
//         backgroundColor: "rgba(59, 130, 246, 0.7)"
//       },
//       {
//         label: "Commandes terminées",
//         data: orderData.map((data) => data.completed),
//         backgroundColor: "rgba(16, 185, 129, 0.7)"
//       }
//     ]
//   };

//   const servicesPieData = {
//     labels: serviceData.map((data) => data.service),
//     datasets: [
//       {
//         data: serviceData.map((data) => data.value),
//         backgroundColor: serviceData.map((data) => data.color),
//         borderWidth: 1
//       }
//     ]
//   };

//   return (
//     <main className="p-4 md:p-6">
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
//         <p className="text-gray-600">Aperçu des performances du pressing</p>
//       </div>

//       {/* Filtres */}
//       <div className="mb-6 flex space-x-2 overflow-x-auto pb-2">
//         {["7j", "30j", "90j"].map((range) => (
//           <button
//             key={range}
//             onClick={() => setTimeRange(range)}
//             className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
//               timeRange === range
//                 ? "bg-blue-600 text-white"
//                 : "bg-white text-gray-700"
//             }`}
//           >
//             {range === "7j"
//               ? "7 jours"
//               : range === "30j"
//               ? "30 jours"
//               : "90 jours"}
//           </button>
//         ))}
//       </div>

//       {/* Cartes métriques */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//         <MetricCard
//           title="Commandes aujourd'hui"
//           value={orderData[orderData.length - 1].total}
//           change={5.2}
//           icon={<Shirt size={18} className="text-blue-500" />}
//         />
//         <MetricCard
//           title="Temps moyen"
//           value={`${avgCompletionTime}h`}
//           change={-1.8}
//           icon={<Clock size={18} className="text-orange-500" />}
//         />
//         <MetricCard
//           title="Chiffre d'affaires"
//           value="2 845 €"
//           change={12.4}
//           icon={<Euro size={18} className="text-green-500" />}
//         />
//         <MetricCard
//           title="Nouveaux clients"
//           value="18"
//           change={8.3}
//           icon={<Users size={18} className="text-purple-500" />}
//         />
//       </div>

//       {/* Graphiques */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h2 className="text-lg font-semibold mb-4">
//             Activité des commandes
//           </h2>
//           <div className="h-80">
//             <Bar options={chartOptions} data={ordersBarData} />
//           </div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h2 className="text-lg font-semibold mb-4">
//             Répartition des services
//           </h2>
//           <div className="h-80">
//             <Pie options={chartOptions} data={servicesPieData} />
//           </div>
//         </div>
//       </div>

//       {/* Dernières commandes (mock) */}
//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <div className="p-4 border-b">
//           <h2 className="text-lg font-semibold">Dernières commandes</h2>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   N°
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Client
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Statut
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Montant
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {[1, 2, 3].map((i) => (
//                 <tr key={i}>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                     #PR-124{i}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     Client {i}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span
//                       className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                         i === 1
//                           ? "bg-green-100 text-green-800"
//                           : i === 2
//                           ? "bg-yellow-100 text-yellow-800"
//                           : "bg-red-100 text-red-800"
//                       }`}
//                     >
//                       {i === 1 ? "Terminé" : i === 2 ? "En cours" : "En attente"}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {45 + i * 15} €
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default DashboardMainContent;
