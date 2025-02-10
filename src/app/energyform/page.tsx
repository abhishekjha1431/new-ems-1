// app/energyform/page.tsx
"use client";

import { EnergyMonitoringForm } from "../components/EM";

export default function EnergyFormPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Calculate Your Energy Usage</h1>
      <EnergyMonitoringForm /> {/* Render the EnergyMonitoringForm component */}
    </div>
  );
}
