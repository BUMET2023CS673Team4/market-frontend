import react from 'react';
import "./ProductList.css"
import Header from "../Components/Header/Header.js";
import Footer from "../Components/Footer/Footer";
import ProductItem from "./ProductListItem"
import { withRouter } from "../Utility/WithRouter";

class ProductList extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            position: [
                { left: "20%", top: "25%" },
                { left: "20%", top: "43%" },
                { left: "20%", top: "61%" }
            ],
        }
    }

    componentDidMount = async () => {
        let category_id = this.props.match.params.id;
        let response_json = await fetch(`/api/categories/${category_id}/items/`).then(response => response.json());
        console.log(response_json['items']);
        this.setState({ items: response_json['items'] });
    }

    render() {
        return (
            <>
                <Header />
                <div className='productItemFlexContainer'>
                    {this.state.items ?
                        (this.state.items.map((item, idx) => {
                            console.log(item)
                            return <ProductItem imgsrc={'/media/image/'+item['media_image']} itemId={item['id']} itemName={item['name']} />
                        })) :
                        (
                            <>
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                            </>
                        )
                    }
                </div>
                <div className="listbar"></div>
                <Footer />
            </>
        )
    }
}

export default withRouter(ProductList);