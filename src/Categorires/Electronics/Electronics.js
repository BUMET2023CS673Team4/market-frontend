import Product from "../Product"

export default function Electronics(){
    const contentElectronics = [
        {img:null, url:"/product/electronics/productlist"}, 
        {img:null, url:"/product/electronics/productlist"},
        {img:null, url:"/product/electronics/productlist"}
    ]
    
    return (
            <Product content={contentElectronics}/>
    )
}