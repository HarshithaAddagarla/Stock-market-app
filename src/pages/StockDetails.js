// src/pages/StockDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchStockData } from '../api';
import StockChart from '../components/StockChart';

const StockDetails = () => {
  const { symbol } = useParams();
  const [stockData, setStockData] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);

  useEffect(() => {
    const getStockDetails = async () => {
      const data = await fetchStockData(symbol);
      const timeSeries = data['Time Series (Daily)'];
      const dates = Object.keys(timeSeries).reverse();
      const prices = dates.map(date => timeSeries[date]['4. close']).reverse();

      setChartData(prices);
      setChartLabels(dates);
      setStockData(data);
    };

    getStockDetails();
  }, [symbol]);

  return (
    <div>
      <h1>{symbol} Stock Details</h1>
      <StockChart data={chartData} labels={chartLabels} />
      {stockData && <p>Latest Price: ${stockData['Time Series (Daily)'][Object.keys(stockData['Time Series (Daily)'])[0]]['4. close']}</p>}
    </div>
  );
};

export default StockDetails;
