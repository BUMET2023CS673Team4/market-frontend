import Product from "../Product";
import FuniturePic from "./asserts/Funiture.png"

export default function Funiture(){
    const contentFuniture = [
        {img:FuniturePic, url:"/product/electronics/details"}, 
        {img:null, url:"/product/electronics/productlist"},
        {img:null, url:"/product/electronics/productlist"}
    ]

    return (
        <Product content={contentFuniture} />
    )
}