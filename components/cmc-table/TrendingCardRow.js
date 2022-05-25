import React from 'react'
import Rate from './Rate'
import Image from 'next/image'

function TrendingCardRow({ number, symbol, name, icon, isIncrement, rate }) {
  return (
    <div className="mb-4 flex items-center justify-between text-[0.93rem]">
      <p className="opacity-40">{number}</p>
      <div className="flex w-full">
        <div className="mx-5">
          {icon && <Image src={icon} width={20} height={20} />}
        </div>
        <p className="font-bold">
          {name}
          &nbsp;
          <span className="text-gray-400">{symbol}</span>
        </p>
      </div>
      <Rate isIncrement={isIncrement} rate={rate} />
    </div>
  )
}

export default TrendingCardRow
