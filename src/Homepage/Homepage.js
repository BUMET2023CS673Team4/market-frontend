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

class Homepage extends react.Component{
    constructor(props){
        super(props)
        this.state={
            position:[
                {left : "27%", top : "56%"},
                {left : "43%", top : "56%"},
                {left : "59%", top : "56%"}
            ],
        }
    }

    componentDidMount = async () => {
        await fetch("/api/homepage/")
        .then(response => response.json())
        .then(data => {
            this.setState({data: data});
        });
    }

    render(){
        return(
            <>
                <Header />
                <Carousel />
                {Object.entries(this.state.data || []).map(([idx, {id, name, image}]) => (
                    <CategoryCard key={idx} pos={this.state.position[idx]} productName={name} productUrl={"/products/"+id} pic={Eicon} />
                ))}
                {/* <CategoryCard pos={this.state.position[0]} productName="Electronics" productUrl="/product/electronics" pic={Eicon} /> */}
                {/* <CategoryCard pos={this.state.position[1]} productName="Textbooks" productUrl="/product/textbooks" pic={Bicon} /> */}
                {/* <CategoryCard pos={this.state.position[2]} productName="Furniture" productUrl="/product/funiture" pic={Ficon} /> */}
                <Footer />
            </>
        )
    }
}

export default Homepage;

// export default function Homepage(){
//     const position=[
//         {left : "27%", top : "56%"},
//         {left : "43%", top : "56%"},
//         {left : "59%", top : "56%"}
//     ]

//     return(
//     <>
//         <Header />
//         <Carousel />
//         <CategoryCard pos={position[0]} productName="Electronics" productUrl="/product/electronics" pic={Eicon} />
//         <CategoryCard pos={position[1]} productName="Textbooks" productUrl="/product/textbooks" pic={Bicon} />
//         <CategoryCard pos={position[2]} productName="Furniture" productUrl="/product/funiture" pic={Ficon} />
//         <Footer />
//     </>
//     )
// }