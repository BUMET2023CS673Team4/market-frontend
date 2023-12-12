import React, { useState } from 'react';
import './OrderHistory.css';
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer";
import { Link } from 'react-router-dom';

function OrderHistory() {
  // Dummy orders data
  const [orders] = useState([
    {
      id: '001',
      orderNumber: '1233445435',
      receiptUrl: '/receipts/001',
    },
    {
      id: '002',
      orderNumber: '123454321',
      receiptUrl: '/receipts/002',
    },
  ]);

  return (
    <div className="App">
      <Header />
      <div className="order-history-app">
        <div className="order-history-container">
          <div className="back-to-account">
            <Link to="/accountdetails">← RETURN TO ACCOUNT DETAILS</Link>
          </div>
         
          <section className="order-history-section">
            <h2>Order History</h2>
            {orders.length > 0 ? (
              <div className="order-tiles">
                {orders.map((order) => (
                  <div key={order.id} className="order-tile">
                    <div className="order-tile-content">
                      <span className="order-number">{order.orderNumber}</span>
                      <Link to={order.receiptUrl} className="receipt-link">Receipt</Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-orders">You haven't placed any orders yet.</p>
            )}
            {orders.length > 0 && (
              <div className="view-all-orders">
                <Link to="/all-orders">View All Orders</Link>
              </div>
            )}
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default OrderHistory;
