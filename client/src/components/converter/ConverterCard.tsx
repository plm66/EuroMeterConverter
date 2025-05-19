import { useState, useCallback, FormEvent, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import DirectionToggle from "./DirectionToggle";
import { convertEurToMad, convertMadToEur, getCurrentDate } from "@/lib/conversion";

export default function ConverterCard() {
  // State for converter
  const [isEurToMad, setIsEurToMad] = useState(true);
  const [sourceValue, setSourceValue] = useState<string>("");
  const [resultValue, setResultValue] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [hasResult, setHasResult] = useState(false);
  
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
      setHasResult(false);
      return;
    }
    
    const numValue = parseFloat(value);
    if (isNaN(numValue) || numValue < 0) {
      setError("Please enter a valid number");
      setHasResult(false);
      return;
    }
    
    setError(null);
  };
  
  // Perform conversion
  const performConversion = (value: string, direction: boolean) => {
    const numValue = parseFloat(value);
    
    if (isNaN(numValue)) {
      setResultValue(0);
      setHasResult(false);
      return;
    }
    
    let result: number;
    if (direction) {
      // EUR/m² to AED/ft²
      result = convertEurToMad(numValue, exchangeRate, sqmToSqftRate);
    } else {
      // AED/ft² to EUR/m²
      result = convertMadToEur(numValue, exchangeRate, sqmToSqftRate);
    }
    
    setResultValue(result);
    setHasResult(true);
  };
  
  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!error && sourceValue) {
      performConversion(sourceValue, isEurToMad);
    }
  };
  
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg p-8">
      {/* Direction Toggle */}
      <div className="mb-8">
        <p className="mb-3 text-gray-600">Select conversion direction:</p>
        <DirectionToggle onToggle={handleDirectionToggle} />
      </div>
      
      {/* Conversion Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Source Input Group */}
        <div className="space-y-3">
          <Label htmlFor="source-value" className="text-gray-700 font-medium">
            {isEurToMad ? "Price in EUR per m²" : "Price in AED per ft²"}
          </Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="text-gray-500 font-medium">
                {isEurToMad ? '€' : 'AED'}
              </span>
            </div>
            <Input
              id="source-value"
              type="number"
              placeholder="0.00"
              value={sourceValue}
              onChange={handleInputChange}
              className="pl-12 pr-16 py-6 text-xl border border-gray-200 rounded-lg"
              min="0"
              step="0.01"
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <span className="text-gray-500 font-medium">
                {isEurToMad ? '/m²' : '/ft²'}
              </span>
            </div>
          </div>
          {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
        
        {/* Convert Button */}
        <div>
          <Button 
            type="submit"
            className="w-full py-3 bg-secondary hover:bg-secondary/90 text-white font-medium"
          >
            Convert
          </Button>
        </div>
      </form>
      
      {/* Result Display */}
      {hasResult && (
        <div className="mt-8 pt-8 border-t border-gray-200">
          <Label className="text-gray-700 font-medium mb-3 block">
            {isEurToMad ? "Price in AED per ft²" : "Price in EUR per m²"}
          </Label>
          <div className="flex items-center justify-between">
            <div className="text-4xl font-bold text-primary">
              {resultValue.toFixed(2)}
            </div>
            <div className="text-gray-500 text-xl">
              {isEurToMad ? 'AED/ft²' : '€/m²'}
            </div>
          </div>
          
          {/* Conversion Info */}
          <div className="mt-6 text-sm text-gray-500">
            <p className="mb-2">
              <strong>Conversion:</strong> {parseFloat(sourceValue).toFixed(2)} {isEurToMad ? 'EUR/m²' : 'AED/ft²'} = {resultValue.toFixed(2)} {isEurToMad ? 'AED/ft²' : 'EUR/m²'}
            </p>
            <p className="mb-2">
              <strong>Exchange Rate:</strong> 1 EUR = {exchangeRate} AED
            </p>
            <p>
              <strong>Area Conversion:</strong> 1 m² = {sqmToSqftRate.toFixed(3)} ft²
            </p>
            <p className="mt-4 text-xs text-right text-gray-400">
              Rates updated on {getCurrentDate()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
