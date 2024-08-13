import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Firstpage from '../pages/firstpage'

export default function routes() {
  return (
     <BrowserRouter>
        <Routes>
              <Route path='/'  element={<Firstpage/>} />
        </Routes>
     
     </BrowserRouter> 
     
  )
}
