import React from "react"

export default function Card(props) {
    return(
        <div className="card">
            
            {props.popular && <div className="popular">Popular</div>}
            <img src={props.image} className="coffee-item" alt="coffee" />
            <div className="card-bottom">
                <div className="info">
                    <span className="name">{props.name}</span>
                    <div className="price">{props.price}</div>
                </div>
                <div className="bottom">
                    <div className="rating">
                        {props.rating ? <><img src="../images/Star_fill.svg" alt="Star_fill" /><div className="rating-text">{props.rating} <span>({props.votes} votes)</span></div></> : 
                        <><img src="dist/images/Star.svg" alt="Star" /><div className="rating-text" style={{color: "hsl(212, 6%, 46%)"}}>No rating</div></>}
                    </div>
                    {!props.available && <span className="current-state">Sold out</span>}
                </div>
            </div>
        </div>
    )
}
