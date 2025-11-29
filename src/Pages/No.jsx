import React from "react";


const No = () =>  {
  return (
    <div className="no-container">
      <div className="no-box">
        <h1>No Rooms Available</h1>
        <p>
          Unfortunately, there are no rooms available for the selected dates.
          Please try different dates or adjust your search.
        </p>

        <button 
          className="no-btn" 
          onClick={() => window.location.href = "/"}
        >
          Go Back Home
        </button>
      </div>
    </div>
  );


}

export default No

