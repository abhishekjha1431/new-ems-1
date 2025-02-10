// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export function ComparisonChart({ data }: { data: any[] }) {
//   const chartData = {
//     labels: data.map((d) => d.product),
//     datasets: [
//       {
//         label: "Current Usage (kWh)",
//         data: data.map((d) => d.usage),
//         backgroundColor: "rgba(53, 162, 235, 0.5)",
//       },
//       {
//         label: "Potential Usage with Efficient Alternative (kWh)",
//         data: data.map((d) => d.usage * 0.8), // Assuming 20% efficiency improvement
//         backgroundColor: "rgba(75, 192, 192, 0.5)",
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top" as const,
//       },
//       title: {
//         display: true,
//         text: "Energy Usage Comparison",
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: "Energy Usage (kWh)",
//         },
//       },
//     },
//   };

//   return <Bar data={chartData} options={options} />;
// }

// import React from "react";

// interface ChartProps {
//   data: any[];
// }

// export function ComparisonChart({ data }: ChartProps) {
//   const maxUsage = Math.max(...data.map((d) => d.usage));

//   return (
//     <div className="space-y-4">
//       {data.map((item, index) => (
//         <div key={index} className="space-y-1">
//           <div className="flex justify-between text-sm">
//             <span>{item.product}</span>
//             <span>{item.usage.toFixed(2)} kWh</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2.5">
//             <div
//               className="bg-blue-600 h-2.5 rounded-full"
//               style={{ width: `${(item.usage / maxUsage) * 100}%` }}
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// import React from "react";

// interface ChartProps {
//   data: any[];
// }

// export function ComparisonChart({ data }: ChartProps) {
//   const totalUsage = data.reduce((sum, item) => sum + item.usage, 0);
//   const colors = [
//     "bg-blue-500",
//     "bg-green-500",
//     "bg-yellow-500",
//     "bg-purple-500",
//     "bg-pink-500",
//     "bg-indigo-500",
//   ];

//   // Calculate percentages and starting positions for pie segments
//   const segments = data.map((item, index) => {
//     const percentage = (item.usage / totalUsage) * 100;
//     const previousSegments = data
//       .slice(0, index)
//       .reduce((sum, prev) => sum + (prev.usage / totalUsage) * 100, 0);
//     return {
//       ...item,
//       percentage,
//       rotate: previousSegments * 3.6, // Convert percentage to degrees (360/100 = 3.6)
//       color: colors[index % colors.length],
//     };
//   });

//   return (
//     <div className="flex flex-col md:flex-row items-center gap-8">
//       <div className="relative w-64 h-64 md:w-80 md:h-80">
//         {/* Pie Chart */}
//         <div className="absolute inset-0 rounded-full overflow-hidden">
//           {segments.map((segment, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 ${segment.color}`}
//               style={{
//                 clipPath: `conic-gradient(from ${segment.rotate}deg, currentColor ${segment.percentage}%, transparent ${segment.percentage}%)`,
//               }}
//             />
//           ))}
//         </div>
//         {/* Center circle for donut effect */}
//         <div className="absolute inset-[25%] bg-white rounded-full shadow-inner flex items-center justify-center">
//           <div className="text-center">
//             <div className="text-2xl font-bold">{totalUsage.toFixed(1)}</div>
//             <div className="text-sm text-gray-500">Total kWh</div>
//           </div>
//         </div>
//       </div>

//       {/* Legend */}
//       <div className="w-full md:w-auto space-y-3">
//         {segments.map((segment, index) => (
//           <div key={index} className="flex items-center gap-3">
//             <div className={`w-4 h-4 rounded-full ${segment.color}`} />
//             <div className="flex-1 min-w-0">
//               <div className="flex justify-between gap-4">
//                 <span className="font-medium truncate">{segment.product}</span>
//                 <span className="text-gray-600">
//                   {segment.usage.toFixed(1)} kWh (
//                   {segment.percentage.toFixed(1)}%)
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React from "react";

// interface ChartProps {
//   data: any[];
// }

// export function ComparisonChart({ data }: ChartProps) {
//   const totalUsage = data.reduce((sum, item) => sum + item.usage, 0);

//   // Product-specific colors
//   const productColors: { [key: string]: string } = {
//     Fan: "bg-orange-500",
//     AC: "bg-blue-500",
//     TV: "bg-purple-500",
//     Refrigerator: "bg-green-500",
//     "Washing Machine": "bg-pink-500",
//     Geyser: "bg-red-500",
//     LED: "bg-yellow-500",
//   };

