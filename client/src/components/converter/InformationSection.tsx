import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function InformationSection() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Card className="overflow-hidden border-0 shadow-2xl rounded-xl bg-white/30 backdrop-blur-md">
      <div className="bg-gradient-to-r from-accent to-primary p-5 text-white">
        <h2 className="text-xl font-semibold flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          ABOUT THIS CONVERTER
        </h2>
      </div>
      <CardContent className="p-8 bg-white/80">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-lg font-medium text-accent flex items-center">
            <span className="mr-2 text-lg">✨</span>
            <span className="font-playfair">Understanding Property Price Conversions</span>
          </span>
          <span className={`transition duration-300 ${isOpen ? "rotate-180" : ""} bg-primary/5 p-3 rounded-full border border-primary/20`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary"
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
          <div className="mt-6 text-accent space-y-5 bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-xl border border-primary/20 shadow-inner">
            <p className="leading-relaxed">This converter helps you quickly translate property prices between European and UAE standards:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/90 p-5 rounded-lg shadow-md border border-primary/10 backdrop-blur-sm">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white mr-3 shadow-md">€</div>
                  <h3 className="font-medium text-primary text-lg font-playfair">Europe</h3>
                </div>
                <p className="text-accent/80">Price in euros per square meter (EUR/m²), commonly used in European real estate markets</p>
              </div>
              <div className="bg-white/90 p-5 rounded-lg shadow-md border border-secondary/10 backdrop-blur-sm">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-accent mr-3 shadow-md">AED</div>
                  <h3 className="font-medium text-secondary text-lg font-playfair">United Arab Emirates</h3>
                </div>
                <p className="text-accent/80">Price in Emirati Dirhams per square foot (AED/ft²), used in UAE real estate with Western influence</p>
              </div>
            </div>
            <p className="leading-relaxed">The conversion takes into account both currency exchange rates and differences in area measurement units, providing precise valuations for luxury properties worldwide.</p>
            <div>
              <p className="mb-3 font-medium text-accent/90 uppercase tracking-wider text-sm">Conversion Formulas:</p>
              <div className="bg-white/90 p-6 rounded-lg shadow-md border border-primary/10 font-mono text-sm space-y-3 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-primary font-semibold uppercase tracking-wider text-xs md:mr-3">EUR/m² → AED/ft²:</span>
                  <span className="bg-primary/5 px-4 py-2 rounded-lg">(EUR × 4.0) ÷ 10.764</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-secondary font-semibold uppercase tracking-wider text-xs md:mr-3">AED/ft² → EUR/m²:</span>
                  <span className="bg-secondary/5 px-4 py-2 rounded-lg">(AED × 10.764) ÷ 4.0</span>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-white/80 p-5 rounded-lg shadow-md border border-secondary/10 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-secondary/20 text-secondary">💡</span>
                </div>
                <div>
                  <h4 className="font-medium text-accent mb-1 font-playfair">TIP FOR LUXURY PROPERTY INVESTORS</h4>
                  <p className="text-accent/80">Use our converter when evaluating international property portfolios to make informed decisions. Compare prices across markets to identify the best investment opportunities in Dubai, Abu Dhabi, and beyond.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
