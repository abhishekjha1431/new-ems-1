// import { Lightbulb, Fan, Snowflake, Refrigerator, Waves, Flame } from 'lucide-react';

// export const products = ["Fan", "AC", "LED", "Refrigerator", "Washing Machine", "Geyser"] as const;

// export const productIcons = {
//   Fan,
//   AC: Snowflake,
//   LED: Lightbulb,
//   Refrigerator,
//   "Washing Machine": Waves,
//   Geyser: Flame,
// };

// export const brands = {
//   Fan: ["Havells", "Crompton", "Orient", "Usha"],
//   AC: ["Daikin", "LG", "Samsung", "Voltas"],
//   LED: ["Philips", "Havells", "Syska", "Wipro"],
//   Refrigerator: ["LG", "Samsung", "Whirlpool", "Godrej"],
//   "Washing Machine": ["LG", "Samsung", "IFB", "Whirlpool"],
//   Geyser: ["Havells", "Bajaj", "AO Smith", "V-Guard"],
// };

// export const frequencies = ["Daily", "Weekly", "Monthly", "Rarely"] as const;

// export const years = ["2024", "2023", "2022", "2021", "2020"];

// export const energyRates = {
//   residential: 8, // Rs per kWh
// };

// export const efficiencyBenchmarks = {
//   Fan: 75,
//   AC: 1500,
//   LED: 10,
//   Refrigerator: 200,
//   "Washing Machine": 500,
//   Geyser: 2000,
// };

// export const alternatives = {
//   Fan: [
//     {
//       brand: "Atomberg",
//       model: "Gorilla",
//       efficiency: "35W",
//       savings: "65%",
//       link: "#",
//     },
//   ],
//   AC: [
//     {
//       brand: "Daikin",
//       model: "5 Star Inverter",
//       efficiency: "1200W",
//       savings: "40%",
//       link: "#",
//     },
//   ],
//   LED: [
//     {
//       brand: "Philips",
//       model: "Ultra Efficient",
//       efficiency: "7W",
//       savings: "30%",
//       link: "#",
//     },
//   ],
//   Refrigerator: [
//     {
//       brand: "LG",
//       model: "5 Star Convertible",
//       efficiency: "150W",
//       savings: "25%",
//       link: "#",
//     },
//   ],
//   "Washing Machine": [
//     {
//       brand: "Samsung",
//       model: "EcoBubble",
//       efficiency: "400W",
//       savings: "20%",
//       link: "#",
//     },
//   ],
//   Geyser: [
//     {
//       brand: "V-Guard",
//       model: "Solar Hybrid",
//       efficiency: "1500W",
//       savings: "25%",
//       link: "#",
//     },
//   ],
// };




import { Lightbulb, Fan, Snowflake, Refrigerator, Waves, Flame } from 'lucide-react';

export const products = ["Fan", "AC", "LED", "Refrigerator", "Washing Machine", "Geyser"] as const;

export const productIcons = {
  Fan,
  AC: Snowflake,
  LED: Lightbulb,
  Refrigerator,
  "Washing Machine": Waves,
  Geyser: Flame,
};

export const brands = {
  Fan: ["Havells", "Crompton", "Orient", "Usha"],
  AC: ["Daikin", "LG", "Samsung", "Voltas"],
  LED: ["Philips", "Havells", "Syska", "Wipro"],
  Refrigerator: ["LG", "Samsung", "Whirlpool", "Godrej"],
  "Washing Machine": ["LG", "Samsung", "IFB", "Whirlpool"],
  Geyser: ["Havells", "Bajaj", "AO Smith", "V-Guard"],
};

export const frequencies = ["Daily", "Weekly", "Monthly", "Rarely"] as const;

export const years = ["2024", "2023", "2022", "2021", "2020"];

export const energyRates = {
  residential: 8, // Rs per kWh
};

export const efficiencyBenchmarks = {
  Fan: 75,
  AC: 1500,
  LED: 10,
  Refrigerator: 200,
  "Washing Machine": 500,
  Geyser: 2000,
};

export const starRatings = [
  { name: "1 Star", stars: "⭐" },
  { name: "2 Star", stars: "⭐⭐" },
  { name: "3 Star", stars: "⭐⭐⭐" },
  { name: "4 Star", stars: "⭐⭐⭐⭐" },
  { name: "5 Star", stars: "⭐⭐⭐⭐⭐" },
];

export const alternatives = {
  Fan: [
    {
      brand: "Atomberg",
      model: "Gorilla",
      efficiency: "35W",
      savings: "65%",
      link: "#",
    },
  ],
  AC: [
    {
      brand: "Daikin",
      model: "5 Star Inverter",
      efficiency: "1200W",
      savings: "40%",
      link: "#",
    },
  ],
  LED: [
    {
      brand: "Philips",
      model: "Ultra Efficient",
      efficiency: "7W",
      savings: "30%",
      link: "#",
    },
  ],
  Refrigerator: [
    {
      brand: "LG",
      model: "5 Star Convertible",
      efficiency: "150W",
      savings: "25%",
      link: "#",
    },
  ],
  "Washing Machine": [
    {
      brand: "Samsung",
      model: "EcoBubble",
      efficiency: "400W",
      savings: "20%",
      link: "#",
    },
  ],
  Geyser: [
    {
      brand: "V-Guard",
      model: "Solar Hybrid",
      efficiency: "1500W",
      savings: "25%",
      link: "#",
    },
  ],
};