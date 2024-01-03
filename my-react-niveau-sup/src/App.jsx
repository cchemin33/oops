import { useState } from 'react'
import './App.css'
import Card from "./Components/Card.jsx"
import StarRating from './Components/StarRating.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="container">
      <Card />
    </div>
    </>
  )
}

export default App