//   // Calculate percentages and starting positions for pie segments
//   const segments = data.map((item, index) => {
//     const percentage = (item.usage / totalUsage) * 100;
//     const previousSegments = data
//       .slice(0, index)
//       .reduce((sum, prev) => sum + (prev.usage / totalUsage) * 100, 0);
//     return {
//       ...item,
//       percentage,
//       rotate: previousSegments * 3.6, // Convert percentage to degrees (360/100 = 3.6)
//       color: productColors[item.product] || "bg-gray-500", // Fallback color if product not found
//     };
//   });

//   return (
//     <div className="flex flex-col md:flex-row items-center gap-8">
//       <div className="relative w-64 h-64 md:w-80 md:h-80">
//         {/* Pie Chart */}
//         <div className="absolute inset-0 rounded-full overflow-hidden">
//           {segments.map((segment, index) => {
//             const nextRotation = segment.rotate + segment.percentage * 3.6;
//             return (
//               <div
//                 key={index}
//                 className="absolute inset-0"
//                 style={{
//                   background: `conic-gradient(from ${
//                     segment.rotate
//                   }deg, ${segment.color.replace("bg-", "")} ${
//                     segment.percentage
//                   }%, transparent ${segment.percentage}%)`,
//                   transform: "rotate(-90deg)", // Start from top instead of right
//                 }}
//               />
//             );
//           })}
//         </div>
//         {/* Center circle for donut effect */}
//         <div className="absolute inset-[25%] bg-white rounded-full shadow-inner flex items-center justify-center">
//           <div className="text-center">
//             <div className="text-2xl font-bold">{totalUsage.toFixed(1)}</div>
//             <div className="text-sm text-gray-500">Total kWh</div>
//           </div>
//         </div>
//       </div>

//       {/* Legend */}
//       <div className="w-full md:w-auto space-y-3">
//         {segments.map((segment, index) => (
//           <div key={index} className="flex items-center gap-3">
//             <div className={`w-4 h-4 rounded-full ${segment.color}`} />
//             <div className="flex-1 min-w-0">
//               <div className="flex justify-between gap-4">
//                 <span className="font-medium truncate">{segment.product}</span>
//                 <span className="text-gray-600">
//                   {segment.usage.toFixed(1)} kWh (
//                   {segment.percentage.toFixed(1)}%)
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React from "react";

// interface ChartProps {
//   data: any[];
// }

// export function ComparisonChart({ data }: ChartProps) {
//   const totalUsage = data.reduce((sum, item) => sum + item.usage, 0);

//   // Product-specific colors using actual color values instead of Tailwind classes
//   const productColors: { [key: string]: string } = {
//     Fan: "#f97316", // orange-500
//     AC: "#3b82f6", // blue-500
//     TV: "#a855f7", // purple-500
//     Refrigerator: "#22c55e", // green-500
//     "Washing Machine": "#ec4899", // pink-500
//     Geyser: "#ef4444", // red-500
//     LED: "#eab308", // yellow-500
//   };

//   // Calculate percentages and create pie segments
//   const segments = data.map((item, index) => {
//     const percentage = (item.usage / totalUsage) * 100;
//     const previousSegments = data
//       .slice(0, index)
//       .reduce((sum, prev) => sum + (prev.usage / totalUsage) * 100, 0);
//     return {
//       ...item,
//       percentage,
//       startAngle: previousSegments * 3.6, // Convert to degrees (360/100 = 3.6)
//       color: productColors[item.product] || "#6b7280", // Fallback to gray-500
//     };
//   });

//   // Create the conic gradient string for all segments
//   const createConicGradient = () => {
//     let gradient = "conic-gradient(";
//     segments.forEach((segment, index) => {
//       const startAngle = segment.startAngle;
//       const endAngle = startAngle + segment.percentage * 3.6;

//       // Add color stop for start of segment
//       gradient += `${segment.color} ${startAngle}deg`;

//       // Add color stop for end of segment
//       gradient += `, ${segment.color} ${endAngle}deg`;

//       // Add transparent stop if not the last segment
//       if (index < segments.length - 1) {
//         gradient += `, ${segment.color} ${endAngle}deg`;
//       }
//     });
//     gradient += ")";
//     return gradient;
//   };

//   return (
//     <div className="flex flex-col md:flex-row items-center gap-8">
//       <div className="relative w-64 h-64 md:w-80 md:h-80">
//         {/* Pie Chart */}
//         <div
//           className="absolute inset-0 rounded-full"
//           style={{
//             background: createConicGradient(),
//             transform: "rotate(-90deg)", // Start from top
//           }}
//         />

