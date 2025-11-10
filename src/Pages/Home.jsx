import React from "react";
import BookingForm from "../Components/BookingForm";
const Home = () => {

 return  (
    <div>
       <div className='overview'>
          <p className='whitebold'>Your Perfect Getway Awaits</p>
          <p className='hotelname'>Lake Avenue</p>
    </div>
    <div>
<BookingForm />
</div>
    </div>
    
)


}


export default Home