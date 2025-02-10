import { Sparkles } from "lucide-react";

export type Alternative = {
  brand: string;
  model: string;
  efficiency: string;
  savings: string;
  link: string;
};

export const alternatives: Record<string, Alternative[]> = {
  Fan: [
    {
      brand: "Atomberg",
      model: "Renesa Smart+ 1200mm BLDC",
      efficiency: "5-Star",
      savings: "₹1,200/year",
      link: "https://atomberg.com/product/renesa-smart-plus/"
    },
    {
      brand: "Havells",
      model: "Stealth Air 1250mm BLDC",
      efficiency: "5-Star",
      savings: "₹1,000/year",
      link: "https://www.havells.com/stealth-air-bldc-fan"
    }
  ],
  AC: [
    {
      brand: "Daikin",
      model: "FTKF35TV16U 1.5 Ton Inverter",
      efficiency: "5-Star",
      savings: "₹5,000/year",
      link: "https://www.daikinindia.com/inverter-ac"
    },
    {
      brand: "Voltas",
      model: "SAC 183V ADP 1.5 Ton Inverter",
      efficiency: "5-Star",
      savings: "₹4,500/year",
      link: "https://www.voltasac.com/inverter-ac"
    }
  ],
  LED: [
    {
      brand: "Philips",
      model: "9W Ultra Efficient LED",
      efficiency: "A++",
      savings: "₹300/year",
      link: "https://www.philips.co.in/led-bulbs"
    },
    {
      brand: "Havells",
      model: "8W Smart LED",
      efficiency: "A+",
      savings: "₹250/year",
      link: "https://www.havells.com/smart-led"
    }
  ],
  Refrigerator: [
    {
      brand: "LG",
      model: "GL-T432FPZY 420L Inverter",
      efficiency: "5-Star",
      savings: "₹3,000/year",
      link: "https://www.lg.com/refrigerator"
    },
    {
      brand: "Samsung",
      model: "RT42M5538B8 415L Inverter",
      efficiency: "5-Star",
      savings: "₹2,800/year",
      link: "https://www.samsung.com/refrigerator"
    }
  ],
  "Washing Machine": [
    {
      brand: "LG",
      model: "FHM1207SDW 7kg AI DD",
      efficiency: "5-Star",
      savings: "₹2,000/year",
      link: "https://www.lg.com/washing-machine"
    },
    {
      brand: "Samsung",
      model: "WW80T504DAN 8kg AI Control",
      efficiency: "5-Star",
      savings: "₹1,800/year",
      link: "https://www.samsung.com/washing-machine"
    }
  ],
  Geyser: [
    {
      brand: "Havells",
      model: "Adonia Spin 25L",
      efficiency: "5-Star",
      savings: "₹1,500/year",
      link: "https://www.havells.com/water-heater"
    },
    {
      brand: "AO Smith",
      model: "HSE-VAS-X-025",
      efficiency: "5-Star",
      savings: "₹1,400/year",
      link: "https://www.aosmith.com/water-heater"
    }
  ]
};