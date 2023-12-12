import Product from "../Product";
import FuniturePic from "./asserts/Funiture.png"

export default function Funiture(){
    const contentFuniture = [
        {img:"/furniture_sofa.jpg", url:"/product/electronics/details", name:"Living Room Furniture"}, 
        {img:"/furniture_vanity.jpg", url:"/product/electronics/productlist", name:"Bedroom Furniture"},
        {img:"/furniture_wooden.jpg", url:"/product/electronics/productlist", name:"Wooden Furniture"}
    ]

    return (
        <Product content={contentFuniture} />
    )
}