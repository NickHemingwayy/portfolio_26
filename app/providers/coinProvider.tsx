// app/providers/theme-provider.tsx
"use client";

import { createContext, useContext, useState } from "react";

const CoinContext = createContext({
  coinsCollected: 0, // Default value
  collectCoin: () => {},
});

export function CoinProvider({ children }: { children: React.ReactNode }) {
  const [coinsCollected, setCoinsCollected] = useState(0); // State for the theme

  const collectCoin = () => {
    setCoinsCollected((prevCoinsCollected) => prevCoinsCollected + 1);
  };

  return (
    <CoinContext.Provider value={{ coinsCollected, collectCoin }}>
      {children}
    </CoinContext.Provider>
  );
}

export function useCoins() {
  return useContext(CoinContext);
}
