import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function InformationSection() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Card className="overflow-hidden border-0 shadow-lg rounded-xl">
      <div className="bg-gradient-to-r from-accent to-green-400 p-4 text-white">
        <h2 className="text-lg font-semibold flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          À propos de ce convertisseur
        </h2>
      </div>
      <CardContent className="p-6 bg-white">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-lg font-medium text-slate-800 flex items-center">
            <span className="mr-2 text-lg">✨</span>
            Comprendre les conversions immobilières
          </span>
          <span className={`transition duration-300 ${isOpen ? "rotate-180" : ""} bg-blue-50 p-2 rounded-full`}>
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
          <div className="mt-5 text-slate-600 space-y-4 bg-gradient-to-r from-blue-50 to-green-50 p-5 rounded-xl border border-blue-100">
            <p className="leading-relaxed">Ce convertisseur vous aide à traduire rapidement les prix immobiliers entre les standards européens et émiratis :</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white mr-2">€</div>
                  <h3 className="font-medium text-primary">Europe</h3>
                </div>
                <p className="text-sm">Prix en euros par mètre carré (EUR/m²), utilisé couramment dans l'immobilier européen</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-yellow-100">
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-slate-800 mr-2">AED</div>
                  <h3 className="font-medium text-secondary">Émirats Arabes Unis</h3>
                </div>
                <p className="text-sm">Prix en dirhams émiratis par pied carré (AED/ft²), utilisé dans l'immobilier émirati avec influence occidentale</p>
              </div>
            </div>
            <p className="leading-relaxed">La conversion prend en compte à la fois le taux de change des devises et les différences d'unités de superficie.</p>
            <div>
              <p className="mb-2 font-medium text-slate-700">Les formules utilisées:</p>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 font-mono text-sm space-y-2">
                <div className="flex items-center">
                  <span className="text-primary font-semibold mr-2">EUR/m² → AED/ft²:</span>
                  <span>(EUR × 4.0) ÷ 10.764</span>
                </div>
                <div className="flex items-center">
                  <span className="text-secondary font-semibold mr-2">AED/ft² → EUR/m²:</span>
                  <span>(AED × 10.764) ÷ 4.0</span>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-amber-50 p-3 rounded-lg border border-amber-100">
              <p className="text-sm flex items-center">
                <span className="text-amber-500 mr-2">💡</span>
                <span>Conseil: Utilisez notre convertisseur pour comparer facilement les prix immobiliers entre l'Europe et les EAU!</span>
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
