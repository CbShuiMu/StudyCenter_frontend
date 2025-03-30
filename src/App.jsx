import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import PageLayout from './PageLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageLayout/>}>
        <Route index/>
        </Route>
        <Route path='*' element={<p>404 Not Found!</p>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
