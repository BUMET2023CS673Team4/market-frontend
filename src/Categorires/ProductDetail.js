import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header/Header.js";
import Footer from "../Components/Footer/Footer";
import "./ProductDetail.css"
import AddToCart from "../Components/Cart/GoCartBtn.js";

export default function ProductDetails({ product }) {
    const params = useParams();
    const product_id = params.id;
    const [data, setData] = useState(null);
    useEffect(() => {
        (async () => {
            if (!product) {
                if (!data) {
                    await fetch(`/api/products/${product_id}/`)
                        .then(response => response.json())
                        .then(data => setData(data));
                }
            }
        })();
    }, [data, product_id, product]);
    if (product) {
        return (
            <>
                <Header />
                <div className="detailwindow">
                    <Title name={product.name} pic={product.pic} />
                    <Discription discrip={product.discrip} price={product.price} />
                </div>
                <Footer />
            </>
        )
    }
    else {
        console.log(data);
        return (<>
            <Header />
            <div className="detailwindow">
                {data &&
                    <>
                        <Title name={data.name} pic={'/media/image/' + data.image} />
                        <Discription discrip={data.description} price={data.price} />
                    </>
                }
            </div>
            <Footer />
        </>);
    }
}

function Title({ name, pic }) {
    return (
        <div className="titleAndimg">
            <div className="detailtitle">{name}</div>
            <hr className="horizonline" />
            <div className="detailimg">
                <img src={pic} className="detailimgSrc" />
            </div>
        </div>
    )
}

function Discription({ discrip, price }) {
    return (
        <div className="disAndprice">
            <b className="distitle">Discription</b>
            <p className="dis">{discrip}</p>
            <p className="price"><b>Price</b> : ${price}</p>
            <AddToCart />
        </div>
    )
}