import defaultPic from "./asserts/defaultPicture.png"
import "./ProductListItem.css"

export default function ProductItem({ imgsrc, itemId, itemName }) {

    function existPic(a) {
        if (a == null) {
            return defaultPic;
        } else {
            return a;
        }
    }

    return (
        <a href={'/products/'+itemId}>
        <div className="displayitem">
            <div className="displayimage">
                <img src={existPic(imgsrc)} alt="product" />
            </div>
            <p className="discription">{itemName || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nunc nulla, volutpat id magna id, varius aliquet leo."}</p>
        </div>
        </a>
    )
}
