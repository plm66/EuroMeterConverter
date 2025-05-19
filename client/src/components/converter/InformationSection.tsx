import { useState } from "react";

export default function InformationSection() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="my-16">
      <div className="border-t border-b border-gray-200 py-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-xl font-bold text-primary">About This Converter</h2>
          <button 
            className="text-gray-500 hover:text-primary"
            aria-label={isOpen ? "Close information" : "Open information"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
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
          </button>
        </div>
        
        {isOpen && (
          <div className="mt-6 space-y-6 text-gray-600">
            <p>This converter helps you translate property prices between European and UAE standards.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Europe</h3>
                <p>Property prices in Europe are typically measured in euros per square meter (EUR/m²).</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">United Arab Emirates</h3>
                <p>UAE property prices are commonly listed in dirhams per square foot (AED/ft²).</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-primary mb-3">Conversion Formulas</h3>
              <div className="space-y-2">
                <p><strong>EUR/m² to AED/ft²:</strong> (EUR × 4.0) ÷ 10.764</p>
                <p><strong>AED/ft² to EUR/m²:</strong> (AED × 10.764) ÷ 4.0</p>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="text-lg font-bold text-primary mb-2">For Investors</h3>
              <p>Use our converter when evaluating international property portfolios to make informed decisions. Compare prices across markets to identify investment opportunities in Dubai, Abu Dhabi, and beyond.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
