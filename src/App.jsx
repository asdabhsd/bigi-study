
import './App.css'

import English from "./components/english";
import Uzbek from "./components/uzbek";
import Russian from "./components/russian";
import { Route, Routes } from 'react-router-dom';
import Menu from './components/menu';

function App() {
  

  return (
    
      <>
      
    <Routes>
        <Route path="/" element={<English />} />
        <Route path="/uzbek" element={<Uzbek />} />
        <Route path="/russian" element={<Russian />} />
      </Routes>
      
      
      </>
   
  
  )
}

export default App
