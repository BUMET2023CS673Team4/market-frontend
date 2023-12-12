import React, { useState } from 'react';
import './AccountDetails.css';
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer";
import { Link } from 'react-router-dom';

function AccountDetails() {
  const userDetails = {
    name: 'John Doe',
    email: 'jd@bu.edu',
    location: '1010 Commonwealth Ave, Boston, MA 02215'
  };

  // State for orders with dummy data
  const [orders, setOrders] = useState([
    {
      id: '123',
      orderNumber: '1233445435',
      receiptUrl: '/receipt/123',
    },
    {
      id: '456',
      orderNumber: '123454321',
      receiptUrl: '/receipt/456',
    },
    // ...additional orders
  ]);

  return (
    <div className="App">
      <Header />
      <div className="account-details">
        <div className="account-container">
          <h1>My Account</h1>
          <section className="section order-history">
            <h2>Order History</h2>
            {orders.length > 0 ? (
              <div className="order-tiles">
                {orders.map(order => (
                  <div key={order.id} className="order-tile">
                    <div className="order-tile-content">
                      <span className="order-number">{order.orderNumber}</span>
                      <Link to={order.receiptUrl} className="receipt-link">Receipt</Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>You haven't placed any orders yet.</p>
            )}
            <Link to="/orderhistory" className="view-all-orders-button">View All Orders</Link>
          </section>
          <section className="section account-info">
            <h2>Account Details</h2>
            <p>{userDetails.name}</p>
            <p>{userDetails.email}</p>
            <p>Nearest pick up location: {userDetails.location}</p>
            <div className="account-actions">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </section>
          <section className="section settings">
            <h2>Settings</h2>
            {/* Settings content here */}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AccountDetails;
