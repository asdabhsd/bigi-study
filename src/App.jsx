
import './App.css'

import English from "./components/english";

import Russian from "./components/russian";
import { Route, Routes } from 'react-router-dom';
import Uzbek from './components/uzbek';


function App() {
  

  return (
    
      <>
      
    <Routes>
        <Route path="/" element={<English />} />
        <Route path="/uzbek" element={<Uzbek/>} />
        <Route path="/russian" element={<Russian />} />
      </Routes>
      
      
      </>
   
  
  )
}

export default App
