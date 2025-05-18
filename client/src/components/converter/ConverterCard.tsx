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
    <Card className="mb-6">
      <CardContent className="p-6">
        {/* Direction Toggle */}
        <div className="mb-6">
          <DirectionToggle onToggle={handleDirectionToggle} />
        </div>
        
        {/* Conversion Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Source Input Group */}
          <div className="space-y-2">
            <Label htmlFor="source-value" className="text-sm font-medium text-secondary-dark">
              {isEurToMad ? 'Price in EUR/m²' : 'Price in AED/ft²'}
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
                className="pl-10 pr-12 py-3 text-lg"
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
            <div className="bg-slate-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
          
          {/* Result Display */}
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <Label className="block text-sm font-medium text-secondary-dark mb-1">
              {isEurToMad ? 'Price in AED/ft²' : 'Price in EUR/m²'}
            </Label>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-semibold text-primary">
                {resultValue.toFixed(2)}
              </div>
              <div className="text-sm text-slate-500">
                {isEurToMad ? 'AED/ft²' : '€/m²'}
              </div>
            </div>
          </div>
          
          {/* Convert Button */}
          <div className="flex justify-center">
            <Button 
              type="submit"
              className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium shadow-sm"
            >
              Convert
            </Button>
          </div>
        </form>
        
        {/* Exchange Rate Info */}
        <div className="mt-6 pt-4 border-t border-slate-200">
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-500">Current Exchange Rate:</span>
            <span className="text-sm font-medium">1 EUR = {exchangeRate} AED</span>
          </div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-sm text-slate-500">Unit Conversion:</span>
            <span className="text-sm font-medium">1 m² = {sqmToSqftRate} ft²</span>
          </div>
          <p className="text-xs text-slate-400 mt-2 text-right italic">*Rate as of {getCurrentDate()}</p>
        </div>
      </CardContent>
    </Card>
  );
}
