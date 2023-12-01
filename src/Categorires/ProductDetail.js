import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./ProductDetail.css"

export default function ProductDetails({product}){
    return(
        <>
        <Header />
        <div className="detailwindow">
            <Title name={product.name} pic={product.pic}/>
            <Discription discrip={product.discrip} price={product.price}/>
        </div>
        <Footer />
        </>
    )
}

function Title({name, pic}){
    return (
        <div className="titleAndimg">
            <div className="detailtitle">{name}</div>
            <hr className="horizonline"/>
            <div className="detailimg">
                <img src={pic} className="detailimgSrc"/>
            </div>
        </div>
    )
}

function Discription({discrip, price}){
    return (
        <div className="disAndprice">
            <b className="distitle">Discription</b>
            <p className="dis">{discrip}</p>
            <p className="price"><b>Price</b> : ${price}</p>
            <button className="cartbtn">Add to Cart</button>
        </div>
    )
}