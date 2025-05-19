interface ExchangeRateResponse {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: Record<string, number>;
}

/**
 * Fetches exchange rates from Fixer.io API
 * @param base Base currency (default: EUR)
 * @returns Exchange rates data
 */
export async function fetchExchangeRates(base: string = 'EUR'): Promise<ExchangeRateResponse> {
  try {
    // Fetch from server-side proxy to protect API key
    const response = await fetch(`/api/exchange-rates?base=${base}`);
    
    if (!response.ok) {
      throw new Error(`Error fetching exchange rates: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch exchange rates:', error);
    throw error;
  }
}

/**
 * Converts an amount from one currency to another
 * @param amount The amount to convert
 * @param fromCurrency The source currency
 * @param toCurrency The target currency
 * @param rates Exchange rates (with fromCurrency as base)
 * @returns The converted amount
 */
export function convertCurrency(
  amount: number,
  fromCurrency: string,
  toCurrency: string,
  rates: Record<string, number>
): number {
  // Direct conversion if toCurrency rate exists
  if (rates[toCurrency]) {
    return amount * rates[toCurrency];
  }
  
  // If fromCurrency is not the base currency used in rates
  // This should not happen with our implementation but added for safety
  return amount * (1 / rates[fromCurrency]) * rates[toCurrency];
}

/**
 * Format currency amount for display
 * @param amount The amount to format
 * @param currencyCode The currency code
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number, currencyCode: string): string {
  if (currencyCode === "BTC") {
    // Format Bitcoin to 8 decimal places
    return amount.toFixed(8);
  }
  
  // Format other currencies with 2 decimal places
  return amount.toFixed(2);
}