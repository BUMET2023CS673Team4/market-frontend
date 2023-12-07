import React, { useState } from 'react';
import './Checkout.css'; // Importing the CSS
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer";


const Checkout = () => {
    const [currentStep, setCurrentStep] = useState(1); // State to manage current step

    // Dummy data for cart items
    const cartItems = [
        { id: 1, name: "Item 1", price: 10.00, imageUrl: "path/to/image1.jpg" },
        { id: 2, name: "Item 2", price: 15.00, imageUrl: "path/to/image2.jpg" },
        { id: 3, name: "Item 3", price: 20.00, imageUrl: "path/to/image3.jpg" },
    ];

    const taxRate = 0.05; // 5% tax
    const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    const handleContinue = () => {
        setCurrentStep(currentStep < 4 ? currentStep + 1 : currentStep);
    };

    const orderNumber = "123456789";
    const pickupLocation = "Nearest Pickup Location";

    const [selectedLocation, setSelectedLocation] = useState('');

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    }

    return (
        <div className="App">
        <Header />
        <div className="checkout">
            {/* Step Tracker */}
            <div className="step-tracker">
            {['REVIEW ORDER', 'SELECT PICK UP LOCATION', 'PAYMENT', 'ORDER CONFIRMATION'].map((step, index) => (
                    <div key={index} className={`step ${index + 1 === currentStep ? 'current' : ''}`}>
                        <div className="step-content">
                            {index + 1 === currentStep 
                                ? <span className="arrow" />
                                : <span className="icon">{index + 1}</span> // Updated to use .icon with step number
                            }
                            <span className="step-name">{step}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Steps Container */}
            <div className="steps-container">
                {/* Left Column: Steps 1, 2, and 3 */}
                <div className="left-column">
                    {/* Cart Section */}
                    <div className="cart-section-box">
                        <div className="step-row">
                            <div className="step-row-content">
                                {/* <div className="stepa-row-number">1</div> */}
                                <div className="step-row-name">
                                <span className="icon_sections">1</span>
                                <div className="step_name"> REVIEW ORDER</div></div>
                            </div>
                        </div>
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                                <span className="cart-item-name">{item.name}</span>
                                <span className="cart-item-price">${item.price.toFixed(2)}</span>
                                <button className="remove-button">Remove</button>
                            </div>
                        ))}
                        <div className="cart-summary">
                            <div className="separator"></div>
                            <div className="price-info">
                                <div className="tax">Tax (5%): ${tax.toFixed(2)}</div>
                                <div className="total">Total: ${total.toFixed(2)}</div>
                            </div>
                        </div>
                        {currentStep === 1 && (
                            <div className="checkout-actions">
                                <a href="#" className="continue-shopping">Continue Shopping</a>
                                <button className="continue-button" onClick={handleContinue}>Continue</button>
                            </div>
                        )}
                    </div>

                    {/* Delivery Info Section */}
                    {currentStep >= 2 && (
                        <div className="delivery-info-section">
                            <div className="step-row">
                                <div className="step-row-content">
                                <div className="step-row-name">
                                <span className="icon_sections">2</span>
                                <div className="step_name"> SELECT PICK UP LOCATION</div></div>
                                </div>
                            </div>
                            {/* <form> */}
                            <div className="pickup-location">
                                <div className="pickup_options">
                                {/* Radio button for each location */}
                                <label>
                                    <input 
                                        type="radio" 
                                        value="665 Commonwealth Ave, Boston, MA 02115" 
                                        checked={selectedLocation === "665 Commonwealth Ave, Boston, MA 02115"} 
                                        onChange={handleLocationChange} 
                                    />
                                     <span className="location-pin">📍</span> 
                                     665 Commonwealth Ave, Boston, MA 02115
                                </label>
                                <label>
                                    <input 
                                        type="radio" 
                                        value="100 Huntington Ave, Boston, MA 02116" 
                                        checked={selectedLocation === "100 Huntington Ave, Boston, MA 02116"} 
                                        onChange={handleLocationChange} 
                                    />
                                     <span className="location-pin">📍</span> 
                                    100 Huntington Ave, Boston, MA 02116
                                </label>
                                <label>
                                    <input 
                                        type="radio" 
                                        value="1010 Commonwealth Ave, Boston, MA 02116" 
                                        checked={selectedLocation === "1010 Commonwealth Ave, Boston, MA 02116"} 
                                        onChange={handleLocationChange} 
                                    />
                                     <span className="location-pin">📍</span> 
                                   1010 Commonwealth Ave, Boston, MA 02116
                                </label>
                                {/* ... Add more locations in the same format ... */}
                                </div>
                            </div>
                            <div className="checkout-actions">
                                <button className="continue-button" onClick={handleContinue}>Continue</button>
                            </div>
                        {/* </form> */}

                            {/* <div className="checkout-actions">
                                <button className="continue-button" onClick={handleContinue}>Continue</button>
                            </div> */}

                        </div>
                    )}

                {/* Payment Section */}
                {currentStep >= 3 && (
                        <div className="payment-section">
                            <div className="step-row">
                                <div className="step-row-content">
                                    <div className="step-row-number">3</div>
                                    <div className="step-row-name">Payment</div>
                                </div>
                            </div>
                            <div className="payment-option">Credit Card</div>
                            <div className="payment-option">PayPal</div>
                            <div className="checkout-actions">
                                <button className="continue-button" onClick={handleContinue}>Complete Payment</button>
                            </div>
                        </div>
                    )}

                    {/* Placeholder for Step 4 */}

                </div>

                {/* Right Column: Step 4 */}
                {/* Right Column: Step 4 (Order Confirmation) */}
              {/* Right Column: Step 4 (Order Confirmation) */}
              {currentStep === 4 && (
                    <div className="confirmation-column">
                        <div className="confirmation-section">
                            <h2 className="confirmation-header">Order Confirmation</h2>
                            <p><strong>Order Number:</strong> {orderNumber}</p>
                            
                            <div className="order-items">
                                {cartItems.map(item => (
                                    <div key={item.id} className="cart-item">
                                        <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                                        <span className="cart-item-name">{item.name}</span>
                                        <span className="cart-item-price">${item.price.toFixed(2)}</span>
                                    </div>
                                ))}
                                <div className="cart-summary"> 
                                    {/* <div className="tax">Tax (5%): ${tax.toFixed(2)}</div> */}
                                    <div className="total">Total: ${total.toFixed(2)}</div>
                                </div> 
                                <p><strong>Pickup Location:</strong> {pickupLocation}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
        <Footer />
        </div>
    );
}

export default Checkout;
