import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const onScroll = ()=> setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <header className={`site-nav ${scrolled? 'scrolled':''}`}>
      <div className="nav-inner container">
        <Link to="/" className="logo">Schematic</Link>
        <nav className={`nav-links ${open? 'open':''}`} aria-expanded={open}>
          <NavLink to="/" end onClick={()=>setOpen(false)}>Home</NavLink>
          <NavLink to="/portfolio" onClick={()=>setOpen(false)}>Portfolio</NavLink>
          <NavLink to="/values" onClick={()=>setOpen(false)}>Values</NavLink>
          <NavLink to="/contact" onClick={()=>setOpen(false)}>Contact</NavLink>
        </nav>
        <button className="nav-toggle" onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu">
          <span className="hamburger" />
        </button>
      </div>
    </header>
  )
}
