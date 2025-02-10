// app/calculate/page.tsx
"use client";
import { EnergyMonitoringForm } from "../components/EM";

// Important for components with hooks

export default function CalculatePage() {
  return (
    <div className="container mx-auto p-4">
      {" "}
      {/* Add container and padding for better layout */}
      <h1 className="text-3xl font-bold mb-4">Calculate Your Energy Usage</h1>
      <EnergyMonitoringForm />
    </div>
  );
}
