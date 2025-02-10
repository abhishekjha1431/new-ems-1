// import React from "react";
// import { useForm, useFieldArray } from "react-hook-form";
// import { z } from "zod";
// import { useState } from "react";
// import {
//   Trash2,
//   PlusCircle,
//   Send,
//   Sparkles,
//   Leaf,
//   DollarSign,
//   Zap,
//   Lightbulb,
//   Fan,
//   Snowflake,
//   Tv,
//   Refrigerator,
//   Waves,
//   Flame,
//   Star,
//   CircleDot,
// } from "lucide-react";
// import { ClassValue, clsx } from "clsx";
// import { twMerge } from "tailwind-merge";
// import { ComparisonChart } from "./ComparisonChart";

// // Utility function
// function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// // Constants
// const products = [
//   { name: "Fan", icon: Fan },
//   { name: "AC", icon: Snowflake },
//   { name: "LED", icon: Lightbulb },
//   { name: "Refrigerator", icon: Refrigerator },
//   { name: "Washing Machine", icon: Waves },
//   { name: "Geyser", icon: Flame },
// ];

// const brands = [
//   { name: "Philips", icon: CircleDot },
//   { name: "Havells", icon: CircleDot },
//   { name: "Syska", icon: CircleDot },
//   { name: "LG", icon: CircleDot },
//   { name: "Samsung", icon: CircleDot },
//   { name: "Voltas", icon: CircleDot },
//   { name: "Daikin", icon: CircleDot },
// ];

// const frequencies = ["Daily", "Weekly", "Monthly", "Rarely"];
// const starRatings = [
//   { name: "1-Star", stars: "★☆☆☆☆" },
//   { name: "2-Star", stars: "★★☆☆☆" },
//   { name: "3-Star", stars: "★★★☆☆" },
//   { name: "4-Star", stars: "★★★★☆" },
//   { name: "5-Star", stars: "★★★★★" },
// ];
// const years = ["2024", "2023", "2022", "2021", "2020"];
// const wattageOptions = ["W", "kW"];

// const defaultPowerRatings: Record<string, number> = {
//   Fan: 75,
//   AC: 1500,
//   LED: 10,
//   Refrigerator: 200,
//   "Washing Machine": 500,
//   Geyser: 2000,
// };

// const starRatingEfficiency: Record<string, number> = {
//   "1-Star": 1.0,
//   "2-Star": 0.9,
//   "3-Star": 0.8,
//   "4-Star": 0.7,
//   "5-Star": 0.6,
// };

// const getProductIcon = (productName: string) => {
//   const product = products.find((p) => p.name === productName);
//   return product?.icon || Zap;
// };

// export function EnergyMonitoringForm() {
//   const [calculations, setCalculations] = useState<any>(null);
//   const [showAdvanced, setShowAdvanced] = useState(false);
//   const [aheadPercentage, setAheadPercentage] = useState<number | null>(null);

//   const { register, control, handleSubmit, watch, reset } = useForm({
//     defaultValues: {
//       devices: [
//         {
//           product: "Fan",
//           brand: brands[0].name,
//           power: defaultPowerRatings.Fan,
//           hours: 8,
//           frequency: "Daily",
//           year: "2024",
//           wattageType: "W",
//           advanced: false,
//           energyStarRating: "",
//         },
//       ],
//     },
//   });

//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "devices",
//   });

//   const watchProducts = watch("devices");

//   const onSubmit = async (data: any) => {
//     const results = data.devices.map((device: any) => {
//       let powerInWatts = device.power;
//       if (device.wattageType === "kW") {
//         powerInWatts *= 1000;
//       }

//       const frequencyFactor =
//         {
//           Daily: 30,
//           Weekly: 4,
//           Monthly: 1,
//           Rarely: 0.5,
//         }[device.frequency] || 30;

//       const dailyKWh = (powerInWatts * device.hours) / 1000;
//       const monthlyKWh = dailyKWh * frequencyFactor;

//       const efficiencyFactor = device.energyStarRating
//         ? starRatingEfficiency[device.energyStarRating]
//         : 1.0;

//       const usage = monthlyKWh * efficiencyFactor;
//       const cost = usage * 8; // Assuming ₹8 per kWh
//       const carbonEmissions = usage * 0.85; // kg CO2 per kWh

//       const potentialSavings =
//         device.energyStarRating && device.energyStarRating !== "5-Star"
//           ? usage *
//             (1 -
//               starRatingEfficiency["5-Star"] /
//                 starRatingEfficiency[device.energyStarRating])
//           : 0;

//       return {
//         ...device,
//         usage,
//         cost,
//         carbonEmissions,
//         potentialSavings,
//       };
//     });

//     // Calculate ahead percentage (example logic)
//     const percentage = Math.round(Math.random() * 100);
//     setAheadPercentage(percentage);

