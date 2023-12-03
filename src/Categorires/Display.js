import "./Display.css"

export default function Display({pos, content}){
    if(content.img){
        return <DisplayWithContent pos={pos} content={content.img} moreUrl={content.url}/>
    } else {
        return <DisplayWithoutContent pos={pos} moreUrl={content.url}/>
    }
}

function DisplayWithoutContent({pos, moreUrl="#"}){
    return (
        <div className="display" style={pos}>
            <a href={moreUrl} className="displayName">Learn more</a>
        </div>
    )
}

function DisplayWithContent({pos, content, moreUrl="#"}){
    return (
        <div className="display" style={pos}>
            <img className="displayImg" src={content} />
            <a href={moreUrl} className="displayName">See details</a>
        </div>
    )
}
