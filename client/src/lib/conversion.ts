/**
 * Converts price from euros per square meter to dirhams per square foot
 * @param value - Price in euros per square meter
 * @param exchangeRate - Exchange rate (1 EUR = X MAD)
 * @param sqmToSqftRate - Conversion rate from square meters to square feet (1 m² = X ft²)
 * @returns Price in dirhams per square foot
 */
export function convertEurToMad(
  value: number, 
  exchangeRate: number, 
  sqmToSqftRate: number
): number {
  return (value * exchangeRate) / sqmToSqftRate;
}

/**
 * Converts price from dirhams per square foot to euros per square meter
 * @param value - Price in dirhams per square foot
 * @param exchangeRate - Exchange rate (1 EUR = X MAD)
 * @param sqmToSqftRate - Conversion rate from square meters to square feet (1 m² = X ft²)
 * @returns Price in euros per square meter
 */
export function convertMadToEur(
  value: number, 
  exchangeRate: number, 
  sqmToSqftRate: number
): number {
  return (value * sqmToSqftRate) / exchangeRate;
}

/**
 * Gets the current date formatted as "Month Day, Year"
 * @returns Formatted date string
 */
export function getCurrentDate(): string {
  const now = new Date();
  return now.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}
