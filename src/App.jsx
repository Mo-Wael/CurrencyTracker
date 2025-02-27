// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import CurrencyConverter from './components/CurrencyConverter'
import NavBar from './components/NavBar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar />
        <CurrencyConverter />
        </div>
    </>
  )
}

export default App
