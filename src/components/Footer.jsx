import React from 'react'

export default function Footer(){
  return (
    <footer style={{background:'transparent',padding:'2rem 0',borderTop:'1px solid rgba(16,47,93,0.06)'}}>
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{color:'var(--navy)'}}>© {new Date().getFullYear()} Schematic Marketing</div>

        <div className="footer-socials" style={{display:'flex',gap:12,alignItems:'center'}}>
          <a href="https://www.linkedin.com/company/schematic-marketing" target="_blank" rel="noopener noreferrer" aria-label="Schematic Marketing on LinkedIn">
            {/* LinkedIn SVG */}
            <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8.98H4.8V24H.2zM8.98 8.98h4.32v2.05h.06c.6-1.14 2.06-2.34 4.24-2.34 4.54 0 5.38 2.98 5.38 6.85V24H19V15.2c0-2.13-.04-4.87-2.97-4.87-2.98 0-3.44 2.33-3.44 4.73V24H8.98z" fill="currentColor"/>
            </svg>
          </a>

          <a href="https://www.instagram.com/schematicmarketing/" target="_blank" rel="noopener noreferrer" aria-label="Schematic Marketing on Instagram">
            {/* Instagram SVG */}
            <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path fill="currentColor" d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.055 1.97.24 2.43.403.6.21 1.03.462 1.48.91.45.45.7.88.91 1.48.164.46.35 1.26.404 2.43.058 1.27.069 1.65.069 4.85s-.011 3.584-.069 4.85c-.055 1.17-.24 1.97-.404 2.43-.21.6-.462 1.03-.91 1.48-.45.45-.88.7-1.48.91-.46.164-1.26.35-2.43.404-1.27.058-1.65.069-4.85.069s-3.584-.011-4.85-.069c-1.17-.055-1.97-.24-2.43-.404-.6-.21-1.03-.462-1.48-.91-.45-.45-.7-.88-.91-1.48-.164-.46-.35-1.26-.404-2.43C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.055-1.17.24-1.97.404-2.43.21-.6.462-1.03.91-1.48.45-.45.88-.7 1.48-.91.46-.164 1.26-.35 2.43-.404C8.416 2.212 8.8 2.2 12 2.2zm0 2.02c-3.11 0-3.47.012-4.69.068-1.02.048-1.58.217-1.95.36-.5.2-.86.44-1.24.82-.38.38-.62.74-.82 1.24-.143.37-.312.93-.36 1.95-.056 1.22-.068 1.58-.068 4.69s.012 3.47.068 4.69c.048 1.02.217 1.58.36 1.95.2.5.44.86.82 1.24.38.38.74.62 1.24.82.37.143.93.312 1.95.36 1.22.056 1.58.068 4.69.068s3.47-.012 4.69-.068c1.02-.048 1.58-.217 1.95-.36.5-.2.86-.44 1.24-.82.38-.38.62-.74.82-1.24.143-.37.312-.93.36-1.95.056-1.22.068-1.58.068-4.69s-.012-3.47-.068-4.69c-.048-1.02-.217-1.58-.36-1.95-.2-.5-.44-.86-.82-1.24-.38-.38-.74-.62-1.24-.82-.37-.143-.93-.312-1.95-.36-1.22-.056-1.58-.068-4.69-.068zM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6zm0 2.02a2.78 2.78 0 1 0 0 5.56 2.78 2.78 0 0 0 0-5.56zM17.8 6.38a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
