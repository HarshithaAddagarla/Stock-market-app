// src/api.js
import axios from 'axios';

// Alpha Vantage API key
const API_KEY = 'KTYPEG3AH8JBJMWZ';

// Function to get stock data (e.g., real-time quote or historical data)
export const fetchStockData = async (symbol) => {
  try {
    const response = await axios.get(`https://www.alphavantage.co/query`, {
      params: {
        function: 'TIME_SERIES_DAILY',
        symbol: symbol,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching stock data", error);
    throw error;
  }
};
