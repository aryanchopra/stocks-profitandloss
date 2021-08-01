import "./styles.css";
import React, { useState } from "react";
function App() {
  const checkProfitLoss = (e) => {
    setProfit(false);
    setLoss(false);
    e.preventDefault();
    const cp = costPrice;
    const quant = quantity;
    const current = currentPrice;
    const difference = current * quant - cp * quant;
    if (difference === 0) {
      setProfit(false);
      setLoss(false);
      setResult(`No profit or loss yet! `);
    } else if (difference > 0) {
      setProfit(true);
      setResult(
        `Congratulations! You gained a profit of Rs. ${difference} (${
          (current / cp) * 100
        }%)  `
      );
    } else {
      setLoss(true);
      setResult(
        `Oh no! You are at a loss of Rs. ${Math.abs(difference)} (${
          (current / cp) * 100
        }%)  `
      );
    }
  };
  const [profit, setProfit] = useState(false);
  const [loss, setLoss] = useState(false);
  const [result, setResult] = useState("");
  const [costPrice, setCostPrice] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [currentPrice, setCurrentPrice] = useState(1);
  const boxclass = () => {
    if (profit) {
      return "box profitbox";
    } else if (loss) {
      return "box lossbox";
    }
    return "box";
  };
  return (
    <div className="App">
      <div className={boxclass()}>
        <div className="col80">
          <div className="logo">AC</div>
          <span className="githubrepo">Github Repo</span>
          <h1>Check profit or loss on your stocks!</h1>
          <form onSubmit={checkProfitLoss}>
            <div className="inputdiv">
              <input
                type="number"
                min="1"
                id="costprice"
                value={costPrice}
                onChange={(e) => setCostPrice(e.target.value)}
              />
              <label htmlFor="costprice">Cost Price</label>
            </div>
            <div className="inputdiv">
              <input
                type="number"
                min="1"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <label htmlFor="quantity">Quantity</label>
            </div>
            <div className="inputdiv">
              <input
                type="number"
                min="1"
                id="current"
                value={currentPrice}
                onChange={(e) => setCurrentPrice(e.target.value)}
              />
              <label htmlFor="current">Current</label>
            </div>
            <button type="submit">Check</button>
          </form>
          {result && <h3>{result}</h3>}
        </div>
        <div className="col20">
          <a href="https://www.twitter.com/_aryanchopra_">Connect With Me</a>
        </div>
      </div>
    </div>
  );
}

export default App;
