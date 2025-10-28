import React from 'react'
import Hero from '../sections/Hero'
import ValuesPreview from '../sections/ValuesPreview'
import PortfolioPreview from '../sections/PortfolioPreview'

export default function Home(){
  return (
    <div>
      <Hero />
      <div className="container" style={{paddingTop: '3rem'}}>
        <PortfolioPreview />
        <ValuesPreview />
      </div>
    </div>
  )
}
