import React from 'react'
import { Link } from 'react-router-dom'
import './hero.css'

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-grid" aria-hidden>
        {/* grid lines are purely decorative via CSS */}
      </div>
      <div className="hero-content container">
        <h1>Building brands with precision and imagination.</h1>
        <p className="lead">A creative studio offering a la carte services — from brand identity and strategy to design and growth.</p>
        <div style={{marginTop:16}}>
          <Link to="/portfolio" className="btn">View Portfolio</Link>
          <Link to="/contact" className="btn secondary" style={{marginLeft:12}}>Get in touch</Link>
        </div>
      </div>
    </section>
  )
}
