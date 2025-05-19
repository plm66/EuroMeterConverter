import { useState } from "react";

export default function ExchangeRateInfo() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="my-12">
      <div className="border-t border-b border-gray-200 py-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-xl font-bold text-primary">About Exchange Rates</h2>
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
            <p>
              All exchange rate data is sourced from Fixer.io API, providing reliable and accurate foreign exchange rates and currency conversion.
            </p>
            
            <div>
              <h3 className="text-lg font-bold text-primary mb-3">Data Reliability</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Exchange rates are sourced from reputable financial data providers</li>
                <li>Data updated every 60 minutes for the free plan</li>
                <li>166 world currencies supported with historical data</li>
                <li>Used by thousands of developers and companies worldwide</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-primary mb-3">Caching Strategy</h3>
              <p className="mb-2">Our application implements an intelligent caching system to optimize performance while maintaining data accuracy:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Fresh data is cached for 24 hours to reduce API calls</li>
                <li>Cached data is served instantly (0ms) vs. API calls (413-417ms)</li>
                <li>Fallback to cached data when API limits are reached</li>
                <li>Timestamps show exactly when rates were last updated</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-primary mb-3">Available Endpoints</h3>
              <p>The Fixer.io API provides several endpoints for different currency data needs:</p>
              <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                <div>
                  <p className="font-semibold">/latest</p>
                  <p className="text-gray-500">Current exchange rates</p>
                </div>
                <div>
                  <p className="font-semibold">/convert</p>
                  <p className="text-gray-500">Currency conversion</p>
                </div>
                <div>
                  <p className="font-semibold">/symbols</p>
                  <p className="text-gray-500">Available currencies</p>
                </div>
                <div>
                  <p className="font-semibold">/fluctuation</p>
                  <p className="text-gray-500">Rate changes over time</p>
                </div>
                <div>
                  <p className="font-semibold">/timeseries</p>
                  <p className="text-gray-500">Historical data series</p>
                </div>
                <div>
                  <p className="font-semibold">/{"{date}"}</p>
                  <p className="text-gray-500">Historical rates by date</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}