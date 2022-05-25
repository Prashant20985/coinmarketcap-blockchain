import React, { useState } from 'react'
import fire from '../assets/fire.png'
import btc from '../assets/btc.png'
import usdt from '../assets/usdt.png'
import gainers from '../assets/gainers.png'
import recent from '../assets/recent.png'
import ReactSwitch from 'react-switch'
import Rate from './cmc-table/Rate'
import TrendingCard from './TrendingCard'

function Trending() {
  const [checked, setChecked] = useState(false)
  const trendingData = [
    {
      number: 1,
      symbol: 'BTC',
      name: 'Bitcoin',
      icon: btc,
      isIncrement: true,
      rate: '2.34%',
    },
    {
      number: 2,
      symbol: 'USTD',
      name: 'Tether',
      icon: usdt,
      isIncrement: false,
      rate: '9.23%',
    },
    {
      number: 2,
      symbol: 'BTC',
      name: 'Bitcoin',
      icon: btc,
      isIncrement: true,
      rate: '2.34%',
    },
  ]

  return (
    <div className="text-white">
      <div className="trendingWrapper">
        <div className="flex justify-between">
          <h1 className="h1">Today's Cryptocurrency Prices by market Cap</h1>
          <div className="flex">
            <p className="text-gray-400">Highlights &nbsp;</p>
            <ReactSwitch
              checked={checked}
              onChange={() => {
                setChecked(!checked)
              }}
            />
          </div>
        </div>
        <br />
        <div className="flex">
          <p className="text-gray-400">
            The Global crypto market cap is $1.74T, a &nbsp;
          </p>
          <span>
            <Rate isIncrement={true} rate="0.53" />
          </span>
          <p>
            &nbsp; decrease over the last day.{' '}
            <span className="underline">Read more</span>
          </p>
        </div>
        <br />

        <div className="flex items-center">
          <TrendingCard
            title="Trending"
            icon={fire}
            trendingData={trendingData}
          />
          <TrendingCard
            title="Biggest Gainers"
            icon={gainers}
            trendingData={trendingData}
          />
          <TrendingCard
            title="Recently Added"
            icon={recent}
            trendingData={trendingData}
          />
        </div>
      </div>
    </div>
  )
}

export default Trending
