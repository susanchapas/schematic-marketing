import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/index.css'

// Import favicon so Vite processes and emits it to the build assets (hashed filename)
import faviconUrl from '../assets/favicon.png'

// Ensure a <link rel="icon"> exists and point it to the processed asset URL
const setFavicon = (url) => {
  try {
    let link = document.querySelector("link[rel*='icon']")
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'icon')
      document.head.appendChild(link)
    }
    link.setAttribute('href', url)
  } catch (e) {
    // ignore in non-browser environments
  }
}

setFavicon(faviconUrl)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
