import React from "react";
import BookingForm from "../Components/BookingForm";
import Footer from "../Components/Footer";
const Home = () => {

 return  (
    <div>
       <div className='overview'>
          <p className='whitebold'>Your Perfect Getway Awaits</p>
          <p className='hotelname'>Lake Avenue</p>
    </div>
    <div>
<BookingForm />
<Footer />
</div>
    </div>
    
)


}


export default Home