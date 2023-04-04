import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Barchart from './Components/BarChart/Barchart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Dashboard></Dashboard>
     <Barchart></Barchart>
    </div>
  )
}

export default App