//     setCalculations(results);
//   };

//   return (
//     <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
//       <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
//         <div className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 p-6">
//           <div className="flex items-center gap-3">
//             <Zap className="w-7 h-7 text-blue-600" />
//             <h2 className="text-2xl font-bold text-gray-800">
//               Energy Monitoring
//             </h2>
//           </div>
//         </div>

//         <div className="p-6">
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             <div className="space-y-6">
//               {fields.map((field, index) => {
//                 const ProductIcon = getProductIcon(
//                   watchProducts[index]?.product || "Fan"
//                 );
//                 return (
//                   <div
//                     key={field.id}
//                     className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
//                   >
//                     <div className="flex items-center justify-between mb-6">
//                       <div className="flex items-center gap-3">
//                         <ProductIcon className="w-6 h-6 text-blue-600" />
//                         <h3 className="text-lg font-semibold text-gray-800">
//                           Device {index + 1}
//                         </h3>
//                       </div>
//                       <button
//                         type="button"
//                         onClick={() => remove(index)}
//                         className="text-red-500 hover:text-red-700 transition-colors duration-200 p-2 rounded-full hover:bg-red-50"
//                       >
//                         <Trash2 className="w-5 h-5" />
//                       </button>
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                       <div className="space-y-2">
//                         <label className="block text-sm font-medium text-gray-700">
//                           Product
//                         </label>
//                         <select
//                           {...register(`devices.${index}.product`)}
//                           className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
//                           onChange={(e) => {
//                             const product = e.target.value;
//                             const defaultPower = defaultPowerRatings[product];
//                             //@ts-ignore
//                             const { setValue } = control;
//                             setValue(`devices.${index}.power`, defaultPower);
//                           }}
//                         >
//                           {products.map((product) => (
//                             <option key={product.name} value={product.name}>
//                               {product.name}
//                             </option>
//                           ))}
//                         </select>
//                       </div>

//                       <div className="space-y-2">
//                         <label className="block text-sm font-medium text-gray-700">
//                           Brand
//                         </label>
//                         <select
//                           {...register(`devices.${index}.brand`)}
//                           className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
//                         >
//                           {brands.map((brand) => (
//                             <option key={brand.name} value={brand.name}>
//                               {brand.name}
//                             </option>
//                           ))}
//                         </select>
//                       </div>

//                       <div className="space-y-2">
//                         <label className="block text-sm font-medium text-gray-700">
//                           Power Rating
//                         </label>
//                         <div className="flex gap-2">
//                           <input
//                             type="number"
//                             {...register(`devices.${index}.power`, {
//                               valueAsNumber: true,
//                             })}
//                             className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
//                           />
//                           <select
//                             {...register(`devices.${index}.wattageType`)}
//                             className="w-[80px] rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
//                           >
//                             {wattageOptions.map((option) => (
//                               <option key={option} value={option}>
//                                 {option}
//                               </option>
//                             ))}
//                           </select>
//                         </div>
//                       </div>

//                       <div className="space-y-2">
//                         <label className="block text-sm font-medium text-gray-700">
//                           Hours per day: {watchProducts[index]?.hours || 0}
//                         </label>
//                         <input
//                           type="range"
//                           min="0"
//                           max="24"
//                           step="0.5"
//                           {...register(`devices.${index}.hours`, {
//                             valueAsNumber: true,
//                           })}
//                           className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
//                         />
//                       </div>

//                       <div className="space-y-2">
//                         <label className="block text-sm font-medium text-gray-700">
//                           Frequency
//                         </label>
//                         <select
//                           {...register(`devices.${index}.frequency`)}
//                           className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
//                         >
//                           {frequencies.map((freq) => (
//                             <option key={freq} value={freq}>
//                               {freq}
//                             </option>
//                           ))}
//                         </select>
//                       </div>

//                       <div className="space-y-2">
//                         <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
//                           <input
//                             type="checkbox"
//                             {...register(`devices.${index}.advanced`)}
//                             className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                           />
//                           Advanced Mode
//                         </label>
//                       </div>

//                       {watchProducts[index]?.advanced && (
//                         <>
//                           <div className="space-y-2">
//                             <label className="block text-sm font-medium text-gray-700">
//                               Energy Star Rating
//                             </label>
//                             <select
//                               {...register(`devices.${index}.energyStarRating`)}
//                               className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
//                             >
//                               <option value="">Select rating</option>
//                               {starRatings.map((rating) => (
//                                 <option key={rating.name} value={rating.name}>
//                                   {rating.stars}
//                                 </option>
//                               ))}
//                             </select>
//                           </div>

