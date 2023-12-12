import { useState } from "react";

export default function AddToCart(){    
    const [isClicked, setIsClicked] = useState(false);

    const handleCllick = () => {
        alert("Successfully Added!")
        setIsClicked(true);
    };

    return(
        <>
            {isClicked? <GoCheckoutBtn /> : <AddToCartBtn click={handleCllick} />}
        </>
    )
}



function AddToCartBtn({click}){
    return(
            <button className="cartbtn" onClick={click}>Add to Cart</button>
    )
}

function GoCheckoutBtn(){
    function goCheckout(){
        window.location.href = '/checkout';
    }

    return(
        <button className="cartbtn" onClick={()=>{goCheckout()}}>Checkout</button>
        )
}