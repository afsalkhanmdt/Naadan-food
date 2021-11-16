import React from 'react'

const Foodcard = ({title,imageUrl,price,description,status,deleteCard}) => {
 return (
        <div className="food-card">
            <div className="food-card-close-button" onClick={deleteCard}></div>
            <img className="food-card-thumbnail" src={imageUrl} alt={title}/>
            <div className="food-card-detail-section">
                
            <div className="food-card-title">
                {title}
            </div>
            <div className="food-card-price">
            ₹
                {price}
            </div>
            <div className={`food-card-availability ${status? "food-card-availability--available" : "food-card-availability--not-available"} `}>
                {status? "Available": "Not Available"}
            </div>
            <div className="food-card-description">
                {description}
            </div>
            </div>
        </div>
    )
}

export default Foodcard