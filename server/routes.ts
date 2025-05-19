import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import fetch from "node-fetch";

export async function registerRoutes(app: Express): Promise<Server> {
  // Cache for exchange rates data
  let ratesCache: any = null;
  let lastFetchTime = 0;
  const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  
  // Exchange rates API proxy with caching
  app.get("/api/exchange-rates", async (req: Request, res: Response) => {
    try {
      const currentTime = Date.now();
      
      // If we have cached data and it's less than 24 hours old, use it
      if (ratesCache && (currentTime - lastFetchTime) < CACHE_DURATION) {
        console.log("Using cached exchange rates data");
        return res.json(ratesCache);
      }
      
      const apiKey = process.env.FIXER_API_KEY;
      
      if (!apiKey) {
        return res.status(500).json({ 
          success: false, 
          error: "API key not configured" 
        });
      }
      
      const url = `http://data.fixer.io/api/latest?access_key=${apiKey}`;
      console.log("Fetching exchange rates from:", url);
      
      const response = await fetch(url);
      const data = await response.json() as any;
      
      if (!data.success) {
        console.error("Fixer API error:", data);
        
        // If we have cached data but it's old, still return it instead of an error
        if (ratesCache) {
          console.log("Using expired cached data due to API error");
          return res.json(ratesCache);
        }
        
        return res.status(500).json({ 
          success: false, 
          error: "Failed to fetch exchange rates",
          message: data.error?.type || "Unknown error"
        });
      }
      
      // Update the cache
      ratesCache = data;
      lastFetchTime = currentTime;
      
      res.json(data);
    } catch (error) {
      console.error("Exchange rate API error:", error);
      
      // If we have cached data, return it even on error
      if (ratesCache) {
        console.log("Using cached data due to API error");
        return res.json(ratesCache);
      }
      
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch exchange rates" 
      });
    }
  });
  // API Route for property price conversion
  app.post('/api/convert', (req, res) => {
    try {
      const { value, isEurToMad } = req.body;
      
      // Validation
      if (value === undefined || isEurToMad === undefined) {
        return res.status(400).json({ message: 'Missing required parameters' });
      }
      
      const numValue = parseFloat(value);
      
      if (isNaN(numValue) || numValue < 0) {
        return res.status(400).json({ message: 'Invalid value provided' });
      }
      
      // Constants
      const exchangeRate = 4.0; // 1 EUR = 4.0 AED
      const sqmToSqftRate = 10.764; // 1 m² = 10.764 ft²
      
      let result;
      if (isEurToMad) {
        // EUR/m² to AED/ft²
        result = (numValue * exchangeRate) / sqmToSqftRate;
      } else {
        // AED/ft² to EUR/m²
        result = (numValue * sqmToSqftRate) / exchangeRate;
      }
      
      res.json({ 
        result: result.toFixed(2),
        sourceValue: numValue,
        exchangeRate,
        sqmToSqftRate,
        isEurToMad
      });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred during the conversion process' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
