import  React  from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Rooms from "./Pages/Rooms";
import RoomDetail from './Pages/RoomDetail';
import BookingForm from './Components/BookingForm';
import BookingConfirm from './Pages/BookingConfirm';
import AdminLogin from './Pages/Admin/AdminLogin';
import Dashboard from './Pages/Admin/Dashboard';
import No from './Pages/No';
import Bar from './Pages/Bar';
import Gallery from './Pages/Gallery';

function App() {
 

  return (
    <div>
      {/* < Home/> */}
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path='/roomdetail' element = {<RoomDetail/>} />
        <Route path='/bookingcard' element = {<BookingForm/>} />
        <Route path='/bookingconfirm' element = {<BookingConfirm/>} />
        <Route path='/admin' element = {<AdminLogin/>} />
        <Route path='/dashboard' element = {<Dashboard />} />
        <Route path='no' element = {<No />} /> 
        <Route path='/bar' element = {<Bar/>} /> 
        <Route path='/gallery' element = {<Gallery/>} /> 
      </Routes> 
    </BrowserRouter> 
    </div>
  )
}

    

export default App
