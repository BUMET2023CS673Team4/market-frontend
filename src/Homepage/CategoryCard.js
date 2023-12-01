import "./CategoryCard.css"

export default function CategoryCard({productName, productUrl, pic, pos}){
    function handleCategoryClick(url){
        return ()=>{window.location.href=url}
    }

    return (
        <div className="one-card" style={pos} onClick={handleCategoryClick(productUrl)} >
            <div className="card-title">{productName}</div>
            <img src={pic} className="card-image"></img>
        </div>
    )
}