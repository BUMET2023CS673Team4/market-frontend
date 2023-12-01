import Product from "../Product"

export default function Textbooks(){
    const contentTextbooks = [
        {img:null, url:"/product/electronics/productlist"}, 
        {img:null, url:"/product/electronics/productlist"},
        {img:null, url:"/product/electronics/productlist"}
    ]
    
    return (
            <Product content={contentTextbooks} />
    )
}