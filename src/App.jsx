import  React  from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Rooms from "./Pages/Rooms";

function App() {
 

  return (
    <div>
      {/* < Home/> */}
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

    

export default App
