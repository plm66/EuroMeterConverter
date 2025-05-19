import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Currency = {
  code: string;
  name: string;
  symbol: string;
};

const currencies: Currency[] = [
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "AED", name: "UAE Dirham", symbol: "AED" },
  { code: "BTC", name: "Bitcoin", symbol: "₿" },
];

export default function CurrencyConverter() {
  const [amount, setAmount] = useState<string>("");
  const [fromCurrency, setFromCurrency] = useState<string>("EUR");
  const [toCurrency, setToCurrency] = useState<string>("USD");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  
  // For now, using static exchange rates
  const exchangeRates: Record<string, Record<string, number>> = {
    EUR: { USD: 1.09, AED: 4.0, BTC: 0.000018, EUR: 1 },
    USD: { EUR: 0.92, AED: 3.67, BTC: 0.000016, USD: 1 },
    AED: { EUR: 0.25, USD: 0.27, BTC: 0.0000044, AED: 1 },
    BTC: { EUR: 55555.56, USD: 60606.06, AED: 227272.73, BTC: 1 }
  };
  
  // TODO: Replace with API call in future
  const calculateConversion = () => {
    if (!amount || isNaN(parseFloat(amount))) {
      setError("Please enter a valid amount");
      return;
    }
    
    setError(null);
    setLoading(true);
    
    try {
      const numAmount = parseFloat(amount);
      const rate = exchangeRates[fromCurrency][toCurrency];
      const convertedAmount = numAmount * rate;
      
      // Simulate API delay
      setTimeout(() => {
        setResult(convertedAmount);
        setLoading(false);
      }, 500);
    } catch (err) {
      setError("Conversion failed. Please try again.");
      setLoading(false);
    }
  };
  
  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setResult(null);
  };
  
  const getSymbol = (code: string): string => {
    const currency = currencies.find(c => c.code === code);
    return currency ? currency.symbol : code;
  };
  
  const formatCurrency = (value: number, currencyCode: string): string => {
    if (currencyCode === "BTC") {
      // Format Bitcoin to 8 decimal places
      return value.toFixed(8);
    }
    
    // Format other currencies with 2 decimal places
    return value.toFixed(2);
  };
  
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold text-primary mb-6 text-center">Currency Converter</h2>
      
      <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
        <div className="space-y-6">
          {/* Amount Input */}
          <div>
            <Label htmlFor="amount" className="text-gray-700 font-medium mb-2 block">
              Amount
            </Label>
            <div className="relative">
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="pl-12 text-lg"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">{getSymbol(fromCurrency)}</span>
              </div>
            </div>
          </div>
          
          {/* Currency Selectors */}
          <div className="grid grid-cols-5 gap-2 items-center">
            <div className="col-span-2">
              <Label htmlFor="from-currency" className="text-gray-700 font-medium mb-2 block">
                From
              </Label>
              <Select
                value={fromCurrency}
                onValueChange={(value) => setFromCurrency(value)}
              >
                <SelectTrigger id="from-currency">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={`from-${currency.code}`} value={currency.code}>
                      {currency.symbol} {currency.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex justify-center items-end pb-1">
              <Button 
                type="button" 
                variant="ghost" 
                onClick={handleSwapCurrencies}
                className="h-8 px-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </Button>
            </div>
            
            <div className="col-span-2">
              <Label htmlFor="to-currency" className="text-gray-700 font-medium mb-2 block">
                To
              </Label>
              <Select
                value={toCurrency}
                onValueChange={(value) => setToCurrency(value)}
              >
                <SelectTrigger id="to-currency">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={`to-${currency.code}`} value={currency.code}>
                      {currency.symbol} {currency.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Convert Button */}
          <Button
            onClick={calculateConversion}
            className="w-full bg-secondary hover:bg-secondary/90 text-white py-2"
            disabled={loading}
          >
            {loading ? "Converting..." : "Convert"}
          </Button>
          
          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          
          {/* Result Display */}
          {result !== null && (
            <div className="mt-4 p-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">{parseFloat(amount).toFixed(2)} {fromCurrency}</span>
                <span>=</span>
                <span className="text-3xl font-bold text-primary">
                  {getSymbol(toCurrency)} {formatCurrency(result, toCurrency)}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-4 text-right">
                Exchange rates last updated on {new Date().toLocaleDateString()}
              </p>
            </div>
          )}
          
          <div className="text-xs text-gray-500 mt-4">
            <p>Note: Currently using static exchange rates for demonstration.</p>
            <p>Integration with real-time exchange rate API coming soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
}