import defaultPic from "./asserts/defaultPicture.png"
import "./ProductListItem.css"

export default function ProductItem({pos, content}){

    function existPic(a){
        if(a == null) {
            return defaultPic;
        } else {
            return content;
        }
    }

    return(
        <div className="displayitem" style={pos}>
            <img className="displayimage" src={existPic(content)} />
            <p className="discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nunc nulla, volutpat id magna id, varius aliquet leo.</p>
            <button className="cartbtn" onClick={() => {window.location.href = '/checkout';}}>Add to Cart</button>
        </div>
    )
}
