import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
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
