import { createContext, useState, useEffect } from 'react'

export const CoinMarketContext = createContext()

export const CoinMarketProvider = ({ children }) => {
  const getTopTenCoins = async () => {
    try {
      const response = await fetch('/api/getTopTen')
      const data = await response.json()
      return data.data.data
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <CoinMarketContext.Provider
      value={{
        getTopTenCoins,
      }}
    >
      {children}
    </CoinMarketContext.Provider>
  )
}