//                           <div className="space-y-2">
//                             <label className="block text-sm font-medium text-gray-700">
//                               Year of Purchase
//                             </label>
//                             <select
//                               {...register(`devices.${index}.year`)}
//                               className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
//                             >
//                               {years.map((year) => (
//                                 <option key={year} value={year}>
//                                   {year}
//                                 </option>
//                               ))}
//                             </select>
//                           </div>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             <div className="flex flex-wrap gap-4">
//               <button
//                 type="button"
//                 onClick={() =>
//                   append({
//                     product: "Fan",
//                     brand: brands[0].name,
//                     power: defaultPowerRatings.Fan,
//                     hours: 8,
//                     frequency: "Daily",
//                     year: "2024",
//                     wattageType: "W",
//                     advanced: false,
//                     energyStarRating: "",
//                   })
//                 }
//                 className="flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-sm hover:shadow"
//               >
//                 <PlusCircle className="w-5 h-5" />
//                 Add Device
//               </button>

//               <button
//                 type="submit"
//                 className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow"
//               >
//                 <Send className="w-5 h-5" />
//                 Calculate Savings
//               </button>
//             </div>
//           </form>

//           {calculations && (
//             <div className="mt-8 space-y-8 animate-in fade-in-50">
//               {aheadPercentage !== null && (
//                 <div className="text-center bg-blue-50 p-4 rounded-xl">
//                   <p className="text-2xl font-bold text-blue-800">
//                     🎈 You are ahead of {aheadPercentage}% of people saving this
//                     planet 🌏
//                   </p>
//                 </div>
//               )}

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-sm">
//                   <div className="flex items-center gap-3 mb-3">
//                     <Zap className="w-6 h-6 text-blue-600" />
//                     <h4 className="font-semibold text-blue-900">Total Usage</h4>
//                   </div>
//                   <p className="text-3xl font-bold text-blue-700">
//                     {calculations
//                       .reduce((sum: number, calc: any) => sum + calc.usage, 0)
//                       .toFixed(2)}{" "}
//                     kWh
//                   </p>
//                 </div>

//                 <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-sm">
//                   <div className="flex items-center gap-3 mb-3">
//                     <DollarSign className="w-6 h-6 text-green-600" />
//                     <h4 className="font-semibold text-green-900">Total Cost</h4>
//                   </div>
//                   <p className="text-3xl font-bold text-green-700">
//                     ₹
//                     {calculations
//                       .reduce((sum: number, calc: any) => sum + calc.cost, 0)
//                       .toFixed(2)}
//                   </p>
//                 </div>

//                 <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-sm">
//                   <div className="flex items-center gap-3 mb-3">
//                     <Leaf className="w-6 h-6 text-orange-600" />
//                     <h4 className="font-semibold text-orange-900">
//                       Carbon Footprint
//                     </h4>
//                   </div>
//                   <p className="text-3xl font-bold text-orange-700">
//                     {calculations
//                       .reduce(
//                         (sum: number, calc: any) => sum + calc.carbonEmissions,
//                         0
//                       )
//                       .toFixed(2)}{" "}
//                     kg CO₂
//                   </p>
//                 </div>

//                 <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-sm">
//                   <div className="flex items-center gap-3 mb-3">
//                     <Sparkles className="w-6 h-6 text-purple-600" />
//                     <h4 className="font-semibold text-purple-900">
//                       Potential Savings
//                     </h4>
//                   </div>
//                   <p className="text-3xl font-bold text-purple-700">
//                     ₹
//                     {calculations
//                       .reduce(
//                         (sum: number, calc: any) =>
//                           sum + calc.potentialSavings * 8,
//                         0
//                       )
//                       .toFixed(2)}
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-xl shadow-lg">
//                 <h3 className="text-xl font-bold text-gray-800 mb-6">
//                   Usage Analysis
//                 </h3>
//                 <ComparisonChart data={calculations} />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { useForm, useFieldArray } from "react-hook-form";
// import { z } from "zod";
// import { useState } from "react";
// import {
//   Trash2,
//   PlusCircle,
//   Send,
//   Sparkles,
//   Leaf,
//   DollarSign,
//   Zap,
//   Lightbulb,
//   Fan,
//   Snowflake,
//   Tv,
//   Refrigerator,
//   Waves,
//   Flame,
//   Star,
//   CircleDot,
// } from "lucide-react";
// import { ClassValue, clsx } from "clsx";
// import { twMerge } from "tailwind-merge";
// import { ComparisonChart } from "./ComparisonChart";

// // Utility function
// function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// // Constants
// const products = [
//   { name: "Fan", icon: Fan },
//   { name: "AC", icon: Snowflake },
//   { name: "LED", icon: Lightbulb },
//   { name: "Refrigerator", icon: Refrigerator },
//   { name: "Washing Machine", icon: Waves },
//   { name: "Geyser", icon: Flame },
// ];