//         {/* Center circle for donut effect */}
//         <div className="absolute inset-[25%] bg-white rounded-full shadow-inner flex items-center justify-center">
//           <div className="text-center">
//             <div className="text-2xl font-bold">{totalUsage.toFixed(1)}</div>
//             <div className="text-sm text-gray-500">Total kWh</div>
//           </div>
//         </div>
//       </div>

//       {/* Legend */}
//       <div className="w-full md:w-auto space-y-3">
//         {segments.map((segment, index) => (
//           <div key={index} className="flex items-center gap-3">
//             <div
//               className="w-4 h-4 rounded-full"
//               style={{ backgroundColor: segment.color }}
//             />
//             <div className="flex-1 min-w-0">
//               <div className="flex justify-between gap-4">
//                 <span className="font-medium truncate">{segment.product}</span>
//                 <span className="text-gray-600">
//                   {segment.usage.toFixed(1)} kWh (
//                   {segment.percentage.toFixed(1)}%)
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";

interface Device {
  product: string;
  usage: number;
}

interface ChartProps {
  data: Device[];
}

export function ComparisonChart({ data }: ChartProps) {
  const totalUsage = data.reduce((sum, item) => sum + item.usage, 0);

  // Enhanced color palette with modern, accessible colors
  const productColors: { [key: string]: { color: string; hover: string } } = {
    Fan: { color: "rgb(249, 115, 22)", hover: "rgb(234, 88, 12)" }, // Orange
    AC: { color: "rgb(59, 130, 246)", hover: "rgb(37, 99, 235)" }, // Blue
    TV: { color: "rgb(168, 85, 247)", hover: "rgb(147, 51, 234)" }, // Purple
    Refrigerator: { color: "rgb(34, 197, 94)", hover: "rgb(22, 163, 74)" }, // Green
    "Washing Machine": {
      color: "rgb(236, 72, 153)",
      hover: "rgb(219, 39, 119)",
    }, // Pink
    Geyser: { color: "rgb(239, 68, 68)", hover: "rgb(220, 38, 38)" }, // Red
    LED: { color: "rgb(234, 179, 8)", hover: "rgb(202, 138, 4)" }, // Yellow
  };

  // Calculate segments with enhanced properties
  const segments = data.map((item, index) => {
    const percentage = (item.usage / totalUsage) * 100;
    const previousSegments = data
      .slice(0, index)
      .reduce((sum, prev) => sum + (prev.usage / totalUsage) * 100, 0);

    return {
      ...item,
      percentage,
      startAngle: previousSegments * 3.6,
      colors: productColors[item.product] || {
        color: "rgb(107, 114, 128)",
        hover: "rgb(75, 85, 99)",
      },
    };
  });

  // Create smooth conic gradient
  const createConicGradient = () => {
    let gradient = "conic-gradient(";
    segments.forEach((segment, index) => {
      const startAngle = segment.startAngle;
      const endAngle = startAngle + segment.percentage * 3.6;

      if (index > 0) {
        gradient += ", ";
      }
      gradient += `${segment.colors.color} ${startAngle}deg ${endAngle}deg`;
    });
    gradient += ")";
    return gradient;
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        {/* Pie Chart with hover effects */}
        <div
          className="absolute inset-0 rounded-full transition-transform duration-300 hover:scale-105"
          style={{
            background: createConicGradient(),
            transform: "rotate(-90deg)",
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
        />

        {/* Center circle with enhanced design */}
        <div className="absolute inset-[25%] bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-800">
              {totalUsage.toFixed(1)}
            </div>
            <div className="text-sm text-gray-500 font-medium">Total kWh</div>
          </div>
        </div>
      </div>

      {/* Enhanced Legend */}
      <div className="w-full md:w-auto space-y-3">
        {segments.map((segment, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-2 rounded-lg transition-colors duration-200 hover:bg-gray-50"
          >
            <div
              className="w-4 h-4 rounded-full transition-transform duration-200 hover:scale-110"
              style={{
                backgroundColor: segment.colors.color,
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between gap-4">
                <span className="font-medium truncate text-gray-800">
                  {segment.product}
                </span>
                <span className="text-gray-600 font-medium">
                  {segment.usage.toFixed(1)} kWh
                  <span className="text-gray-400 ml-1">
                    ({segment.percentage.toFixed(1)}%)
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
