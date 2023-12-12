import Product from "../Product"

export default function Electronics(){
    const contentElectronics = [
        {img:"/electronics_handphone.avif", url:"/product/electronics/productlist", name:"Phones"}, 
        {img:"/electronics_headphones.jpg", url:"/product/electronics/productlist", name:"Headphones"},
        {img:"/electronics_laptop.jpg", url:"/product/electronics/productlist", name:"Laptops"}
    ]
    
    return (
            <Product content={contentElectronics}/>
    )
}