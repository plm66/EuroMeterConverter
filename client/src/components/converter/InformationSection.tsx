import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function InformationSection() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-lg font-semibold text-secondary-dark">About this Converter</span>
          <span className={`transition duration-300 ${isOpen ? "rotate-180" : ""}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-slate-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
        
        {isOpen && (
          <div className="mt-3 text-sm text-slate-600 space-y-3">
            <p>This converter helps you quickly translate property prices between European and Moroccan standards:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Euros per square meter (EUR/m²) is commonly used in European real estate</li>
              <li>Dirhams per square foot (MAD/ft²) is used in Moroccan real estate with Western influence</li>
              <li>The conversion accounts for both currency exchange and unit of area differences</li>
            </ul>
            <p>The calculation uses the following formula:</p>
            <div className="bg-slate-100 p-3 rounded-md text-sm font-mono">
              <p>EUR/m² to MAD/ft²: (EUR × exchange_rate) ÷ 10.764</p>
              <p>MAD/ft² to EUR/m²: (MAD × 10.764) ÷ exchange_rate</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