// // Alternatives data structure
// const alternatives: Record<
//   string,
//   Array<{
//     brand: string;
//     model: string;
//     efficiency: string;
//     savings: string;
//     link: string;
//   }>
// > = {
//   Fan: [
//     {
//       brand: "Atomberg",
//       model: "Renesa",
//       efficiency: "5-Star",
//       savings: "₹1,200/year",
//       link: "https://example.com/atomberg-renesa",
//     },
//     {
//       brand: "Havells",
//       model: "Stealth Air",
//       efficiency: "5-Star",
//       savings: "₹1,000/year",
//       link: "https://example.com/havells-stealth",
//     },
//   ],
//   AC: [
//     {
//       brand: "Daikin",
//       model: "FTKF",
//       efficiency: "5-Star",
//       savings: "₹4,500/year",
//       link: "https://example.com/daikin-ftkf",
//     },
//     {
//       brand: "Voltas",
//       model: "SAC 185V",
//       efficiency: "5-Star",
//       savings: "₹4,000/year",
//       link: "https://example.com/voltas-185v",
//     },
//   ],
//   LED: [
//     {
//       brand: "Philips",
//       model: "Ultra Efficient",
//       efficiency: "A++",
//       savings: "₹300/year",
//       link: "https://example.com/philips-led",
//     },
//   ],
//   Refrigerator: [
//     {
//       brand: "LG",
//       model: "GL-S292",
//       efficiency: "5-Star",
//       savings: "₹2,000/year",
//       link: "https://example.com/lg-gl",
//     },
//   ],
// };

// const brands = [
//   { name: "Philips", icon: CircleDot },
//   { name: "Havells", icon: CircleDot },
//   { name: "Syska", icon: CircleDot },
//   { name: "LG", icon: CircleDot },
//   { name: "Samsung", icon: CircleDot },
//   { name: "Voltas", icon: CircleDot },
//   { name: "Daikin", icon: CircleDot },
// ];

// const frequencies = ["Daily", "Weekly", "Monthly", "Rarely"];
// const starRatings = [
//   { name: "1-Star", stars: "★☆☆☆☆" },
//   { name: "2-Star", stars: "★★☆☆☆" },
//   { name: "3-Star", stars: "★★★☆☆" },
//   { name: "4-Star", stars: "★★★★☆" },
//   { name: "5-Star", stars: "★★★★★" },
// ];
// const years = ["2024", "2023", "2022", "2021", "2020"];
// const wattageOptions = ["W", "kW"];

// const defaultPowerRatings: Record<string, number> = {
//   Fan: 75,
//   AC: 1500,
//   LED: 10,
//   Refrigerator: 200,
//   "Washing Machine": 500,
//   Geyser: 2000,
// };

// const starRatingEfficiency: Record<string, number> = {
//   "1-Star": 1.0,
//   "2-Star": 0.9,
//   "3-Star": 0.8,
//   "4-Star": 0.7,
//   "5-Star": 0.6,
// };

// const getProductIcon = (productName: string) => {
//   const product = products.find((p) => p.name === productName);
//   return product?.icon || Zap;
// };

// export function EnergyMonitoringForm() {
//   const [calculations, setCalculations] = useState<any>(null);
//   const [showAdvanced, setShowAdvanced] = useState(false);
//   const [aheadPercentage, setAheadPercentage] = useState<number | null>(null);

//   const { register, control, handleSubmit, watch, reset } = useForm({
//     defaultValues: {
//       devices: [
//         {
//           product: "Fan",
//           brand: brands[0].name,
//           power: defaultPowerRatings.Fan,
//           hours: 8,
//           frequency: "Daily",
//           year: "2024",
//           wattageType: "W",
//           advanced: false,
//           energyStarRating: "",
//         },
//       ],
//     },
//   });

//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "devices",
//   });

//   const watchProducts = watch("devices");

//   const onSubmit = async (data: any) => {
//     const results = data.devices.map((device: any) => {
//       let powerInWatts = device.power;
//       if (device.wattageType === "kW") {
//         powerInWatts *= 1000;
//       }

//       const frequencyFactor =
//         {
//           Daily: 30,
//           Weekly: 4,
//           Monthly: 1,
//           Rarely: 0.5,
//         }[device.frequency] || 30;

//       const dailyKWh = (powerInWatts * device.hours) / 1000;
//       const monthlyKWh = dailyKWh * frequencyFactor;

//       const efficiencyFactor = device.energyStarRating
//         ? starRatingEfficiency[device.energyStarRating]
//         : 1.0;

//       const usage = monthlyKWh * efficiencyFactor;
//       const cost = usage * 8; // Assuming ₹8 per kWh
//       const carbonEmissions = usage * 0.85; // kg CO2 per kWh

