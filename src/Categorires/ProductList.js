import "./ProductList.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import ProductItem from "./ProductListItem"

export default function ProductList(){
    const position = [
        { left: "20%", top : "25%" },
        { left: "20%", top : "43%" },
        { left: "20%", top : "61%" }

    ]

    return(
        <>
        <Header />
        <ProductItem content={null} pos={position[0]} />
        <ProductItem content={null} pos={position[1]} />
        <ProductItem content={null} pos={position[2]} />
        <div className="listbar"></div>
        <Footer />
        </>
    )
}