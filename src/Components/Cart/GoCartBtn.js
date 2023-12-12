import { useState } from "react";

export default function AddToCart(itemid){    
    const [isClicked, setIsClicked] = useState(false);

    const handleCllick = async () => {
        const response = await fetch(`/api/products/${itemid.itemid}/add-to-cart/`);
        if(response.status === 201)
        {
            setIsClicked(true);
        }
        else {
            alert("Please login first");
        }
    };

    return(
        <>
            {isClicked? <GoCheckoutBtn /> : <AddToCartBtn click={handleCllick} itemid={itemid}/>}
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