//       const potentialSavings =
//         device.energyStarRating && device.energyStarRating !== "5-Star"
//           ? usage *
//             (1 -
//               starRatingEfficiency["5-Star"] /
//                 starRatingEfficiency[device.energyStarRating])
//           : 0;

//       return {
//         ...device,
//         usage,
//         cost,
//         carbonEmissions,
//         potentialSavings,
//       };
//     });

//     // Calculate ahead percentage (example logic)
//     const percentage = Math.round(Math.random() * 100);
//     setAheadPercentage(percentage);

//     setCalculations(results);
//   };

//   return (
//     <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
//       <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
//         <div className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 p-6">
//           <div className="flex items-center gap-3">
//             <Zap className="w-7 h-7 text-blue-600" />
//             <h2 className="text-2xl font-bold text-gray-800">
//               Energy Monitoring
//             </h2>
//           </div>
//         </div>

//         <div className="p-6">
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             <div className="space-y-6">
//               {fields.map((field, index) => {
//                 const ProductIcon = getProductIcon(
//                   watchProducts[index]?.product || "Fan"
//                 );
//                 return (
//                   <div
//                     key={field.id}
//                     className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
//                   >
//                     <div className="flex items-center justify-between mb-6">
//                       <div className="flex items-center gap-3">
//                         <ProductIcon className="w-6 h-6 text-blue-600" />
//                         <h3 className="text-lg font-semibold text-gray-800">
//                           Device {index + 1}
//                         </h3>
//                       </div>
//                       <button
//                         type="button"
//                         onClick={() => remove(index)}
//                         className="text-red-500 hover:text-red-700 transition-colors duration-200 p-2 rounded-full hover:bg-red-50"
//                       >
//                         <Trash2 className="w-5 h-5" />
//                       </button>
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                       <div className="space-y-2">
//                         <label className="block text-sm font-medium text-gray-700">
//                           Product
//                         </label>
//                         <select
//                           {...register(`devices.${index}.product`)}
//                           className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
//                           onChange={(e) => {
//                             const product = e.target.value;
//                             const defaultPower = defaultPowerRatings[product];
//                             //@ts-ignore
//                             const { setValue } = control;
//                             setValue(`devices.${index}.power`, defaultPower);
//                           }}
//                         >
//                           {products.map((product) => (
//                             <option key={product.name} value={product.name}>
//                               {product.name}
//                             </option>
//                           ))}
//                         </select>
//                       </div>

//                       <div className="space-y-2">
//                         <label className="block text-sm font-medium text-gray-700">
//                           Brand
//                         </label>
//                         <select
//                           {...register(`devices.${index}.brand`)}
//                           className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
//                         >
//                           {brands.map((brand) => (
//                             <option key={brand.name} value={brand.name}>
//                               {brand.name}
//                             </option>
//                           ))}
//                         </select>
//                       </div>

//                       <div className="space-y-2">
//                         <label className="block text-sm font-medium text-gray-700">
//                           Power Rating
//                         </label>
//                         <div className="flex gap-2">
//                           <input
//                             type="number"
//                             {...register(`devices.${index}.power`, {
//                               valueAsNumber: true,
//                             })}
//                             className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
//                           />
//                           <select
//                             {...register(`devices.${index}.wattageType`)}
//                             className="w-[80px] rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
//                           >
//                             {wattageOptions.map((option) => (
//                               <option key={option} value={option}>
//                                 {option}
//                               </option>
//                             ))}
//                           </select>
//                         </div>
//                       </div>

//                       <div className="space-y-2">
//                         <label className="block text-sm font-medium text-gray-700">
//                           Hours per day: {watchProducts[index]?.hours || 0}
//                         </label>
//                         <input
//                           type="range"
//                           min="0"
//                           max="24"
//                           step="0.5"
//                           {...register(`devices.${index}.hours`, {
//                             valueAsNumber: true,
//                           })}
//                           className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
//                         />
//                       </div>

//                       <div className="space-y-2">
//                         <label className="block text-sm font-medium text-gray-700">
//                           Frequency
//                         </label>
//                         <select
//                           {...register(`devices.${index}.frequency`)}
//                           className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
//                         >
//                           {frequencies.map((freq) => (
//                             <option key={freq} value={freq}>
//                               {freq}
//                             </option>
//                           ))}
//                         </select>
//                       </div>

//                       <div className="space-y-2">
//                         <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
//                           <input
//                             type="checkbox"
//                             {...register(`devices.${index}.advanced`)}
//                             className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                           />
//                           Advanced Mode
//                         </label>
//                       </div>

//                       {watchProducts[index]?.advanced && (
//                         <>
//                           <div className="space-y-2">
//                             <label className="block text-sm font-medium text-gray-700">
//                               Energy Star Rating
//                             </label>
//                             <select
//                               {...register(`devices.${index}.energyStarRating`)}
//                               className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
//                             >
//                               <option value="">Select rating</option>
//                               {starRatings.map((rating) => (
//                                 <option key={rating.name} value={rating.name}>
//                                   {rating.stars}
//                                 </option>
//                               ))}
//                             </select>
//                           </div>

