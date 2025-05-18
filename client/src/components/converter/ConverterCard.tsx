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
    <Card className="mb-8 shadow-2xl overflow-hidden border-0 rounded-xl bg-white/30 backdrop-blur-md">
      <div className="bg-gradient-to-r from-accent to-primary p-5 text-white">
        <h2 className="text-xl font-semibold flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          PROPERTY PRICE CALCULATOR
        </h2>
      </div>
      
      <CardContent className="p-8 bg-white/80">
        {/* Direction Toggle */}
        <div className="mb-8">
          <DirectionToggle onToggle={handleDirectionToggle} />
        </div>
        
        {/* Conversion Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Source Input Group */}
          <div className="space-y-3">
            <Label htmlFor="source-value" className="text-sm font-medium flex items-center gap-1 uppercase tracking-wider text-accent">
              {isEurToMad ? (
                <>
                  <span className="inline-block h-3 w-3 rounded-full bg-primary mr-1"></span>
                  Price in EUR/m²
                </>
              ) : (
                <>
                  <span className="inline-block h-3 w-3 rounded-full bg-secondary mr-1"></span>
                  Price in AED/ft²
                </>
              )}
            </Label>
            <div className="relative rounded-lg shadow-md">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="text-accent font-medium sm:text-base">
                  {isEurToMad ? '€' : 'AED'}
                </span>
              </div>
              <Input
                id="source-value"
                type="number"
                placeholder="0.00"
                value={sourceValue}
                onChange={handleInputChange}
                className="pl-12 pr-16 py-5 text-xl font-light border-2 focus:border-primary focus:ring-primary bg-white/80 rounded-lg"
                min="0"
                step="0.01"
              />
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <span className="text-accent font-medium sm:text-base">
                  {isEurToMad ? '/m²' : '/ft²'}
                </span>
              </div>
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
          </div>
          
          {/* Conversion arrow */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-3 rounded-full shadow-inner border border-primary/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
          
          {/* Result Display */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 border border-primary/20 shadow-inner">
            <Label className="block text-sm font-medium mb-3 flex items-center uppercase tracking-wider text-accent">
              {isEurToMad ? (
                <>
                  <span className="inline-block h-3 w-3 rounded-full bg-secondary mr-1"></span>
                  Price in AED/ft²
                </>
              ) : (
                <>
                  <span className="inline-block h-3 w-3 rounded-full bg-primary mr-1"></span>
                  Price in EUR/m²
                </>
              )}
            </Label>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold luxury-gradient">
                {resultValue.toFixed(2)}
              </div>
              <div className="bg-white px-4 py-2 rounded-full text-sm text-accent font-medium shadow-sm border border-accent/20">
                {isEurToMad ? 'AED/ft²' : '€/m²'}
              </div>
            </div>
          </div>
          
          {/* Convert Button */}
          <div className="flex justify-center">
            <Button 
              type="submit"
              className="px-10 py-4 bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary hover:to-secondary text-accent font-semibold text-md rounded-full shadow-xl transition-all hover:shadow-2xl uppercase tracking-wider"
            >
              Convert
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </form>
        
        {/* Exchange Rate Info */}
        <div className="mt-10 pt-6 border-t border-accent/10">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <div className="text-xs uppercase tracking-wider text-accent/70 mb-2">Current Exchange Rate</div>
              <div className="font-medium text-primary flex items-center">
                <span className="text-lg">1 EUR = {exchangeRate} AED</span>
                <span className="ml-2 text-lg">💱</span>
              </div>
            </div>
            <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/20">
              <div className="text-xs uppercase tracking-wider text-accent/70 mb-2">Unit Conversion</div>
              <div className="font-medium text-accent flex items-center">
                <span className="text-lg">1 m² = {sqmToSqftRate} ft²</span>
                <span className="ml-2 text-lg">📏</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-accent/70 mt-6 text-center">
            <span className="inline-block bg-white/80 px-3 py-1.5 rounded-full border border-accent/10 shadow-sm">
              Rates updated on {getCurrentDate()} ✨
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
