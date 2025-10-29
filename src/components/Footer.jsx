import React from 'react'
import linkedin from '../../assets/linkedin-icon.svg'
import instagram from '../../assets/instagram.svg'

export default function Footer(){
  return (
    <footer style={{background:'transparent',padding:'2rem 0',borderTop:'1px solid rgba(16,47,93,0.06)'}}>
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{color:'var(--navy)'}}>© {new Date().getFullYear()} Schematic Marketing</div>

        <div className="footer-socials" style={{display:'flex',gap:12,alignItems:'center'}}>
          <a href="https://www.linkedin.com/company/schematic-marketing" target="_blank" rel="noopener noreferrer" aria-label="Schematic Marketing on LinkedIn">
            <img src={linkedin} alt="LinkedIn" style={{width: 20, height: 20}} />
          </a>

          <a href="https://www.instagram.com/schematicmarketing/" target="_blank" rel="noopener noreferrer" aria-label="Schematic Marketing on Instagram">
            <img src={instagram} alt="Instagram" style={{width: 20, height: 20}} />
          </a>
        </div>
      </div>
    </footer>
  )
}
