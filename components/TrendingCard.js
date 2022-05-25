import React from 'react'
import Image from 'next/image'
import MoreButton from './cmc-table/MoreButton'
import TrendingCardRow from "./cmc-table/TrendingCardRow";

function TrendingCard({ title, icon, trendingData }) {
  return (
    <div className="trendingCard">
      <div className="trendingCardWrapper">
        <div className="flex">
          {icon && <Image src={icon} width={27} height={27} alt={icon} />}
          &nbsp;&nbsp;
          <p className="font-bold">{title}</p>
        </div>
        <MoreButton />
      </div>
      <br />

      {trendingData.map((data, index) => {
        return (
          <TrendingCardRow
            key={index}
            number={data.number}
            symbol={data.symbol}
            name={data.name}
            icon={data.icon}
            isIncrement={data.isIncrement}
            rate={data.rate}
          />
        )
      })}
    </div>
  )
}

export default TrendingCard
