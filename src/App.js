import React, { useState } from 'react'
import './App.css'

// Import Components
import { Nav } from './components/Nav'
import { CountryProvider } from './context/CountryContext'
import { Main } from './components/Main'

function App() {
  // State for color Theme
  const [color, setColor] = useState(false)

  return (
    <CountryProvider>
      <div className={`app ${color ? 'dark' : ''} `}>
        <Nav color={color} setColor={setColor} />
        <Main color={color} />
      </div>
    </CountryProvider>
  )
}

export default App
