// // Bar.jsx
// import React from 'react';


// const Bar = () => {
//   return (
//     <div className="bar-restaurant-container">
//       <div className="header">
//         <div className="logo">
//           <h1>Les Douvres</h1>
//           <p>Hotel & Manor</p>
//         </div>
//       </div>
      
//       <div className="section-title">
//         <h2>Warmth & Character</h2>
//         <p>Our Bar & Restaurant</p>
//       </div>
      
//       <div className="content">
//         <div className="image-section">
//           <img 
//             src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
//             alt="Les Douvres Bar & Restaurant"
//             className="main-image"
//           />
//         </div>
        
//         <div className="text-content">
//           <p className="intro">
//             Experience the charm of our historic bar and restaurant, 
//             where 18th century character meets modern comfort. 
//             Our carefully curated spaces offer the perfect setting 
//             for relaxing drinks or memorable dining experiences.
//           </p>
          
//           <div className="features">
//             <div className="feature">
//               <h3>The Manor Bar</h3>
//               <p>
//                 Settle into our cozy bar with its original oak beams and 
//                 fireplace. Enjoy locally sourced spirits, fine wines, and 
//                 craft cocktails in an atmosphere of timeless elegance.
//               </p>
//             </div>
            
//             <div className="feature">
//               <h3>The Garden Restaurant</h3>
//               <p>
//                 Dine amidst the beauty of our gardens with seasonal dishes 
//                 prepared using the freshest local ingredients. Our restaurant 
//                 offers both indoor and outdoor seating with stunning views.
//               </p>
//             </div>
            
//             <div className="feature">
//               <h3>Opening Hours</h3>
//               <p>
//                 Bar: 4pm - 11pm daily<br />
//                 Restaurant: 6pm - 9:30pm (Tuesday - Sunday)<br />
//                 Afternoon Tea: 2pm - 5pm (Weekends)
//               </p>
//             </div>
//           </div>
          
//           <div className="highlight">
//             <p>Seasonal menu featuring locally sourced produce from Guernsey</p>
//           </div>
          
//           <div className="cta-section">
//             <button className="reserve-btn">Make a Reservation</button>
//             <button className="menu-btn">View Our Menu</button>
//           </div>
//         </div>
//       </div>
      
//       <div className="gallery">
//         <h3>Gallery</h3>
//         <div className="gallery-images">
//           <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Bar Interior" />
//           <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Restaurant Dining" />
//           <img src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Cocktails" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bar;

// Bar.jsx
import React from 'react';


