import React from 'react'

import './Facebook.css'
import FacebookHome from './components/FacebookHome.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp.jsx'
import Facebook from './components/Facebook.jsx'



function App(){
 
  
  
  return(
    <div>
      
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<FacebookHome/>} /> 
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Facebook" element={<Facebook />} />

      </Routes>
      </BrowserRouter> 
       
    </div>
   
  )
}

export default App