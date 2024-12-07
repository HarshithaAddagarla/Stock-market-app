import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ stocksData = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Check if stocksData is valid, and filter only when it has data
  const filteredStocks = stocksData.filter((stock) =>
    stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Stock Market</h1>
      <input
        type="text"
        placeholder="Search by name or symbol..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredStocks.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Name</th>
              <th>Price</th>
              <th>Change</th>
              <th>% Change</th>
            </tr>
          </thead>
          <tbody>
            {filteredStocks.map((stock) => (
              <tr key={stock.symbol}>
                <td>
                  <Link to={`/stock/${stock.symbol}`}>{stock.symbol}</Link>
                </td>
                <td>{stock.name}</td>
                <td>${stock.price.toFixed(2)}</td>
                <td
                  style={{
                    color: stock.change < 0 ? "red" : "green",
                  }}
                >
                  {stock.change.toFixed(2)}
                </td>
                <td
                  style={{
                    color: stock.change < 0 ? "red" : "green",
                  }}
                >
                  {stock.changePercent}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No stocks found. Try adjusting your search.</p>
      )}
    </div>
  );
};

export default Home;
