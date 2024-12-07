export const connectToStockMarket = (onMessage) => {
    const ws = new WebSocket('wss://example-stock-api.com/realtime');
    ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        onMessage(data);
    };
    ws.onclose = () => console.log('WebSocket closed');
    return ws;
};

