export const calculateUsage = ({
  power,
  hours,
  frequency,
}: {
  power: number;
  hours: number;
  frequency: string;
}) => {
  const frequencyFactor = {
    Daily: 30,
    Weekly: 4,
    Monthly: 1,
    Rarely: 0.5,
  }[frequency] || 30;

  const dailyKWh = (power * hours) / 1000;
  return dailyKWh * frequencyFactor;
};

export const calculateCost = (usage: number, rate: number) => {
  return usage * rate;
};

export const calculateCarbonEmissions = (usage: number) => {
  return usage * 0.85; // kg CO2 per kWh
};

export const calculatePotentialSavings = ({
  power,
  hours,
  frequency,
  efficiency,
  rate,
}: {
  power: number;
  hours: number;
  frequency: string;
  efficiency: number;
  rate: number;
}) => {
  const currentUsage = calculateUsage({ power, hours, frequency });
  const improvedUsage = currentUsage * (1 - efficiency / 100);
  return (currentUsage - improvedUsage) * rate;
};

export const calculateEnergySufficiency = (usage: number, benchmark: number) => {
  return (benchmark / usage) * 100;
};

export const calculateCostSufficiency = (cost: number, budget: number) => {
  return (budget / cost) * 100;
};