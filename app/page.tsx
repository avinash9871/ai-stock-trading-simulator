"use client";

import { useState } from "react";

const stocks = [
  {
    symbol: "RELIANCE",
    name: "Reliance Industries",
    price: 2512.4,
    change: 1.25,
  },
  {
    symbol: "TCS",
    name: "Tata Consultancy Services",
    price: 3421.2,
    change: -0.45,
  },
  {
    symbol: "INFY",
    name: "Infosys",
    price: 1563.5,
    change: 0.82,
  },
  {
    symbol: "HDFCBANK",
    name: "HDFC Bank",
    price: 1890.2,
    change: 1.12,
  },
];

export default function Home() {
  const [balance, setBalance] = useState(1000000);

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const buyStock = (price: number) => {
    if (balance >= price) {
      setBalance((currentBalance) => currentBalance - price);
      alert("Stock purchased successfully!");
    } else {
      alert("Insufficient virtual balance!");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold text-blue-400">
              AI Trade Simulator
            </h1>

            <p className="text-sm text-slate-400">
              Practice trading with virtual money
            </p>
          </div>

          <div className="rounded-lg bg-slate-800 px-5 py-3">
            <p className="text-xs text-slate-400">
              Available Balance
            </p>

            <p className="text-lg font-bold text-green-400">
              {formatMoney(balance)}
            </p>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            Market Dashboard
          </h2>

          <p className="mt-2 text-slate-400">
            Explore stocks and practice buying and selling.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">
              Virtual Balance
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              {formatMoney(balance)}
            </h3>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">
              Portfolio Value
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              ₹10,00,000
            </h3>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">
              Today's P&L
            </p>

            <h3 className="mt-2 text-2xl font-bold text-green-400">
              +₹12,450
            </h3>
          </div>
        </div>

        {/* Stocks */}
        <div className="mt-10">
          <h2 className="mb-5 text-2xl font-bold">
            Popular Stocks
          </h2>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {stocks.map((stock) => (
              <div
                key={stock.symbol}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-blue-500"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold">
                      {stock.symbol}
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      {stock.name}
                    </p>
                  </div>

                  <span
                    className={
                      stock.change >= 0
                        ? "text-sm text-green-400"
                        : "text-sm text-red-400"
                    }
                  >
                    {stock.change >= 0 ? "+" : ""}
                    {stock.change}%
                  </span>
                </div>

                <p className="mt-6 text-2xl font-bold">
                  {formatMoney(stock.price)}
                </p>

                <button
                  onClick={() => buyStock(stock.price)}
                  className="mt-5 w-full rounded-lg bg-blue-600 py-2.5 font-semibold transition hover:bg-blue-500"
                >
                  Buy
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* AI Prediction */}
        <div className="mt-10 rounded-xl border border-blue-900 bg-slate-900 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-400">
                🤖 AI MARKET PREDICTION
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                RELIANCE
              </h2>
            </div>

            <div className="text-right">
              <p className="text-sm text-slate-400">
                Predicted Trend
              </p>

              <p className="text-2xl font-bold text-green-400">
                📈 BULLISH
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-slate-800 p-4">
              <p className="text-sm text-slate-400">
                Confidence
              </p>

              <p className="mt-1 text-xl font-bold">
                74%
              </p>
            </div>

            <div className="rounded-lg bg-slate-800 p-4">
              <p className="text-sm text-slate-400">
                Prediction Horizon
              </p>

              <p className="mt-1 text-xl font-bold">
                5 Days
              </p>
            </div>

            <div className="rounded-lg bg-slate-800 p-4">
              <p className="text-sm text-slate-400">
                Model
              </p>

              <p className="mt-1 text-xl font-bold">
                TensorFlow.js
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            AI predictions are for educational simulation purposes
            only and are not financial advice.
          </p>
        </div>
      </section>
    </main>
  );
}