import React from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import EmbeddedFrame from './Components/1/EmbeddedFrame'
import EmbeddedFrame2 from './Components/2/EmbeddedFrame2'
import EmbeddedFrame3 from './Components/3/EmbeddedFrame3'
import EmbeddedFrame4 from './Components/4/EmbeddedFrame4'
import EmbeddedFrame5 from './Components/5/EmbeddedFrame5'
import EmbeddedFrame6 from './Components/6/EmbeddedFrame6'


function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to='/2'>second</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<EmbeddedFrame />} />
      <Route path='/2' element={<EmbeddedFrame2 />} />
      <Route path='/3' element={<EmbeddedFrame3 />} />
      <Route path='/4' element={<EmbeddedFrame4 />} />
      <Route path='/5' element={<EmbeddedFrame5 />} />
      <Route path='/6' element={<EmbeddedFrame6 />} />
    </Routes>
    </>
  )
}

export default App
