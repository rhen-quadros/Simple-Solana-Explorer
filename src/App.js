import React, { useState } from "react";
import { useMoralisSolanaApi } from "react-moralis";
import "./App.css";

const App = () => {
  const [address, setAddress] = useState();
  const [balanceUSD, setBalanceUSD] = useState([{}]);
  const [balanceSOL, setBalanceSOL] = useState();
  const SolanaApi = useMoralisSolanaApi();

  async function PortfolioSearch(address){

    const options = {
      network: "mainnet",
      address: address
    }

    const portfolioResult = await SolanaApi.account.getPortfolio(options);

    setBalanceSOL(portfolioResult.nativeBalance.solana);
    setBalanceUSD(portfolioResult.tokens);


    console.log(portfolioResult);

  }

  return (
    <>
      <div
        style={{
          backgroundColor: "lightgrey",
          backgroundSize: "cover",
        }}
      >
        <div class="header">
        <a href="#default" class="logo">Portfolio Tracker</a></div>
        <div className="content">
        <div><h1>Search Wallet</h1></div>
          <input
            style={{width: "450px", height: "20px"}}
            type="text"
            onChange={(e) => setAddress(e.target.value)}
          ></input>
          <button className="search" onClick={() => PortfolioSearch(address)}>Search Portfolio</button>
          <div>
          <h2 className="text-2xl md:text-4xl">SOL Balance</h2>
          {balanceSOL && <div className="name"><b>{balanceSOL.slice(0, 7)} SOL </b></div>}
          </div>
          <div className="bg-green rounded-2xl drop-shadow-md px-2 py-2 md:px-4 md:py-4 md:text-lg">
                    <h2 className="text-2xl md:text-4xl">SPL Tokens</h2>
                      {balanceUSD.length > 0 && balanceUSD.map((spl, i) => (
                        <table id="customers">
                        <tr>
                        </tr>
                        <tr>
                        <th>Mint ID</th>
                          <td> {spl.mint}</td>
                        <th>Amount</th>
                          <td> {spl.amount}</td>
                        </tr>
                        </table>
                      ))}

                </div>
        </div>
      </div>
    </>
  );
};

export default App;

