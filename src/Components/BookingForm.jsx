import React from "react";


const BookingForm = () =>
{
    return(
      <> 
    <div className='aroundall'>
      <div className='overall'><div>
    <header>
        <h1>Check Availability</h1>
        <p class="subtitle">Find the best rooms for your dates.</p>
    </header>
    
<section class="date-section">
<div class="date-row">     
  <div class="date-container">
    <div class="date-group">
      <label className="">Check-in Date</label>
      <div class="date-box">
        <span class="icon">📅</span>
          <input type="date" />
      </div>
    </div>

   <div class="date-group">
     <label>Check-out Date</label>
      <div class="date-box">
       <span class="icon">📅</span>
        <input type="date" />
      </div>
   </div>
  </div>
</div>
</section>
    

    
    <hr/>
    
    <section class="guests-section">
        <h2>Guests</h2>
        <div class="guests-count">1 Guest</div>
    </section>
    
    <button class="check-button" onClick={ () => window.location.href = "/bookingconfirm" } >Check Availability</button>
</div></div></div>
 
 </>
    )
}

export default BookingForm