import React from 'react'
import './portfolio.css'
import { Link } from 'react-router-dom'

const items = new Array(6).fill(0).map((_,i)=>({
  id:i+1,
  title:`Project ${i+1}`,
  desc:'Brand identity, web design, strategy'
}))

export default function PortfolioPreview(){
  return (
    <section style={{marginTop:48}}>
      <h2>Selected work</h2>
      <div className="grid">
        {items.map(it=> (
          <article key={it.id} className="card">
            <div className="thumb" aria-hidden />
            <div className="meta">
              <strong>{it.title}</strong>
              <p>{it.desc}</p>
            </div>
          </article>
        ))}
      </div>
      <div style={{marginTop:18}}>
        <Link to="/portfolio" className="btn secondary">View full portfolio</Link>
      </div>
    </section>
  )
}
