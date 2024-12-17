import React, { useState, useEffect } from 'react';
import Accordion from './components/Accordion';
import Button from './components/Button';
import Input from './components/Input';
import Typography from './components/Typography';
import Tooltip from './components/Tooltip';
import "./index.css";


const App = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://api.coinlore.net/api/tickers/");
    const data = await response.json();
    setCryptoData(data.data);
  };

  const handleUpdate = () => {
    window.location.reload(); // Обновляем страницу
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = cryptoData.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <Typography textSize="lg">Cryptocurrency Prices</Typography>
      <Button onClick={handleUpdate}>Update</Button>
      <Input
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearch}
      />
      {filteredData.map((coin) => (
        <Accordion key={coin.id} title={coin.name}>
          <Typography>
            <strong>Symbol:</strong> {coin.symbol}
          </Typography>
          <Typography>
            <strong>Price USD:</strong> {coin.price_usd}
          </Typography>
          <Typography>
            <strong>Price BTC:</strong> {coin.price_btc}
          </Typography>
          <Tooltip text="The market capitalization of a cryptocurrency is calculated by multiplying the number of coins in circulation by the current price">
            <Typography>
              <strong>Market Cap USD:</strong> {coin.market_cap_usd}
            </Typography>
          </Tooltip>
          <Typography
            className={parseFloat(coin.percent_change_24h) > 0 ? "green" : "red"}
          >
            <strong>Percent Change 24H:</strong> {coin.percent_change_24h}%
          </Typography>
        </Accordion>
      ))}
    </div>
  );
};

export default App;
