import react from 'react'
import './Homepage.css'
import Header from "../Components/Header/Header.js";
import Footer from "../Components/Footer/Footer";
import Carousel from './Carousel.js'
import CategoryCard from './CategoryCard.js'
// import Footer from '../Footer/Footer'
import Eicon from "./asserts/Earphone.png"
import Bicon from "./asserts/Book.png"
import Ficon from "./asserts/Furniture.png"

export default function Homepage(){
    const position=[
        {left : "27%", top : "56%"},
        {left : "43%", top : "56%"},
        {left : "59%", top : "56%"}
    ]

    return(
    <>
        <Header />
        <Carousel />
        <CategoryCard pos={position[0]} productName="Electronics" productUrl="/product/electronics" pic={Eicon} />
        <CategoryCard pos={position[1]} productName="Textbooks" productUrl="/product/textbooks" pic={Bicon} />
        <CategoryCard pos={position[2]} productName="Furniture" productUrl="/product/funiture" pic={Ficon} />
        <Footer />
    </>
    )
}