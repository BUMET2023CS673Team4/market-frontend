import "./Menu.css"

export default function Menu(){
    return (
        <div className="mainMenu">
            <span className="menuIcon">&#x2630;</span>
            <div className="menuContent">
                <a style={{"backgroundColor": "black", "border": "none", "height" : "40px"}}>black</a>
                <a>Categories</a>
                <a>Book</a>
                <a> </a>
                <a> </a>
                <a> </a>
                <a style={{"backgroundColor": "black", "border": "none", "color" : "white"}} href="/signin">sign in</a>
            </div>
        </div>
    )
}