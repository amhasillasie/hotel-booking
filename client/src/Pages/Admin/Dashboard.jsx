import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";


const Dashboard = () => {
  return (
    <>
    <Header />
    <div className="dashboard-container">

      {/* Sidebar */}
      <aside className="sidebar">
        

        <ul className="menu">
          
          <li className="menu-item active">Dashboard</li>
          <li className="menu-item" onClick={ () => window.location.href = "/roomsmanage" }>Rooms</li>
          <li className="menu-item" onClick={ () => window.location.href = "/bookingsmanage"}>Bookings</li>
        </ul>

        <div className="sidebar-footer">
          <img
            src="/images/user.jpg"
            alt="User"
            className="user-img"
          />
          <div>
            <p className="user-name">Admin User</p>
            <p className="user-role">Hotel Manager</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="content">

        <h1 className="title">Dashboard Overview</h1>

        {/* Stats */}
        <div className="stats">
          <div className="stat-card">
            <p>Total Rooms</p>
            <h2>120</h2>
            <span>Across all categories</span>
          </div>

          <div className="stat-card">
            <p>Available Rooms</p>
            <h2>45</h2>
            <span>Ready for booking today</span>
          </div>

          <div className="stat-card">
            <p>Active Bookings</p>
            <h2>75</h2>
            <span>Currently checked-in or arriving soon</span>
          </div>

          <div className="stat-card">
            <p>Revenue (MoM)</p>
            <h2>$15,230</h2>
            <span className="green">+5.7% from last month</span>
          </div>
        </div>

        {/* Row: Recent Bookings + Occupancy */}
        <div className="row">

          {/* Recent Bookings */}
          <div className="box recent">
            <h3>Recent Bookings</h3>

            <div className="booking-row">
              <span>John Doe - Deluxe Room (001)</span>
              <span className="badge blue">Confirmed</span>
            </div>

            <div className="booking-row">
              <span>Jane Smith - Standard Room (105)</span>
              <span className="badge blue">Confirmed</span>
            </div>

            <div className="booking-row">
              <span>Peter Jones - Suite (003)</span>
              <span className="badge red">Cancelled</span>
            </div>

            <div className="booking-row">
              <span>Alice Brown - Standard Room (102)</span>
              <span className="badge gray">Pending</span>
            </div>
          </div>

          {/* Occupancy */}
          <div className="box occupancy">
            <h3>Room Occupancy</h3>
            <p>Daily occupancy rate for the past week.</p>
            <div className="chart-placeholder">
              Placeholder for Room Occupancy Chart
            </div>
          </div>

        </div>
      </main>

    </div>
      
    </>
  );
};

export default Dashboard
