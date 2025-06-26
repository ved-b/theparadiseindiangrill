// src/App.jsx
import React from 'react'
import './index.css' // Make sure this points to your main CSS file

import Header from './components/Header'
import ScrollingHero from './components/ScrollingHero'
import Menu from './components/Menu'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <ScrollingHero />
        <div className="bg-primary">
          <Menu />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
