import { useEffect, useState } from "react";
function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState("");
  const [coin, setCoin] = useState("");
  const [converted, setConverted] = useState(false);

  const onMoneyChange = (event) => setMoney(event.target.value);
  const onSelectChange = (event) => {
    setCoin(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (money === "") {
      return;
    }
    setConverted((current) => (current ? current : !current));
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>
        The Coin converter! {loading ? "" : `(# of coins ${coins.length})`}
      </h1>
      {loading ? (
        <strong> Loadings....</strong>
      ) : (
        <form onSubmit={onSubmit}>
          <select onChange={onSelectChange}>
            <option hidden>Select the coin you want to convert</option>
            {coins.map((coin) => (
              <option
                key={coin.id}
                value={coin.quotes.USD.price}
                symbol={coin.symbol}
              >
                {coin.name} ({coin.symbol})
              </option>
            ))}
          </select>
          <input
            onChange={onMoneyChange}
            value={money}
            type="number"
            placeholder="Write your deposit"
          />
          <button>Convert</button>
        </form>
      )}
      <hr />
      {converted ? <h3>You can buy {money / coin}</h3> : ""}
    </div>
  );
}

export default CoinTracker;
