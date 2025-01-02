import { useState } from 'react'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl  '>Tailwind TEST</h1>
      <Card/>
    </>
  )
}

export default App
