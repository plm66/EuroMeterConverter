import { useState, useCallback, FormEvent, ChangeEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DirectionToggle from "./DirectionToggle";
import { convertEurToMad, convertMadToEur, getCurrentDate } from "@/lib/conversion";

export default function ConverterCard() {
  // State for converter
  const [isEurToMad, setIsEurToMad] = useState(true);
  const [sourceValue, setSourceValue] = useState<string>("");
  const [resultValue, setResultValue] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  
  // Constants
  const exchangeRate = 4.0; // 1 EUR = 4.0 AED
  const sqmToSqftRate = 10.764; // 1 m² = 10.764 ft²
  
  // Handle direction toggle
  const handleDirectionToggle = useCallback((value: boolean) => {
    setIsEurToMad(!value);
    if (sourceValue) {
      performConversion(sourceValue, !value);
    }
  }, [sourceValue]);
  
  // Handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSourceValue(value);
    
    if (value === '') {
      setError(null);
      setResultValue(0);
      return;
    }
    
    const numValue = parseFloat(value);
    if (isNaN(numValue) || numValue < 0) {
      setError("Please enter a valid number");
      return;
    }
    
    setError(null);
    performConversion(value, isEurToMad);
  };
  
  // Perform conversion
  const performConversion = (value: string, direction: boolean) => {
    const numValue = parseFloat(value);
    
    if (isNaN(numValue)) {
      setResultValue(0);
      return;
    }
    
    let result: number;
    if (direction) {
      // EUR/m² to MAD/ft²
      result = convertEurToMad(numValue, exchangeRate, sqmToSqftRate);
    } else {
      // MAD/ft² to EUR/m²
      result = convertMadToEur(numValue, exchangeRate, sqmToSqftRate);
    }
    
    setResultValue(result);
  };
  
  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!error && sourceValue) {
      performConversion(sourceValue, isEurToMad);
    }
  };
  
  return (
    <Card className="mb-8 shadow-lg overflow-hidden border-0 rounded-xl">
      <div className="bg-gradient-to-r from-primary to-blue-400 p-4 text-white">
        <h2 className="text-lg font-semibold flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          Calculateur de prix immobilier
        </h2>
      </div>
      <CardContent className="p-6 bg-white">
        {/* Direction Toggle */}
        <div className="mb-6">
          <DirectionToggle onToggle={handleDirectionToggle} />
        </div>
        
        {/* Conversion Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Source Input Group */}
          <div className="space-y-2">
            <Label htmlFor="source-value" className="text-sm font-medium flex items-center gap-1">
              {isEurToMad ? (
                <>
                  <span className="inline-block h-3 w-3 rounded-full bg-blue-500 mr-1"></span>
                  Prix en EUR/m²
                </>
              ) : (
                <>
                  <span className="inline-block h-3 w-3 rounded-full bg-secondary mr-1"></span>
                  Prix en AED/ft²
                </>
              )}
            </Label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-slate-500 sm:text-sm">
                  {isEurToMad ? '€' : 'AED'}
                </span>
              </div>
              <Input
                id="source-value"
                type="number"
                placeholder="0.00"
                value={sourceValue}
                onChange={handleInputChange}
                className="pl-10 pr-12 py-3 text-lg border-2 focus:border-primary focus:ring-primary"
                min="0"
                step="0.01"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-slate-500 sm:text-sm">
                  {isEurToMad ? '/m²' : '/ft²'}
                </span>
              </div>
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
          </div>
          
          {/* Conversion arrow */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-yellow-100 to-blue-100 p-3 rounded-full shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
          
          {/* Result Display */}
          <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-xl p-6 border border-blue-100 shadow-inner">
            <Label className="block text-sm font-medium mb-2 flex items-center">
              {isEurToMad ? (
                <>
                  <span className="inline-block h-3 w-3 rounded-full bg-secondary mr-1"></span>
                  Prix en AED/ft²
                </>
              ) : (
                <>
                  <span className="inline-block h-3 w-3 rounded-full bg-blue-500 mr-1"></span>
                  Prix en EUR/m²
                </>
              )}
            </Label>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                {resultValue.toFixed(2)}
              </div>
              <div className="bg-white px-3 py-1 rounded-full text-sm text-slate-600 shadow-sm border border-slate-200">
                {isEurToMad ? 'AED/ft²' : '€/m²'}
              </div>
            </div>
          </div>
          
          {/* Convert Button */}
          <div className="flex justify-center">
            <Button 
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-secondary to-yellow-400 hover:from-secondary hover:to-yellow-300 text-slate-900 font-semibold text-md rounded-full shadow-md transition-all hover:shadow-lg"
            >
              Convertir
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </form>
        
        {/* Exchange Rate Info */}
        <div className="mt-8 pt-4 border-t border-slate-200">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="text-xs text-slate-500 mb-1">Taux de change actuel:</div>
              <div className="font-medium text-primary flex items-center">
                <span className="text-lg">1 EUR = {exchangeRate} AED</span>
                <span className="ml-2 text-lg">💱</span>
              </div>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg">
              <div className="text-xs text-slate-500 mb-1">Conversion d'unité:</div>
              <div className="font-medium text-secondary flex items-center">
                <span className="text-lg">1 m² = {sqmToSqftRate} ft²</span>
                <span className="ml-2 text-lg">📏</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center">
            <span className="inline-block bg-white px-2 py-1 rounded-full border border-slate-200 shadow-sm">
              Taux mis à jour le {getCurrentDate()} ☀️
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