//                           <div className="space-y-2">
//                             <label className="block text-sm font-medium text-gray-700">
//                               Year of Purchase
//                             </label>
//                             <select
//                               {...register(`devices.${index}.year`)}
//                               className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
//                             >
//                               {years.map((year) => (
//                                 <option key={year} value={year}>
//                                   {year}
//                                 </option>
//                               ))}
//                             </select>
//                           </div>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             <div className="flex flex-wrap gap-4">
//               <button
//                 type="button"
//                 onClick={() =>
//                   append({
//                     product: "Fan",
//                     brand: brands[0].name,
//                     power: defaultPowerRatings.Fan,
//                     hours: 8,
//                     frequency: "Daily",
//                     year: "2024",
//                     wattageType: "W",
//                     advanced: false,
//                     energyStarRating: "",
//                   })
//                 }
//                 className="flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-sm hover:shadow"
//               >
//                 <PlusCircle className="w-5 h-5" />
//                 Add Device
//               </button>

//               <button
//                 type="submit"
//                 className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow"
//               >
//                 <Send className="w-5 h-5" />
//                 Calculate Savings
//               </button>
//             </div>
//           </form>

//           {calculations && (
//             <div className="mt-8 space-y-8 animate-in fade-in-50">
//               {aheadPercentage !== null && (
//                 <div className="text-center bg-blue-50 p-4 rounded-xl">
//                   <p className="text-2xl font-bold text-blue-800">
//                     🎈 You are ahead of {aheadPercentage}% of people saving this
//                     planet 🌏
//                   </p>
//                 </div>
//               )}

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-sm">
//                   <div className="flex items-center gap-3 mb-3">
//                     <Zap className="w-6 h-6 text-blue-600" />
//                     <h4 className="font-semibold text-blue-900">Total Usage</h4>
//                   </div>
//                   <p className="text-3xl font-bold text-blue-700">
//                     {calculations
//                       .reduce((sum: number, calc: any) => sum + calc.usage, 0)
//                       .toFixed(2)}{" "}
//                     kWh
//                   </p>
//                 </div>

//                 <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-sm">
//                   <div className="flex items-center gap-3 mb-3">
//                     <DollarSign className="w-6 h-6 text-green-600" />
//                     <h4 className="font-semibold text-green-900">Total Cost</h4>
//                   </div>
//                   <p className="text-3xl font-bold text-green-700">
//                     ₹
//                     {calculations
//                       .reduce((sum: number, calc: any) => sum + calc.cost, 0)
//                       .toFixed(2)}
//                   </p>
//                 </div>

//                 <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-sm">
//                   <div className="flex items-center gap-3 mb-3">
//                     <Leaf className="w-6 h-6 text-orange-600" />
//                     <h4 className="font-semibold text-orange-900">
//                       Carbon Footprint
//                     </h4>
//                   </div>
//                   <p className="text-3xl font-bold text-orange-700">
//                     {calculations
//                       .reduce(
//                         (sum: number, calc: any) => sum + calc.carbonEmissions,
//                         0
//                       )
//                       .toFixed(2)}{" "}
//                     kg CO₂
//                   </p>
//                 </div>

//                 <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-sm">
//                   <div className="flex items-center gap-3 mb-3">
//                     <Sparkles className="w-6 h-6 text-purple-600" />
//                     <h4 className="font-semibold text-purple-900">
//                       Potential Savings
//                     </h4>
//                   </div>
//                   <p className="text-3xl font-bold text-purple-700">
//                     ₹
//                     {calculations
//                       .reduce(
//                         (sum: number, calc: any) =>
//                           sum + calc.potentialSavings * 8,
//                         0
//                       )
//                       .toFixed(2)}
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-xl shadow-lg">
//                 <h3 className="text-xl font-bold text-gray-800 mb-6">
//                   Usage Analysis
//                 </h3>
//                 <ComparisonChart data={calculations} />

