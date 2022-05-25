import React from 'react'
import ChevronDown from '../../assets/svg/chevronDown'
import ChevronUp from '../../assets/svg/chevronUp'

function Rate({ isIncrement, rate }) {
  return (
    <div className="rate">
      {isIncrement ? (
        <ChevronUp fill="#17C784" />
      ) : (
        <ChevronDown fill="#EA3943" />
      )}
      <p className={isIncrement ? 'styleGreen' : 'styleRed'}>{rate}</p>
    </div>
  )
}

export default Rate
