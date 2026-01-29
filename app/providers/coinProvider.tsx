// app/providers/theme-provider.tsx
"use client";

import { StringifyOptions } from "node:querystring";
import { createContext, useContext, useState } from "react";

const CoinContext = createContext({
  coinsCollected: [] as string[], // Default value
  collectCoin: (id: string) => {},
});

export function CoinProvider({ children }: { children: React.ReactNode }) {
  const [coinsCollected, setCoinsCollected] = useState<string[]>([]); // State for the theme

  const collectCoin = (id: string) => {
    setCoinsCollected((prevCoinsCollected) => [...prevCoinsCollected, id]);
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