//                 {calculations.map(
//                   (calc: any, index: number) =>
//                     alternatives[calc.product] && (
//                       <div
//                         key={index}
//                         className="mt-6 bg-gray-50 rounded-lg p-4"
//                       >
//                         <div className="flex items-center gap-2 mb-4">
//                           <Sparkles className="w-5 h-5 text-yellow-600" />
//                           <h5 className="font-medium text-gray-900">
//                             Recommended Alternatives for {calc.product}
//                           </h5>
//                         </div>
//                         <div className="space-y-3">
//                           {alternatives[calc.product].map((alt, altIndex) => (
//                             <div
//                               key={altIndex}
//                               className="flex flex-wrap justify-between items-center gap-4 text-sm p-3 bg-white rounded-lg shadow-sm"
//                             >
//                               <span className="font-medium text-gray-800">
//                                 {alt.brand} {alt.model} ({alt.efficiency})
//                               </span>
//                               <div className="flex items-center gap-4">
//                                 <span className="text-green-600 font-medium">
//                                   Save up to {alt.savings}
//                                 </span>
//                                 <a
//                                   href={alt.link}
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                   className="text-blue-600 hover:text-blue-800 font-medium"
//                                 >
//                                   View Details
//                                 </a>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import React, { useState } from "react";
import {
  Trash2,
  PlusCircle,
  Send,
  Sparkles,
  Leaf,
  DollarSign,
  Zap,
} from "lucide-react";
import {
  products,
  brands,
  frequencies,
  years,
  alternatives,
  energyRates,
  efficiencyBenchmarks,
  productIcons,
  starRatings,
} from "../lib/data";
import {
  calculateUsage,
  calculateCost,
  calculateCarbonEmissions,
  calculatePotentialSavings,
  calculateEnergySufficiency,
  calculateCostSufficiency,
} from "../lib/calculations";
import { ComparisonChart } from "./ComparisonChart";

const deviceSchema = z.object({
  product: z.enum(products),
  brand: z.string(),
  power: z.number().min(0),
  hours: z.number().min(0).max(24),
  frequency: z.enum(frequencies),
  year: z.string(),
  advanced: z.boolean().optional(),
  energyStarRating: z.string().optional(),
});

type DeviceForm = {
  devices: z.infer<typeof deviceSchema>[];
};

