import { useEffect, useState } from 'react';
import { connectToStockMarket } from '../services/websocket';

export const useWebSocket = () => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        const ws = connectToStockMarket((data) => {
            setStocks((prev) => [...prev, data]);
        });
        return () => ws.close();
    }, []);

    return { stocks };
};
