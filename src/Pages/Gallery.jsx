import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Gallery = () => {
    return (
 <>   <Header />
      <div id="gallery" className="gallery-section">
        <h3>Gallery</h3>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Bar Interior" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Restaurant Dining" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Cocktails" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Food Presentation" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Wine Selection" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Outdoor Dining" />
          </div>
        </div>
      </div> <Footer /></>
    );
}

export default Gallery 