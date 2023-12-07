import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import "./Product.css"
import Display from "./Display"
import FuniturePic from "./Forniture/asserts/Funiture.png"

export default function Product({content}){
    const displayPosition = [
        {left : "20.5%", top : "30%"},
        {left : "41%", top : "30%"},
        {left : "61.5%", top : "30%"},
    ]

    var currentPath = window.location.pathname;
    currentPath = "HOME" + currentPath.replace(/[/]/g, " > ").toLocaleUpperCase();
    var last = currentPath.split(">");
    last = last[last.length - 1]
    currentPath = currentPath.replace(last, "");

    return(
        <>
            <Header />
            <div className="bar">
                <p className="path" > <span>{currentPath}</span> <span className="lastPath">{last}</span></p>
            </div>
            <Display pos={displayPosition[0]} content={content[0]} />
            <Display pos={displayPosition[1]} content={content[1]}/>
            <Display pos={displayPosition[2]} content={content[2]}/>
            <Footer />
        </>
    )
}