import React, { useEffect, useState } from 'react';
import './Checkout.css'; // Importing the CSS
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer";
import { GetCookie } from '../../Utility/Cookie';


const Checkout = () => {
    const [currentStep, setCurrentStep] = useState(1); // State to manage current step
    const [stripeStep, setStripeStep] = useState(0); // State to show Stripe component [Step 3]
    const [cartItems, setCartItems] = useState([]); // State to manage cart items

    useEffect(() => {
        (async () => {
            if (cartItems.length > 0) return;
            const response = await fetch("/api/show-items-in-cart/", {
                headers: {
                    "X-CSRFToken": GetCookie("csrftoken"),
                },
            });
            const data = await response.json();
            setCartItems(data['cart']);
        })();
    }, [cartItems]);

    const taxRate = 0.00; // 0% tax
    const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    const handleContinue = () => {
        setCurrentStep(currentStep < 4 ? currentStep + 1 : currentStep);
    };

    const orderNumber = "#123389978908";
    const pickupLocation = "Nearest Pickup Location";

    const [selectedLocation, setSelectedLocation] = useState('');

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    }

    async function loadStripe() {
        const stripeScriptNode = document.createElement('script');
        stripeScriptNode.setAttribute('src', 'https://js.stripe.com/v3/');
        document.body.appendChild(stripeScriptNode);

        // hack to wait for stripe script to load
        var interval = setInterval(function () {
            // get elem
            if (typeof window.Stripe == 'undefined') return;
            clearInterval(interval);

            // the rest of the code
            initialize();
        }, 10);
    }

    async function initialize() {
        const stripe_key = await fetch("/api/stripe-public-key/", {
            headers: {
                "X-CSRFToken": GetCookie("csrftoken"),
            },
        });
        const { public_key } = await stripe_key.json();
        const stripe = window.Stripe(public_key);
        const response = await fetch("/api/create-checkout-session/", {
            method: "POST",
            headers: {
                "X-CSRFToken": GetCookie("csrftoken"),
            },
        });

        const { client_secret } = await response.json();

        const checkout = await stripe.initEmbeddedCheckout({
            clientSecret: client_secret,
            onComplete: handleContinue
        });

        // Mount Checkout
        checkout.mount('.stripe-container');
        setStripeStep(2);
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
                                <img src={"/media/image/"+item.image} alt={item.name} className="cart-item-image" />
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
                                <div className="step-row-name">
                                <span className="icon_sections">3</span>
                                <div className="step_name"> PAYMENT</div></div>
                                </div>
                            </div>
                            <div className="payment-option" onClick={() => {setStripeStep(1)}}>Stripe</div>
                            {
                                (stripeStep >= 1 && (
                                    <>
                                    <div className="stripe-container">
                                        {/* Stripe component goes here */}
                                    </div>
                                    </>
                                ))
                            }
                            {stripeStep === 1 && loadStripe() && <></>}
                            {/* <div className="payment-option">PayPal</div> */}
                            {/* <div className="payment-option">Credit Card</div> */}
                            
                            <div className="checkout-actions-payment">
                                <button className="continue-button" onClick={handleContinue}>Complete Payment</button>
                            </div>
                        </div>
                    )}

                    {/* Placeholder for Step 4 */}

                </div>

              {currentStep === 4 && (
                    <div className="confirmation-column">
                        {/* <div className="confirmation-section"> */}
                            <h2 className="confirmation-header">Order Confirmation</h2>
                            {/* <p><strong>Order Number:</strong> {orderNumber}</p> */}
                            
                            <div className="order-items">
                            <p><strong>Order Number:</strong> {orderNumber}</p>
                            <p className="order-text">Your invoice has been sent to email: ******@bu.edu</p>
                            <p className="order-text">Order pick up date: <strong> 12/12/2021</strong></p>
                            <div className="cart_order_items">
                                {cartItems.map(item => (
                                    <div key={item.id} className="cart-item">
                                        <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                                        <span className="cart-item-name">{item.name}</span>
                                        <span className="cart-item-price">${item.price.toFixed(2)}</span>
                                    </div>
                                ))}
                                </div>
                                <div className="cart-summary"> 
                                    {/* <div className="tax">Tax (5%): ${tax.toFixed(2)}</div> */}
                                    <div className="total_order">Total: ${total.toFixed(2)}</div>
                                </div> 
                                <p><strong>Pickup Location:</strong> {selectedLocation}</p>
                            </div>
                        {/* </div> */}
                    </div>
                )}
            </div>
        </div>
        <Footer />
        </div>
    );
}

export default Checkout;
