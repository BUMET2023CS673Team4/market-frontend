import "./Display.css"

export default function Display({pos, content}){
    if(content.img){
        return <DisplayWithContent pos={pos} content={content.img} moreUrl={content.url} displayName={content.name}/>
    } else {
        return <DisplayWithoutContent pos={pos} moreUrl={content.url} displayName={content.name}/>
    }
}

function DisplayWithoutContent({pos, moreUrl="#", displayName}){
    return (
        <div className="display" style={pos}>
            <a href={moreUrl} className="displayName">{displayName}</a>
        </div>
    )
}

function DisplayWithContent({pos, content, moreUrl="#", displayName}){
    return (
        <div className="display" style={pos}>
            <img className="displayImg" src={content} />
            <a href={moreUrl} className="displayName">{displayName}</a>
        </div>
    )
}
