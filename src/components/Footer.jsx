import React from 'react'

export default function Footer(){
  return (
    <footer style={{background:'transparent',padding:'2rem 0',borderTop:'1px solid rgba(16,47,93,0.06)'}}>
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{color:'var(--navy)'}}>© {new Date().getFullYear()} Schematic Marketing</div>
        <div style={{color:'var(--navy)'}}>NY & NJ — Woman & Latina owned</div>
      </div>
    </footer>
  )
}
