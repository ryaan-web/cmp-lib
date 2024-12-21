import { useState } from 'react'
import './App.css'
import {Button } from './components/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Button variant={'primary'}>Primary</Button>
    </>
  )
}

export default App
