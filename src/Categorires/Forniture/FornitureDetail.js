import ProductDetails from "../ProductDetail";
import funitureicon from "./asserts/Funiture.png"

export default function FornitureDetail(){
    const product = {
        name:"Product Name",
        pic: funitureicon,
        price : "20.00",
        discrip : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nunc nulla, volutpat id magna id, varius aliquet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames "}
    return <ProductDetails product={product}/>
}