const Bar = () => {
  return (
    <div className="bar-restaurant-container">
      
      
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h2>Warmth & Character</h2>
          <p>Our Bar & Restaurant Experience</p>
          <button className="hero-btn">Book a Table</button>
        </div>
      </div>
      
      {/* About Section */}
      <div id="about" className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h3>Our Story</h3>
            <p>
              Les Douvres is a former 18th century manor house nestled 
              in the quiet parish of St Martin's in the south east of Guernsey, 
              referred to by many visitors as the most beautiful part of the island.
            </p>
            <p>
              Our bar and restaurant continue this tradition of excellence, 
              offering guests an unforgettable dining experience in a setting 
              of historic charm and modern comfort.
            </p>
            <div className="highlight">
              <p>Spacious gardens with a solar heated outdoor swimming pool</p>
            </div>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Les Douvres Interior"
            />
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="features-section">
        <h3>Our Venues</h3>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-image">
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="The Manor Bar" />
            </div>
            <div className="feature-content">
              <h4>The Manor Bar</h4>
              <p>
                Settle into our cozy bar with its original oak beams and 
                fireplace. Enjoy locally sourced spirits, fine wines, and 
                craft cocktails in an atmosphere of timeless elegance.
              </p>
              <ul>
                <li>Open daily from 4pm - 11pm</li>
                <li>Extensive wine and spirits selection</li>
                <li>Cozy fireplace seating</li>
                <li>Bar snacks and light bites</li>
              </ul>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-image">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="The Garden Restaurant" />
            </div>
            <div className="feature-content">
              <h4>The Garden Restaurant</h4>
              <p>
                Dine amidst the beauty of our gardens with seasonal dishes 
                prepared using the freshest local ingredients. Our restaurant 
                offers both indoor and outdoor seating with stunning views.
              </p>
              <ul>
                <li>Open Tuesday - Sunday, 6pm - 9:30pm</li>
                <li>Seasonal menu featuring local produce</li>
                <li>Indoor and outdoor dining</li>
                <li>Private dining available</li>
              </ul>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-image">
              <img src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="The Terrace" />
            </div>
            <div className="feature-content">
              <h4>The Terrace</h4>
              <p>
                Our beautiful terrace offers al fresco dining with views 
                of the gardens and solar-heated outdoor swimming pool. 
                Perfect for summer evenings and special occasions.
              </p>
              <ul>
                <li>Seasonal opening (April - October)</li>
                <li>Weather permitting</li>
                <li>Perfect for groups and celebrations</li>
                <li>Full restaurant menu available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Menu Highlights */}
      <div id="menu" className="menu-section">
        <h3>Menu Highlights</h3>
        <div className="menu-tabs">
          <button className="tab-btn active">Food</button>
          <button className="tab-btn">Drinks</button>
          <button className="tab-btn">Desserts</button>
        </div>
        
        <div className="menu-items">
          <div className="menu-category">
            <h4>Starters</h4>
            <div className="menu-item">
              <h5>Guernsey Crab Cake</h5>
              <p>Local crab with lemon aioli and garden greens</p>
              <span>£12</span>
            </div>
            <div className="menu-item">
              <h5>Beetroot & Goat Cheese Salad</h5>
              <p>Roasted beets, local goat cheese, walnuts, honey dressing</p>
              <span>£10</span>
            </div>
          </div>
          
          <div className="menu-category">
            <h4>Main Courses</h4>
            <div className="menu-item">
              <h5>Pan-Seared Sea Bass</h5>
              <p>Local sea bass with samphire, new potatoes, and herb butter</p>
              <span>£24</span>
            </div>
            <div className="menu-item">
              <h5>28-Day Aged Ribeye Steak</h5>
              <p>10oz ribeye with peppercorn sauce and triple-cooked chips</p>
              <span>£28</span>
            </div>
          </div>
          
          <div className="menu-category">
            <h4>Signature Cocktails</h4>
            <div className="menu-item">
              <h5>Guernsey Gold</h5>
              <p>Local gin, elderflower, lemon, and prosecco</p>
              <span>£9</span>
            </div>
            <div className="menu-item">
              <h5>Manor Old Fashioned</h5>
              <p>Bourbon, demerara sugar, aromatic bitters</p>
              <span>£11</span>
            </div>
          </div>
        </div>
        
        <div className="menu-cta">
          <button className="full-menu-btn">View Full Menu</button>
        </div>
      </div>
      
      {/* Events Section */}
      <div id="events" className="events-section">
        <h3>Events & Specials</h3>
        <div className="events-grid">
          <div className="event-card">
            <div className="event-date">
              <span className="day">Every</span>
              <span className="time">Friday</span>
            </div>
            <div className="event-details">
              <h4>Live Music Evenings</h4>
              <p>Enjoy live acoustic music in the bar every Friday evening from 7pm</p>
              <span className="event-tag">No cover charge</span>
            </div>
          </div>
          
          <div className="event-card">
            <div className="event-date">
              <span className="day">Last</span>
              <span className="time">Sunday</span>
            </div>
            <div className="event-details">
              <h4>Sunday Roast</h4>
              <p>Traditional Sunday roast with all the trimmings. Booking essential.</p>
              <span className="event-tag">£22 per person</span>
            </div>
          </div>
          
          <div className="event-card">
            <div className="event-date">
              <span className="day">Monthly</span>
              <span className="time">Wine Tasting</span>
            </div>
            <div className="event-details">
              <h4>Wine Tasting Evenings</h4>
              <p>Join us for an evening exploring wines from a different region each month</p>
              <span className="event-tag">£35 per person</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="testimonials-section">
        <h3>What Our Guests Say</h3>
        <div className="testimonials-grid">
          <div className="testimonial">
            <div className="stars">★★★★★</div>
            <p>"The atmosphere in the bar is simply magical. We spent every evening there during our stay."</p>
            <span className="author">- Sarah & James, London</span>
          </div>
          
          <div className="testimonial">
            <div className="stars">★★★★★</div>
            <p>"The food was exceptional - some of the best we've had anywhere. The sea bass was perfection."</p>
            <span className="author">- Michael, Bristol</span>
          </div>
          
          <div className="testimonial">
            <div className="stars">★★★★★</div>
            <p>"We held our anniversary dinner on the terrace and it was absolutely perfect in every way."</p>
            <span className="author">- The Roberts Family</span>
          </div>
        </div>
      </div>
      
      
      
      {/* Contact & Reservation */}
      <div id="contact" className="contact-section">
        <div className="contact-content">
          <div className="contact-info">
            <h3>Make a Reservation</h3>
            <p>We look forward to welcoming you to Les Douvres</p>
            
            <div className="contact-details">
              <h4>Les Douvres Hotel</h4>
              <p>La Fosse, St Martin's, Guernsey GY4 6ER</p>
              <p className="email">E: info@lesdouvres.com</p>
              <p className="phone">T: +44 (0) 1481 238731</p>
              
              <div className="opening-hours">
                <h5>Opening Hours</h5>
                <p>Bar: 4pm - 11pm daily</p>
                <p>Restaurant: 6pm - 9:30pm (Tuesday - Sunday)</p>
                <p>Afternoon Tea: 2pm - 5pm (Weekends)</p>
              </div>
            </div>
          </div>
          
          <div className="reservation-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input type="date" id="date" />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Time</label>
                  <input type="time" id="time" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="guests">Number of Guests</label>
                <select id="guests">
                  <option>1 person</option>
                  <option>2 people</option>
                  <option>3 people</option>
                  <option>4 people</option>
                  <option>5 people</option>
                  <option>6+ people</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Special Requests</label>
                <textarea id="message" rows="3"></textarea>
              </div>
              <button type="submit" className="submit-btn">Book Now</button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      {/* <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Les Douvres Hotel</h4>
            <p>Experience the charm of our 18th century manor house in the beautiful parish of St Martin's, Guernsey.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#about">About</a>
            <a href="#menu">Menus</a>
            <a href="#events">Events</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-section">
            <h4>News & Offers</h4>
            <p>Subscribe to our newsletter for special offers and events</p>
            <div className="newsletter">
              <input type="email" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Les Douvres Hotel. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default Bar;