export function EnergyMonitoringForm() {
  const [calculations, setCalculations] = useState<any>(null);
  const { register, control, handleSubmit, watch } = useForm<DeviceForm>({
    defaultValues: {
      devices: [
        {
          product: "Refrigerator",
          brand: "LG",
          power: efficiencyBenchmarks.Refrigerator,
          hours: 24,
          frequency: "Daily",
          year: "2023",
          advanced: false,
          energyStarRating: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "devices",
  });

  const watchProducts = watch("devices");

  const onSubmit = async (data: DeviceForm) => {
    const results = data.devices.map((device) => {
      const usage = calculateUsage({
        power: device.power,
        hours: device.hours,
        frequency: device.frequency,
      });

      const cost = calculateCost(usage, energyRates.residential);
      const carbonEmissions = calculateCarbonEmissions(usage);
      const benchmark = efficiencyBenchmarks[device.product];
      const energySufficiency = calculateEnergySufficiency(usage, benchmark);
      const costSufficiency = calculateCostSufficiency(cost, 1000);

      const potentialSavings = calculatePotentialSavings({
        power: device.power,
        hours: device.hours,
        frequency: device.frequency,
        efficiency: 20,
        rate: energyRates.residential,
      });

      return {
        ...device,
        usage,
        cost,
        carbonEmissions,
        energySufficiency,
        costSufficiency,
        potentialSavings,
      };
    });

    setCalculations(results);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 p-6">
          <div className="flex items-center gap-3">
            <Zap className="w-7 h-7 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">
              Energy Monitoring
            </h2>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-6">
              {fields.map((field, index) => {
                const ProductIcon =
                  productIcons[watchProducts[index]?.product || "Fan"];
                return (
                  <div
                    key={field.id}
                    className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <ProductIcon className="w-6 h-6 text-blue-600" />
                        <h3 className="text-lg font-semibold text-gray-800">
                          Device {index + 1}
                        </h3>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="text-red-500 hover:text-red-700 transition-colors duration-200 p-2 rounded-full hover:bg-red-50"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Product
                        </label>
                        <select
                          {...register(`devices.${index}.product`)}
                          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
                        >
                          {products.map((product) => (
                            <option key={product} value={product}>
                              {product}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Brand
                        </label>
                        <select
                          {...register(`devices.${index}.brand`)}
                          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
                        >
                          {watchProducts[index]?.product &&
                            brands[watchProducts[index].product].map(
                              (brand) => (
                                <option key={brand} value={brand}>
                                  {brand}
                                </option>
                              )
                            )}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Power (Watts)
                        </label>
                        <input
                          type="number"
                          {...register(`devices.${index}.power`, {
                            valueAsNumber: true,
                          })}
                          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Hours per day
                        </label>
                        <div className="flex items-center gap-4">
                          <input
                            type="range"
                            min="0"
                            max="24"
                            step="0.5"
                            {...register(`devices.${index}.hours`, {
                              valueAsNumber: true,
                            })}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                          />
                          <span className="text-sm font-medium w-12 text-center">
                            {watchProducts[index]?.hours || 0}h
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Frequency
                        </label>
                        <select
                          {...register(`devices.${index}.frequency`)}
                          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
                        >
                          {frequencies.map((freq) => (
                            <option key={freq} value={freq}>
                              {freq}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                          <input
                            type="checkbox"
                            {...register(`devices.${index}.advanced`)}
                            className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          />
                          Advanced Mode
                        </label>
                      </div>

                      {watchProducts[index]?.advanced && (
                        <>
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                              Energy Star Rating
                            </label>
                            <select
                              {...register(`devices.${index}.energyStarRating`)}
                              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
                            >
                              <option value="">Select rating</option>
                              {starRatings.map((rating) => (
                                <option key={rating.name} value={rating.name}>
                                  {rating.stars}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                              Year of Purchase
                            </label>
                            <select
                              {...register(`devices.${index}.year`)}
                              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
                            >
                              {years.map((year) => (
                                <option key={year} value={year}>
                                  {year}
                                </option>
                              ))}
                            </select>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() =>
                  append({
                    product: "Fan",
                    brand: brands.Fan[0],
                    power: efficiencyBenchmarks.Fan,
                    hours: 8,
                    frequency: "Daily",
                    year: "2024",
                    advanced: false,
                    energyStarRating: "",
                  })
                }
                className="flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-sm hover:shadow"
              >
                <PlusCircle className="w-5 h-5" />
                Add Device
              </button>

              <button
                type="submit"
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow"
              >
                <Send className="w-5 h-5" />
                Calculate Savings
              </button>
            </div>
          </form>

          {calculations && (
            <div className="mt-8 space-y-8">
              {/* Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-6 h-6 text-blue-600" />
                    <h4 className="font-semibold text-blue-900">Total Usage</h4>
                  </div>
                  <p className="text-3xl font-bold text-blue-700">
                    {calculations
                      .reduce((sum: number, calc: any) => sum + calc.usage, 0)
                      .toFixed(2)}{" "}
                    kWh
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <DollarSign className="w-6 h-6 text-green-600" />
                    <h4 className="font-semibold text-green-900">Total Cost</h4>
                  </div>
                  <p className="text-3xl font-bold text-green-700">
                    ₹
                    {calculations
                      .reduce((sum: number, calc: any) => sum + calc.cost, 0)
                      .toFixed(2)}
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Leaf className="w-6 h-6 text-orange-600" />
                    <h4 className="font-semibold text-orange-900">
                      Carbon Footprint
                    </h4>
                  </div>
                  <p className="text-3xl font-bold text-orange-700">
                    {calculations
                      .reduce(
                        (sum: number, calc: any) => sum + calc.carbonEmissions,
                        0
                      )
                      .toFixed(2)}{" "}
                    kg CO₂
                  </p>
                </div>
              </div>

              {/* Chart */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Usage Analysis
                </h3>
                <ComparisonChart data={calculations} />
              </div>

              {/* Device Details */}
              <div className="space-y-6">
                {calculations.map((calc: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                  >
                    <div className="p-6 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        {productIcons[calc.product] &&
                          React.createElement(productIcons[calc.product], {
                            className: "w-6 h-6 text-blue-600",
                          })}
                        <h4 className="text-lg font-semibold text-gray-800">
                          {calc.product} ({calc.brand})
                        </h4>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">
                            Energy Usage
                          </p>
                          <p className="text-lg font-semibold text-gray-900">
                            {calc.usage.toFixed(2)} kWh
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">
                            Monthly Cost
                          </p>
                          <p className="text-lg font-semibold text-gray-900">
                            ₹{calc.cost.toFixed(2)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">
                            Carbon Emissions
                          </p>
                          <p className="text-lg font-semibold text-gray-900">
                            {calc.carbonEmissions.toFixed(2)} kg CO₂
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">
                            Potential Monthly Savings
                          </p>
                          <p className="text-lg font-semibold text-green-600">
                            ₹{calc.potentialSavings.toFixed(2)}
                          </p>
                        </div>
                      </div>

                      {alternatives[calc.product] && (
                        <div className="mt-6 bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="w-5 h-5 text-yellow-600" />
                            <h5 className="font-medium text-gray-900">
                              Recommended Alternatives
                            </h5>
                          </div>
                          <div className="space-y-3">
                            {alternatives[calc.product].map((alt, altIndex) => (
                              <div
                                key={altIndex}
                                className="flex flex-wrap justify-between items-center gap-4 text-sm p-3 bg-white rounded-lg shadow-sm"
                              >
                                <span className="font-medium text-gray-800">
                                  {alt.brand} {alt.model} ({alt.efficiency})
                                </span>
                                <div className="flex items-center gap-4">
                                  <span className="text-green-600 font-medium">
                                    Save up to {alt.savings}
                                  </span>
                                  <a
                                    href={alt.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 font-medium"
                                  >
                                    View Details
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
